"use client";

import React from "react";
import { PartyPopper } from "lucide-react";

interface ParallaxSectionProps {
  onOpenBooking: (details?: string) => void;
}

export default function EventsGatheringsParallax({ onOpenBooking }: ParallaxSectionProps) {
  return (
    <section
      id="events"
      className="relative py-28 sm:py-36 bg-fixed bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/events.png')",
      }}
    >
      {/* Dark Overlay for High Contrast & Parallax Depth */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
        
        {/* Top Icon without Background */}
        <div className="flex items-center justify-center mx-auto transition-transform hover:scale-110 duration-300">
          <PartyPopper className="w-10 h-10 text-white stroke-[1.5] drop-shadow-md" />
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

        {/* CTA Button */}
        <div className="pt-3">
          <button
            onClick={() => onOpenBooking("Events & Gatherings")}
            className="px-10 py-3.5 bg-white hover:bg-[#c5a059] text-gray-900 hover:text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl rounded-none"
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </section>
  );
}
