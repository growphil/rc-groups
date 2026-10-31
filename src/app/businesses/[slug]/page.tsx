import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { businessSectors } from "@/data/business-sectors";
import { ventures } from "@/data/ventures";

interface SectorPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return businessSectors.map((sector) => ({
    slug: sector.slug,
  }));
}

export async function generateMetadata({ params }: SectorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const sector = businessSectors.find((s) => s.slug === slug);
  if (!sector) {
    return { title: "Sector Not Found" };
  }
  return {
    title: `${sector.name} Sector | RC Group of Companies`,
    description: sector.shortDescription,
  };
}

export default async function SectorDetailPage({ params }: SectorPageProps) {
  const { slug } = await params;
  const sector = businessSectors.find((s) => s.slug === slug);

  if (!sector) {
    notFound();
  }

  const relatedVentures = ventures.filter((v) => v.sectorSlug === sector.slug);

  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-20">
      {/* Breadcrumbs Navigation */}
      <div className="bg-[#F5F9FD]/60 border-b border-[#DCE8F2] py-2.5 sm:py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-[#1E90FF] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/businesses" className="hover:text-[#1E90FF] transition-colors">
              Businesses
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#071426] font-medium">{sector.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-10 sm:py-16 lg:py-20 bg-gradient-to-b from-[#F5F9FD] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white border border-[#DCE8F2] text-[11px] sm:text-xs font-semibold text-[#1E90FF] uppercase tracking-wider">
                Sector {sector.id} &bull; Seven Core Verticals
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[650] text-[#071426] tracking-tight leading-[1.1]">
                {sector.name}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-[#475569] leading-relaxed max-w-2xl font-normal">
                {sector.shortDescription}
              </p>
              <div className="pt-2 flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="#ventures"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 sm:py-3 rounded-full bg-[#1E90FF] hover:bg-[#1670C7] active:bg-[#0F5CA8] text-white font-medium text-xs sm:text-sm shadow-sm transition-all"
                >
                  <span>Explore {relatedVentures.length} Ventures</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 sm:py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-medium text-xs sm:text-sm border border-[#DCE8F2] transition-colors"
                >
                  <span>Sector Inquiries</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-56 sm:h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-card border border-[#DCE8F2]">
              <Image
                src={sector.heroImage}
                alt={sector.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 text-white">
                <span className="text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#1E90FF]">
                  RC Group Portfolio
                </span>
                <p className="text-base sm:text-lg font-semibold mt-1.5 sm:mt-2">{sector.name} Division</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Bar */}
      <section className="py-6 sm:py-8 bg-white border-y border-[#DCE8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 text-center">
            {sector.stats.map((st, i) => (
              <div key={i} className="pt-2 sm:pt-0">
                <p className="text-xl sm:text-2xl lg:text-3xl font-[650] text-[#1E90FF] tnum">{st.value}</p>
                <p className="text-xs sm:text-sm font-medium text-[#071426] mt-0.5 sm:mt-1">{st.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector In-Depth Overview */}
      <section className="py-10 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-[650] text-[#071426] tracking-tight">
              Strategic Vision &amp; Capabilities
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#475569] leading-relaxed font-normal">
              {sector.fullDescription}
            </p>
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {sector.highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F5F9FD]/60 border border-[#DCE8F2] flex items-start gap-2.5 sm:gap-3"
              >
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00CED1] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-normal text-slate-800 leading-relaxed">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Portfolio Ventures */}
      <section id="ventures" className="py-10 sm:py-16 lg:py-20 bg-[#F5F9FD]/50 border-t border-[#DCE8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1E90FF]">
              Operating Units
            </span>
            <h2 className="text-2xl sm:text-3xl font-[650] text-[#071426] tracking-tight mt-1">
              Ventures Under {sector.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1.5 sm:mt-2 font-normal">
              Discover the individual operating companies and initiatives delivering impact in this domain.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {relatedVentures.map((venture) => (
              <div
                key={venture.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-[#DCE8F2] shadow-card hover:shadow-elevated hover:border-[#1E90FF] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#F5F9FD] text-[#1E90FF] border border-[#DCE8F2]">
                      Est. {venture.yearEstablished}
                    </span>
                    <span className="text-[11px] font-medium text-emerald-600 px-2.5 py-0.5 rounded-full bg-emerald-50">
                      {venture.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-[550] text-[#071426] mb-2">
                    {venture.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4 font-normal">
                    {venture.fullDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-normal text-slate-500">
                    RC Group Entity
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#1E90FF] hover:underline"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector CTA Box */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl bg-[#071426] text-white flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 shadow-2xl">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#00CED1]">
                Collaboration &amp; Inquiries
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-[650] mt-1">
                Partner with RC Group&apos;s {sector.name} Division
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1.5 sm:mt-2 font-normal">
                Whether you are seeking commercial solar deployment, pharmaceutical
                distribution, or institutional alliance, our desk is ready to discuss.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 w-full sm:w-auto text-center px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#1E90FF] hover:bg-[#1670C7] active:bg-[#0F5CA8] text-white font-medium text-xs sm:text-sm shadow-md transition-all"
            >
              Contact Sector Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
