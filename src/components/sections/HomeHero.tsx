"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Play } from "lucide-react";

export function HomeHero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("about") || document.querySelector("section:nth-of-type(2)");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const heroMetrics = [
    { label: "Heritage", value: "20+", suffix: "Years", desc: "Purpose-driven growth since 2004" },
    { label: "Ecosystem", value: "7", suffix: "Sectors", desc: "Diversified industry verticals" },
    { label: "Community", value: "1M+", suffix: "Lives", desc: "Touched across India and beyond" },
    { label: "Enterprise", value: "16+", suffix: "Ventures", desc: "Operating companies & initiatives" },
  ];

  return (
    <section
      id="hero"
      className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-between bg-[#071426] text-white overflow-hidden pt-28 sm:pt-32 pb-10 sm:pb-14 select-none"
    >
      {/* Background Image: High-Resolution Corporate Headquarters Building */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src="/images/corporate-headquarters.jpg"
          alt="RC Group Corporate Headquarters Campus Building"
          fill
          priority
          quality={95}
          className="object-cover object-right md:object-center scale-[1.01] transform transition-transform duration-1000 ease-out"
          sizes="100vw"
        />

        {/* Cinematic Scrim: Multi-stop Obsidian Navy gradients for flawless text contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(7, 20, 38, 0.95) 0%, rgba(7, 20, 38, 0.85) 45%, rgba(7, 20, 38, 0.40) 75%, rgba(7, 20, 38, 0.20) 100%)",
          }}
        />

        {/* Top Vignette: Smooth integration with floating header */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#071426]/90 via-[#071426]/40 to-transparent" />

        {/* Bottom Vignette: Seamless handoff into About Section */}
        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#071426] via-[#071426]/60 to-transparent" />
      </div>

      {/* Main Narrative Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8 lg:py-12">
        <div className="max-w-3xl">
          {/* Main Display Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[78px] font-[650] text-[#F8FAFC] tracking-[-0.035em] leading-[1.04]">
            <span>Driven by Purpose.</span>
            <span className="block text-gradient-corporate mt-1 sm:mt-2">
              Focused on People.
            </span>
          </h1>

          {/* Supporting Lead Description */}
          <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-200/90 max-w-2xl font-normal leading-relaxed">
            A diversified group building businesses that create lasting value across industries and communities.
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-8 sm:mt-10">
            {/* Primary Action Button */}
            <Link
              href="/businesses"
              className="inline-flex items-center gap-2.5 py-3.5 sm:py-4 px-7 sm:px-8 rounded-full bg-[#1E90FF] hover:bg-[#1670C7] active:bg-[#0F5CA8] text-white text-sm sm:text-base font-semibold shadow-[0_8px_25px_rgba(30,144,255,0.4)] hover:shadow-[0_12px_32px_rgba(30,144,255,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
            >
              <span>Explore Our Businesses</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            {/* Secondary Action Button */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 py-3.5 sm:py-4 px-7 sm:px-8 rounded-full bg-[#071426]/60 hover:bg-white/15 active:bg-white/10 text-white text-sm sm:text-base font-medium border border-white/25 hover:border-white/50 backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-[#1E90FF] transition-colors">
                <Play className="w-3 h-3 text-white fill-white ml-0.5" />
              </div>
              <span>Watch Our Story</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Floating Bar: 4 Core Pillars Strip + Scroll Cue */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-[#071426]/75 backdrop-blur-md border border-white/15 shadow-card flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* 4 Pillars Counter Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full md:w-auto flex-1 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {heroMetrics.map((item, idx) => (
              <div key={item.label} className={`flex flex-col ${idx > 0 ? "pt-2 sm:pt-0 sm:pl-6" : ""}`}>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-[650] text-white tnum leading-tight">
                    {item.value}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#00BFFF] uppercase tracking-wide">
                    {item.suffix}
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs text-slate-300/80 font-normal leading-snug mt-0.5">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>

          {/* Smooth Scroll Cue */}
          <button
            type="button"
            onClick={scrollToNext}
            className="hidden lg:flex items-center gap-2.5 text-xs font-medium text-slate-300 hover:text-white transition-colors group shrink-0 pl-6 border-l border-white/10"
            aria-label="Scroll to discover RC Group"
          >
            <span>Explore</span>
            <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#1E90FF] flex items-center justify-center transition-colors">
              <ChevronDown className="w-4 h-4 text-[#00BFFF] group-hover:text-white transition-colors group-hover:translate-y-0.5" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
