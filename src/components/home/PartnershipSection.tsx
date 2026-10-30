"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Handshake,
  TrendingUp,
  Lightbulb,
  Users,
  ArrowRight,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import confetti from "canvas-confetti";

export function PartnershipSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    partnershipType: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required.";
    if (!formData.organization.trim())
      errs.organization = "Organization / Company name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required.";
    }
    if (!formData.partnershipType) {
      errs.partnershipType = "Please select a partnership type.";
    }
    if (!formData.message.trim()) {
      errs.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch {
      setErrors({ form: "An error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const pillars = [
    {
      icon: <Handshake className="w-5 h-5 text-[#0088EB]" strokeWidth={1.8} />,
      title: "Strategic Collaboration",
      description: "Partner with us to explore new markets and opportunities.",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#0088EB]" strokeWidth={1.8} />,
      title: "Shared Growth",
      description: "Combine strengths to create sustainable value.",
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-[#0088EB]" strokeWidth={1.8} />,
      title: "Innovation Together",
      description: "Work on new ideas and solutions for real-world impact.",
    },
    {
      icon: <Users className="w-5 h-5 text-[#0088EB]" strokeWidth={1.8} />,
      title: "Positive Communities",
      description: "Build stronger communities and a brighter future together.",
    },
  ];

  return (
    <section id="partnership" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Narrative + 4 Pillars + Campus Photo (Col 1-5) */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              {/* 08 PARTNERSHIP */}
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="text-sm font-extrabold text-[#0088EB]">08</span>
                <span className="text-xs font-bold text-[#0088EB] tracking-[0.2em] uppercase">
                  PARTNERSHIP
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.12]">
                <span className="text-[#0D1829] block">Let’s Build a</span>
                <span className="text-[#0088EB] block">Stronger Tomorrow</span>
              </h2>

              {/* Subtitle */}
              <p className="mt-3.5 text-sm sm:text-[15px] text-slate-500 leading-relaxed font-normal max-w-lg">
                We collaborate with partners, businesses and organizations to create
                new opportunities, drive innovation and make a positive impact together.
              </p>

              {/* 4 Feature Cards (2x2 Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-7">
                {pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-4.5 rounded-2xl bg-white border border-slate-100/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_20px_rgba(0,136,235,0.07)] transition-all flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#EBF5FF] flex items-center justify-center shrink-0">
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Corporate Campus Photo with curved styling */}
            <div className="relative w-full aspect-[2048/768] min-h-[180px] sm:min-h-[210px] lg:min-h-[220px] rounded-2xl sm:rounded-3xl overflow-hidden mt-7 shadow-sm border border-slate-100 group">
              <Image
                src="/images/partnership/campus.webp"
                alt="RC Group Corporate Campus"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>

          {/* ========================================================= */}
          {/* EXPANDED CONTACT FORM COLUMN (Col 6-12)                   */}
          {/* ========================================================= */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl sm:rounded-[32px] p-6 sm:p-8 xl:p-10 border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)] relative z-10">
              {/* Form Title Area */}
              <div className="mb-6">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0088EB] block mb-1.5">
                  PARTNER WITH US
                </span>
                <h3 className="text-2xl sm:text-3xl xl:text-4xl font-black text-slate-900 leading-snug tracking-tight">
                  Get in <span className="text-[#0088EB]">Touch</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-1.5 max-w-xl">
                  Share your details and our team will connect with you to explore partnership opportunities.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Enquiry Submitted Successfully
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Our partnership desk will reach out to{" "}
                    <strong className="text-[#0088EB]">{formData.email}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: "",
                        organization: "",
                        email: "",
                        phone: "",
                        partnershipType: "",
                        message: "",
                      });
                    }}
                    className="px-6 py-3 rounded-xl bg-[#0088EB] text-white text-xs sm:text-sm font-semibold hover:bg-[#0077D4] transition-colors shadow-sm"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Row 1: Full Name & Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        autoComplete="name"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Enter your full name"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50/70 border text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0088EB]/30 transition-all min-h-[46px] ${
                          errors.fullName ? "border-rose-400" : "border-slate-200"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-rose-500 text-xs mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Organization / Company */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                        Organization / Company <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        autoComplete="organization"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({ ...formData, organization: e.target.value })
                        }
                        placeholder="Enter your company name"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50/70 border text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0088EB]/30 transition-all min-h-[46px] ${
                          errors.organization ? "border-rose-400" : "border-slate-200"
                        }`}
                      />
                      {errors.organization && (
                        <p className="text-rose-500 text-xs mt-1">{errors.organization}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email Address & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Address */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="Enter your email address"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50/70 border text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0088EB]/30 transition-all min-h-[46px] ${
                          errors.email ? "border-rose-400" : "border-slate-200"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-rose-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone Number with India flag +91 */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <div className="flex rounded-xl bg-slate-50/70 border border-slate-200 overflow-hidden focus-within:bg-white focus-within:ring-2 focus-within:ring-[#0088EB]/30 focus-within:border-transparent transition-all min-h-[46px]">
                        <div className="flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-100/60 border-r border-slate-200 text-xs font-medium text-slate-700 shrink-0">
                          <span className="text-base leading-none">🇮🇳</span>
                          <span>+91</span>
                          <ChevronDown className="w-3 h-3 text-slate-400" />
                        </div>
                        <input
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="Enter your phone number"
                          className="w-full px-3.5 py-2.5 bg-transparent text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-rose-500 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Nature of Partnership */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                      Nature of Partnership <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={formData.partnershipType}
                        onChange={(e) =>
                          setFormData({ ...formData, partnershipType: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50/70 border text-base sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0088EB]/30 transition-all appearance-none cursor-pointer pr-10 min-h-[46px] ${
                          errors.partnershipType ? "border-rose-400" : "border-slate-200"
                        }`}
                      >
                        <option value="">Select partnership type</option>
                        <option value="Commercial Solar & Energy EPC">Commercial Solar &amp; Energy EPC</option>
                        <option value="Healthcare & Pharmaceuticals">Healthcare &amp; Pharmaceuticals</option>
                        <option value="Education & Academic Initiatives">Education &amp; Academic Initiatives</option>
                        <option value="Food & Hospitality Franchising">Food &amp; Hospitality Franchising</option>
                        <option value="Entertainment & Active Recreation">Entertainment &amp; Active Recreation</option>
                        <option value="Digital Acceleration (GrowPhil)">Digital Acceleration (GrowPhil)</option>
                        <option value="General Strategic Alliance">General Strategic Alliance</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                    {errors.partnershipType && (
                      <p className="text-rose-500 text-xs mt-1">{errors.partnershipType}</p>
                    )}
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your business and how you would like to collaborate with us."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50/70 border text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0088EB]/30 resize-none transition-all ${
                        errors.message ? "border-rose-400" : "border-slate-200"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-rose-500 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 rounded-xl sm:rounded-2xl bg-[#0088EB] hover:bg-[#0077D4] text-white font-bold text-sm sm:text-base shadow-[0_6px_20px_rgba(0,136,235,0.35)] hover:shadow-[0_8px_25px_rgba(0,136,235,0.45)] transition-all flex items-center justify-center gap-2 group mt-2"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Enquiry"}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PartnershipSection;
