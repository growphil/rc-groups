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
    <div className="pt-24 pb-20">
      {/* Breadcrumbs Navigation */}
      <div className="bg-[#F0F8FF]/60 border-b border-[#DCE8F2] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-[#019FF9] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/businesses" className="hover:text-[#019FF9] transition-colors">
              Businesses
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 font-bold">{sector.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#F0F8FF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DCE8F2] text-xs font-bold text-[#019FF9] uppercase tracking-wider">
                Sector {sector.id} &bull; Seven Core Verticals
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
                {sector.name}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                {sector.shortDescription}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#ventures"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#019FF9] hover:bg-[#008ee0] text-white font-bold text-sm shadow-sm transition-all"
                >
                  <span>Explore {relatedVentures.length} Ventures</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-[#DCE8F2] transition-colors"
                >
                  <span>Sector Inquiries</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-card border border-[#DCE8F2]">
              <Image
                src={sector.heroImage}
                alt={sector.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#019FF9]">
                  RC Group Portfolio
                </span>
                <p className="text-lg font-bold mt-2">{sector.name} Division</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Bar */}
      <section className="py-8 bg-white border-y border-[#DCE8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 text-center">
            {sector.stats.map((st, i) => (
              <div key={i} className="pt-3 sm:pt-0">
                <p className="text-2xl sm:text-3xl font-black text-[#019FF9]">{st.value}</p>
                <p className="text-xs sm:text-sm font-bold text-slate-700 mt-1">{st.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector In-Depth Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Strategic Vision &amp; Capabilities
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {sector.fullDescription}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sector.highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-[#F0F8FF]/60 border border-[#DCE8F2] flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#019FF9] shrink-0 mt-0.5" />
                <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Portfolio Ventures */}
      <section id="ventures" className="py-20 bg-[#F0F8FF]/50 border-t border-[#DCE8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#019FF9]">
              Operating Units
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">
              Ventures Under {sector.name}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Discover the individual operating companies and initiatives delivering impact in this domain.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedVentures.map((venture) => (
              <div
                key={venture.id}
                className="bg-white rounded-2xl p-6 border border-[#DCE8F2] shadow-card hover:shadow-elevated hover:border-[#019FF9] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F0F8FF] text-[#019FF9] border border-[#DCE8F2]">
                      Est. {venture.yearEstablished}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-600 px-2.5 py-0.5 rounded-full bg-emerald-50">
                      {venture.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {venture.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {venture.fullDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    RC Group Entity
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#019FF9] hover:underline"
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#071426] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="max-w-xl">
              <span className="text-xs font-bold tracking-wider uppercase text-[#019FF9]">
                Collaboration &amp; Inquiries
              </span>
              <h3 className="text-2xl sm:text-3xl font-black mt-1">
                Partner with RC Group&apos;s {sector.name} Division
              </h3>
              <p className="text-slate-300 text-sm mt-2">
                Whether you are seeking commercial solar deployment, pharmaceutical
                distribution, or institutional alliance, our desk is ready to discuss.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 px-8 py-3.5 rounded-full bg-[#019FF9] hover:bg-[#008ee0] text-white font-bold text-sm shadow-md transition-all"
            >
              Contact Sector Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
