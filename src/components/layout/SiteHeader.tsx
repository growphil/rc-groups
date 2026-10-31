"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RCLogo } from "@/components/ui/RCLogo";
import { navigationItems } from "@/data/site";
import { Menu, X, ArrowRight, Search } from "lucide-react";
import { SearchModal } from "@/components/ui/SearchModal";

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        rafId = null;
        setIsHeaderVisible(true);

        if (window.scrollY > 20) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const showHeader = isHeaderVisible || isMobileMenuOpen || pathname !== "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          showHeader
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        } ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#DCE8F2] py-3.5"
            : "bg-white/90 backdrop-blur-sm py-4 border-b border-[#DCE8F2]/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <RCLogo />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navigationItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3.5 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-[#1E90FF] bg-[#F5F9FD] font-bold shadow-xs"
                        : "text-[#0B1528] hover:text-[#00CED1] hover:bg-[#F5F9FD]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Circular Search Trigger */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#071426] hover:text-[#1E90FF] bg-[#F5F9FD] hover:bg-[#E8F4FE] border border-[#DCE8F2] shadow-xs hover:border-[#1E90FF]/40 transition-all cursor-pointer"
                aria-label="Search sectors and ventures"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Get in Touch CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E90FF] hover:bg-[#1670C7] active:bg-[#0F5CA8] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center text-slate-800 hover:bg-slate-100 active:bg-slate-200 border border-[#DCE8F2] transition-colors"
                aria-label="Search sectors and ventures"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center text-slate-800 hover:bg-slate-100 active:bg-slate-200 border border-[#DCE8F2] transition-colors"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Down Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 top-[73px] bg-slate-950/40 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="bg-white border-b border-[#DCE8F2] shadow-xl px-6 py-8 flex flex-col justify-between max-h-[calc(100dvh-73px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">
                Navigation
              </div>
              <div className="space-y-1.5">
                {navigationItems.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3.5 min-h-[48px] rounded-xl text-base font-semibold transition-all ${
                        isActive
                          ? "bg-[#F5F9FD] text-[#1E90FF] font-bold border-l-4 border-[#1E90FF]"
                          : "text-slate-800 hover:text-[#00CED1] hover:bg-slate-50 active:bg-slate-100"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-4 h-4 opacity-50" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-4">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full min-h-[48px] py-3.5 px-4 rounded-xl bg-[#1E90FF] hover:bg-[#1670C7] active:bg-[#0F5CA8] text-white font-bold text-center shadow-md transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-center text-xs text-slate-500">
                RC Group of Companies &copy; {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Accessible Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
