"use client";

import React from "react";
import { Sparkles } from "lucide-react";

interface ParallaxSectionProps {
  onOpenBooking: (details?: string) => void;
}

export default function WeddingsCelebrationsParallax({ onOpenBooking }: ParallaxSectionProps) {
  return (
    <section
      id="weddings"
      className="relative py-32 bg-fixed bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/wedding.png')",
      }}
    >
      {/* Dark Vignette Overlay for High Contrast & Parallax Feel */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Top Icon without Background */}
        <div className="flex items-center justify-center mx-auto transition-transform hover:scale-110 duration-300">
          <Sparkles className="w-10 h-10 text-white stroke-[1.5] drop-shadow-md" />
        </div>

        {/* Title */}
        <h2 className="font-serif text-4xl sm:text-6xl font-normal text-white tracking-wide">
          Weddings & Celebrations
        </h2>

        {/* Narrative Paragraph 1 */}
        <p className="text-sm sm:text-base text-gray-100 font-sans leading-relaxed max-w-3xl mx-auto font-light">
          At <strong className="font-semibold text-white">Aamrapaali Resort</strong>, every wedding is transformed into a beautiful celebration of love, family, and togetherness. From intimate traditional ceremonies to grand wedding festivities, our elegant spaces provide the perfect setting for moments that deserve to be remembered forever.
        </p>

        {/* Narrative Paragraph 2 with Exact Bold Keywords */}
        <p className="text-sm sm:text-base text-gray-100 font-sans leading-relaxed max-w-3xl mx-auto font-light">
          Celebrate your <strong className="font-semibold text-white">engagement</strong>, <strong className="font-semibold text-white">Mehendi</strong>, <strong className="font-semibold text-white">Haldi</strong>, <strong className="font-semibold text-white">Sangeet</strong>, <strong className="font-semibold text-white">wedding ceremony</strong>, <strong className="font-semibold text-white">and reception</strong> in beautifully designed spaces that can be tailored to your vision. Our versatile venues, thoughtful décor, and warm ambience create an experience that feels personal, elegant, and truly special.
        </p>

        {/* CTA Button (Sharp Non-Rounded Button) */}
        <div className="pt-4">
          <button
            onClick={() => onOpenBooking("Weddings & Celebrations")}
            className="px-10 py-3.5 bg-white hover:bg-[#c5a059] text-gray-900 hover:text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl rounded-none"
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </section>
  );
}
