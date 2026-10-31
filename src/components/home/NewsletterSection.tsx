"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please provide a valid email address.");
      return;
    }
    setError("");
    setIsSubscribed(true);
  };

  return (
    <section className="bg-white py-12 border-t border-[#DCE8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#F5F9FD] via-white to-[#F5F9FD] border border-[#DCE8F2] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text */}
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DCE8F2] text-xs font-bold text-[#1E90FF] uppercase tracking-wider mb-2">
              <Mail className="w-3.5 h-3.5" />
              <span>Stay Connected</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#071426] tracking-tight">
              Get the latest updates from <span className="text-[#1E90FF]">RC Group</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              News, milestones and opportunities, delivered straight to your inbox.
            </p>
          </div>

          {/* Form */}
          <div className="w-full lg:max-w-md">
            {isSubscribed ? (
              <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 px-5 py-3 rounded-2xl border border-emerald-200 text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Thank you! You are subscribed to RC Group updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-1.5 sm:p-2 rounded-2xl sm:rounded-full bg-white border border-[#DCE8F2] shadow-sm focus-within:ring-2 focus-within:ring-[#1E90FF]/40 focus-within:border-[#1E90FF]">
                  <input
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your corporate email address..."
                    className="w-full px-4 py-3 sm:py-2 text-base sm:text-sm text-slate-900 bg-transparent placeholder:text-slate-400 focus:outline-none min-h-[44px]"
                  />
                  <button
                    type="submit"
                    className="shrink-0 px-6 py-3 sm:py-2.5 rounded-xl sm:rounded-full bg-[#1E90FF] hover:bg-[#1670C7] active:bg-[#0F5CA8] text-white text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-2 min-h-[44px]"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                {error && <p className="text-rose-500 text-xs px-2 sm:px-4">{error}</p>}
                <p className="text-[11px] text-slate-400 px-3">
                  We respect your privacy. No spam, unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
