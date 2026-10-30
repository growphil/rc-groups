"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Briefcase,
  MapPin,
  TrendingUp,
  Leaf,
  BarChart3,
  Handshake,
  ArrowRight,
} from "lucide-react";

export function ImpactSection() {
  const statCards = [
    {
      icon: <Users className="w-6 h-6 text-[#1E90FF]" strokeWidth={1.75} />,
      stat: "1M+",
      label: "Lives Touched",
      description: "Across our products and services",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-[#00CED1]" strokeWidth={1.75} />,
      stat: "7+",
      label: "Business Sectors",
      description: "Creating diverse opportunities",
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#1E90FF]" strokeWidth={1.75} />,
      stat: "50+",
      label: "Locations",
      description: "Serving across India and beyond",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#00CED1]" strokeWidth={1.75} />,
      stat: "500+",
      label: "Team Members",
      description: "Growing together every day",
    },
  ];

  const pillars = [
    {
      id: "people",
      name: "People",
      icon: <Users className="w-5 h-5 text-[#1E90FF]" strokeWidth={1.75} />,
      bg: "bg-[#E8F4FE]",
      description:
        "Empowering individuals through access to education, healthcare, skills and opportunities.",
    },
    {
      id: "planet",
      name: "Planet",
      icon: <Leaf className="w-5 h-5 text-[#00CED1]" strokeWidth={1.75} />,
      bg: "bg-[#E6FAF9]",
      description:
        "Supporting a cleaner and greener future with sustainable business practices.",
    },
    {
      id: "progress",
      name: "Progress",
      icon: <BarChart3 className="w-5 h-5 text-[#1E90FF]" strokeWidth={1.75} />,
      bg: "bg-[#E8F4FE]",
      description:
        "Driving inclusive economic growth across communities and industries.",
    },
    {
      id: "partnerships",
      name: "Partnerships",
      icon: <Handshake className="w-5 h-5 text-[#00CED1]" strokeWidth={1.75} />,
      bg: "bg-[#E6FAF9]",
      description:
        "Collaborating with stakeholders to create long-term, shared value.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Left Content + Right Mosaic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column (Stats + Copy) */}
          <div className="lg:col-span-6 xl:col-span-6 z-10">
            {/* 06 OUR IMPACT */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs sm:text-sm font-bold text-[#1E90FF]">06</span>
              <span className="text-[11px] sm:text-xs font-bold text-[#1E90FF] tracking-[0.18em] uppercase">
                OUR IMPACT
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.12]">
              <span className="text-[#071426] block">Creating a Positive</span>
              <span className="text-[#1E90FF] block">Impact Together</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-sm sm:text-base text-[#475569] leading-relaxed font-normal max-w-xl">
              Across our businesses, we work towards creating meaningful opportunities,
              stronger communities and a brighter tomorrow.
            </p>

            {/* 4 Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 mt-8">
              {statCards.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4 border border-[#DCE8F2] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(30,144,255,0.08)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-3">{item.icon}</div>
                    {/* Stat number in high-contrast Obsidian Navy */}
                    <div className="text-2xl sm:text-[26px] xl:text-[28px] font-black text-[#071426] leading-none mb-2">
                      {item.stat}
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#0B1528] leading-snug">
                      {item.label}
                    </h3>
                  </div>
                  <p className="text-[11px] text-[#475569] leading-tight mt-1.5">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-7">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1E90FF] hover:bg-[#1670C7] active:bg-[#0F5CA8] text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all group"
              >
                <span>Our Impact Story</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Mosaic (Modern Global Impact Collage) */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[620px] aspect-[1374/1145]">
              <Image
                src="/images/Modern Global Impact Collage.webp"
                alt="RC Group Impact Mosaic - Modern Global Impact Collage"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Full-Width Strip: 4 Impact Pillars */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-slate-100/90">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:divide-x lg:divide-slate-100">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.id}
                className={`flex items-start gap-4 ${idx > 0 ? "lg:pl-8" : ""}`}
              >
                <div className={`w-12 h-12 rounded-2xl ${pillar.bg} flex items-center justify-center shrink-0`}>
                  {pillar.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-bold text-[#071426] mb-1">
                    {pillar.name}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactSection;
