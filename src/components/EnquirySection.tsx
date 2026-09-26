"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronDown, MapPin } from "lucide-react";

interface EnquirySectionProps {
  onOpenBooking?: (details?: string) => void;
}

const LAWNS = [
  { name: "Buckingham Palace", sub: "35,000 Sq. Ft. · 5,000+ Guests" },
  { name: "Poolside Lawn",     sub: "15,000 Sq. Ft. · 1,200 Guests" },
  { name: "Vilas Lawn",        sub: "25,000 Sq. Ft. · 2,000 Guests" },
  { name: "Theme Lawn",        sub: "50,000 Sq. Ft. · 3,500+ Guests" },
];

export default function EnquirySection({ onOpenBooking }: EnquirySectionProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    property: "",
    query: "",
    agree: true,
  });
  const [submitted, setSubmitted] = useState(false);
  const [venueOpen, setVenueOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setVenueOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      if (onOpenBooking) {
        onOpenBooking(formData.property || "General Enquiry");
      }
    }, 1500);
  };

  const selectedLawn = LAWNS.find((l) => l.name === formData.property);

  return (
    <section id="enquire" className="w-full h-auto lg:h-screen lg:min-h-screen bg-[#fcfbf9] text-gray-900 border-t border-gray-200 overflow-hidden py-0">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 items-stretch">

        {/* Left Column: Form Controls */}
        <div className="lg:col-span-6 w-full h-full bg-[#fcfbf9] px-6 sm:px-10 lg:px-12 xl:px-16 py-8 lg:py-10 flex flex-col justify-center space-y-6">

          {/* Header Content */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#16a34a] block">
              ENQUIRE NOW
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-bold text-gray-900 leading-tight">
              Plan Your Perfect <span className="text-[#16a34a]">Celebration</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed pt-1 max-w-lg">
              Share a few details and our team will get in touch with you with the best options for your event.
            </p>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="p-6 bg-white border border-[#16a34a]/30 rounded-none text-center space-y-3 shadow-sm">
              <CheckCircle2 className="w-10 h-10 text-[#16a34a] mx-auto" />
              <h3 className="font-serif text-xl font-bold text-gray-900">Thank You for Reaching Out!</h3>
              <p className="text-xs text-gray-600">
                Our royal concierge desk will contact you shortly on {formData.mobile || "your phone"}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 pt-2 font-sans max-w-xl">

              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-transparent border-b border-gray-300 focus:border-[#16a34a] py-2.5 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder="Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-gray-300 focus:border-[#16a34a] py-2.5 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors"
                />
              </div>

              {/* Row 2: Country (India — fixed) + Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
                <div className="sm:col-span-5 flex items-center gap-2 border-b border-gray-300 py-2.5 select-none">
                  <span className="text-base leading-none">🇮🇳</span>
                  <span className="text-xs sm:text-sm text-gray-900 font-medium">India</span>
                  <span className="text-xs sm:text-sm text-gray-400">(+91)</span>
                </div>
                <div className="sm:col-span-7">
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number *"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full bg-transparent border-b border-gray-300 focus:border-[#16a34a] py-2.5 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Custom Venue Dropdown */}
              <div ref={dropdownRef} className="relative">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">
                  Select Venue / Property
                </label>

                {/* Trigger button */}
                <button
                  type="button"
                  onClick={() => setVenueOpen((o) => !o)}
                  className={`w-full flex items-center justify-between border-b py-2.5 text-xs sm:text-sm transition-colors focus:outline-none cursor-pointer ${
                    venueOpen ? "border-[#16a34a]" : "border-gray-300"
                  }`}
                >
                  {selectedLawn ? (
                    <span className="text-gray-900 font-medium">{selectedLawn.name}</span>
                  ) : (
                    <span className="text-gray-400">— Choose a Venue —</span>
                  )}
                  <ChevronDown
                    className={`w-4 h-4 text-[#16a34a] shrink-0 transition-transform duration-200 ${
                      venueOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown panel */}
                {venueOpen && (
                  <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-200 shadow-xl overflow-hidden">
                    {LAWNS.map((lawn, i) => (
                      <button
                        key={lawn.name}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, property: lawn.name });
                          setVenueOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors cursor-pointer group ${
                          formData.property === lawn.name
                            ? "bg-[#16a34a]/5 border-l-2 border-[#16a34a]"
                            : "hover:bg-gray-50 border-l-2 border-transparent"
                        } ${i !== 0 ? "border-t border-gray-100" : ""}`}
                      >
                        <MapPin className={`w-3.5 h-3.5 mt-0.5 shrink-0 transition-colors ${
                          formData.property === lawn.name ? "text-[#16a34a]" : "text-gray-400 group-hover:text-[#16a34a]"
                        }`} />
                        <div>
                          <p className={`text-xs font-bold uppercase tracking-wide transition-colors ${
                            formData.property === lawn.name ? "text-[#16a34a]" : "text-gray-900"
                          }`}>
                            {lawn.name}
                          </p>
                          <p className="text-[10px] text-gray-400 font-medium mt-0.5">{lawn.sub}</p>
                        </div>
                        {formData.property === lawn.name && (
                          <span className="ml-auto text-[#16a34a] text-xs font-bold">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Row 4: Type Your Query */}
              <div>
                <textarea
                  rows={2}
                  placeholder="Type Your Query"
                  value={formData.query}
                  onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                  className="w-full bg-transparent border-b border-gray-300 focus:border-[#16a34a] py-2 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 text-[11px] sm:text-xs text-gray-600 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.agree}
                    onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                    className="mt-0.5 w-4 h-4 rounded-none accent-[#16a34a] cursor-pointer"
                  />
                  <span>I agree to receive updates &amp; offers via WhatsApp, SMS, Email &amp; Web.</span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md cursor-pointer"
                >
                  <span>SUBMIT ENQUIRY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

        </div>

        {/* Right Column: Featured Full Bleed Image */}
        <div className="lg:col-span-6 relative w-full h-[450px] sm:h-[550px] lg:h-full">
          <Image
            src="/images/BUCKINGHAM PALACE front.png"
            alt="Plan Your Perfect Celebration at Aamrapaali"
            fill
            className="object-cover rounded-none"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
