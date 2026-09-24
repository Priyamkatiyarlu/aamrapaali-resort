"use client";

import React from "react";
import { Trees, Car, Waves, Bed, ArrowRight, Sparkles } from "lucide-react";

interface WhyChooseUsProps {
  onOpenBooking: (details?: string) => void;
}

export default function WhyChooseUs({ onOpenBooking }: WhyChooseUsProps) {
  const features = [
    {
      icon: Trees,
      title: "Spacious Lawns",
      subtitle: "VERSATILE CELEBRATION VENUES",
      description:
        "Beautiful and versatile lawns for weddings, celebrations and large gatherings.",
      badge: "EXPANSIVE GROUNDS",
    },
    {
      icon: Car,
      title: "Ample Parking",
      subtitle: "CONVENIENT GUEST PARKING",
      description:
        "Convenient parking space for guests and event attendees.",
      badge: "HASSLE-FREE ACCESS",
    },
    {
      icon: Waves,
      title: "Waterpark Experience",
      subtitle: "FUN & ENTERTAINMENT",
      description:
        "Add fun and entertainment to your stay with an exciting waterpark experience.",
      badge: "RESORT AMENITY",
    },
    {
      icon: Bed,
      title: "100+ Comfortable Rooms",
      subtitle: "LUXURY ACCOMMODATIONS",
      description:
        "Convenient stay for you and your guests.",
      badge: "ROYAL STAY",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-[#faf8f5] text-[#1a1a1a] relative overflow-hidden border-t border-[#e5dfd5]">
      {/* Background Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial from-[#c5a059]/5 via-transparent to-transparent pointer-events-none rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#8c6b27] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Aamrapaali Advantage</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1a1a1a] tracking-tight leading-tight">
            Why Choose <span className="italic text-[#c5a059]">Aamrapaali Resort</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Where regal architecture meets warm Indian hospitality. We transform your milestone celebrations into unforgettable royal memories with world-class facilities and unmatched service.
          </p>
          
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent mx-auto pt-2" />
        </div>

        {/* Feature Cards Grid (Matching reference UI UX) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-[#e5dfd5] p-8 rounded-xl shadow-sm hover:shadow-2xl hover:border-[#c5a059]/60 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Top Subtle Gold Accent Line */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#c5a059]/0 group-hover:via-[#c5a059] to-transparent transition-all duration-500" />

                <div>
                  {/* Top Row: Icon on left, Badge on right */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-lg bg-[#faf6ef] text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-inner">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-[#faf6ef] text-[#8c6b27] border border-[#e8dfcf] group-hover:border-[#c5a059]/40 transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl text-[#1a1a1a] font-normal group-hover:text-[#8c6b27] transition-colors mb-1">
                    {item.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#c5a059] mb-3">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-600 font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <button
                  onClick={() => onOpenBooking(`Inquiry about ${item.title}`)}
                  className="pt-4 border-t border-gray-100 flex items-center text-xs font-semibold text-[#8c6b27] group-hover:text-[#1a1a1a] transition-colors w-full text-left"
                >
                  <span>Explore Feature</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
