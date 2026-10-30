"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { journeyMilestones } from "@/data/journey";

const TOTAL_FRAMES = 479;
const CONCURRENT_PRELOADS = 4;

export function CinematicMilestones() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Preloading & Frame state caches
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const decodedRef = useRef<boolean[]>([]);
  const inFlightRef = useRef<boolean[]>([]);
  const isCancelledRef = useRef<boolean>(false);

  const priorityQueueRef = useRef<number[]>([]);
  const backgroundIndexRef = useRef<number>(1);
  const activeWorkersRef = useRef<number>(0);

  const lastDrawnFrameRef = useRef<number>(-1);
  const targetFrameRef = useRef<number>(1);
  const currentRenderedFrameRef = useRef<number>(1);
  const isRafRunningRef = useRef<boolean>(false);
  const animationFrameIdRef = useRef<number | null>(null);

  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);
  const [isFirstFrameReady, setIsFirstFrameReady] = useState<boolean>(false);

  const requestTickRef = useRef<() => void>(() => {});

  // Helper to format frame path
  const getFramePath = useCallback((index: number) => {
    const clamped = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(index)));
    const padded = clamped.toString().padStart(4, "0");
    return `/images/Our%20Milestones/frame_${padded}.webp`;
  }, []);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Frame drawer with zero-flash overdraw and object-cover aspect fitting
  const renderFrameOnCanvas = useCallback((frameNumber: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const roundedFrame = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(frameNumber)));

    // Look for exact requested frame or closest loaded frame within a safe window
    let targetImg = imagesRef.current[roundedFrame];
    if (!targetImg || !targetImg.complete || targetImg.naturalWidth === 0 || !decodedRef.current[roundedFrame]) {
      let nearestImg: HTMLImageElement | null = null;
      for (let offset = 1; offset <= 30; offset++) {
        const left = roundedFrame - offset;
        const right = roundedFrame + offset;
        if (
          left >= 1 &&
          imagesRef.current[left]?.complete &&
          imagesRef.current[left]!.naturalWidth > 0 &&
          decodedRef.current[left]
        ) {
          nearestImg = imagesRef.current[left];
          break;
        }
        if (
          right <= TOTAL_FRAMES &&
          imagesRef.current[right]?.complete &&
          imagesRef.current[right]!.naturalWidth > 0 &&
          decodedRef.current[right]
        ) {
          nearestImg = imagesRef.current[right];
          break;
        }
      }
      targetImg = nearestImg;
    }

    // Never overwrite an existing frame with null or incomplete image
    if (!targetImg || !targetImg.complete || targetImg.naturalWidth === 0) {
      return;
    }

    const { width: canvasWidth, height: canvasHeight } = canvas;
    const imgWidth = targetImg.naturalWidth || 1280;
    const imgHeight = targetImg.naturalHeight || 720;

    const canvasRatio = canvasWidth / canvasHeight;
    const imgRatio = imgWidth / imgHeight;

    let drawWidth = canvasWidth;
    let drawHeight = canvasHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvasWidth / imgRatio;
      offsetY = (canvasHeight - drawHeight) / 2;
    } else {
      drawWidth = canvasHeight * imgRatio;
      offsetX = (canvasWidth - drawWidth) / 2;
    }

    // Direct overdraw ensures ZERO intermediate transparent flashes
    ctx.drawImage(targetImg, offsetX, offsetY, drawWidth, drawHeight);
    lastDrawnFrameRef.current = roundedFrame;
    setIsFirstFrameReady(true);
  }, []);

  // Update canvas sizing adhering to Device Pixel Ratio
  const updateCanvasDimensions = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;

    const pixelWidth = Math.floor(width * dpr);
    const pixelHeight = Math.floor(height * dpr);

    if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
    }

    const frameToDraw = lastDrawnFrameRef.current > 0 ? lastDrawnFrameRef.current : 1;
    renderFrameOnCanvas(frameToDraw);
  }, [renderFrameOnCanvas]);

  // Worker runner function for progressive + priority loading
  const triggerWorkers = useCallback(() => {
    while (activeWorkersRef.current < CONCURRENT_PRELOADS && !isCancelledRef.current) {
      let nextFrame: number | null = null;

      // Check priority queue first
      while (priorityQueueRef.current.length > 0) {
        const candidate = priorityQueueRef.current.shift()!;
        if (!decodedRef.current[candidate] && !inFlightRef.current[candidate]) {
          nextFrame = candidate;
          break;
        }
      }

      // If priority queue is empty, pull from progressive background queue
      if (nextFrame === null) {
        while (backgroundIndexRef.current <= TOTAL_FRAMES) {
          const candidate = backgroundIndexRef.current++;
          if (!decodedRef.current[candidate] && !inFlightRef.current[candidate]) {
            nextFrame = candidate;
            break;
          }
        }
      }

      if (nextFrame === null) {
        break;
      }

      activeWorkersRef.current++;
      inFlightRef.current[nextFrame] = true;

      const frameToLoad = nextFrame;
      const img = new Image();
      img.src = getFramePath(frameToLoad);

      const onFinish = () => {
        activeWorkersRef.current--;
        inFlightRef.current[frameToLoad] = false;
        if (!isCancelledRef.current) {
          triggerWorkers();
        }
      };

      img.onload = () => {
        if (isCancelledRef.current) {
          onFinish();
          return;
        }

        imagesRef.current[frameToLoad] = img;

        if ("decode" in img) {
          img
            .decode()
            .then(() => {
              decodedRef.current[frameToLoad] = true;
              if (frameToLoad === 1) {
                renderFrameOnCanvas(1);
              } else if (Math.round(targetFrameRef.current) === frameToLoad) {
                requestTickRef.current();
              }
              onFinish();
            })
            .catch(() => {
              decodedRef.current[frameToLoad] = true;
              if (frameToLoad === 1) {
                renderFrameOnCanvas(1);
              } else if (Math.round(targetFrameRef.current) === frameToLoad) {
                requestTickRef.current();
              }
              onFinish();
            });
        } else {
          decodedRef.current[frameToLoad] = true;
          if (frameToLoad === 1) {
            renderFrameOnCanvas(1);
          } else if (Math.round(targetFrameRef.current) === frameToLoad) {
            requestTickRef.current();
          }
          onFinish();
        }
      };

      img.onerror = () => {
        onFinish();
      };
    }
  }, [getFramePath, renderFrameOnCanvas]);

  // Priority queue injector: schedules frames around current scroll position and travel direction
  const prioritizeMilestoneFrame = useCallback(
    (frameIndex: number, direction: 1 | -1) => {
      if (isCancelledRef.current) return;
      const clamped = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(frameIndex)));

      const queueToAdd: number[] = [clamped];

      for (let i = 1; i <= 12; i++) {
        const forward = clamped + i * direction;
        if (forward >= 1 && forward <= TOTAL_FRAMES) {
          queueToAdd.push(forward);
        }
      }

      for (let i = 1; i <= 4; i++) {
        const backward = clamped - i * direction;
        if (backward >= 1 && backward <= TOTAL_FRAMES) {
          queueToAdd.push(backward);
        }
      }

      const newItems = queueToAdd.filter(
        (idx) => !decodedRef.current[idx] && !inFlightRef.current[idx]
      );

      if (newItems.length > 0) {
        priorityQueueRef.current = Array.from(
          new Set([...newItems, ...priorityQueueRef.current])
        );
        triggerWorkers();
      }
    },
    [triggerWorkers]
  );

  // Demand-driven RAF loop
  const tickRaf = useCallback(() => {
    const target = targetFrameRef.current;
    const current = currentRenderedFrameRef.current;
    const delta = target - current;

    if (Math.abs(delta) > 0.05) {
      // Responsive interpolation factor (0.50): fast, fluid catch-up
      currentRenderedFrameRef.current += delta * 0.50;
      const nextIntegerFrame = Math.round(currentRenderedFrameRef.current);

      if (nextIntegerFrame !== lastDrawnFrameRef.current) {
        renderFrameOnCanvas(nextIntegerFrame);
      }

      animationFrameIdRef.current = requestAnimationFrame(tickRaf);
    } else {
      // Snapped to exact target frame
      currentRenderedFrameRef.current = target;
      const targetInt = Math.round(target);

      if (targetInt !== lastDrawnFrameRef.current) {
        renderFrameOnCanvas(targetInt);
      }

      // CONVERGED: Stop loop and idle
      isRafRunningRef.current = false;
      animationFrameIdRef.current = null;
    }
  }, [renderFrameOnCanvas]);

  // Awakens RAF loop if idle
  const requestTick = useCallback(() => {
    if (!isRafRunningRef.current) {
      isRafRunningRef.current = true;
      animationFrameIdRef.current = requestAnimationFrame(tickRaf);
    }
  }, [tickRaf]);

  useEffect(() => {
    requestTickRef.current = requestTick;
  }, [requestTick]);

  // Preloader initialization
  useEffect(() => {
    if (isReducedMotion) return;

    isCancelledRef.current = false;
    imagesRef.current = new Array(TOTAL_FRAMES + 1).fill(null);
    decodedRef.current = new Array(TOTAL_FRAMES + 1).fill(false);
    inFlightRef.current = new Array(TOTAL_FRAMES + 1).fill(false);
    priorityQueueRef.current = [];
    backgroundIndexRef.current = 1;
    activeWorkersRef.current = 0;

    // Seed Tier 1: Immediately queue frames 1..25
    for (let i = 1; i <= Math.min(25, TOTAL_FRAMES); i++) {
      priorityQueueRef.current.push(i);
    }

    // Seed Tier 2: Stride keyframes (every 8 frames) right after Tier 1
    for (let i = 28; i <= TOTAL_FRAMES; i += 8) {
      priorityQueueRef.current.push(i);
    }
    priorityQueueRef.current.push(TOTAL_FRAMES);

    triggerWorkers();

    return () => {
      isCancelledRef.current = true;
      priorityQueueRef.current = [];
    };
  }, [isReducedMotion, triggerWorkers]);

  // Steadicam frame interpolation loop & scroll listener
  useEffect(() => {
    if (isReducedMotion) return;

    updateCanvasDimensions();
    window.addEventListener("resize", updateCanvasDimensions, { passive: true });

    // Passive scroll handler
    const onScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const currentScrollTop = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScrollTop / scrollableDistance));

      const newTargetFrame = Math.max(
        1,
        Math.min(TOTAL_FRAMES, Math.round(1 + progress * (TOTAL_FRAMES - 1)))
      );

      const direction: 1 | -1 = newTargetFrame >= targetFrameRef.current ? 1 : -1;
      targetFrameRef.current = newTargetFrame;

      prioritizeMilestoneFrame(newTargetFrame, direction);
      requestTick();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("resize", updateCanvasDimensions);
      window.removeEventListener("scroll", onScroll);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      isRafRunningRef.current = false;
    };
  }, [isReducedMotion, updateCanvasDimensions, prioritizeMilestoneFrame, requestTick]);

  // Reduced motion alternative: static accessible timeline
  if (isReducedMotion) {
    return (
      <section className="py-20 bg-[#07111e] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold text-white tracking-widest uppercase">
              04 OUR MILESTONES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 tracking-tight">
              A Journey of Purpose and Progress
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3">
              Over two decades of purposeful enterprise across healthcare, renewable energy, and community ventures.
            </p>
            <div className="mt-6">
              <Link
                href="/journey"
                className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#019FF9] hover:bg-[#0089DB] text-white text-sm font-bold shadow-[0_8px_25px_rgba(1,159,249,0.45)] hover:shadow-[0_12px_32px_rgba(1,159,249,0.65)] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span>Explore Full Journey</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {journeyMilestones.map((milestone) => (
              <div
                key={milestone.year}
                className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#019FF9] bg-[#019FF9]/10 px-3 py-1 rounded-full border border-[#019FF9]/20">
                    {milestone.year}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {milestone.sectorName}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                <span className="text-xs text-[#019FF9] font-semibold mt-1 block">
                  {milestone.subtitle}
                </span>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      id="milestones"
      className="relative w-full h-[400vh] bg-[#07111e] text-white"
    >
      {/* Pinned Sticky Viewport: 100vh Full-Width Pure Cinematic Stage */}
      <div className="sticky top-0 h-screen h-[100dvh] w-full flex flex-col justify-between overflow-hidden select-none">
        {/* Instant Fallback Poster (eliminates any initialization blink) */}
        <div
          className={`absolute inset-0 w-full h-full bg-cover bg-center pointer-events-none transition-opacity duration-700 ${
            isFirstFrameReady ? "opacity-0" : "opacity-100"
          }`}
          style={{ backgroundImage: "url('/images/Our%20Milestones/frame_0001.webp')" }}
        />

        {/* Cinematic WebP Video Sequence Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10"
        />

        {/* Subtle Ambient Vignettes: Kept soft to preserve pure video visibility */}
        <div className="absolute top-0 inset-x-0 h-56 pointer-events-none z-10 bg-gradient-to-b from-[#07111e]/90 via-[#07111e]/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-28 pointer-events-none z-10 bg-gradient-to-t from-[#07111e]/70 via-transparent to-transparent" />

        {/* ========================================================= */}
        {/* TOP HEADER: Centered with ample top padding below navbar   */}
        {/* ========================================================= */}
        <header className="relative z-30 pt-28 sm:pt-32 lg:pt-36 px-4 sm:px-8 max-w-5xl w-full mx-auto text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-sm sm:text-base font-extrabold text-white tracking-wider">
              04
            </span>
            <span className="text-xs sm:text-sm font-bold text-white/90 tracking-[0.2em] uppercase">
              OUR MILESTONES
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] drop-shadow-md text-center">
            A Journey of Purpose and Progress
          </h2>

          <div className="mt-5">
            <Link
              href="/journey"
              className="inline-flex items-center gap-2.5 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full bg-[#019FF9] hover:bg-[#0089DB] text-white text-sm sm:text-[15px] font-bold shadow-[0_8px_25px_rgba(1,159,249,0.45)] hover:shadow-[0_12px_32px_rgba(1,159,249,0.65)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              <span>Explore Full Journey</span>
              <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </header>

        {/* Spacer to keep top header pinned gracefully with zero obstruction at bottom */}
        <div className="relative z-20 pointer-events-none p-4" />
      </div>
    </section>
  );
}

export default CinematicMilestones;
