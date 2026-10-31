"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, X, ArrowRight, Building2, Briefcase, ChevronRight } from "lucide-react";
import { businessSectors } from "@/data/business-sectors";
import { ventures } from "@/data/ventures";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Close on Escape & focus input
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "unset";
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalized = query.toLowerCase().trim();

  const filteredSectors = normalized
    ? businessSectors.filter(
        (s) =>
          s.name.toLowerCase().includes(normalized) ||
          s.shortDescription.toLowerCase().includes(normalized) ||
          s.highlights.some((h) => h.toLowerCase().includes(normalized))
      )
    : [];

  const filteredVentures = normalized
    ? ventures.filter(
        (v) =>
          v.name.toLowerCase().includes(normalized) ||
          v.sectorName.toLowerCase().includes(normalized) ||
          v.shortDescription.toLowerCase().includes(normalized)
      )
    : [];

  const hasResults = filteredSectors.length > 0 || filteredVentures.length > 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search RC Group Sectors & Ventures"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#071426]/75 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-[#DCE8F2] overflow-hidden flex flex-col max-h-[80vh] animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Bar */}
        <div className="relative flex items-center px-5 py-4 border-b border-[#DCE8F2] bg-[#F5F9FD]/60">
          <Search className="w-5 h-5 text-[#1E90FF] shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sectors, companies, initiatives (e.g. Healthcare, Solar, Pharma)..."
            className="w-full bg-transparent text-sm sm:text-base text-[#071426] placeholder:text-[#475569]/70 focus:outline-none"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 transition-colors mr-1"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-semibold text-slate-400 bg-slate-100 border border-slate-200 rounded-md">
              ESC
            </kbd>
          )}
          <button
            type="button"
            onClick={onClose}
            className="ml-2 p-1.5 rounded-full text-slate-400 hover:text-[#071426] hover:bg-slate-100 transition-colors"
            aria-label="Close search dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results / Suggestion Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          {!query.trim() ? (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#475569] mb-3">
                Featured Business Sectors
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {businessSectors.slice(0, 6).map((sector) => (
                  <Link
                    key={sector.id}
                    href={`/businesses/${sector.slug}`}
                    onClick={onClose}
                    className="p-3 rounded-xl border border-[#DCE8F2] hover:border-[#1E90FF] hover:bg-[#F5F9FD] transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#E8F4FE] text-[#1E90FF] flex items-center justify-center shrink-0">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-[#071426] group-hover:text-[#1E90FF] transition-colors">
                        {sector.name}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1E90FF] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          ) : hasResults ? (
            <>
              {filteredSectors.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#1E90FF]">
                      Sectors ({filteredSectors.length})
                    </span>
                  </div>
                  <div className="space-y-2">
                    {filteredSectors.map((sector) => (
                      <Link
                        key={sector.id}
                        href={`/businesses/${sector.slug}`}
                        onClick={onClose}
                        className="p-3.5 rounded-xl border border-[#DCE8F2] hover:border-[#1E90FF] hover:bg-[#F5F9FD] transition-all flex items-start justify-between group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-xl bg-[#E8F4FE] text-[#1E90FF] flex items-center justify-center shrink-0 mt-0.5">
                            <Building2 className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-[#1E90FF] uppercase tracking-wider">
                              Sector {sector.id}
                            </span>
                            <h4 className="text-sm sm:text-base font-[550] text-[#071426] group-hover:text-[#1E90FF] transition-colors">
                              {sector.name}
                            </h4>
                            <p className="text-xs text-[#475569] line-clamp-1 mt-0.5 font-normal">
                              {sector.shortDescription}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#1E90FF] group-hover:translate-x-1 transition-all mt-2 shrink-0 ml-2" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {filteredVentures.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#00CED1]">
                      Ventures & Companies ({filteredVentures.length})
                    </span>
                  </div>
                  <div className="space-y-2">
                    {filteredVentures.map((venture) => (
                      <Link
                        key={venture.id}
                        href={`/businesses/${venture.sectorSlug}`}
                        onClick={onClose}
                        className="p-3.5 rounded-xl border border-[#DCE8F2] hover:border-[#00CED1] hover:bg-[#F5F9FD] transition-all flex items-start justify-between group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-xl bg-[#E6FAF9] text-[#00CED1] flex items-center justify-center shrink-0 mt-0.5">
                            <Briefcase className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-medium text-[#00CED1]">
                                {venture.sectorName}
                              </span>
                              <span className="text-[10px] text-slate-400">&bull;</span>
                              <span className="text-[11px] text-slate-400 font-normal">
                                Est. {venture.yearEstablished}
                              </span>
                            </div>
                            <h4 className="text-sm sm:text-base font-[550] text-[#071426] group-hover:text-[#00CED1] transition-colors">
                              {venture.name}
                            </h4>
                            <p className="text-xs text-[#475569] line-clamp-1 mt-0.5 font-normal">
                              {venture.shortDescription}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#00CED1] group-hover:translate-x-1 transition-all mt-2 shrink-0 ml-2" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="py-12 text-center">
              <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="text-sm font-medium text-[#071426]">
                No results found for &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-[#475569] mt-1 font-normal">
                Try searching for &quot;Healthcare&quot;, &quot;Energy&quot;, &quot;Solar&quot;, or &quot;Pharma&quot;.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-[#DCE8F2] bg-[#F5F9FD] flex items-center justify-between text-xs text-[#475569]">
          <span className="font-normal">RC Group of Companies Directory</span>
          <Link
            href="/businesses"
            onClick={onClose}
            className="font-medium text-[#1E90FF] hover:underline flex items-center gap-1"
          >
            <span>View all 7 sectors</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

