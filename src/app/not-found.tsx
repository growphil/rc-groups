import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import { businessSectors } from "@/data/business-sectors";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-4">
      <div className="max-w-xl text-center space-y-6">
        <span className="px-3.5 py-1.5 rounded-full bg-[#F0F8FF] text-[#019FF9] border border-[#DCE8F2] text-xs font-bold uppercase tracking-wider">
          404 &bull; Page Not Found
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Looking for an RC Group Sector or Page?
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          The page or sector URL you requested does not exist or has been relocated.
          Explore our seven business sectors or return to the homepage.
        </p>

        {/* Quick Links */}
        <div className="pt-2 flex flex-wrap justify-center gap-2">
          {businessSectors.map((sector) => (
            <Link
              key={sector.slug}
              href={`/businesses/${sector.slug}`}
              className="px-3 py-1.5 rounded-full bg-white hover:bg-[#F0F8FF] text-xs font-semibold text-slate-700 border border-[#DCE8F2] transition-colors"
            >
              {sector.name}
            </Link>
          ))}
        </div>

        <div className="pt-6 flex justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#019FF9] text-white font-bold text-sm hover:bg-[#008ee0] transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
