"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function FeaturedVentures() {
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
      transitionDelay: isVisible ? `${80 + index * 85}ms` : "0ms",
    };
  };

  const getCardAnimClass = () => {
    if (isReducedMotion) return "";
    return `transition-all duration-700 ease-out will-change-transform ${
      isVisible
        ? "opacity-100 translate-y-0 translate-x-0"
        : "opacity-0 translate-y-12 translate-x-6"
    }`;
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-center justify-between mb-10 lg:mb-12 gap-6 lg:gap-8 transition-all duration-700 ease-out ${
            isVisible || isReducedMotion
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          {/* Left: Section Tag & Main Headline */}
          <div className="shrink-0">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs sm:text-sm font-bold text-[#1E90FF]">05</span>
              <span className="text-[11px] sm:text-xs font-bold text-[#1E90FF] tracking-[0.18em] uppercase">
                FEATURED VENTURES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.12]">
              <span className="text-[#0D1829] block">Businesses Turning</span>
              <span className="text-[#1E90FF] block">Purpose Into Progress</span>
            </h2>
          </div>

          {/* Middle: Description text */}
          <div className="lg:max-w-md xl:max-w-lg">
            <p className="text-sm sm:text-[15px] text-slate-500 leading-relaxed font-normal">
              Our ventures span multiple industries, united by a shared purpose to create value, opportunities and a better tomorrow.
            </p>
          </div>

          {/* Right: View All Businesses CTA */}
          <div className="shrink-0">
            <Link
              href="/businesses"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1E90FF] hover:bg-[#1670C7] text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all group"
            >
              <span>View All Businesses</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 10-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-5">
          {/* TOP ROW */}

          {/* 1. Healthcare: RC Pharmaceuticals (col-span-4) */}
          <div
            className={`lg:col-span-4 bg-white rounded-2xl border border-slate-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(30,144,255,0.09)] transition-all duration-300 flex flex-col justify-between overflow-hidden group ${getCardAnimClass()}`}
            style={getCardAnimStyle(0)}
          >
            <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-slate-50">
              <Image
                src="/images/Businesses Turning/sector-healthcare.jpg"
                alt="Healthcare - RC Pharmaceuticals"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded text-[10px] font-extrabold text-[#1E90FF] tracking-wider uppercase shadow-xs z-10">
                HEALTHCARE
              </div>
            </div>

            <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
              <div className="flex items-start gap-4">
                {/* Logo Box from public/images/Logo/ */}
                <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex items-center justify-center p-2">
                  <Image
                    src="/images/Logo/RC Pharmaceuticals.webp"
                    alt="RC Pharmaceuticals Logo"
                    width={90}
                    height={80}
                    className="object-contain max-h-16 w-auto"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#1E90FF] transition-colors leading-snug">
                    RC Pharmaceuticals
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                    Quality healthcare solutions for a healthier tomorrow. Focused on trusted medicines and better public health.
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-auto">
                <Link
                  href="/businesses/healthcare"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E90FF] group-hover:text-[#1670C7] transition-colors"
                >
                  <span>Explore Venture</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* 2. Energy: Kyra Green Energy Solutions & RC Solars (col-span-3) */}
          <div
            className={`lg:col-span-3 bg-white rounded-2xl border border-slate-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(30,144,255,0.09)] transition-all duration-300 flex flex-col justify-between overflow-hidden group ${getCardAnimClass()}`}
            style={getCardAnimStyle(1)}
          >
            <div className="relative w-full h-36 sm:h-40 overflow-hidden bg-slate-50">
              <Image
                src="/images/Businesses Turning/hero-solar-landscape.jpg"
                alt="Energy - Kyra Green Energy Solutions & RC Solars"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded text-[10px] font-extrabold text-[#00CED1] tracking-wider uppercase shadow-xs z-10">
                ENERGY
              </div>
            </div>

            <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
              <div>
                {/* Dual Logos from public/images/Logo/ */}
                <div className="h-10 flex items-center gap-3 mb-3">
                  <Image
                    src="/images/Logo/Kyra Green Energy Solutions.png"
                    alt="Kyra Green Energy Solutions Logo"
                    width={110}
                    height={36}
                    className="object-contain max-h-8 w-auto"
                  />
                  <div className="h-6 w-[1px] bg-slate-200/80" />
                  <Image
                    src="/images/Logo/RC Solars.webp"
                    alt="RC Solars Logo"
                    width={90}
                    height={36}
                    className="object-contain max-h-8 w-auto"
                  />
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#1E90FF] transition-colors leading-snug">
                  Kyra Green Energy Solutions & RC Solars
                </h3>
                <p className="mt-1.5 text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                  Clean and sustainable energy solutions for homes, businesses and communities.
                </p>
              </div>

              <div className="pt-4 mt-auto">
                <Link
                  href="/businesses/energy"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E90FF] group-hover:text-[#1670C7] transition-colors"
                >
                  <span>Explore Venture</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* 3. Education: RC Academy & Skilltalento (col-span-3) */}
          <div
            className={`lg:col-span-3 bg-white rounded-2xl border border-slate-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(30,144,255,0.09)] transition-all duration-300 flex flex-col justify-between overflow-hidden group ${getCardAnimClass()}`}
            style={getCardAnimStyle(2)}
          >
            <div className="relative w-full h-36 sm:h-40 overflow-hidden bg-slate-50">
              <Image
                src="/images/Businesses Turning/sector-education.jpg"
                alt="Education - RC Academy & Skilltalento"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded text-[10px] font-extrabold text-[#1E90FF] tracking-wider uppercase shadow-xs z-10">
                EDUCATION
              </div>
            </div>

            <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
              <div>
                {/* Dual Logos from public/images/Logo/ */}
                <div className="h-10 flex items-center gap-3 mb-3">
                  <Image
                    src="/images/Logo/RC Academy.webp"
                    alt="RC Academy Logo"
                    width={100}
                    height={36}
                    className="object-contain max-h-8 w-auto"
                  />
                  <div className="h-6 w-[1px] bg-slate-200/80" />
                  <Image
                    src="/images/Logo/Skilltalento.webp"
                    alt="Skilltalento Logo"
                    width={100}
                    height={36}
                    className="object-contain max-h-8 w-auto"
                  />
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#1E90FF] transition-colors leading-snug">
                  RC Academy & Skilltalento
                </h3>
                <p className="mt-1.5 text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                  Education and skill development initiatives to empower the next generation.
                </p>
              </div>

              <div className="pt-4 mt-auto">
                <Link
                  href="/businesses/education"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E90FF] group-hover:text-[#1670C7] transition-colors"
                >
                  <span>Explore Venture</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* BOTTOM ROW (5 cards x col-span-2) */}

          {/* 4. Food: Kyra Food Street (col-span-2) */}
          <div
            className={`lg:col-span-2 bg-white rounded-2xl border border-slate-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(30,144,255,0.09)] transition-all duration-300 flex flex-col justify-between overflow-hidden group ${getCardAnimClass()}`}
            style={getCardAnimStyle(3)}
          >
            <div className="relative w-full h-32 sm:h-36 overflow-hidden bg-slate-50">
              <Image
                src="/images/Businesses Turning/sector-food-hospitality.jpg"
                alt="Food - Kyra Food Street"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 50vw, 20vw"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-extrabold text-[#1E90FF] tracking-wider uppercase shadow-xs z-10">
                FOOD
              </div>
            </div>

            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                {/* Logo from public/images/Logo/ */}
                <div className="h-9 flex items-center mb-2.5">
                  <Image
                    src="/images/Logo/Kyra Food Street.jpeg"
                    alt="Kyra Food Street Logo"
                    width={100}
                    height={36}
                    className="object-contain max-h-8 w-auto rounded"
                  />
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#1E90FF] transition-colors leading-snug">
                  Kyra Food Street
                </h3>
                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                  Great food, good times and memorable experiences for everyone.
                </p>
              </div>

              <div className="pt-4 mt-auto">
                <Link
                  href="/businesses/food-hospitality"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E90FF] group-hover:text-[#1670C7] transition-colors"
                >
                  <span>Explore Venture</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* 5. Food: RC Rice Mandi (col-span-2) */}
          <div
            className={`lg:col-span-2 bg-white rounded-2xl border border-slate-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(30,144,255,0.09)] transition-all duration-300 flex flex-col justify-between overflow-hidden group ${getCardAnimClass()}`}
            style={getCardAnimStyle(4)}
          >
            <div className="relative w-full h-32 sm:h-36 overflow-hidden bg-slate-50">
              <Image
                src="/images/featured/rice-mandi.jpg"
                alt="Food - RC Rice Mandi"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 50vw, 20vw"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-extrabold text-[#1E90FF] tracking-wider uppercase shadow-xs z-10">
                FOOD
              </div>
            </div>

            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#1E90FF] transition-colors leading-snug">
                  RC Rice Mandi
                </h3>
                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                  Quality rice and food products for a stronger food ecosystem.
                </p>
              </div>

              <div className="pt-4 mt-auto">
                <Link
                  href="/businesses/food-hospitality"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E90FF] group-hover:text-[#1670C7] transition-colors"
                >
                  <span>Explore Venture</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* 6. Entertainment: Flyout Trampoline & Kyra Party Hall (col-span-2) */}
          <div
            className={`lg:col-span-2 bg-white rounded-2xl border border-slate-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(30,144,255,0.09)] transition-all duration-300 flex flex-col justify-between overflow-hidden group ${getCardAnimClass()}`}
            style={getCardAnimStyle(5)}
          >
            <div className="relative w-full h-32 sm:h-36 overflow-hidden bg-slate-50">
              <Image
                src="/images/Businesses Turning/sector-entertainment.jpg"
                alt="Entertainment - Flyout Trampoline & Kyra Party Hall"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 50vw, 20vw"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-extrabold text-[#1E90FF] tracking-wider uppercase shadow-xs z-10">
                ENTERTAINMENT
              </div>
            </div>

            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                {/* Logo from public/images/Logo/ */}
                <div className="h-9 flex items-center mb-2.5">
                  <Image
                    src="/images/Logo/Flyout Trampoline.webp"
                    alt="Flyout Trampoline Logo"
                    width={130}
                    height={36}
                    className="object-contain max-h-8 w-auto"
                  />
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#1E90FF] transition-colors leading-snug">
                  Flyout Trampoline & Kyra Party Hall
                </h3>
                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                  Recreation, fun and event experiences for families and communities.
                </p>
              </div>

              <div className="pt-4 mt-auto">
                <Link
                  href="/businesses/entertainment"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E90FF] group-hover:text-[#1670C7] transition-colors"
                >
                  <span>Explore Venture</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* 7. Travel: Affo Holidays (col-span-2) */}
          <div
            className={`lg:col-span-2 bg-white rounded-2xl border border-slate-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(30,144,255,0.09)] transition-all duration-300 flex flex-col justify-between overflow-hidden group ${getCardAnimClass()}`}
            style={getCardAnimStyle(6)}
          >
            <div className="relative w-full h-32 sm:h-36 overflow-hidden bg-slate-50">
              <Image
                src="/images/Businesses Turning/sector-travel.jpg"
                alt="Travel - Affo Holidays"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 50vw, 20vw"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-extrabold text-[#1E90FF] tracking-wider uppercase shadow-xs z-10">
                TRAVEL
              </div>
            </div>

            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                {/* Logo from public/images/Logo/ */}
                <div className="h-9 flex items-center mb-2.5">
                  <Image
                    src="/images/Logo/Affo Holidays.webp"
                    alt="Affo Holidays Logo"
                    width={120}
                    height={36}
                    className="object-contain max-h-8 w-auto"
                  />
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#1E90FF] transition-colors leading-snug">
                  Affo Holidays
                </h3>
                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                  Creating memorable travel experiences across destinations.
                </p>
              </div>

              <div className="pt-4 mt-auto">
                <Link
                  href="/businesses/travel"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E90FF] group-hover:text-[#1670C7] transition-colors"
                >
                  <span>Explore Venture</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* 8. Digital & Services: Medingen & GrowPhil (col-span-2) */}
          <div
            className={`lg:col-span-2 bg-white rounded-2xl border border-slate-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(30,144,255,0.09)] transition-all duration-300 flex flex-col justify-between overflow-hidden group ${getCardAnimClass()}`}
            style={getCardAnimStyle(7)}
          >
            <div className="relative w-full h-32 sm:h-36 overflow-hidden bg-slate-50">
              <Image
                src="/images/Businesses Turning/sector-digital.jpg"
                alt="Digital & Services - Medingen & GrowPhil"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 50vw, 20vw"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-extrabold text-[#00CED1] tracking-wider uppercase shadow-xs z-10">
                DIGITAL &amp; SERVICES
              </div>
            </div>

            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                {/* Dual Logos from public/images/Logo/ */}
                <div className="h-9 flex items-center gap-2.5 mb-2.5">
                  <Image
                    src="/images/Logo/Medingen.png"
                    alt="Medingen Logo"
                    width={90}
                    height={32}
                    className="object-contain max-h-7 w-auto"
                  />
                  <div className="h-5 w-[1px] bg-slate-200/80" />
                  <Image
                    src="/images/Logo/GrowPhil.jpeg"
                    alt="GrowPhil Logo"
                    width={90}
                    height={32}
                    className="object-contain max-h-7 w-auto rounded"
                  />
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#1E90FF] transition-colors leading-snug">
                  Medingen & GrowPhil
                </h3>
                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                  Digital solutions for healthcare and business growth.
                </p>
              </div>

              <div className="pt-4 mt-auto">
                <Link
                  href="/businesses/digital-services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E90FF] group-hover:text-[#1670C7] transition-colors"
                >
                  <span>Explore Venture</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
