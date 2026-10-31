import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { CompactJourneyTimeline } from "@/components/journey/CompactJourneyTimeline";

export const metadata: Metadata = {
  title: "Our Journey & Milestones",
  description:
    "Follow the twenty-year history of RC Group of Companies, from our agricultural origins in 2004 to our diversification into clean energy, healthcare, and education.",
};

export default function JourneyPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Banner */}
      <section className="py-20 bg-gradient-to-b from-[#F5F9FD] to-white border-b border-[#DCE8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DCE8F2] text-xs font-semibold text-[#1E90FF] uppercase tracking-wider mb-4">
              Two Decades of Impact
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[650] text-[#071426] tracking-tight leading-[1.1]">
              A Journey of <span className="text-[#1E90FF]">Purpose &amp; Progress</span>
            </h1>
            <p className="mt-6 text-lg text-[#475569] leading-relaxed">
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
                  <span className="px-3 py-1 rounded-full bg-[#1E90FF] text-xs font-bold">
                    Chronological Heritage
                  </span>
                  <h3 className="text-2xl font-bold mt-2">2004 — 2026 &amp; Beyond</h3>
                </div>
                <div className="flex gap-6 text-xs sm:text-sm font-semibold">
                  <div>
                    <span className="text-xl font-bold text-[#00BFFF] block">16+</span>
                    <span>Active Ventures</span>
                  </div>
                  <div>
                    <span className="text-xl font-bold text-[#00CED1] block">7</span>
                    <span>Industry Sectors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Compact Stepper Timeline */}
      <CompactJourneyTimeline />
    </div>
  );
}
