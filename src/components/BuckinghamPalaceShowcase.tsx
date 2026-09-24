"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Crown, CheckCircle2, ShieldCheck, Users, Maximize2, Zap, ArrowRight } from "lucide-react";

interface BuckinghamProps {
  onOpenBooking: (experience?: string) => void;
}

const SETUPS = [
  {
    id: "royal-wedding",
    title: "Royal Destination Wedding",
    capacity: "Up to 5,000 Guests",
    area: "35,000 sq ft Indoor + 50,000 sq ft Lawn",
    desc: "Grand royal wedding configuration featuring a central elevated mandap, golden stage, bridal walkway, and luxury buffet zones.",
    image: "/images/buckingham.png",
  },
  {
    id: "corporate-gala",
    title: "International Corporate Gala",
    capacity: "Up to 4,000 Theater Seating",
    area: "Pillar-less Acoustic Ballroom",
    desc: "Equipped with ultra-high resolution LED screens, concert acoustics, stage rigging, and VIP lounge seating.",
    image: "/images/hero.png",
  },
  {
    id: "luxury-reception",
    title: "Grand Banquet & Reception",
    capacity: "Up to 2,500 Round Table Seating",
    area: "Crystal Chandelier Banquet",
    desc: "Opulent round table setup with fine china, champagne towers, and live culinary station walkways.",
    image: "/images/wedding.png",
  },
];

export default function BuckinghamPalaceShowcase({ onOpenBooking }: BuckinghamProps) {
  const [activeSetup, setActiveSetup] = useState(SETUPS[0]);

  return (
    <section id="buckingham" className="py-24 bg-[#ffffff] text-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f7f3eb] border border-[#c5a059]/40 mb-4">
            <Crown className="w-4 h-4 text-[#c5a059]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#9e7930]">
              The Crown Jewel Venue
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            BUCKINGHAM <span className="text-gold-gradient">PALACE</span>
          </h2>
          <p className="text-base text-gray-600 leading-relaxed font-sans">
            An architectural masterpiece designed for royalty. Featuring a 35,000 sq. ft. pillar-less grand ballroom with sparkling Swarovski crystal chandeliers and 50,000 sq. ft. manicured royal lawns.
          </p>
        </div>

        {/* Interactive Layout Switcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Column: Layout Selector & Specs */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-4 border-l-4 border-[#c5a059] pl-3">
              Explore Event Layout Configurations
            </h3>

            <div className="space-y-3">
              {SETUPS.map((setup) => (
                <button
                  key={setup.id}
                  onClick={() => setActiveSetup(setup)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 border ${
                    activeSetup.id === setup.id
                      ? "bg-[#fcfaf5] border-[#c5a059] shadow-lg ring-1 ring-[#c5a059]"
                      : "bg-white border-gray-200 hover:border-[#c5a059]/50 hover:bg-[#fdfbf7]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif text-lg font-bold text-gray-900">
                      {setup.title}
                    </span>
                    <span className="text-xs font-bold text-[#9e7930] px-2.5 py-1 bg-[#c5a059]/10 rounded-full">
                      {setup.capacity}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {setup.desc}
                  </p>
                </button>
              ))}
            </div>

            {/* Quick Specs Grid */}
            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-[#fdfbf7] border border-[#c5a059]/30 flex items-center gap-3">
                <Maximize2 className="w-5 h-5 text-[#c5a059]" />
                <div>
                  <div className="text-[10px] text-[#9e7930] font-bold uppercase">Ballroom Area</div>
                  <div className="text-xs font-bold text-gray-900">35,000 Sq. Ft.</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#fdfbf7] border border-[#c5a059]/30 flex items-center gap-3">
                <Users className="w-5 h-5 text-[#c5a059]" />
                <div>
                  <div className="text-[10px] text-[#9e7930] font-bold uppercase">Total Capacity</div>
                  <div className="text-xs font-bold text-gray-900">5,000 Guests</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#fdfbf7] border border-[#c5a059]/30 flex items-center gap-3">
                <Zap className="w-5 h-5 text-[#c5a059]" />
                <div>
                  <div className="text-[10px] text-[#9e7930] font-bold uppercase">Architecture</div>
                  <div className="text-xs font-bold text-gray-900">100% Pillar-less</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#fdfbf7] border border-[#c5a059]/30 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#c5a059]" />
                <div>
                  <div className="text-[10px] text-[#9e7930] font-bold uppercase">VIP Suites</div>
                  <div className="text-xs font-bold text-gray-900">2 Bridal Suites</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={() => onOpenBooking("Buckingham Palace Wedding")}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#9e7930] hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <Crown className="w-4 h-4" />
                <span>Reserve Buckingham Palace</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Setup Preview */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeSetup.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-[420px] sm:h-[500px] rounded-2xl overflow-hidden border border-[#c5a059]/30 shadow-2xl group"
            >
              <Image
                src={activeSetup.image}
                alt={activeSetup.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-white/95 backdrop-blur-md border border-[#c5a059]/30 text-gray-900 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-serif text-2xl font-bold text-gray-900">
                    {activeSetup.title}
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#c5a059] text-white">
                    {activeSetup.area}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-700">
                  {activeSetup.desc}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#fcfbf9] border border-gray-200">
            <CheckCircle2 className="w-6 h-6 text-[#c5a059] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-lg font-bold text-gray-900 mb-1">Pillar-Less Grand Dome</h4>
              <p className="text-xs text-gray-600">Unobstructed stage views for every guest with high acoustic ceiling dampening.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#fcfbf9] border border-gray-200">
            <CheckCircle2 className="w-6 h-6 text-[#c5a059] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-lg font-bold text-gray-900 mb-1">Helipad & Royal Driveway</h4>
              <p className="text-xs text-gray-600">Dedicated helipad landing strip and royal horse carriage driveway for grand bridal entries.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#fcfbf9] border border-gray-200">
            <CheckCircle2 className="w-6 h-6 text-[#c5a059] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-lg font-bold text-gray-900 mb-1">Celebrity Master Chefs</h4>
              <p className="text-xs text-gray-600">In-house gourmet catering covering royal Awadhi, Marwari, Pan-Asian & Global fine dining.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
