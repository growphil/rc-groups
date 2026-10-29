"use client";

import React, {
  useEffect,
  useRef,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from "react";
import { useHeroFrameLoader, TOTAL_HERO_FRAMES } from "./useHeroFrameLoader";

export interface HeroImageSequenceHandle {
  setScrollProgress: (progress: number) => void;
}

interface HeroImageSequenceProps {
  scrollProgress?: number;
}

export const HeroImageSequence = forwardRef<
  HeroImageSequenceHandle,
  HeroImageSequenceProps
>(function HeroImageSequence({ scrollProgress }, ref) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastDrawnFrameRef = useRef<number>(-1);
  const targetFrameRef = useRef<number>(1);
  const currentRenderedFrameRef = useRef<number>(1);
  const lastDirectionRef = useRef<1 | -1>(1);
  const isRafRunningRef = useRef<boolean>(false);
  const animationFrameIdRef = useRef<number | null>(null);

  const drawFrameRef = useRef<(n: number) => void>(() => {});
  const requestTickRef = useRef<() => void>(() => {});

  // Callback when a frame finishes decoding
  const handleFrameLoaded = useCallback((frameIndex: number) => {
    // If the newly loaded frame is our current target (or closest), redraw immediately
    if (Math.round(targetFrameRef.current) === frameIndex) {
      requestTickRef.current();
    }
  }, []);

  // Frame preloader hook
  const { getFrameImage, isFirstFrameLoaded, prioritizeFrame } = useHeroFrameLoader(
    useCallback(() => {
      // Draw first frame as soon as frame 1 is decoded
      drawFrameRef.current(1);
    }, []),
    handleFrameLoaded
  );

  // Core canvas draw function with object-cover aspect fitting & zero-flash overdraw
  const drawFrame = useCallback(
    (frameNumber: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;

      const img = getFrameImage(frameNumber);
      if (!img || !img.complete || img.naturalWidth === 0) {
        return;
      }

      const { width: canvasWidth, height: canvasHeight } = canvas;
      const imgWidth = img.naturalWidth || 1280;
      const imgHeight = img.naturalHeight || 720;

      const canvasRatio = canvasWidth / canvasHeight;
      const imgRatio = imgWidth / imgHeight;

      let drawWidth = canvasWidth;
      let drawHeight = canvasHeight;
      let offsetX = 0;
      let offsetY = 0;

      // Cover calculation
      if (canvasRatio > imgRatio) {
        drawHeight = canvasWidth / imgRatio;
        offsetY = (canvasHeight - drawHeight) / 2;
      } else {
        drawWidth = canvasHeight * imgRatio;
        offsetX = (canvasWidth - drawWidth) / 2;
      }

      // Direct overdraw ensures no empty or transparent intermediate frame
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      lastDrawnFrameRef.current = frameNumber;
    },
    [getFrameImage]
  );

  useEffect(() => {
    drawFrameRef.current = drawFrame;
  }, [drawFrame]);

  // Resize canvas according to display DPR
  const handleResize = useCallback(() => {
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
    drawFrame(frameToDraw);
  }, [drawFrame]);

  // Demand-driven RAF render loop
  const tick = useCallback(() => {
    const target = targetFrameRef.current;
    const current = currentRenderedFrameRef.current;
    const delta = target - current;

    if (Math.abs(delta) > 0.05) {
      // Responsive interpolation factor (0.50): fast, fluid catch-up without spongy delay
      currentRenderedFrameRef.current += delta * 0.50;
      const nextInt = Math.round(currentRenderedFrameRef.current);

      if (nextInt !== lastDrawnFrameRef.current) {
        drawFrame(nextInt);
      }

      // Continue running while converging
      animationFrameIdRef.current = requestAnimationFrame(tick);
    } else {
      // Snapped to exact target frame
      currentRenderedFrameRef.current = target;
      const targetInt = Math.round(target);

      if (targetInt !== lastDrawnFrameRef.current) {
        drawFrame(targetInt);
      }

      // CONVERGED: Stop loop and idle to conserve CPU/GPU
      isRafRunningRef.current = false;
      animationFrameIdRef.current = null;
    }
  }, [drawFrame]);

  // Awakens RAF loop if idle
  const requestTick = useCallback(() => {
    if (!isRafRunningRef.current) {
      isRafRunningRef.current = true;
      animationFrameIdRef.current = requestAnimationFrame(tick);
    }
  }, [tick]);

  useEffect(() => {
    requestTickRef.current = requestTick;
  }, [requestTick]);

  // Imperative progress update (decoupled from React re-renders)
  const applyScrollProgress = useCallback(
    (progress: number) => {
      const clamped = Math.max(0, Math.min(1, progress));
      const newTarget = Math.max(
        1,
        Math.min(TOTAL_HERO_FRAMES, Math.round(1 + clamped * (TOTAL_HERO_FRAMES - 1)))
      );

      const direction: 1 | -1 = newTarget >= targetFrameRef.current ? 1 : -1;
      lastDirectionRef.current = direction;
      targetFrameRef.current = newTarget;

      // Queue priority download for frames ahead
      prioritizeFrame(newTarget, direction);

      requestTick();
    },
    [prioritizeFrame, requestTick]
  );

  useImperativeHandle(
    ref,
    () => ({
      setScrollProgress: applyScrollProgress,
    }),
    [applyScrollProgress]
  );

  // Fallback for when scrollProgress is passed as a prop
  useEffect(() => {
    if (typeof scrollProgress === "number") {
      applyScrollProgress(scrollProgress);
    }
  }, [scrollProgress, applyScrollProgress]);

  // Resize listener
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      isRafRunningRef.current = false;
    };
  }, [handleResize]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
      {/* Instant Fallback Poster (prevents any blank canvas blink before JS runs) */}
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-700 pointer-events-none ${
          isFirstFrameLoaded ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: "url('/images/hero-frames/frame_0001.webp')" }}
      />

      {/* Persistent Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10"
      />
    </div>
  );
});

export default HeroImageSequence;
