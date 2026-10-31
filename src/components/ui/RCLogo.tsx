import React from "react";
import Link from "next/link";
import Image from "next/image";

interface RCLogoProps {
  className?: string;
  theme?: "light" | "dark";
  showTagline?: boolean;
}

export function RCLogo({ className = "", theme = "light", showTagline = true }: RCLogoProps) {
  const isDark = theme === "dark";

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Official RC Monogram Logo */}
      <div
        className={`relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center shrink-0 rounded-xl transition-transform duration-300 group-hover:scale-105 ${
          isDark ? "bg-white p-1 shadow-sm" : ""
        }`}
      >
        <Image
          src="/images/Logo/RC Pharmaceuticals.webp"
          alt="RC Group of Companies"
          width={44}
          height={44}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`text-2xl font-[650] tracking-[-0.025em] font-sans ${
              isDark ? "text-white" : "text-[#071426]"
            }`}
          >
            RC
          </span>
          <span className="text-2xl font-[600] tracking-[-0.025em] font-sans text-[#1E90FF]">GROUP</span>
        </div>
        {showTagline && (
          <span
            className={`text-[10px] tracking-[0.22em] font-[500] uppercase font-sans mt-0.5 transition-colors ${
              isDark ? "text-slate-400 group-hover:text-[#87CEEB]" : "text-slate-500 group-hover:text-[#1E90FF]"
            }`}
          >
            OF COMPANIES
          </span>
        )}
      </div>
    </Link>
  );
}
