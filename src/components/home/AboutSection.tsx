"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, TrendingUp, Share2, Target } from "lucide-react";

export function AboutSection() {
  const principles = [
    {
      id: "people-first",
      title: "People First",
      description: "Creating opportunities for people and communities.",
      icon: <Users className="w-5 h-5 text-[#019FF9]" />,
    },
    {
      id: "sustainable-growth",
      title: "Sustainable Growth",
      description: "Building responsible businesses for the long term.",
      icon: <TrendingUp className="w-5 h-5 text-[#019FF9]" />,
    },
    {
      id: "diverse-opportunities",
      title: "Diverse Opportunities",
      description: "Across multiple industries and markets.",
      icon: <Share2 className="w-5 h-5 text-[#019FF9]" />,
    },
    {
      id: "positive-impact",
      title: "Positive Impact",
      description: "For communities today and future generations.",
      icon: <Target className="w-5 h-5 text-[#019FF9]" />,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative subtle blue curved surface at bottom-left */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-[#EBF6FF] via-[#F0F8FF]/80 to-transparent rounded-full blur-2xl pointer-events-none -z-0" />
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-b from-[#F0F8FF]/60 to-transparent pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two-Column Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Interlocking Faceted Polygon Mosaic */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-square max-w-[540px] mx-auto filter drop-shadow-[0_20px_35px_rgba(1,159,249,0.12)] group">
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

          {/* Right Column: Narrative Matching UI Reference */}
          <div className="lg:col-span-6 space-y-6 lg:pl-4">
            {/* 02 ABOUT RC GROUP Tag */}
            <div className="flex items-center gap-2.5">
              <span className="text-base font-extrabold text-[#019FF9] tracking-wider">
                02
              </span>
              <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
                ABOUT RC GROUP
              </span>
            </div>

            {/* Prominent Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Building Businesses <br />
              for a <span className="text-[#019FF9]">Brighter Tomorrow</span>
            </h2>

            {/* Lead Paragraph */}
            <p className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed max-w-xl">
              What started in 2004 as a vision to create meaningful businesses has
              grown into a diversified group, touching millions of lives across
              India and beyond.
            </p>

            {/* Body Paragraph */}
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl">
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
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#019FF9] hover:bg-[#008ee0] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Know Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Four Principles Row */}
        <div className="mt-16 pt-12 border-t border-slate-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {principles.map((item) => (
              <div
                key={item.id}
                className="group p-5 rounded-2xl bg-[#F8FBFE] hover:bg-white border border-[#E3EEF8]/80 hover:border-[#019FF9]/40 shadow-xs hover:shadow-[0_10px_25px_-5px_rgba(1,159,249,0.12)] transition-all duration-300 flex flex-col items-start hover:-translate-y-1"
              >
                {/* Circular Icon in soft light blue */}
                <div className="w-12 h-12 rounded-xl bg-[#EBF6FF] group-hover:bg-[#019FF9] text-[#019FF9] group-hover:text-white flex items-center justify-center mb-4 transition-all duration-300 shadow-xs">
                  {React.cloneElement(item.icon, {
                    className: "w-5 h-5 transition-colors duration-300 group-hover:text-white text-[#019FF9]",
                  })}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#019FF9] transition-colors mb-1.5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
