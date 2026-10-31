"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, TrendingUp, Share2, Target } from "lucide-react";

export function AboutSection() {
  const principles = [
    {
      id: "people-first",
      num: "01",
      title: "People First",
      description: "Creating opportunities for people and communities.",
      icon: Users,
      badgeBg: "bg-[#1E90FF]/10 text-[#1E90FF] group-hover:bg-[#1E90FF] group-hover:text-white",
      accent: "#1E90FF",
    },
    {
      id: "sustainable-growth",
      num: "02",
      title: "Sustainable Growth",
      description: "Building responsible businesses for the long term.",
      icon: TrendingUp,
      badgeBg: "bg-[#00CED1]/10 text-[#00CED1] group-hover:bg-[#00CED1] group-hover:text-white",
      accent: "#00CED1",
    },
    {
      id: "diverse-opportunities",
      num: "03",
      title: "Diverse Opportunities",
      description: "Across multiple industries and markets.",
      icon: Share2,
      badgeBg: "bg-[#1E90FF]/10 text-[#1E90FF] group-hover:bg-[#1E90FF] group-hover:text-white",
      accent: "#1E90FF",
    },
    {
      id: "positive-impact",
      num: "04",
      title: "Positive Impact",
      description: "For communities today and future generations.",
      icon: Target,
      badgeBg: "bg-[#00CED1]/10 text-[#00CED1] group-hover:bg-[#00CED1] group-hover:text-white",
      accent: "#00CED1",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative subtle blue curved surface at bottom-left */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-[#E8F4FE] via-[#F5F9FD]/80 to-transparent rounded-full blur-2xl pointer-events-none -z-0" />
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-b from-[#F5F9FD]/70 to-transparent pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two-Column Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Narrative Column: First on mobile so section header & mission are immediate */}
          <div className="lg:col-span-6 space-y-5 lg:space-y-6 lg:pl-4 order-1 lg:order-2">
            {/* 02 — ABOUT RC GROUP Tag */}
            <div className="flex items-center gap-2.5">
              <span className="text-base font-semibold text-[#1E90FF] tracking-wider">
                02
              </span>
              <span className="text-slate-300 font-medium">&mdash;</span>
              <span className="text-xs font-semibold tracking-[0.2em] text-[#475569] uppercase">
                ABOUT RC GROUP
              </span>
            </div>

            {/* Prominent Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[650] text-[#071426] tracking-tight leading-[1.12]">
              Building Businesses <br />
              for a <span className="text-[#1E90FF]">Brighter Tomorrow</span>
            </h2>

            {/* Lead Paragraph */}
            <p className="text-base sm:text-lg font-normal text-[#0B1528] leading-relaxed max-w-xl">
              What started in 2004 as a vision to create meaningful businesses has
              grown into a diversified group, touching millions of lives across
              India and beyond.
            </p>

            {/* Body Paragraph */}
            <p className="text-sm sm:text-base font-normal text-[#475569] leading-relaxed max-w-xl">
              At RC Group, we believe in creating long-term value through
              responsible business practices, innovation and a deep commitment
              to the communities we serve. Our businesses span multiple
              industries, united by a shared purpose to build a better,
              brighter tomorrow.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1E90FF] hover:bg-[#1670C7] active:bg-[#0F5CA8] text-white font-medium text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Learn Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Graphic Column: Second on mobile, left on desktop */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative w-full aspect-square max-w-[420px] sm:max-w-[500px] lg:max-w-[540px] mx-auto filter drop-shadow-[0_20px_35px_rgba(30,144,255,0.12)] group">
              <Image
                src="/images/Corporate Horizons_ Innovation in Motion.webp"
                alt="RC Group Corporate Horizons - Healthcare, Solar Energy, Education, Industry, Hospitality, Logistics, Digital Tech"
                fill
                priority
                className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 540px"
              />
            </div>
          </div>
        </div>

        {/* Four Principles Row: Compact 2x2 inline grid on mobile, 4 columns on desktop */}
        <div className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-[#DCE8F2]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
            {principles.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="group relative p-4 sm:p-6 rounded-2xl bg-[#F5F9FD] hover:bg-white border border-[#DCE8F2] hover:border-[#1E90FF]/40 shadow-xs hover:shadow-[0_12px_28px_-6px_rgba(30,144,255,0.15)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 overflow-hidden"
                >
                  {/* Subtle top accent highlight on hover */}
                  <div
                    className="absolute top-0 inset-x-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: item.accent }}
                  />

                  {/* Header: Icon & Numeral */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div
                      className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-300 shadow-xs ${item.badgeBg}`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-semibold text-slate-400/80 tracking-wider">
                      {item.num}
                    </span>
                  </div>

                  {/* Content: Title and Description */}
                  <div>
                    <h3 className="text-sm sm:text-base font-[600] text-[#071426] group-hover:text-[#1E90FF] transition-colors leading-snug mb-1 sm:mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs lg:text-sm text-[#475569] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
