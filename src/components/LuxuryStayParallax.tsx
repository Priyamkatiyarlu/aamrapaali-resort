"use client";

import React from "react";
import { Crown } from "lucide-react";

interface ParallaxSectionProps {
  onOpenBooking: (details?: string) => void;
}

export default function LuxuryStayParallax({ onOpenBooking }: ParallaxSectionProps) {
  return (
    <section
      id="stays"
      className="relative py-28 sm:py-36 bg-fixed bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/stay.png')",
      }}
    >
      {/* Dark Vignette Overlay for Parallax Effect & Optimal Text Contrast */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
        
        {/* Top Icon without Background */}
        <div className="flex items-center justify-center mx-auto transition-transform hover:scale-110 duration-300">
          <Crown className="w-10 h-10 text-white stroke-[1.5] drop-shadow-md" />
        </div>

        {/* Section Heading */}
        <h2 className="font-serif text-4xl sm:text-6xl font-normal text-white tracking-wide">
          Luxury Stay
        </h2>

        {/* Narrative Paragraph 1 */}
        <p className="text-sm sm:text-base text-gray-100 font-sans leading-relaxed max-w-3xl mx-auto font-light">
          At <strong className="font-bold text-white">Aamrapaali Resort</strong>, comfort meets thoughtful hospitality in beautifully designed rooms and cottages created for a peaceful and relaxing stay. Each space offers a warm, inviting atmosphere where you can unwind after a day of celebrations, events, or exploring the city.
        </p>

        {/* Narrative Paragraph 2 */}
        <p className="text-sm sm:text-base text-gray-100 font-sans leading-relaxed max-w-3xl mx-auto font-light">
          From comfortable furnishings to essential modern conveniences, every detail is designed to make your stay effortless and enjoyable. Whether you&apos;re visiting for a wedding, family gathering, business occasion, or a quiet getaway, <strong className="font-bold text-white">Aamrapaali Resort offers a comfortable retreat where you can relax, recharge, and feel at home.</strong>
        </p>

        {/* CTA Button */}
        <div className="pt-3">
          <button
            onClick={() => onOpenBooking("Luxury Stay")}
            className="px-10 py-3.5 bg-white hover:bg-[#c5a059] text-gray-900 hover:text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl rounded-none"
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </section>
  );
}
