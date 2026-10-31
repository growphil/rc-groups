import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { businessSectors } from "@/data/business-sectors";
import { ventures } from "@/data/ventures";

export const metadata: Metadata = {
  title: "Business Portfolio",
  description:
    "Explore the seven diverse business sectors of RC Group of Companies: Healthcare, Energy, Education, Food & Hospitality, Entertainment, Travel, and Digital Services.",
};

export default function BusinessesPage() {
  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-20">
      {/* Header Banner */}
      <section className="py-10 sm:py-16 lg:py-20 bg-gradient-to-b from-[#F5F9FD] to-white border-b border-[#DCE8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white border border-[#DCE8F2] text-[11px] sm:text-xs font-semibold text-[#1E90FF] uppercase tracking-wider mb-3 sm:mb-4">
              Seven Core Industries
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-[650] text-[#071426] tracking-tight leading-[1.1]">
              Our Business <span className="text-[#1E90FF]">Portfolio</span>
            </h1>
            <p className="mt-3.5 sm:mt-6 text-sm sm:text-base lg:text-lg text-[#475569] leading-relaxed">
              Every venture within RC Group is built with a long-term perspective.
              From providing essential life-saving medications to generating 100%
              clean solar power and fostering future leaders, discover our seven
              operating sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors List with Detailed Breakdown */}
      <section className="py-8 sm:py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10 lg:space-y-16">
          {businessSectors.map((sector, index) => {
            const relatedVentures = ventures.filter(
              (v) => v.sectorSlug === sector.slug
            );
            const isReversed = index % 2 === 1;

            return (
              <div
                key={sector.slug}
                id={sector.slug}
                className="scroll-mt-24 sm:scroll-mt-28 p-4 sm:p-7 lg:p-10 rounded-2xl sm:rounded-3xl bg-[#F5F9FD]/50 border border-[#DCE8F2] hover:border-[#1E90FF]/60 shadow-card transition-all"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Visual Column */}
                  <div
                    className={`lg:col-span-5 relative h-48 sm:h-72 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-card border border-[#DCE8F2] ${
                      isReversed ? "lg:order-last" : ""
                    }`}
                  >
                    <Image
                      src={sector.image}
                      alt={sector.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-white/95 backdrop-blur-sm text-[11px] sm:text-xs font-semibold text-[#1E90FF] shadow-sm">
                      Sector {sector.id}
                    </span>
                    <span className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white text-base sm:text-lg font-semibold">
                      {sector.name}
                    </span>
                  </div>

                  {/* Narrative & Ventures */}
                  <div className="lg:col-span-7 space-y-3.5 sm:space-y-5 lg:space-y-6">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <span className="text-xs sm:text-sm font-semibold text-[#1E90FF] uppercase tracking-wider">
                        Sector {sector.id} of 07
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1E90FF]" />
                      <span className="text-[11px] sm:text-xs font-medium text-[#475569]">
                        {relatedVentures.length} Operating Entities
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-[650] text-[#071426] tracking-tight">
                      {sector.name}
                    </h2>

                    <p className="text-[#475569] text-xs sm:text-sm lg:text-base leading-relaxed font-normal">
                      {sector.fullDescription}
                    </p>

                    {/* Sector Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-1 sm:pt-2">
                      {sector.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-normal">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00CED1] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Ventures Tags */}
                    <div className="pt-3 sm:pt-4 border-t border-[#DCE8F2]">
                      <p className="text-[11px] sm:text-xs font-semibold text-[#475569] uppercase tracking-wider mb-2 sm:mb-3">
                        Ventures Under {sector.name}:
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {relatedVentures.map((v) => (
                          <span
                            key={v.id}
                            className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-[#DCE8F2] text-[11px] sm:text-xs font-medium text-[#071426] shadow-xs"
                          >
                            {v.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Sector Page CTA */}
                    <div className="pt-1 sm:pt-2">
                      <Link
                        href={`/businesses/${sector.slug}`}
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#1E90FF] hover:bg-[#1670C7] active:bg-[#0F5CA8] text-white text-xs sm:text-sm font-medium shadow-sm transition-all"
                      >
                        <span>View Dedicated Sector Profile</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
