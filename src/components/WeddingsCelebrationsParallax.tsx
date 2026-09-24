"use client";

import React from "react";
import { Heart } from "lucide-react";

interface ParallaxSectionProps {
  onOpenBooking: (details?: string) => void;
}

export default function WeddingsCelebrationsParallax({ onOpenBooking }: ParallaxSectionProps) {
  return (
    <section
      className="relative py-32 bg-fixed bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/wedding.png')",
      }}
    >
      {/* Dark Vignette Overlay for High Contrast & Parallax Feel */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Top Circular Emblem (Wedding Rings & Heart Icon) */}
        <div className="w-16 h-16 rounded-full bg-[#fdfbf7] text-[#c5a059] border-2 border-[#c5a059]/60 flex items-center justify-center mx-auto shadow-2xl transition-transform hover:scale-105">
          <div className="relative flex items-center justify-center">
            {/* Interlocking Rings SVG */}
            <svg className="w-8 h-8 fill-current text-[#c5a059]" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
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

        {/* CTA Button (Exact Reference Pill Button) */}
        <div className="pt-4">
          <button
            onClick={() => onOpenBooking("Weddings & Celebrations")}
            className="px-10 py-3.5 rounded-full bg-white hover:bg-[#c5a059] text-gray-900 hover:text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl"
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </section>
  );
}
