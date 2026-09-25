"use client";

import React from "react";
import { Waves, ArrowRight } from "lucide-react";

interface ParallaxSectionProps {
  onOpenBooking: (details?: string) => void;
}

export default function WaterParkParallax({ onOpenBooking }: ParallaxSectionProps) {
  return (
    <section
      id="waterpark"
      className="relative py-28 sm:py-36 bg-fixed bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/waterpark.png')",
      }}
    >
      {/* Dark Cyan/Navy Tint Overlay for Water Park Theme */}
      <div className="absolute inset-0 bg-[#051726]/65 backdrop-blur-[1px]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
        
        {/* Top Icon without Background */}
        <div className="flex items-center justify-center mx-auto transition-transform hover:scale-110 duration-300">
          <Waves className="w-10 h-10 text-white stroke-[1.5] drop-shadow-md" />
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

        {/* CTA Button */}
        <div className="pt-3">
          <button
            onClick={() => onOpenBooking("Water Park")}
            className="px-8 py-3.5 bg-white text-gray-900 border border-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl rounded-none cursor-pointer inline-flex items-center gap-2.5 hover:bg-white hover:text-gray-900 hover:border-white"
          >
            <span>BOOK NOW</span>
            <ArrowRight className="w-4 h-4 text-[#16a34a] shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
}
