"use client";

import React from "react";
import Image from "next/image";
import { Trees, Car, Waves, Hotel } from "lucide-react";

interface WhyChooseUsProps {
  onOpenBooking: (details?: string) => void;
}

export default function WhyChooseUs({ onOpenBooking }: WhyChooseUsProps) {
  const features = [
    {
      id: "lawns",
      num: "01",
      badge: "EXPANSIVE GROUNDS",
      title: "Spacious Lawns",
      description: "Beautiful and versatile lawns for weddings, grand celebrations, and large gatherings.",
      icon: Trees,
    },
    {
      id: "parking",
      num: "02",
      badge: "HASSLE-FREE ACCESS",
      title: "Ample Parking",
      description: "Convenient and secure parking space for all your guests and event attendees.",
      icon: Car,
    },
    {
      id: "waterpark",
      num: "03",
      badge: "RESORT AMENITY",
      title: "Waterpark Experience",
      description: "Add thrill, excitement, and family entertainment to your destination stay.",
      icon: Waves,
    },
    {
      id: "rooms",
      num: "04",
      badge: "ROYAL STAY",
      title: "100+ Comfortable Rooms",
      description: "Luxurious, well-appointed suites ensuring a comfortable stay for you and your guests.",
      icon: Hotel,
    },
  ];

  return (
    <section id="why-us" className="w-full h-auto lg:h-screen lg:min-h-screen bg-white text-gray-900 border-t border-gray-100 overflow-hidden py-0">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Left Column: Edge-to-Edge Full Height Image */}
        <div className="lg:col-span-6 relative w-full h-[450px] sm:h-[550px] lg:h-full">
          <Image
            src="/images/Amrapaali.png"
            alt="Aamrapaali Outdoor Celebration Lawn"
            fill
            className="object-cover rounded-none"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Right Column: Vertically Centered Modern Editorial UI */}
        <div className="lg:col-span-6 w-full h-full flex flex-col justify-center px-6 sm:px-10 lg:px-12 xl:px-16 py-10 lg:py-12 space-y-6 sm:space-y-8 bg-white">
          
          {/* Header Content with Green Branding */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#16a34a] block">
              WHY CHOOSE US
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[38px] xl:text-[44px] font-bold text-gray-900 leading-tight">
              MORE THAN A VENUE, <br />
              <span className="text-[#16a34a]">A COMPLETE EXPERIENCE</span>
            </h2>
          </div>

          {/* Feature Rows (No Images, No Buttons, Clean Modern UI) */}
          <div className="divide-y divide-gray-100">
            {features.map((item) => (
              <div
                key={item.id}
                className="py-4 sm:py-5 flex items-start justify-between gap-6 group hover:bg-gray-50/50 px-2 sm:px-3 -mx-2 sm:-mx-3 rounded-none transition-colors"
              >
                {/* Left: Icon & Text Content */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="shrink-0 text-[#16a34a] pt-1">
                    <item.icon className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  {/* Text Details */}
                  <div className="space-y-1">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#16a34a] block">
                      {item.badge}
                    </span>
                    <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Right: Subtle Luxury Number Accent */}
                <span className="text-2xl sm:text-3xl font-serif text-gray-300 group-hover:text-[#16a34a]/40 transition-colors font-light ml-2 shrink-0 select-none">
                  {item.num}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
