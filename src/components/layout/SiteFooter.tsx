"use client";

import React from "react";
import Link from "next/link";
import { RCLogo } from "@/components/ui/RCLogo";
import { businessSectors } from "@/data/business-sectors";
import { ventures } from "@/data/ventures";
import { contactDetails, navigationItems } from "@/data/site";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  ChevronRight,
} from "lucide-react";
import {
  LinkedInIcon,
  TwitterIcon,
  InstagramIcon,
  YouTubeIcon,
  FacebookIcon,
} from "@/components/ui/SocialIcons";

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071426] text-white border-t border-slate-800 relative z-20">
      {/* Top Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#019FF9] via-sky-400 to-[#019FF9]" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column (Col 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <RCLogo theme="dark" />
            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              A diversified group of companies committed to creating sustainable
              value across healthcare, clean energy, education, food &
              hospitality, active entertainment, travel, and digital services.
            </p>

            {/* Social Channels - 44px mobile touch targets */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={contactDetails.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-slate-800/80 hover:bg-[#019FF9] active:bg-[#0089DB] text-slate-300 hover:text-white flex items-center justify-center border border-slate-700/60 transition-all hover:scale-105"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a
                href={contactDetails.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-slate-800/80 hover:bg-[#019FF9] active:bg-[#0089DB] text-slate-300 hover:text-white flex items-center justify-center border border-slate-700/60 transition-all hover:scale-105"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a
                href={contactDetails.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-slate-800/80 hover:bg-[#019FF9] active:bg-[#0089DB] text-slate-300 hover:text-white flex items-center justify-center border border-slate-700/60 transition-all hover:scale-105"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={contactDetails.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-slate-800/80 hover:bg-[#019FF9] active:bg-[#0089DB] text-slate-300 hover:text-white flex items-center justify-center border border-slate-700/60 transition-all hover:scale-105"
                aria-label="YouTube"
              >
                <YouTubeIcon className="w-5 h-5" />
              </a>
              <a
                href={contactDetails.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-slate-800/80 hover:bg-[#019FF9] active:bg-[#0089DB] text-slate-300 hover:text-white flex items-center justify-center border border-slate-700/60 transition-all hover:scale-105"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold tracking-wider uppercase text-white border-l-2 border-[#019FF9] pl-3">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-[#019FF9] text-sm flex items-center gap-1.5 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#019FF9] transition-transform group-hover:translate-x-1" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact#enquiry"
                  className="text-slate-400 hover:text-[#019FF9] text-sm flex items-center gap-1.5 transition-colors group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#019FF9] transition-transform group-hover:translate-x-1" />
                  <span>Partnerships</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Sectors (Col 7-9) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold tracking-wider uppercase text-white border-l-2 border-[#019FF9] pl-3">
              Our Sectors
            </h3>
            <ul className="space-y-2.5">
              {businessSectors.map((sector) => (
                <li key={sector.slug}>
                  <Link
                    href={`/businesses/${sector.slug}`}
                    className="text-slate-400 hover:text-[#019FF9] text-sm flex items-center gap-1.5 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#019FF9] transition-transform group-hover:translate-x-1" />
                    <span>{sector.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold tracking-wider uppercase text-white border-l-2 border-[#019FF9] pl-3">
              Contact Us
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#019FF9] mt-0.5 shrink-0" />
                <span>{contactDetails.headquarters}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#019FF9] shrink-0" />
                <a
                  href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {contactDetails.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#019FF9] shrink-0" />
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="hover:text-white transition-colors truncate"
                >
                  {contactDetails.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#019FF9] mt-0.5 shrink-0" />
                <span>{contactDetails.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ventures Ticker / Ribbon */}
        <div className="mt-14 pt-8 border-t border-slate-800/80">
          <p className="text-xs font-bold tracking-wider uppercase text-slate-400 mb-4">
            Our Portfolio Ventures
          </p>
          <div className="flex flex-wrap items-center gap-2.5">
            {ventures.map((venture) => (
              <Link
                key={venture.id}
                href={`/businesses/${venture.sectorSlug}`}
                className="px-3.5 py-1.5 rounded-full bg-slate-900/80 hover:bg-[#019FF9]/20 hover:border-[#019FF9] border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-all"
              >
                {venture.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Sub-Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} RC Group of Companies. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-[#019FF9] transition-colors">
              About Us
            </Link>
            <Link href="/businesses" className="hover:text-[#019FF9] transition-colors">
              Portfolio
            </Link>
            <Link href="/contact" className="hover:text-[#019FF9] transition-colors">
              Inquiries
            </Link>
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 hover:bg-[#019FF9] text-slate-300 hover:text-white border border-slate-700 transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
