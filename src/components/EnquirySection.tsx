"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface EnquirySectionProps {
  onOpenBooking?: (details?: string) => void;
}

export default function EnquirySection({ onOpenBooking }: EnquirySectionProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    mobile: "",
    property: "",
    query: "",
    agree: true,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      if (onOpenBooking) {
        onOpenBooking(formData.property || "General Enquiry");
      }
    }, 1500);
  };

  return (
    <section id="enquire" className="w-full h-auto lg:h-screen lg:min-h-screen bg-[#fcfbf9] text-gray-900 border-t border-gray-200 overflow-hidden py-0">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Left Column: Form Controls */}
        <div className="lg:col-span-6 w-full h-full bg-[#fcfbf9] px-6 sm:px-10 lg:px-12 xl:px-16 py-8 lg:py-10 flex flex-col justify-center space-y-6">
          
          {/* Header Content */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9e7930] block">
              ENQUIRE NOW
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-bold text-gray-900 leading-tight">
              Plan Your Perfect <span className="text-[#c5a059]">Celebration</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed pt-1 max-w-lg">
              Share a few details and our team will get in touch with you with the best options for your event.
            </p>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="p-6 bg-white border border-[#c5a059]/40 rounded-none text-center space-y-3 shadow-sm animate-fadeIn">
              <CheckCircle2 className="w-10 h-10 text-[#c5a059] mx-auto" />
              <h3 className="font-serif text-xl font-bold text-gray-900">Thank You for Reaching Out!</h3>
              <p className="text-xs text-gray-600">
                Our royal concierge desk will contact you shortly on {formData.mobile || "your phone"}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 pt-2 font-sans max-w-xl">
              
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-transparent border-b border-gray-300 focus:border-[#c5a059] py-2.5 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-gray-300 focus:border-[#c5a059] py-2.5 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Country Code & Mobile Number */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
                <div className="sm:col-span-5">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="w-full bg-transparent border-b border-gray-300 focus:border-[#c5a059] py-2.5 text-xs sm:text-sm text-gray-900 focus:outline-none cursor-pointer"
                  >
                    <option className="bg-white text-gray-900" value="+91">🇮🇳 India (+91)</option>
                    <option className="bg-white text-gray-900" value="+1">🇺🇸 USA (+1)</option>
                    <option className="bg-white text-gray-900" value="+44">🇬🇧 UK (+44)</option>
                    <option className="bg-white text-gray-900" value="+971">🇦🇪 UAE (+971)</option>
                  </select>
                </div>
                <div className="sm:col-span-7">
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number *"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full bg-transparent border-b border-gray-300 focus:border-[#c5a059] py-2.5 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Select Property */}
              <div>
                <select
                  value={formData.property}
                  onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                  className="w-full bg-transparent border-b border-gray-300 focus:border-[#c5a059] py-2.5 text-xs sm:text-sm text-gray-900 focus:outline-none cursor-pointer"
                >
                  <option className="bg-white text-gray-900" value="">Select Property</option>
                  <option className="bg-white text-gray-900" value="Buckingham Palace Ballroom">Buckingham Palace Ballroom</option>
                  <option className="bg-white text-gray-900" value="Royal Destination Wedding Lawns">Royal Destination Wedding Lawns</option>
                  <option className="bg-white text-gray-900" value="Waterpark World Day Pass">Waterpark World Day Pass</option>
                  <option className="bg-white text-gray-900" value="Presidential Royal Villa">Presidential Royal Villa</option>
                  <option className="bg-white text-gray-900" value="Corporate Gala & Convention">Corporate Gala & Convention</option>
                </select>
              </div>

              {/* Row 4: Type Your Query */}
              <div>
                <textarea
                  rows={2}
                  placeholder="Type Your Query"
                  value={formData.query}
                  onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                  className="w-full bg-transparent border-b border-gray-300 focus:border-[#c5a059] py-2 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 text-[11px] sm:text-xs text-gray-600 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.agree}
                    onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                    className="mt-0.5 w-4 h-4 rounded-none accent-[#c5a059] cursor-pointer"
                  />
                  <span>I agree to receive updates & offers via WhatsApp, SMS, Email & Web.</span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#c5a059] hover:bg-[#b08b46] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md"
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
            src="/images/hero.png"
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
