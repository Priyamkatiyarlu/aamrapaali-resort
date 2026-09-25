"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface WhyChooseUsProps {
  onOpenBooking: (details?: string) => void;
}

export default function WhyChooseUs({ onOpenBooking }: WhyChooseUsProps) {
  const features = [
    {
      id: "lawns",
      badge: "EXPANSIVE GROUNDS",
      title: "Spacious Lawns",
      description: "Beautiful and versatile lawns for weddings, celebrations and large gatherings.",
      image: "/images/wedding.png",
    },
    {
      id: "parking",
      badge: "HASSLE-FREE ACCESS",
      title: "Ample Parking",
      description: "Convenient parking space for guests and event attendees.",
      image: "/images/events.png",
    },
    {
      id: "waterpark",
      badge: "RESORT AMENITY",
      title: "Waterpark Experience",
      description: "Add fun and entertainment to your stay with an exciting waterpark experience.",
      image: "/images/waterpark.png",
    },
    {
      id: "rooms",
      badge: "ROYAL STAY",
      title: "100+ Comfortable Rooms",
      description: "Convenient stay for you and your guests.",
      image: "/images/stay.png",
    },
  ];

  return (
    <section id="why-us" className="w-full h-auto lg:h-screen lg:min-h-screen bg-[#fcfbf9] text-gray-900 border-t border-gray-200 overflow-hidden py-0">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Left Column: Edge-to-Edge Full Height Image (from Navbar bottom to Viewport bottom) */}
        <div className="lg:col-span-6 relative w-full h-[450px] sm:h-[550px] lg:h-full">
          <Image
            src="/images/hero.png"
            alt="Aamrapaali Outdoor Celebration Lawn"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 rounded-none"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Right Column: Vertically Centered Content & Feature List */}
        <div className="lg:col-span-6 w-full h-full flex flex-col justify-center px-6 sm:px-10 lg:px-12 xl:px-16 py-8 lg:py-10 space-y-6">
          
          {/* Header Content */}
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9e7930] block">
              WHY CHOOSE US
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[38px] xl:text-[44px] font-bold text-gray-900 leading-tight">
              MORE THAN A VENUE, <br />
              <span className="text-[#c5a059]">A COMPLETE EXPERIENCE</span>
            </h2>
          </div>

          {/* Feature Rows */}
          <div className="divide-y divide-gray-200/80 pt-1">
            {features.map((item) => (
              <div key={item.id} className="py-3 sm:py-3.5 flex items-center justify-between gap-4 group">
                
                {/* Left: Thumbnail & Content */}
                <div className="flex items-center gap-4">
                  {/* Thumbnail Image (sharp corners) */}
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-none overflow-hidden border border-gray-200 shadow-sm">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Text Details */}
                  <div className="space-y-0.5 max-w-xs sm:max-w-sm lg:max-w-md">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#9e7930] block">
                      {item.badge}
                    </span>
                    <h3 className="font-serif text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#9e7930] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-600 font-sans leading-snug line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Right: Explore Features Link */}
                <button
                  onClick={() => onOpenBooking(item.title)}
                  className="shrink-0 text-xs sm:text-sm font-medium text-[#9e7930] hover:text-[#7c5e21] transition-colors flex items-center gap-1.5 pb-0.5 border-b border-[#9e7930]/40 hover:border-[#9e7930]"
                >
                  <span>Explore Features</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
