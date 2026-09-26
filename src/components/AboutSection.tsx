"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import ScrollExpand from "./ScrollExpand";

interface AboutSectionProps {
  onOpenBooking: (experience?: string) => void;
}

export default function AboutSection({ onOpenBooking }: AboutSectionProps) {
  return (
    <section id="about" className="pt-20 pb-0 bg-[#fcfbf9] text-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Storytelling & Narrative Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-8 sm:mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#16a34a] block mb-2">
              About Aamrapaali Group
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              WHERE ROYAL <span className="text-[#16a34a]">HERITAGE MEETS</span> LUXURY
            </h2>
          </div>

          {/* Sub-heading */}
          <p className="text-base sm:text-xl text-[#16a34a] font-serif font-semibold">
            A Legacy of Architectural Splendor, Celebrations & Unrivaled Hospitality
          </p>

          {/* Rich Narrative Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-sans max-w-3xl mx-auto">
            <p>
              Spanning over 25 acres of lush landscaped gardens, Aamrapaali is India's premier heritage resort and luxury destination complex. Home to the legendary <strong className="text-gray-900 font-semibold">Buckingham Palace ballroom</strong>, we offer unmatched scale for grand celebrations and corporate galas.
            </p>
            <p>
              Whether exchanging vows on illuminated royal lawns, relaxing in presidential pool villas, or experiencing high-thrill slides at Aamrapaali Water World, every moment is crafted with 5-star elegance and royal warmth.
            </p>
          </div>

          {/* Centered Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenBooking("About Aamrapaali")}
              className="px-8 py-4 bg-[#16a34a] border border-[#16a34a] hover:bg-[#15803d] hover:border-[#15803d] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg rounded-none cursor-pointer"
            >
              <span>ABOUT AAMRAPAALI</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <a
              href="#buckingham"
              className="px-8 py-4 bg-white border border-gray-300 hover:bg-gray-50 text-gray-900 text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md rounded-none cursor-pointer"
            >
              <span>BUCKINGHAM TOUR</span>
              <ArrowRight className="w-4 h-4 text-[#16a34a]" />
            </a>
          </div>
        </div>

      </div>

      {/* Optimized ScrollExpand Video Section directly below - compact scroll distance to prevent unwanted bottom whitespace */}
      <div className="w-full relative">
        <ScrollExpand
          src="https://vjs.zencdn.net/v/oceans.mp4"
          mediaType="video"
          poster="/images/BUCKINGHAM PALACE Drone shot.png"
          title="AAMRAPAALI GRAND ESTATE"
          scrollHint="Scroll to expand video"
          useWindowScroll={true}
          startWidth={70}
          startHeight={100}
          startRadius={0}
          endRadius={0}
          mediaZoom={1.15}
          scrollDistance={0.8}
          holdDistance={0}
          smoothing={0.08}
          overlayScrim={0.5}
        >
          <div className="text-center text-white space-y-4 px-4">
            <h3 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white drop-shadow-md">
              AAMRAPAALI GRAND ESTATE
            </h3>
            <p className="text-sm sm:text-lg text-gray-200 max-w-2xl mx-auto font-sans font-light drop-shadow-sm">
              Buckingham Palace, Royal Destination Wedding Lawns & Waterpark World
            </p>
          </div>
        </ScrollExpand>
      </div>
    </section>
  );
}
