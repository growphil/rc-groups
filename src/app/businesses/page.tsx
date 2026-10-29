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
    <div className="pt-24 pb-20">
      {/* Header Banner */}
      <section className="py-20 bg-gradient-to-b from-[#F0F8FF] to-white border-b border-[#DCE8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DCE8F2] text-xs font-bold text-[#019FF9] uppercase tracking-wider mb-4">
              Seven Core Industries
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Our Business <span className="text-[#019FF9]">Portfolio</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Every venture within RC Group is built with a long-term perspective.
              From providing essential life-saving medications to generating 100%
              clean solar power and fostering future leaders, discover our seven
              operating sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors List with Detailed Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {businessSectors.map((sector, index) => {
            const relatedVentures = ventures.filter(
              (v) => v.sectorSlug === sector.slug
            );
            const isReversed = index % 2 === 1;

            return (
              <div
                key={sector.slug}
                id={sector.slug}
                className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[#F0F8FF]/50 border border-[#DCE8F2] hover:border-[#019FF9]/60 shadow-card transition-all"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Visual Column */}
                  <div
                    className={`lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-card border border-[#DCE8F2] ${
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
                    <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-xs font-black text-[#019FF9] shadow-sm">
                      Sector {sector.id}
                    </span>
                    <span className="absolute bottom-4 left-4 text-white text-lg font-bold">
                      {sector.name}
                    </span>
                  </div>

                  {/* Narrative & Ventures */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-[#019FF9] uppercase tracking-wider">
                        Sector {sector.id} of 07
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#019FF9]" />
                      <span className="text-xs font-semibold text-slate-500">
                        {relatedVentures.length} Operating Entities
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {sector.name}
                    </h2>

                    <p className="text-slate-600 text-base leading-relaxed">
                      {sector.fullDescription}
                    </p>

                    {/* Sector Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {sector.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#019FF9] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Ventures Tags */}
                    <div className="pt-4 border-t border-[#DCE8F2]">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                        Ventures Under {sector.name}:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {relatedVentures.map((v) => (
                          <span
                            key={v.id}
                            className="px-3.5 py-1.5 rounded-full bg-white border border-[#DCE8F2] text-xs font-bold text-slate-800 shadow-sm"
                          >
                            {v.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Sector Page CTA */}
                    <div className="pt-2">
                      <Link
                        href={`/businesses/${sector.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#019FF9] hover:bg-[#008ee0] text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
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
