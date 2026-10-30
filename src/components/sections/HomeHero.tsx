"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import {
  HeroImageSequence,
  HeroImageSequenceHandle,
} from "@/components/animation/HeroImageSequence";

const BOTTOM_TITLES = [
  {
    eyebrow: "OUR BUSINESS ECOSYSTEM",
    title: "Seven Sectors. One Shared Vision.",
    start: 0.22,
    peakStart: 0.28,
    peakEnd: 0.44,
    end: 0.48,
  },
  {
    eyebrow: "OUR GUIDING PHILOSOPHY",
    title: "Driven by Purpose. Focused on People.",
    start: 0.48,
    peakStart: 0.54,
    peakEnd: 0.70,
    end: 0.74,
  },
  {
    eyebrow: "OUR FUTURE COMMITMENT",
    title: "Turning Purpose Into Progress.",
    start: 0.74,
    peakStart: 0.80,
    peakEnd: 0.98,
    end: 1.0,
  },
];

export function HomeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroSequenceRef = useRef<HeroImageSequenceHandle>(null);

  // Direct DOM references for zero React re-render scroll updates
  const stage1Ref = useRef<HTMLDivElement>(null);
  const leftGradientRef = useRef<HTMLDivElement>(null);
  const bottomGradientRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);
  const bottomTitleRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  // Check for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Hot-path scroll listener: updates Canvas & DOM directly without React re-renders
  useEffect(() => {
    if (isReducedMotion) return;

    let rafId: number | null = null;

    const updateDOMNodes = (progress: number) => {
      // 1. Notify Canvas Sequence
      heroSequenceRef.current?.setScrollProgress(progress);

      // 2. Stage 1: Headline & CTAs
      const initialCopyProgress = Math.max(0, Math.min(1, (progress - 0.04) / 0.14));
      const copyOpacity = Math.max(0, 1 - initialCopyProgress);
      const copyTranslateY = initialCopyProgress * -35;
      const isCopyInteractive = copyOpacity > 0.05;

      if (stage1Ref.current) {
        stage1Ref.current.style.opacity = String(copyOpacity);
        stage1Ref.current.style.transform = `translateY(${copyTranslateY}px)`;
        stage1Ref.current.style.pointerEvents = isCopyInteractive ? "auto" : "none";
        stage1Ref.current.style.display = copyOpacity > 0.01 ? "block" : "none";
      }

      if (leftGradientRef.current) {
        leftGradientRef.current.style.opacity = copyOpacity > 0.01 ? "1" : "0.3";
      }

      // 3. Stage 2: Bottom Titles
      const isAnyBottomTitleActive = progress >= 0.22;

      if (bottomGradientRef.current) {
        bottomGradientRef.current.style.opacity = isAnyBottomTitleActive ? "1" : "0.7";
      }

      if (scrollCueRef.current) {
        const isHidden = progress > 0.06 || isAnyBottomTitleActive;
        scrollCueRef.current.style.opacity = isHidden ? "0" : "1";
        scrollCueRef.current.style.display = isHidden ? "none" : "block";
      }

      BOTTOM_TITLES.forEach((item, idx) => {
        const titleEl = bottomTitleRefs.current[idx];
        if (!titleEl) return;

        if (progress < item.start || progress > item.end) {
          titleEl.style.opacity = "0";
          titleEl.style.transform = "translateY(20px)";
          titleEl.style.display = "none";
          return;
        }

        let opacity = 1;
        let translateY = 0;

        if (progress < item.peakStart) {
          const p = (progress - item.start) / (item.peakStart - item.start);
          opacity = Math.max(0, Math.min(1, p));
          translateY = (1 - opacity) * 16;
        } else if (progress > item.peakEnd && item.end < 1.0) {
          const p = (progress - item.peakEnd) / (item.end - item.peakEnd);
          opacity = Math.max(0, Math.min(1, 1 - p));
          translateY = (1 - opacity) * -16;
        }

        titleEl.style.opacity = String(opacity);
        titleEl.style.transform = `translateY(${translateY}px)`;
        titleEl.style.display = opacity > 0.01 ? "block" : "none";
      });
    };

    const onScroll = () => {
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        rafId = null;
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const scrollableDistance = rect.height - window.innerHeight;
        if (scrollableDistance <= 0) return;

        const currentScrollTop = -rect.top;
        const progress = Math.max(0, Math.min(1, currentScrollTop / scrollableDistance));
        updateDOMNodes(progress);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Initialize initial frame & DOM positioning
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [isReducedMotion]);

  // Reduced motion alternative: clean static presentation using the completed landscape
  if (isReducedMotion) {
    return (
      <section className="relative w-full min-h-screen flex items-center bg-[#10263D] text-white overflow-hidden pt-28 pb-16">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center pointer-events-none opacity-90"
          style={{ backgroundImage: "url('/images/hero-frames/frame_0480.webp')" }}
        />
        {/* Left deep navy gradient for text contrast */}
        <div
          className="absolute inset-y-0 left-0 w-full sm:w-[860px] pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(16, 38, 61, 0.85) 0%, rgba(16, 38, 61, 0.40) 50%, rgba(16, 38, 61, 0) 100%)",
          }}
        />

        <div className="relative z-10 max-w-[860px] mx-auto sm:mx-0 sm:ml-12 lg:ml-20 px-6">
          <div className="inline-block text-[#00BFFF] text-xs sm:text-sm font-bold tracking-[0.18em] uppercase mb-3.5 sm:mb-4">
            RC GROUP OF COMPANIES
          </div>

          <h1 className="text-[clamp(1.75rem,4.4vw,4.25rem)] font-bold text-[#F8FAFC] tracking-[-0.035em] leading-[1.08]">
            <span className="block whitespace-nowrap">Building Progress.</span>
            <span className="block whitespace-nowrap mt-1 sm:mt-1.5">Creating Possibilities.</span>
          </h1>

          <p className="mt-5 sm:mt-6 text-[clamp(1rem,1.2vw,1.2rem)] text-[#E2E8F0] max-w-[580px] font-normal leading-[1.6]">
            A growing ecosystem of businesses driven by purpose, innovation and long-term vision.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Link
              href="/businesses"
              className="inline-flex items-center gap-2 py-[15px] px-[25px] rounded-full bg-[#1E90FF] hover:bg-[#1670C7] active:bg-[#0F5CA8] text-white text-[0.95rem] font-semibold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <span>Explore Our Businesses</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/journey"
              className="inline-flex items-center gap-2 py-[15px] px-[25px] rounded-full bg-[#071426]/50 hover:bg-[#071426]/75 text-white text-[0.95rem] font-semibold border border-[rgba(248,250,252,0.55)] hover:border-white backdrop-blur-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Discover Our Journey</span>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full h-[400vh] bg-[#10263D] text-white"
    >
      {/* Pinned Sticky Stage: 100vh Full-Width Cinematic Viewport */}
      <div className="sticky top-0 h-screen h-[100dvh] w-full flex flex-col justify-between overflow-hidden select-none">
        {/* Layer A — Cinematic 480-Frame Image Sequence */}
        <HeroImageSequence ref={heroSequenceRef} />

        {/* Ambient Left Navy Gradient: Deep navy (#10263D) contrast without altering natural sunrise on the right */}
        <div
          ref={leftGradientRef}
          className="absolute inset-y-0 left-0 w-full sm:w-[860px] pointer-events-none z-10 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(to right, rgba(16, 38, 61, 0.82) 0%, rgba(16, 38, 61, 0.40) 50%, rgba(16, 38, 61, 0) 100%)",
            opacity: 1,
          }}
        />

        {/* Subtle Top & Bottom Vignettes: Ensures header legibility and clean transition to AboutSection */}
        <div className="absolute top-0 inset-x-0 h-40 pointer-events-none z-10 bg-gradient-to-b from-[#10263D]/80 via-[#10263D]/25 to-transparent" />
        <div
          ref={bottomGradientRef}
          className="absolute bottom-0 inset-x-0 h-48 sm:h-56 pointer-events-none z-10 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(to top, rgba(16, 38, 61, 0.92) 0%, rgba(16, 38, 61, 0.55) 60%, rgba(16, 38, 61, 0) 100%)",
            opacity: 0.7,
          }}
        />

        {/* Top spacer for clean breathing room */}
        <div className="relative z-20 pt-16 sm:pt-20" />

        {/* Stage 1: Minimal Hero Copy & CTAs (Left-Aligned, Max 860px) */}
        <div
          ref={stage1Ref}
          className="relative z-20 px-6 sm:px-12 lg:px-20 max-w-[860px] will-change-transform"
          style={{
            opacity: 1,
            transform: "translateY(0px)",
            pointerEvents: "auto",
            display: "block",
          }}
        >
          {/* Eyebrow Text */}
          <div className="inline-block text-[#00BFFF] text-xs sm:text-sm font-bold tracking-[0.18em] uppercase mb-3 sm:mb-4">
            RC GROUP OF COMPANIES
          </div>

          {/* Main Headline: Warm white #F8FAFC - exactly 2 lines */}
          <h1 className="text-[clamp(1.75rem,4.4vw,4.25rem)] font-bold text-[#F8FAFC] tracking-[-0.035em] leading-[1.08]">
            <span className="block whitespace-nowrap">Building Progress.</span>
            <span className="block whitespace-nowrap mt-1 sm:mt-1.5">Creating Possibilities.</span>
          </h1>

          {/* Supporting Description */}
          <p className="mt-5 sm:mt-6 text-[clamp(1rem,1.2vw,1.2rem)] text-[#E2E8F0] max-w-[580px] font-normal leading-[1.6]">
            A growing ecosystem of businesses driven by purpose, innovation and long-term vision.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-7 sm:mt-8">
            {/* Primary CTA */}
            <Link
              href="/businesses"
              className="inline-flex items-center gap-2 py-[15px] px-[25px] rounded-full bg-[#1E90FF] hover:bg-[#1670C7] active:bg-[#0F5CA8] text-white text-[0.95rem] font-semibold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <span>Explore Our Businesses</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/journey"
              className="inline-flex items-center gap-2 py-[15px] px-[25px] rounded-full bg-[#071426]/50 hover:bg-[#071426]/75 text-white text-[0.95rem] font-semibold border border-[rgba(248,250,252,0.55)] hover:border-white backdrop-blur-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Discover Our Journey</span>
            </Link>
          </div>
        </div>

        {/* Center flex spacer: Keeps the central area open for the 7 business panels */}
        <div className="flex-1 pointer-events-none" />

        {/* Bottom Dedicated Region: Scroll cue (Stage 1) or 3 Sequential Titles (Stage 2) */}
        <div className="relative z-20 px-6 sm:px-10 lg:px-12 pb-8 sm:pb-12 max-w-[1720px] w-full pointer-events-none">
          {/* Scroll Cue for Stage 1 */}
          <div
            ref={scrollCueRef}
            className="transition-opacity duration-300"
            style={{ opacity: 1, display: "block" }}
          >
            <div className="flex items-center gap-2.5 text-xs font-semibold text-[#E2E8F0]">
              <div className="w-4 h-7 rounded-full border border-slate-300/60 flex items-start justify-center p-1">
                <span className="w-1 h-1.5 bg-[#00BFFF] rounded-full animate-bounce" />
              </div>
              <span>Scroll to explore</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#00BFFF]" />
            </div>
          </div>

          {/* 3 Sequential Titles: Single lines, appearing one by one, no line break, max 90px, screen-fitted */}
          <div className="relative min-h-[85px] sm:min-h-[110px] lg:min-h-[135px] w-full flex items-end">
            {BOTTOM_TITLES.map((item, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  bottomTitleRefs.current[idx] = el;
                }}
                className="absolute bottom-0 left-0 w-full will-change-transform"
                style={{
                  opacity: 0,
                  transform: "translateY(20px)",
                  display: "none",
                }}
              >
                <div className="inline-block text-[#00BFFF] text-xs sm:text-sm font-bold tracking-[0.18em] uppercase mb-1.5 sm:mb-2.5 whitespace-nowrap">
                  {item.eyebrow}
                </div>
                <h2 className="text-[clamp(1.15rem,3.6vw,90px)] font-black text-[#F8FAFC] tracking-[-0.035em] leading-none whitespace-nowrap">
                  {item.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
