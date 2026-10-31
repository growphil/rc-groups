import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Eye, ShieldCheck, Users, TrendingUp, Share2 } from "lucide-react";
import { corporateValues } from "@/data/site";
import { businessSectors } from "@/data/business-sectors";

const principleMeta = {
  "people-first": {
    num: "01",
    icon: Users,
    badgeBg: "bg-[#1E90FF]/10 text-[#1E90FF] group-hover:bg-[#1E90FF] group-hover:text-white",
    accent: "#1E90FF",
  },
  "sustainable-growth": {
    num: "02",
    icon: TrendingUp,
    badgeBg: "bg-[#00CED1]/10 text-[#00CED1] group-hover:bg-[#00CED1] group-hover:text-white",
    accent: "#00CED1",
  },
  "diverse-opportunities": {
    num: "03",
    icon: Share2,
    badgeBg: "bg-[#1E90FF]/10 text-[#1E90FF] group-hover:bg-[#1E90FF] group-hover:text-white",
    accent: "#1E90FF",
  },
  "positive-impact": {
    num: "04",
    icon: Target,
    badgeBg: "bg-[#00CED1]/10 text-[#00CED1] group-hover:bg-[#00CED1] group-hover:text-white",
    accent: "#00CED1",
  },
};

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about RC Group of Companies, our two-decade history of purpose-driven enterprise, core values, and multi-sector diversification.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-b from-[#F5F9FD] to-white border-b border-[#DCE8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DCE8F2] text-xs font-semibold text-[#1E90FF] uppercase tracking-wider mb-4">
              About RC Group
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[650] text-[#071426] tracking-tight leading-[1.1]">
              Driven by Purpose. <br />
              <span className="text-[#1E90FF]">Building for Tomorrow.</span>
            </h1>
            <p className="mt-6 text-lg text-[#475569] leading-relaxed">
              Founded in 2004, RC Group of Companies has grown from a local agro
              commodity enterprise into a diversified conglomerate operating across
              seven vital sectors of human life and modern enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* Overview & Heritage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative h-96 sm:h-[450px] rounded-3xl overflow-hidden shadow-card border border-[#DCE8F2]">
                <Image
                  src="/images/corporate-headquarters.jpg"
                  alt="RC Group Headquarters Campus"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#1E90FF] text-white">
                    20+ Years Heritage
                  </span>
                  <h3 className="text-xl font-bold mt-2">RC Corporate Campus</h3>
                  <p className="text-xs text-slate-300 mt-1">Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F9FD] border border-[#DCE8F2] text-xs font-semibold text-[#1E90FF] uppercase tracking-wider">
                Our Foundation
              </div>
              <h2 className="text-3xl sm:text-4xl font-[650] text-[#071426] tracking-tight">
                Two Decades of Steadfast Enterprise Growth
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                RC Group started its journey with RC Rice Mandi in 2004, driven by a
                fundamental conviction: businesses thrive when they honor community
                trust and provide uncompromising quality.
              </p>
              <p className="text-base text-[#475569] leading-relaxed">
                As our roots deepened, we identified areas where scalable, ethical
                enterprise could solve critical societal needs. In 2010, we entered
                healthcare, later pioneering commercial solar generation, technical
                education, family recreation, and modern enterprise services.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/journey"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E90FF] hover:bg-[#1670C7] active:bg-[#0F5CA8] text-white font-medium text-sm shadow-sm transition-all"
                >
                  <span>Explore Our Milestones</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/businesses"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F5F9FD] hover:bg-[#DCE8F2] text-[#071426] font-medium text-sm border border-[#DCE8F2] transition-colors"
                >
                  <span>View Our 7 Sectors</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F5F9FD]/60 border-y border-[#DCE8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#DCE8F2] shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F4FE] text-[#1E90FF] flex items-center justify-center mb-6 border border-[#DCE8F2]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-[550] text-[#071426] tracking-tight mb-4">
                Our Mission
              </h3>
              <p className="text-[#475569] leading-relaxed">
                To build, operate, and scale purpose-driven businesses that deliver
                exceptional value, improve human health and well-being, accelerate
                clean environmental practices, and foster generational prosperity across
                the communities we serve.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#DCE8F2] shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-[#071426] text-[#00CED1] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-[550] text-[#071426] tracking-tight mb-4">
                Our Vision
              </h3>
              <p className="text-[#475569] leading-relaxed">
                To stand as one of India&apos;s most respected, multi-sector
                enterprises—recognized globally for unyielding ethical standards,
                sustainable innovation in renewable energy and healthcare, and human-first
                organizational culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Our Principles */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F9FD] border border-[#DCE8F2] text-xs font-semibold text-[#1E90FF] uppercase tracking-wider mb-4">
              Our Principles
            </div>
            <h2 className="text-3xl sm:text-4xl font-[650] text-[#071426] tracking-tight">
              Values That Anchor Every Decision
            </h2>
          </div>

          {/* Compact 2x2 inline grid on mobile, 4 columns on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
            {corporateValues.map((val) => {
              const meta = principleMeta[val.id as keyof typeof principleMeta] || {
                num: "01",
                icon: ShieldCheck,
                badgeBg: "bg-[#1E90FF]/10 text-[#1E90FF] group-hover:bg-[#1E90FF] group-hover:text-white",
                accent: "#1E90FF",
              };
              const Icon = meta.icon;

              return (
                <div
                  key={val.id}
                  className="group relative p-4 sm:p-6 rounded-2xl bg-[#F5F9FD] hover:bg-white border border-[#DCE8F2] hover:border-[#1E90FF]/40 shadow-xs hover:shadow-[0_12px_28px_-6px_rgba(30,144,255,0.15)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 overflow-hidden"
                >
                  {/* Subtle top accent highlight on hover */}
                  <div
                    className="absolute top-0 inset-x-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: meta.accent }}
                  />

                  {/* Header: Icon & Numeral */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div
                      className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-300 shadow-xs ${meta.badgeBg}`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-semibold text-slate-400/80 tracking-wider">
                      {meta.num}
                    </span>
                  </div>

                  {/* Content: Title & Description */}
                  <div>
                    <h3 className="text-sm sm:text-base font-[600] text-[#071426] group-hover:text-[#1E90FF] transition-colors leading-snug mb-1 sm:mb-1.5">
                      {val.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs lg:text-sm text-[#475569] leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seven Sectors Quick Grid */}
      <section className="py-20 bg-[#071426] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#00CED1]">
                Portfolio Diversification
              </span>
              <h2 className="text-3xl sm:text-4xl font-[650] text-white tracking-tight mt-2">
                Seven Complementary Business Sectors
              </h2>
            </div>
            <Link
              href="/businesses"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1E90FF] hover:text-[#00BFFF] transition-colors"
            >
              <span>Explore all business profiles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {businessSectors.map((sector) => (
              <Link
                key={sector.slug}
                href={`/businesses/${sector.slug}`}
                className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700 hover:border-[#1E90FF] transition-all group"
              >
                <span className="text-xs font-bold text-[#00CED1] px-2 py-0.5 rounded bg-[#00CED1]/20">
                  {sector.id}
                </span>
                <h4 className="text-base font-bold text-white mt-3 mb-1 group-hover:text-[#1E90FF] transition-colors">
                  {sector.name}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {sector.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
