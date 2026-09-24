"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Waves, Sun, Ticket, ArrowRight } from "lucide-react";

interface WaterparkProps {
  onOpenBooking: (experience?: string) => void;
}

const WATER_SLIDES = [
  {
    title: "Cyclone Tornado Drop",
    type: "High Thrill",
    desc: "A 45-ft steep vertical drop slide into a giant swirling funnel ending with a massive splash.",
    bg: "bg-red-50 text-red-600 border-red-200",
  },
  {
    title: "Ocean Wave Paradise",
    type: "Family & All Ages",
    desc: "Massive 10,000 sq ft wave pool generating 5-ft tropical ocean waves with beach lounge chairs.",
    bg: "bg-sky-50 text-sky-600 border-sky-200",
  },
  {
    title: "Kids Splash Kingdom",
    type: "Safe Kids Zone",
    desc: "Interactive water fort with 8 mini slides, water guns, and a 500-liter tipping bucket every 3 minutes.",
    bg: "bg-emerald-50 text-emerald-600 border-emerald-200",
  },
  {
    title: "Lazy River Float",
    type: "Relaxation",
    desc: "Smooth 300-meter winding river route through tropical gardens and waterfalls on rubber floats.",
    bg: "bg-amber-50 text-amber-600 border-amber-200",
  },
];

export default function WaterparkHighlight({ onOpenBooking }: WaterparkProps) {
  const [ticketCount, setTicketCount] = useState(2);
  const ticketPrice = 899;

  return (
    <section id="waterpark" className="py-24 bg-[#f8f8f6] text-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 relative h-[400px] sm:h-[480px] rounded-3xl overflow-hidden border border-gray-200 shadow-xl group">
            <Image
              src="/images/waterpark.png"
              alt="Aamrapaali Water Park"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

            <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-gray-200 flex items-center gap-2">
              <Waves className="w-4 h-4 text-[#c5a059]" />
              <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                Fun World & Water Park
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200 text-gray-900">
              <div className="font-serif text-2xl font-bold text-gray-900 mb-1">
                AAMRAPAALI WATERWORLD
              </div>
              <p className="text-xs text-gray-600">
                Open Daily 10:00 AM - 6:30 PM. Certified lifesavers on duty, temperature-controlled water filtration, and poolside restaurant.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f7f3eb] border border-[#c5a059]/40">
              <Sun className="w-4 h-4 text-[#c5a059]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#9e7930]">
                Summer Thrill Oasis
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              AAMRAPAALI <span className="text-gold-gradient">WATER PARK & FUN</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Unwind and beat the heat with state-of-the-art water rides, mega wave pool, lazy river float, and private cabana lounges. Perfect for family outings, school trips, and weekend corporate retreats.
            </p>

            {/* Quick Ticket Price Calculator */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Ticket className="w-5 h-5 text-[#c5a059]" />
                  <span className="font-serif text-lg font-bold text-gray-900">Day Pass Calculator</span>
                </div>
                <span className="text-xs font-bold text-[#9e7930]">₹899 / Person</span>
              </div>

              <div className="flex items-center justify-between bg-[#f8f8f6] p-3 rounded-xl border border-gray-200">
                <span className="text-xs font-bold text-gray-800">Pass Quantity</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                    className="w-8 h-8 rounded-lg bg-white border border-gray-300 text-gray-900 font-bold text-lg hover:bg-[#c5a059] hover:text-white transition-colors"
                  >
                    -
                  </button>
                  <span className="font-bold text-gray-900 text-sm w-4 text-center">{ticketCount}</span>
                  <button
                    onClick={() => setTicketCount(ticketCount + 1)}
                    className="w-8 h-8 rounded-lg bg-white border border-gray-300 text-gray-900 font-bold text-lg hover:bg-[#c5a059] hover:text-white transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase font-bold block">Total Day Pass Price</span>
                  <span className="font-serif text-2xl font-bold text-[#c5a059]">
                    ₹{ticketCount * ticketPrice}
                  </span>
                </div>

                <button
                  onClick={() => onOpenBooking(`Waterpark Day Pass (${ticketCount} Tickets)`)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#9e7930] hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md"
                >
                  <span>Book Tickets Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WATER_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#c5a059] transition-all duration-300 space-y-3 shadow-sm hover:shadow-md"
            >
              <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${slide.bg}`}>
                {slide.type}
              </span>
              <h3 className="font-serif text-xl font-bold text-gray-900">
                {slide.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {slide.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
