"use client";

import React from "react";

interface ParallaxSectionProps {
  onOpenBooking: (details?: string) => void;
}

export default function EventsGatheringsParallax({ onOpenBooking }: ParallaxSectionProps) {
  return (
    <section
      className="relative py-28 sm:py-36 bg-fixed bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/events.png')",
      }}
    >
      {/* Dark Overlay for High Contrast & Parallax Depth */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
        
        {/* Top Circular Emblem Icon */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-[#7c2d12] flex items-center justify-center mx-auto shadow-2xl transition-transform hover:scale-105 border border-amber-100/50">
          <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#7c2d12]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="6" r="2" />
            <circle cx="18" cy="6" r="2" />
            <path d="M6 8v12M18 8v12M2 20h8M14 20h8" />
            <path d="M6 10c2.5 3 9.5 3 12 0" />
            <polygon points="12,2 13,4 15,4.5 13.5,6 14,8 12,7 10,8 10.5,6 9,4.5 11,4" fill="currentColor" opacity="0.8" />
          </svg>
        </div>

        {/* Section Title */}
        <h2 className="font-serif text-4xl sm:text-6xl font-normal text-white tracking-wide">
          Events & Gatherings
        </h2>

        {/* Narrative Paragraph 1 */}
        <p className="text-sm sm:text-base text-gray-100 font-sans leading-relaxed max-w-3xl mx-auto font-light">
          At <strong className="font-bold text-white">Aamrapaali Resort</strong>, every gathering is an opportunity to celebrate, connect, and create memorable moments. From vibrant festivals and intimate family functions to lively parties and special occasions, our versatile spaces provide the perfect backdrop for celebrations of every kind.
        </p>

        {/* Narrative Paragraph 2 */}
        <p className="text-sm sm:text-base text-gray-100 font-sans leading-relaxed max-w-3xl mx-auto font-light">
          Whether you are planning a social gathering, festive celebration, birthday, anniversary, or corporate event, our team helps bring your vision to life with thoughtful arrangements, welcoming hospitality, and an atmosphere designed for togetherness. <strong className="font-bold text-white">Come together, celebrate freely, and make every gathering a memorable one at Aamrapaali Resort.</strong>
        </p>

        {/* CTA Pill Button */}
        <div className="pt-3">
          <button
            onClick={() => onOpenBooking("Events & Gatherings")}
            className="px-8 py-3 rounded-full bg-white hover:bg-[#c5a059] text-[#7c2d12] hover:text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl"
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </section>
  );
}
