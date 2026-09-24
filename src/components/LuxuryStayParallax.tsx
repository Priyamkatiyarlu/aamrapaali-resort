"use client";

import React from "react";

interface ParallaxSectionProps {
  onOpenBooking: (details?: string) => void;
}

export default function LuxuryStayParallax({ onOpenBooking }: ParallaxSectionProps) {
  return (
    <section
      className="relative py-28 sm:py-36 bg-fixed bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/stay.png')",
      }}
    >
      {/* Dark Vignette Overlay for Parallax Effect & Optimal Text Contrast */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
        
        {/* Top Circular Emblem Icon */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-[#7c2d12] flex items-center justify-center mx-auto shadow-2xl transition-transform hover:scale-105 border border-amber-100/50">
          <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#7c2d12]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 4v16M2 8h20v12M2 14h20" />
            <path d="M6 14V9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5" />
            <path d="M8 8V6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />
          </svg>
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

        {/* CTA Pill Button */}
        <div className="pt-3">
          <button
            onClick={() => onOpenBooking("Luxury Stay")}
            className="px-8 py-3 rounded-full bg-white hover:bg-[#c5a059] text-[#7c2d12] hover:text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl"
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </section>
  );
}
