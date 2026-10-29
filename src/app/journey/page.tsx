import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { journeyMilestones } from "@/data/journey";

export const metadata: Metadata = {
  title: "Our Journey & Milestones",
  description:
    "Follow the twenty-year history of RC Group of Companies, from our agricultural origins in 2004 to our diversification into clean energy, healthcare, and education.",
};

export default function JourneyPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Banner */}
      <section className="py-20 bg-gradient-to-b from-[#F0F8FF] to-white border-b border-[#DCE8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DCE8F2] text-xs font-bold text-[#019FF9] uppercase tracking-wider mb-4">
              Two Decades of Impact
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              A Journey of <span className="text-[#019FF9]">Purpose &amp; Progress</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Explore the key chronological milestones that have shaped RC Group of
              Companies from 2004 to the present day. Each step represents our
              dedication to community need, ethical governance, and sustainable innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Panorama Stat Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-card border border-[#DCE8F2]">
            <div className="relative h-64 sm:h-80 w-full">
              <Image
                src="/images/journey-panorama.jpg"
                alt="RC Group Growth Panorama"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#019FF9] text-xs font-bold">
                    Chronological Heritage
                  </span>
                  <h3 className="text-2xl font-bold mt-2">2004 — 2026 &amp; Beyond</h3>
                </div>
                <div className="flex gap-6 text-xs sm:text-sm font-semibold">
                  <div>
                    <span className="text-xl font-bold text-[#019FF9] block">16+</span>
                    <span>Active Ventures</span>
                  </div>
                  <div>
                    <span className="text-xl font-bold text-[#019FF9] block">7</span>
                    <span>Industry Sectors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Vertical Timeline */}
      <section className="py-20 bg-[#F0F8FF]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative border-l-2 border-[#019FF9]/30 ml-4 sm:ml-32 space-y-12">
            {journeyMilestones.map((milestone, idx) => (
              <div key={milestone.year} className="relative pl-6 sm:pl-10">
                {/* Year Badge on left for desktop */}
                <div className="sm:absolute sm:-left-32 sm:top-1 text-left sm:text-right w-24 mb-2 sm:mb-0">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#019FF9] text-white text-xs font-black shadow-sm">
                    {milestone.year}
                  </span>
                </div>

                {/* Timeline Node Bullet */}
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-4 border-[#019FF9] shadow-sm" />

                {/* Milestone Content Card */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#DCE8F2] hover:border-[#019FF9] shadow-card hover:shadow-elevated transition-all group">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-[#019FF9] uppercase tracking-wider">
                      {milestone.sectorName}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Milestone {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#019FF9] transition-colors mb-1">
                    {milestone.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-500 mb-3">
                    {milestone.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {milestone.description}
                  </p>

                  {/* Ventures in this Milestone */}
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-slate-500">Related Entities:</span>
                    {milestone.ventures.map((v) => (
                      <span
                        key={v}
                        className="px-2.5 py-0.5 rounded-full bg-[#F0F8FF] text-[#019FF9] text-xs font-semibold border border-[#DCE8F2]"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/businesses"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#019FF9] hover:bg-[#008ee0] text-white font-bold text-sm shadow-md transition-all"
            >
              <span>Explore Businesses Resulting From This Journey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
