import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Shield } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/SocialIcons";
import { leadershipTeam } from "@/data/leadership";

export const metadata: Metadata = {
  title: "Corporate Leadership Team",
  description:
    "Meet the executive leaders of RC Group of Companies: Yuvaraj C (Founder & Chairman), Ashash Y (Managing Director), Padmaja Y (Executive Director), and Lukshita Y (Director).",
};

export default function LeadershipPage() {
  return (
    <div className="pt-16 sm:pt-20 pb-12 sm:pb-20">
      {/* Header Banner */}
      <section className="py-10 sm:py-14 lg:py-16 bg-gradient-to-b from-[#F5F9FD] to-white border-b border-[#DCE8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white border border-[#DCE8F2] text-[11px] sm:text-xs font-semibold text-[#1E90FF] uppercase tracking-wider mb-3 sm:mb-4">
              Executive Stewardship
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-[650] text-[#071426] tracking-tight leading-[1.1]">
              Leadership with <span className="text-[#1E90FF]">Purpose</span>
            </h1>
            <p className="mt-3.5 sm:mt-5 text-sm sm:text-base lg:text-lg text-[#475569] leading-relaxed">
              RC Group is guided by leaders dedicated to long-term value creation,
              ethical stewardship, and sustainable industrial growth. Meet the
              executive team directing our mission across seven sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Detailed Profiles */}
      <section className="py-8 sm:py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12 lg:space-y-16">
          {leadershipTeam.map((leader, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={leader.id}
                id={leader.id}
                className="scroll-mt-28 p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl bg-[#F5F9FD]/40 border border-[#DCE8F2] hover:border-[#1E90FF] shadow-card transition-all"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Portrait Column */}
                  <div
                    className={`lg:col-span-5 relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-card border border-[#DCE8F2] ${
                      isReversed ? "lg:order-last" : ""
                    }`}
                  >
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 450px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 text-white flex items-end justify-between">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">{leader.name}</h3>
                        <p className="text-[#87CEEB] text-xs sm:text-sm font-normal mt-0.5">
                          {leader.role}
                        </p>
                      </div>
                      {leader.linkedIn && (
                        <a
                          href={leader.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full bg-white/90 text-slate-900 hover:bg-[#1E90FF] hover:text-white flex items-center justify-center transition-colors shadow-sm"
                          aria-label={`${leader.name} LinkedIn Profile`}
                        >
                          <LinkedInIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Biography & Focus Areas */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#1E90FF]">
                        {leader.title}
                      </span>
                      <h2 className="text-3xl font-[650] text-[#071426] tracking-tight mt-1">
                        {leader.name}
                      </h2>
                    </div>

                    <p className="text-base text-[#475569] leading-relaxed font-normal">
                      {leader.fullBio}
                    </p>

                    {/* Focus Areas */}
                    <div className="pt-2">
                      <p className="text-xs font-semibold text-[#475569] uppercase tracking-wider mb-3">
                        Strategic Areas of Focus:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {leader.areasOfExpertise.map((exp, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs sm:text-sm font-normal text-[#071426] bg-white p-2.5 rounded-xl border border-[#DCE8F2]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#00CED1] shrink-0" />
                            <span>{exp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Leadership Vision Quote / Callout */}
      <section className="py-16 bg-[#071426] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Shield className="w-10 h-10 text-[#00CED1] mx-auto" />
          <blockquote className="text-xl sm:text-2xl font-[550] leading-relaxed text-slate-200">
            &ldquo;Enduring business value is not measured solely in financial metrics, but in the livelihoods we nurture, the clean energy we generate, and the trust we uphold.&rdquo;
          </blockquote>
          <p className="text-xs sm:text-sm font-medium text-[#1E90FF] uppercase tracking-wider">
            Office of the Chairman &bull; RC Group of Companies
          </p>
        </div>
      </section>
    </div>
  );
}
