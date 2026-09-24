"use client";

import React from "react";

interface ParallaxSectionProps {
  onOpenBooking: (details?: string) => void;
}

export default function WaterParkParallax({ onOpenBooking }: ParallaxSectionProps) {
  return (
    <section
      className="relative py-28 sm:py-36 bg-fixed bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/waterpark.png')",
      }}
    >
      {/* Dark Cyan/Navy Tint Overlay for Water Park Theme */}
      <div className="absolute inset-0 bg-[#051726]/65 backdrop-blur-[1px]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
        
        {/* Top Circular Emblem Icon */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-[#7c2d12] flex items-center justify-center mx-auto shadow-2xl transition-transform hover:scale-105 border border-amber-100/50">
          <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#7c2d12]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h4v16" />
            <path d="M4 8h4M4 12h4M4 16h4" />
            <path d="M8 6c6 0 6 8 12 8v2" />
            <path d="M2 18c2.5 1 5.5 1 8 0s5.5-1 8 0" />
            <path d="M2 21c2.5 1 5.5 1 8 0s5.5-1 8 0" />
          </svg>
        </div>

        {/* Section Title */}
        <h2 className="font-serif text-4xl sm:text-6xl font-normal text-white tracking-wide">
          Water Park
        </h2>

        {/* Narrative Paragraph 1 */}
        <p className="text-sm sm:text-base text-gray-100 font-sans leading-relaxed max-w-3xl mx-auto font-light">
          At <strong className="font-bold text-white">Aamrapaali Resort</strong>, the Water Park brings together refreshing fun, exciting slides, and memorable moments for guests of all ages. Whether you&apos;re looking to cool off with family, enjoy thrilling water rides, or simply spend a relaxed day by the pool, there&apos;s something for everyone to enjoy.
        </p>

        {/* Narrative Paragraph 2 */}
        <p className="text-sm sm:text-base text-gray-100 font-sans leading-relaxed max-w-3xl mx-auto font-light">
          With vibrant water attractions and a lively atmosphere, our Water Park is the perfect place to turn an ordinary day into an exciting getaway. <strong className="font-bold text-white">Gather your family and friends, make a splash, and create unforgettable memories at Aamrapaali Resort.</strong>
        </p>

        {/* CTA Pill Button */}
        <div className="pt-3">
          <button
            onClick={() => onOpenBooking("Water Park")}
            className="px-8 py-3 rounded-full bg-white hover:bg-[#c5a059] text-[#7c2d12] hover:text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl"
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </section>
  );
}
