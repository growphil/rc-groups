"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Building2, ChevronRight, Sparkles } from "lucide-react";
import { journeyMilestones } from "@/data/journey";

export function CompactJourneyTimeline() {
  const [activeYear, setActiveYear] = useState<number>(journeyMilestones[0].year);

  // Track active year as user scrolls through the timeline
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const year = Number(entry.target.getAttribute("data-year"));
          if (year) setActiveYear(year);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    });

    const elements = document.querySelectorAll("[data-year]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToYear = (year: number) => {
    setActiveYear(year);
    const target = document.getElementById(`year-${year}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="relative w-full">
      {/* Sticky Quick-Jump Year Navigation Rail */}
      <div className="sticky top-[69px] sm:top-[73px] z-30 bg-white/95 backdrop-blur-md border-y border-[#DCE8F2] shadow-xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-3">
            <span className="hidden sm:inline-block text-xs font-semibold uppercase tracking-wider text-[#475569] shrink-0">
              Jump to Year:
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5 scroll-smooth w-full sm:w-auto">
              {journeyMilestones.map((m) => {
                const isActive = activeYear === m.year;
                return (
                  <button
                    key={m.year}
                    type="button"
                    onClick={() => scrollToYear(m.year)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#1E90FF] text-white shadow-xs scale-105"
                        : "bg-[#F5F9FD] text-[#475569] hover:bg-[#E8F4FE] hover:text-[#1E90FF] border border-[#DCE8F2]"
                    }`}
                  >
                    {m.year}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Slim Stepper Timeline */}
      <div className="py-12 sm:py-16 bg-[#F5F9FD]/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative pl-6 sm:pl-10 space-y-4 sm:space-y-6">
            {/* Continuous Vertical Timeline Stem */}
            <div className="absolute left-[7px] sm:left-[11px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#1E90FF] via-[#00CED1] to-[#40E0D0]" />

            {journeyMilestones.map((milestone) => {
              const isHighlight = milestone.isKeyHighlight;
              const isActive = activeYear === milestone.year;

              return (
                <div
                  key={milestone.year}
                  id={`year-${milestone.year}`}
                  data-year={milestone.year}
                  className="relative group scroll-mt-36"
                >
                  {/* Timeline Bullet Node on the Stem */}
                  <div
                    className={`absolute -left-[24px] sm:-left-[28px] top-4 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      isActive
                        ? "bg-[#1E90FF] border-white shadow-[0_0_0_4px_rgba(30,144,255,0.3)] scale-125"
                        : "bg-white border-[#1E90FF] group-hover:border-[#00CED1] group-hover:scale-110"
                    }`}
                  />

                  {/* Compact Company Card */}
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#DCE8F2] hover:border-[#1E90FF]/60 shadow-xs hover:shadow-md transition-all duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4">
                      {/* Year & Sector Metadata */}
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#1E90FF] text-white text-xs font-semibold tracking-wide">
                          {milestone.year}
                        </span>
                        <span className="text-[11px] sm:text-xs font-semibold text-[#00CED1] uppercase tracking-wider bg-[#00CED1]/10 px-2.5 py-0.5 rounded-full border border-[#00CED1]/20">
                          {milestone.sectorName}
                        </span>
                        {isHighlight && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                            <Sparkles className="w-2.5 h-2.5" />
                            Milestone
                          </span>
                        )}
                      </div>

                      {/* Explore Action Link */}
                      <Link
                        href="/businesses"
                        className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-[#1E90FF] hover:text-[#1670C7] shrink-0"
                      >
                        <span>View Businesses</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Company Name(s) */}
                    <div className="mt-2.5">
                      {milestone.ventures && milestone.ventures.length > 1 ? (
                        <div className="space-y-1.5">
                          <span className="text-xs font-medium text-[#475569] block">
                            Ventures Launched:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {milestone.ventures.map((v) => (
                              <Link
                                key={v}
                                href="/businesses"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F5F9FD] hover:bg-[#E8F4FE] text-[#071426] hover:text-[#1E90FF] text-sm font-[600] border border-[#DCE8F2] hover:border-[#1E90FF]/40 transition-colors"
                              >
                                <Building2 className="w-3.5 h-3.5 text-[#1E90FF]" />
                                <span>{v}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <Link
                            href="/businesses"
                            className="inline-flex items-center gap-2 text-base sm:text-lg font-[600] text-[#071426] hover:text-[#1E90FF] transition-colors"
                          >
                            <Building2 className="w-4 h-4 text-[#1E90FF] shrink-0" />
                            <span>{milestone.title}</span>
                          </Link>
                          <Link
                            href="/businesses"
                            className="sm:hidden text-xs font-medium text-[#1E90FF] flex items-center gap-0.5"
                          >
                            <span>Explore</span>
                            <ChevronRight className="w-3 h-3" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Action */}
          <div className="mt-12 text-center">
            <Link
              href="/businesses"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1E90FF] hover:bg-[#1670C7] active:bg-[#0F5CA8] text-white font-medium text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore All RC Group Businesses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
