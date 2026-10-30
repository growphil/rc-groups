import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  HeartPulse,
  Leaf,
  GraduationCap,
  Utensils,
  Gamepad2,
  Plane,
  Monitor,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SectorCardItem {
  id: string;
  slug: string;
  name: string;
  caption: string;
  image: string;
  icon: LucideIcon;
  accent?: string;
}

const topSectors: SectorCardItem[] = [
  {
    id: "01",
    slug: "healthcare",
    name: "Healthcare",
    caption: "Pharmaceuticals and medical businesses",
    image: "/images/sector-healthcare.jpg",
    icon: HeartPulse,
    accent: "#1E90FF",
  },
  {
    id: "02",
    slug: "energy",
    name: "Energy",
    caption: "Solar, EV and energy solutions",
    image: "/images/solar-panels-tracker.jpg",
    icon: Leaf,
    accent: "#00CED1",
  },
  {
    id: "03",
    slug: "education",
    name: "Education",
    caption: "Academy and skill development",
    image: "/images/sector-education.jpg",
    icon: GraduationCap,
    accent: "#1E90FF",
  },
  {
    id: "04",
    slug: "food-hospitality",
    name: "Food & Hospitality",
    caption: "Food businesses and hospitality",
    image: "/images/sector-food-hospitality.jpg",
    icon: Utensils,
    accent: "#00CED1",
  },
];

const bottomSectors: SectorCardItem[] = [
  {
    id: "05",
    slug: "entertainment",
    name: "Entertainment",
    caption: "Recreation and event experiences",
    image: "/images/sector-entertainment.jpg",
    icon: Gamepad2,
    accent: "#1E90FF",
  },
  {
    id: "06",
    slug: "travel",
    name: "Travel",
    caption: "Travel services and experiences",
    image: "/images/sector-travel.jpg",
    icon: Plane,
    accent: "#00CED1",
  },
  {
    id: "07",
    slug: "digital-services",
    name: "Digital & Services",
    caption: "Digital businesses and professional services",
    image: "/images/sector-digital.jpg",
    icon: Monitor,
    accent: "#1E90FF",
  },
];

function SectorCard({
  sector,
  aspectRatio = "aspect-[16/10]",
}: {
  sector: SectorCardItem;
  aspectRatio?: string;
}) {
  const IconComponent = sector.icon;
  const isTurquoiseAccent = sector.accent === "#00CED1";

  return (
    <Link
      href={`/businesses/${sector.slug}`}
      className="group block bg-white rounded-2xl p-3 border border-[#DCE8F2] hover:border-[#1E90FF]/60 shadow-[0_4px_20px_-4px_rgba(30,144,255,0.06)] hover:shadow-[0_18px_36px_-8px_rgba(30,144,255,0.20)] hover:-translate-y-1.5 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#1E90FF] focus-visible:outline-none"
    >
      {/* Landscape Image Container */}
      <div
        className={`relative w-full ${aspectRatio} rounded-xl overflow-hidden bg-slate-100 mb-3`}
      >
        <Image
          src={sector.image}
          alt={sector.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
        />

        {/* Floating Frosted Sector Badge */}
        <div className="absolute top-2.5 left-2.5 z-10 px-2.5 py-0.5 rounded-full bg-[#071426]/75 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
          Sector {sector.id}
        </div>

        {/* Subtle Bottom Image Gradient Scrim */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
      </div>

      {/* Info Section */}
      <div className="flex items-center gap-3 px-1 py-1">
        {/* Rounded square icon badge */}
        <div
          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
            isTurquoiseAccent
              ? "bg-[#E6FAF9] text-[#00CED1] group-hover:bg-[#00CED1]/20"
              : "bg-[#E8F4FE] text-[#1E90FF] group-hover:bg-[#1E90FF]/15"
          }`}
        >
          <IconComponent className="w-5 h-5" strokeWidth={2} />
        </div>

        {/* Text information */}
        <div className="flex-1 min-w-0">
          <span
            className={`block text-xs font-bold leading-tight ${
              isTurquoiseAccent ? "text-[#00CED1]" : "text-[#1E90FF]"
            }`}
          >
            {sector.id}
          </span>
          <h3 className="text-sm sm:text-base font-bold text-[#071426] group-hover:text-[#1E90FF] transition-colors truncate">
            {sector.name}
          </h3>
          <p className="text-[11px] sm:text-xs text-[#475569] truncate leading-snug">
            {sector.caption}
          </p>
        </div>

        {/* Circular Action Arrow */}
        <div className="w-8 h-8 rounded-full bg-[#E8F4FE] text-[#1E90FF] group-hover:bg-[#1E90FF] group-hover:text-white transition-all flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110">
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}

export function BusinessPortfolio() {
  return (
    <section id="businesses" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F5F9FD] via-[#F8FBFE] to-white relative overflow-hidden">
      {/* Decorative background watermark and glows */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-[#87CEEB]/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-10 w-[600px] h-[600px] bg-[#1E90FF]/10 rounded-full blur-3xl" />
        {/* Subtle decorative curved background typography */}
        <div className="absolute -top-10 right-8 text-[180px] sm:text-[220px] font-black tracking-tighter text-[#1E90FF]/[0.025] leading-none select-none pointer-events-none">
          RC
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tag Indicators */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <span className="text-[#1E90FF] font-bold text-sm tracking-wide">
              03
            </span>
            <span className="text-[#1E90FF] font-bold text-xs uppercase tracking-widest">
              Our Businesses
            </span>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <span className="text-[#475569] font-semibold text-xs uppercase tracking-wider">
              Diverse Industries &bull; Stronger Together
            </span>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071426] tracking-tight leading-[1.15]">
              Our <span className="text-[#1E90FF]">Business Portfolio</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base lg:text-lg text-[#475569] leading-relaxed">
              Seven diverse business sectors working together to create value,
              opportunities and a brighter tomorrow.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/businesses"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1E90FF] hover:bg-[#1670C7] active:bg-[#0F5CA8] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 group"
            >
              <span>Explore All Businesses</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Cards Row 1: 4 Sectors (Healthcare, Energy, Education, Food & Hospitality) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-5 sm:mb-6">
          {topSectors.map((sector) => (
            <SectorCard
              key={sector.id}
              sector={sector}
              aspectRatio="aspect-[16/10]"
            />
          ))}
        </div>

        {/* Cards Row 2: 3 Sectors (Entertainment, Travel, Digital & Services) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {bottomSectors.map((sector) => (
            <SectorCard
              key={sector.id}
              sector={sector}
              aspectRatio="aspect-[16/9]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
