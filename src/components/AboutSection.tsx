"use client";

import React, { useState, useRef } from "react";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";

interface AboutSectionProps {
  onOpenBooking: (experience?: string) => void;
}

export default function AboutSection({ onOpenBooking }: AboutSectionProps) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="about" className="py-24 bg-[#fcfbf9] text-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Rich Narrative Text on Left (5 cols), Bigger Video on Right (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Storytelling Narrative (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#9e7930] block mb-2">
                About Aamrapaali Group
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                WHERE ROYAL <span className="text-gold-gradient">HERITAGE MEETS</span> LUXURY
              </h2>
            </div>

            {/* Sub-heading */}
            <p className="text-base sm:text-lg text-[#9e7930] font-serif font-semibold italic">
              A Legacy of Architectural Splendor, Celebrations & Unrivaled Hospitality
            </p>

            {/* Rich Narrative Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
              <p>
                Spanning over 25 acres of lush landscaped gardens, Aamrapaali is India's premier heritage resort and luxury destination complex. Home to the legendary <strong className="text-gray-900 font-semibold">Buckingham Palace ballroom</strong>, we offer unmatched scale for grand celebrations and corporate galas.
              </p>
              <p>
                Whether exchanging vows on illuminated royal lawns, relaxing in presidential pool villas, or experiencing high-thrill slides at Aamrapaali Water World, every moment is crafted with 5-star elegance and royal warmth.
              </p>
            </div>

            {/* Action Buttons (Exact Viraj Button Style) */}
            <div className="flex flex-wrap items-center gap-3 pt-6">
              <button
                onClick={() => onOpenBooking("About Aamrapaali")}
                className="px-6 py-3.5 bg-[#0b1726] border border-[#0b1726] hover:bg-[#c5a059] hover:border-[#c5a059] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shadow-md"
              >
                <span>ABOUT AAMRAPAALI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="#buckingham"
                className="px-6 py-3.5 bg-white border border-gray-400 hover:border-[#c5a059] text-gray-900 text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shadow-sm"
              >
                <span>BUCKINGHAM TOUR</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Prominent Video Player with Gold Frame (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-[480px] sm:h-[580px] rounded-2xl overflow-hidden border-[4px] border-[#c5a059] shadow-2xl group bg-black">
              {/* Video Player */}
              <video
                ref={videoRef}
                src="https://bdevtestservers.com/aamrapaaliv2/wp-content/uploads/2026/09/aamrapaali-video.mp4"
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>

              {/* Top Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#c5a059]/50 text-[10px] font-bold text-[#f2d488] uppercase tracking-wider">
                  Official Estate Tour
                </span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-6 left-6 right-20 pointer-events-none text-white">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide mb-1 text-white">
                  AAMRAPAALI GRAND ESTATE
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 font-sans">
                  Buckingham Palace, Royal Destination Wedding Lawns & Waterpark World
                </p>
              </div>

              {/* Mute/Unmute Audio Button */}
              <button
                onClick={toggleSound}
                className="absolute bottom-6 right-6 w-11 h-11 rounded-xl bg-black/80 hover:bg-[#c5a059] border border-white/40 text-white flex items-center justify-center transition-all shadow-xl z-20"
                aria-label="Toggle Sound"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-gray-300" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
