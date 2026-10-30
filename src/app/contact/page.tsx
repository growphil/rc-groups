"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import { contactDetails } from "@/data/site";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Corporate Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Your full name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required.";
    }
    if (!formData.message.trim()) {
      errs.message = "Message cannot be empty.";
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
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      confetti({ particleCount: 70, spread: 50, origin: { y: 0.8 } });
    } catch {
      setErrors({ form: "Error sending message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero Banner */}
      <section className="py-20 bg-gradient-to-b from-[#F5F9FD] to-white border-b border-[#DCE8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DCE8F2] text-xs font-bold text-[#1E90FF] uppercase tracking-wider mb-4">
              Get in Touch
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Contact &amp; <span className="text-[#1E90FF]">Partnership Inquiries</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              We welcome dialogue with investors, enterprise clients, community
              stakeholders, and prospective partners. Connect directly with our
              corporate desk.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Details & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Information Cards (Col 1-5) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-[#F5F9FD]/80 border border-[#DCE8F2] shadow-card space-y-6">
                <div>
                  <span className="text-xs font-bold text-[#1E90FF] uppercase tracking-wider">
                    Official Head Office
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">
                    RC Group of Companies
                  </h3>
                </div>

                <div className="space-y-4 pt-2 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#1E90FF] border border-[#DCE8F2] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Registered Office</p>
                      <p className="text-slate-600">{contactDetails.headquarters}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#1E90FF] border border-[#DCE8F2] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Direct Telephone</p>
                      <a
                        href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                        className="text-[#1E90FF] font-semibold hover:underline"
                      >
                        {contactDetails.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#1E90FF] border border-[#DCE8F2] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Executive Email</p>
                      <a
                        href={`mailto:${contactDetails.email}`}
                        className="text-[#1E90FF] font-semibold hover:underline"
                      >
                        {contactDetails.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#1E90FF] border border-[#DCE8F2] shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Office Working Hours</p>
                      <p className="text-slate-600">{contactDetails.workingHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Headquarters Visual Preview */}
              <div className="relative h-60 rounded-3xl overflow-hidden shadow-card border border-[#DCE8F2]">
                <Image
                  src="/images/corporate-headquarters.jpg"
                  alt="RC Towers Headquarters Campus"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
                  RC Towers Campus
                </span>
              </div>
            </div>

            {/* General Contact Form (Col 6-12) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#DCE8F2] shadow-elevated">
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1E90FF]">
                    Communication Desk
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                    Send Us an Inquiry
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Whether you have queries regarding a specific sector or venture, fill in the form below.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Message Dispatched
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you for contacting RC Group. A representative from our desk will connect with you at{" "}
                      <strong className="text-slate-900">{formData.email}</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          subject: "General Corporate Inquiry",
                          message: "",
                        });
                      }}
                      className="px-6 py-2.5 rounded-full bg-[#1E90FF] text-white text-xs font-bold hover:bg-[#1670C7] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Your full name"
                          className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#1E90FF]/40 ${
                            errors.name ? "border-rose-400" : "border-[#DCE8F2]"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-rose-500 text-[11px] mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+91..."
                          className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#1E90FF]/40 ${
                            errors.phone ? "border-rose-400" : "border-[#DCE8F2]"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-rose-500 text-[11px] mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@domain.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#1E90FF]/40 ${
                          errors.email ? "border-rose-400" : "border-[#DCE8F2]"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-rose-500 text-[11px] mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Inquiry Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-[#DCE8F2] text-sm text-slate-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#1E90FF]/40"
                      >
                        <option value="General Corporate Inquiry">General Corporate Inquiry</option>
                        <option value="Healthcare & Pharmaceuticals">Healthcare &amp; Pharmaceuticals</option>
                        <option value="Renewable Solar Energy EPC">Renewable Solar Energy (RC Solars)</option>
                        <option value="Education & RC Academy">Education (RC Academy)</option>
                        <option value="Travel Packages (Affo Holidays)">Travel Packages (Affo Holidays)</option>
                        <option value="Food & Hospitality Franchising">Food &amp; Hospitality (Kyra Food Street)</option>
                        <option value="Digital Tech Solutions (GrowPhil)">Digital Tech Solutions (GrowPhil)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Message <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Describe your enquiry..."
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#1E90FF]/40 resize-none ${
                          errors.message ? "border-rose-400" : "border-[#DCE8F2]"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-rose-500 text-[11px] mt-1">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#1E90FF] hover:bg-[#1670C7] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

