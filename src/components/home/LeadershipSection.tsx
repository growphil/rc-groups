"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/SocialIcons";
import { leadershipTeam } from "@/data/leadership";

export function LeadershipSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const getCardAnimStyle = (index: number) => {
    if (isReducedMotion) return {};
    return {
      transitionDelay: isVisible ? `${100 + index * 90}ms` : "0ms",
    };
  };

  const getCardAnimClass = () => {
    if (isReducedMotion) return "";
    return `transition-all duration-700 ease-out will-change-transform ${
      isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10"
    }`;
  };

  return (
    <section
      ref={sectionRef}
      id="leadership"
      className="py-20 lg:py-28 bg-[#F8FBFF] relative overflow-hidden"
    >
      {/* Reusable SVG Gradient Definitions for Card Edge Waves */}
      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <defs>
          <linearGradient id="leadershipTopWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#019FF9" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#0088EB" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.30" />
          </linearGradient>
          <linearGradient id="leadershipBottomWaveSoft" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#019FF9" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="leadershipBottomWaveVibrant" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0077D4" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#019FF9" stopOpacity="0.45" />
          </linearGradient>
        </defs>
      </svg>

      {/* Ambient background glow accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-[#EBF5FF] to-transparent rounded-full blur-3xl pointer-events-none -z-0 opacity-60" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-[#EBF5FF] to-transparent rounded-full blur-3xl pointer-events-none -z-0 opacity-60" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6 transition-all duration-700 ease-out ${
            isVisible || isReducedMotion ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DCE8F2] text-xs font-bold text-[#019FF9] uppercase tracking-wider mb-3.5 shadow-xs">
              Our Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0F172A] tracking-tight leading-tight">
              Leadership with <span className="text-[#019FF9]">Purpose</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Guided by visionary leadership with deep commitment to ethical values, sustainable innovation, and long-term societal progress.
            </p>
          </div>

          <div>
            <Link
              href="/leadership"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#019FF9] hover:bg-[#0089DB] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Meet Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4 Executive Portrait Cards (Matching Reference Design) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-7">
          {leadershipTeam.map((leader, index) => (
            <div
              key={leader.id}
              className={`relative bg-white rounded-[28px] sm:rounded-[30px] overflow-hidden border border-[#DCEBFA] shadow-[0_12px_36px_-6px_rgba(1,159,249,0.12),0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_22px_48px_-10px_rgba(1,159,249,0.22),0_6px_20px_rgba(0,0,0,0.06)] hover:border-[#019FF9]/40 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group ${getCardAnimClass()}`}
              style={getCardAnimStyle(index)}
            >
              {/* Full Card Link Trigger */}
              <Link
                href="/leadership"
                className="absolute inset-0 z-10"
                aria-label={`Read full profile of ${leader.name}, ${leader.role}`}
              />

              {/* Upper Area: Portrait Photography & Decorative Waves */}
              <div className="relative w-full h-[350px] sm:h-[370px] lg:h-[380px] bg-slate-100 overflow-hidden">
                {/* Portrait Photo */}
                <Image
                  src={leader.image}
                  alt={`${leader.name} - ${leader.role}`}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                  priority={index < 2}
                />

                {/* Decorative Wave Accent: Top-Left Corner */}
                <div className="absolute top-0 left-0 w-20 h-20 sm:w-24 sm:h-24 pointer-events-none z-10 overflow-hidden">
                  <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <path
                      d="M 0 0 L 85 0 C 70 20 45 35 30 55 C 15 75 0 95 0 105 Z"
                      fill="url(#leadershipTopWaveGrad)"
                    />
                  </svg>
                </div>

                {/* LinkedIn Badge Button: Top-Right Corner */}
                {leader.linkedIn && (
                  <a
                    href={leader.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-xl bg-white shadow-[0_4px_14px_rgba(0,0,0,0.09)] flex items-center justify-center text-[#019FF9] hover:bg-[#019FF9] hover:text-white transition-all duration-300 z-30 group/in"
                    aria-label={`${leader.name} LinkedIn Profile`}
                  >
                    <LinkedInIcon className="w-5 h-5 fill-current transition-colors" />
                  </a>
                )}

                {/* Decorative Wave Accent: Bottom-Right Wave (sweeping behind white panel) */}
                <div className="absolute bottom-0 right-0 w-36 h-28 sm:w-44 sm:h-36 pointer-events-none z-10 overflow-hidden">
                  <svg
                    viewBox="0 0 160 125"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <path
                      d="M 160 5 C 130 35 110 55 80 75 C 45 95 15 110 0 125 H 160 Z"
                      fill="url(#leadershipBottomWaveSoft)"
                    />
                    <path
                      d="M 160 30 C 135 55 115 70 85 85 C 55 100 25 112 10 125 H 160 Z"
                      fill="url(#leadershipBottomWaveVibrant)"
                    />
                  </svg>
                </div>
              </div>

              {/* Lower Area: White Profile Information Panel Overlapping Portrait */}
              <div className="relative z-20 -mt-7 bg-white rounded-t-[26px] p-5 sm:p-7 shadow-[0_-4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between flex-1">
                <div>
                  {/* Short Blue Accent Line */}
                  <div className="w-8 h-1 bg-[#019FF9] rounded-full mb-3.5" />

                  {/* Leader Name */}
                  <h3 className="text-2xl sm:text-[26px] font-extrabold text-[#10263D] tracking-tight leading-snug group-hover:text-[#019FF9] transition-colors">
                    {leader.name}
                  </h3>

                  {/* Professional Designation */}
                  <p className="text-sm sm:text-base font-medium text-[#64748B] mt-1.5 leading-normal">
                    {leader.role}
                  </p>
                </div>

                {/* "Read Full Profile" Action Row with Blue Circle Arrow Button */}
                <div className="mt-6 pt-1 flex items-center justify-between">
                  <span className="text-sm sm:text-[15px] font-bold text-[#019FF9] group-hover:text-[#0088EB] transition-colors">
                    Read Full Profile
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#019FF9] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(1,159,249,0.35)] group-hover:scale-110 group-hover:bg-[#0088EB] transition-all duration-300 shrink-0">
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Callout */}
        <div
          className={`mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#F0F8FF] via-white to-[#F0F8FF] border border-[#DCE8F2] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-sm transition-all duration-700 ease-out ${
            isVisible || isReducedMotion ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Great things are built <span className="text-[#019FF9]">together</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Connect with our leadership to explore institutional alliances, joint ventures, and sustainable expansion.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#071426] hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shrink-0 transition-colors shadow-sm"
          >
            <span>Partner with Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LeadershipSection;
