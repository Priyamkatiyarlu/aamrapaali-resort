"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: (experience?: string) => void;
}

const HERO_SLIDES = [
  {
    id: "palace-hero",
    line1: "AAMRAPAALI",
    line2: "RESORT & PALACE",
    subtitle: "A Whole new world beyond four walls",
    featureLine: "Buckingham Palace  |  Royal Weddings  |  Waterpark & Fun World  |  Luxury Hotel Suites",
    image: "/images/hero.png",
  },
  {
    id: "buckingham-hero",
    line1: "BUCKINGHAM",
    line2: "PALACE BALLROOM",
    subtitle: "India's crown jewel grand venue",
    featureLine: "35,000 Sq Ft Ballroom  |  Swarovski Chandeliers  |  5,000+ Capacity  |  VIP Bridal Suites",
    image: "/images/buckingham.png",
  },
  {
    id: "weddings-hero",
    line1: "ROYAL",
    line2: "DESTINATION WEDDINGS",
    subtitle: "Where fairytale celebrations come alive",
    featureLine: "Floral Mandap Lawns  |  5-Star Catering  |  100+ Luxury Suites  |  Personal Concierge",
    image: "/images/wedding.png",
  },
  {
    id: "waterpark-hero",
    line1: "WATERPARK",
    line2: "& FUN WORLD",
    subtitle: "Ultimate summer thrill & family fun oasis",
    featureLine: "10,000 Sq Ft Wave Pool  |  High-Speed Tornado Slides  |  Kids Water Fort  |  Poolside Cabanas",
    image: "/images/waterpark.png",
  },
];

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section id="hero" className="relative h-screen w-screen min-h-screen overflow-hidden flex flex-col justify-between pt-24 pb-8 bg-black text-white">
      {/* Background Image Carousel (Full Color, Vibrant) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slide.image}
            alt={slide.line1}
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* TINT OVERLAYS (EXACT VIRAJ STYLE) */}
      {/* 1. Top Header Vignette for Navbar legibility */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none z-0"></div>

      {/* 2. Left Side Dark Shadow ONLY behind left text column */}
      <div className="absolute inset-y-0 left-0 w-full sm:w-3/4 lg:w-[55%] bg-gradient-to-r from-black/90 via-black/60 to-transparent pointer-events-none z-0"></div>

      {/* 3. Bottom Gradient for Pagination Dots */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 to-transparent pointer-events-none z-0"></div>

      {/* HERO TEXT CONTENT (EXACT VIRAJ TYPOGRAPHY & LAYOUT) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="max-w-2xl">
          {/* Line 1: Sans-Serif Clean Font (Viraj 'BBD' Style) */}
          <motion.h2
            key={`line1-${slide.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wider uppercase text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            {slide.line1}
          </motion.h2>

          {/* Line 2: Elegant Serif Font (Viraj 'GREEN CITY' Style) */}
          <motion.h1
            key={`line2-${slide.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-serif text-4xl sm:text-6xl lg:text-6xl font-normal tracking-wide uppercase text-white leading-tight mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            {slide.line2}
          </motion.h1>

          {/* Subtitle in Warm Yellow/Gold (Prominent & Highly Legible) */}
          <motion.p
            key={`subtitle-${slide.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-xl lg:text-2xl text-[#f5c767] font-sans font-semibold mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] tracking-wide"
          >
            {slide.subtitle}
          </motion.p>

          {/* Feature Line with Pipe Separators (Larger & Clear Readability) */}
          <motion.p
            key={`feature-${slide.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm sm:text-base lg:text-lg text-white/95 font-medium tracking-wide mb-8 leading-relaxed max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
          >
            {slide.featureLine}
          </motion.p>

          {/* Single Rectangular Outlined Button (BOOK NOW CTA) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              onClick={() => onOpenBooking(slide.line1)}
              className="px-7 py-3 bg-[#0b1726]/85 border border-white/90 hover:bg-white hover:text-black text-white text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2.5 group shadow-xl rounded-none"
            >
              <span>BOOK NOW</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Slide Pagination Pills (Viraj Square Outlined Style) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-center gap-2 pb-2">
        {HERO_SLIDES.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-[2px] ${
              index === currentSlide
                ? "w-7 h-3 bg-[#0b1726] border-2 border-white"
                : "w-3 h-3 bg-transparent border border-white/70 hover:border-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
