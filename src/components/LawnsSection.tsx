"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Maximize2, Users, Crown, ArrowRight, Sparkles } from "lucide-react";

interface LawnsSectionProps {
  onOpenBooking: (venueName?: string) => void;
}

// 4 Official Aamrapaali Wedding Venues with exact text & metrics requested
const VENUES = [
  {
    id: "buckingham",
    name: "BUCKINGHAM PALACE",
    location: "Main Palace Estate, Grand Trunk Road",
    desc: "A grand and opulent space inspired by the regal architecture of Buckingham Palace. Ideal for large weddings, this lawn offers a luxurious setting with ample space for elaborate setups. Decorative fountains, elegant lighting, and a spacious dance floor.",
    area: "35,000 Sq. Ft.",
    areaLabel: "Pillar-less Ballroom",
    capacity: "5,000+ Guests",
    capacityLabel: "Grand Banquet Capacity",
    highlight: "Swarovski Chandeliers",
    highlightLabel: "Royal Interior Setup",
    image: "/images/buckingham.png",
  },
  {
    id: "poolside-lawn",
    name: "POOLSIDE LAWN",
    location: "Resort Poolside, Aamrapaali Complex",
    desc: "Immerse yourself in the vibrant culture of Rajasthan with this beautifully themed lawn. Perfect for traditional weddings, it features authentic decor and ambiance. Traditional Rajasthani decor, live folk performances, and a grand entrance.",
    area: "15,000 Sq. Ft.",
    areaLabel: "Poolside Lawn & Deck",
    capacity: "1,200 Guests",
    capacityLabel: "Mehendi & Sundowner",
    highlight: "Rajasthani Decor",
    highlightLabel: "Poolside Ambiance",
    image: "/images/waterpark.png",
  },
  {
    id: "vilas-lawn",
    name: "VILAS LAWN",
    location: "Gardens Wing, Aamrapaali Estate",
    desc: "A serene and picturesque venue with lush greenery and a tranquil atmosphere. Ideal for intimate gatherings and nature-inspired weddings. Manicured gardens, floral arches, and scenic photo opportunities.",
    area: "25,000 Sq. Ft.",
    areaLabel: "Lush Greenery Lawn",
    capacity: "2,000 Guests",
    capacityLabel: "Nature-Inspired Wedding",
    highlight: "Floral Arches",
    highlightLabel: "Tranquil Scenic Views",
    image: "/images/hero.png",
  },
  {
    id: "theme-lawn",
    name: "THEME LAWN",
    location: "Grand Event Grounds, Aamrapaali",
    desc: "A versatile space that can be customized to match any wedding theme. Whether you envision a fairytale wedding or a modern celebration, this lawn is the perfect canvas. Customizable decor, thematic lighting, and a dedicated planning team.",
    area: "50,000 Sq. Ft.",
    areaLabel: "Customizable Theme Lawn",
    capacity: "3,500+ Guests",
    capacityLabel: "Theme Wedding Capacity",
    highlight: "Thematic Lighting",
    highlightLabel: "Custom Wedding Setup",
    image: "/images/wedding.png",
  },
];

export default function LawnsSection({ onOpenBooking }: LawnsSectionProps) {
  return (
    <section id="venues" className="pt-8 sm:pt-12 pb-20 bg-[#ffffff] text-gray-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9e7930] block mb-1">
            Grand Lawns & Banquets
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900">
            OUR ROYAL <span className="text-gold-gradient">VENUES & LAWNS</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-sans mt-2">
            Discover all 4 grand wedding venues at Aamrapaali Resort & Buckingham Palace.
          </p>
        </div>

        {/* ALL 4 VENUE CARDS DISPLAYED TOGETHER IN RICH VIRAJ SHOWCASE STYLE */}
        <div className="space-y-12">
          {VENUES.map((venue, idx) => (
            <div
              key={venue.id}
              id={venue.id}
              className="grid grid-cols-1 lg:grid-cols-12 bg-[#fcfbf9] border border-gray-200 shadow-md rounded-none overflow-hidden hover:shadow-xl transition-shadow duration-300 scroll-mt-24"
            >
              {/* Image Side (Alternate Left/Right for rich visual variety, or standard left 6 cols) */}
              <div
                className={`lg:col-span-6 relative w-full h-[360px] lg:h-auto min-h-[380px] rounded-none group overflow-hidden border-b lg:border-b-0 ${
                  idx % 2 === 1 ? "lg:order-2 lg:border-l border-gray-200" : "lg:order-1 lg:border-r border-gray-200"
                }`}
              >
                <Image
                  src={venue.image}
                  alt={venue.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-gray-200 flex items-center gap-1.5 shadow-sm">
                  <Crown className="w-4 h-4 text-[#c5a059]" />
                  <span className="text-[10px] font-bold text-gray-900 uppercase tracking-wider">
                    Aamrapaali Wedding Venue
                  </span>
                </div>
              </div>

              {/* Text Specs & Details Side (6 cols) */}
              <div
                className={`lg:col-span-6 p-6 sm:p-10 space-y-6 flex flex-col justify-between ${
                  idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="space-y-3">
                  <div>
                    <h3 className="font-serif text-3xl font-bold text-gray-900 mb-1">
                      {venue.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#9e7930] flex items-center gap-1.5 uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{venue.location}</span>
                    </p>
                  </div>

                  {/* User Exact Venue Description */}
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
                    {venue.desc}
                  </p>
                </div>

                {/* 3 Key Metric Columns separated by vertical lines */}
                <div className="py-4 border-y border-gray-200 grid grid-cols-3 gap-3 text-center">
                  {/* Metric 1 */}
                  <div className="space-y-1">
                    <Maximize2 className="w-5 h-5 text-[#c5a059] mx-auto mb-1" />
                    <div className="font-sans text-sm sm:text-base font-bold text-gray-900">
                      {venue.area}
                    </div>
                    <div className="text-[10px] text-gray-500 font-medium">
                      {venue.areaLabel}
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="space-y-1 border-x border-gray-200 px-1">
                    <Users className="w-5 h-5 text-[#c5a059] mx-auto mb-1" />
                    <div className="font-sans text-sm sm:text-base font-bold text-gray-900">
                      {venue.capacity}
                    </div>
                    <div className="text-[10px] text-gray-500 font-medium">
                      {venue.capacityLabel}
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div className="space-y-1">
                    <Sparkles className="w-5 h-5 text-[#c5a059] mx-auto mb-1" />
                    <div className="font-sans text-sm sm:text-base font-bold text-gray-900">
                      {venue.highlight}
                    </div>
                    <div className="text-[10px] text-gray-500 font-medium">
                      {venue.highlightLabel}
                    </div>
                  </div>
                </div>

                {/* Single Primary CTA Button: ENQUIRE NOW → */}
                <div className="pt-2">
                  <button
                    onClick={() => onOpenBooking(venue.name)}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#0b1726] border border-[#0b1726] hover:bg-[#c5a059] hover:border-[#c5a059] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md"
                  >
                    <span>ENQUIRE NOW</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
