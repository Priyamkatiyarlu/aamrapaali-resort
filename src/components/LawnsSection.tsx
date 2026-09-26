"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Maximize2, Users, ArrowRight, Phone, Gem, Waves, Flower2, Palette } from "lucide-react";

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
    highlightIcon: Gem,
    image: "/images/BUCKINGHAM PALACE front.png",
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
    highlightIcon: Waves,
    image: "/images/Water Park.png",
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
    highlightIcon: Flower2,
    image: "/images/Amrapaali.png",
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
    highlightIcon: Palette,
    image: "/images/wedding.png",
  },
];

export default function LawnsSection({ onOpenBooking }: LawnsSectionProps) {
  return (
    <section id="venues" className="py-16 sm:py-20 lg:py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with generous bottom breathing room */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#16a34a] block mb-2">
            Grand Lawns & Banquets
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 leading-tight">
            OUR ROYAL <span className="text-[#16a34a]">VENUES & LAWNS</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-sans mt-3 max-w-xl mx-auto">
            Discover all 4 grand wedding venues at Aamrapaali Resort & Buckingham Palace.
          </p>
        </div>

        {/* ALL 4 VENUE SHOWCASE (SPACIOUS, SIMPLE CLEAN EDITORIAL LAYOUT) */}
        <div className="space-y-20 lg:space-y-28">
          {VENUES.map((venue, idx) => (
            <div
              key={venue.id}
              id={venue.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center bg-white scroll-mt-24"
            >
              {/* Image Side (Clean, With Space, No Cut-To-Cut) */}
              <div
                className={`lg:col-span-6 relative w-full h-[360px] sm:h-[420px] lg:h-[480px] rounded-none group overflow-hidden shadow-sm ${
                  idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Image
                  src={venue.image}
                  alt={venue.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Text Specs & Details Side (6 cols) */}
              <div
                className={`lg:col-span-6 space-y-6 flex flex-col justify-between py-2 ${
                  idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="space-y-3">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1.5">
                      {venue.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#16a34a] flex items-center gap-1.5 uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 text-[#16a34a]" />
                      <span>{venue.location}</span>
                    </p>
                  </div>

                  {/* Venue Description */}
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
                    {venue.desc}
                  </p>
                </div>

                {/* 3 Key Metric Columns */}
                <div className="py-4 border-y border-gray-100 grid grid-cols-3 gap-3 text-center">
                  {/* Metric 1 */}
                  <div className="space-y-1">
                    <Maximize2 className="w-5 h-5 text-[#16a34a] mx-auto mb-1" />
                    <div className="font-sans text-sm sm:text-base font-bold text-gray-900">
                      {venue.area}
                    </div>
                    <div className="text-[10px] text-gray-500 font-medium">
                      {venue.areaLabel}
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="space-y-1 border-x border-gray-100 px-1">
                    <Users className="w-5 h-5 text-[#16a34a] mx-auto mb-1" />
                    <div className="font-sans text-sm sm:text-base font-bold text-gray-900">
                      {venue.capacity}
                    </div>
                    <div className="text-[10px] text-gray-500 font-medium">
                      {venue.capacityLabel}
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div className="space-y-1">
                    <venue.highlightIcon className="w-5 h-5 text-[#16a34a] mx-auto mb-1" />
                    <div className="font-sans text-sm sm:text-base font-bold text-gray-900">
                      {venue.highlight}
                    </div>
                    <div className="text-[10px] text-gray-500 font-medium">
                      {venue.highlightLabel}
                    </div>
                  </div>
                </div>

                {/* Dual CTA Buttons: Full Width (One in green, one in white for call) */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                  <button
                    onClick={() => onOpenBooking(venue.name)}
                    className="w-full py-3.5 px-4 bg-[#16a34a] hover:bg-[#15803d] border border-[#16a34a] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-sm rounded-none cursor-pointer"
                  >
                    <span>BOOK VENUE</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>

                  <a
                    href="tel:+919876543210"
                    className="w-full py-3.5 px-4 bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-sm rounded-none cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-[#16a34a]" />
                    <span>CALL US</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
