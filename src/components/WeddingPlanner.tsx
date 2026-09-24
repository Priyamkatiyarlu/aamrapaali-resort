"use client";

import React, { useState } from "react";
import { Heart, CheckCircle2, Calculator, Send } from "lucide-react";

interface WeddingPlannerProps {
  onOpenBooking: (details?: string) => void;
}

export default function WeddingPlanner({ onOpenBooking }: WeddingPlannerProps) {
  const [guestCount, setGuestCount] = useState(500);
  const [eventDays, setEventDays] = useState(2);
  const [selectedVenue, setSelectedVenue] = useState("Buckingham Palace Grand Hall");
  const [cateringStyle, setCateringStyle] = useState("Royal Gourmet 7-Course");

  const perGuestCost = cateringStyle.includes("Royal") ? 2200 : 1600;
  const venueBaseFee = selectedVenue.includes("Buckingham") ? 350000 : 200000;
  const estimatedTotal = (guestCount * perGuestCost * eventDays) + (venueBaseFee * eventDays);

  return (
    <section id="weddings" className="py-24 bg-[#ffffff] text-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f7f3eb] border border-[#c5a059]/40">
              <Heart className="w-4 h-4 text-[#c5a059]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#9e7930]">
                Interactive Wedding Planner
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              DESIGN YOUR <span className="text-gold-gradient">ROYAL WEDDING</span> EXPERIENCE
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans">
              From grand Sangeet nights at Buckingham Palace to dreamy morning Mandap vows on the Royal Lawns, use our interactive estimator to customize your fairytale celebration.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#fcfbf9] border border-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 font-serif">5,000 Guest Capacity</h4>
                  <p className="text-xs text-gray-600">Accommodate intimate gatherings of 200 or grand royal weddings up to 5,000 guests.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#fcfbf9] border border-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 font-serif">Dedicated Wedding Concierge</h4>
                  <p className="text-xs text-gray-600">Personal event manager for decor, celebrity artist booking, hospitality & airport shuttles.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#fcfbf9] border border-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 font-serif">Luxury Accommodation Suites</h4>
                  <p className="text-xs text-gray-600">100+ luxury rooms & presidential villas for wedding family stays.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Calculator Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#fcfbf9] p-6 sm:p-8 rounded-3xl border border-[#c5a059]/40 shadow-xl relative">
              <div className="flex items-center justify-between pb-6 border-b border-gray-200 mb-6">
                <div className="flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-[#c5a059]" />
                  <h3 className="font-serif text-2xl font-bold text-gray-900">Instant Wedding Estimator</h3>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#c5a059]/10 text-[#9e7930] border border-[#c5a059]/30">
                  Live Calculator
                </span>
              </div>

              <div className="space-y-6">
                {/* 1. Guest Count Slider */}
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-gray-900 mb-2">
                    <span className="text-[#9e7930] uppercase tracking-wider">Number of Guests</span>
                    <span className="text-lg font-serif text-[#c5a059]">{guestCount} Guests</span>
                  </div>
                  <input
                    type="range"
                    min={100}
                    max={3500}
                    step={50}
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#c5a059]"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                    <span>100 Intimate</span>
                    <span>1,000 Grand</span>
                    <span>3,500 Royal Palace</span>
                  </div>
                </div>

                {/* 2. Number of Days */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#9e7930] block mb-2">
                    Duration of Wedding Celebrations
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((days) => (
                      <button
                        key={days}
                        type="button"
                        onClick={() => setEventDays(days)}
                        className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                          eventDays === days
                            ? "bg-[#c5a059] text-white font-bold shadow-md"
                            : "bg-white text-gray-800 border border-gray-200 hover:border-[#c5a059]"
                        }`}
                      >
                        {days} {days === 1 ? "Day Event" : "Days Extravaganza"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Preferred Venue */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#9e7930] block mb-2">
                    Preferred Main Venue
                  </label>
                  <select
                    value={selectedVenue}
                    onChange={(e) => setSelectedVenue(e.target.value)}
                    className="w-full p-3.5 rounded-xl bg-white text-gray-900 text-xs font-semibold border border-gray-300 focus:border-[#c5a059] focus:outline-none cursor-pointer"
                  >
                    <option value="Buckingham Palace Grand Hall">Buckingham Palace Grand Ballroom (Indoor 35,000 sq ft)</option>
                    <option value="Grand Royal Lawn">Grand Royal Lawn & Poolside Deck (Outdoor 50,000 sq ft)</option>
                    <option value="Combined Buckingham Palace & Lawn">Combined Palace & Royal Lawns (Full Resort Exclusive)</option>
                  </select>
                </div>

                {/* 4. Catering Style */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#9e7930] block mb-2">
                    Culinary & Catering Theme
                  </label>
                  <select
                    value={cateringStyle}
                    onChange={(e) => setCateringStyle(e.target.value)}
                    className="w-full p-3.5 rounded-xl bg-white text-gray-900 text-xs font-semibold border border-gray-300 focus:border-[#c5a059] focus:outline-none cursor-pointer"
                  >
                    <option value="Royal Gourmet 7-Course">Royal Gourmet 7-Course (Awadhi, Marwari, Pan-Asian & Continental)</option>
                    <option value="Grand Traditional Feast">Grand Traditional Indian Pure Veg Banquet</option>
                  </select>
                </div>

                {/* Calculated Quote Box */}
                <div className="p-5 rounded-2xl bg-white border border-[#c5a059]/40 flex flex-wrap items-center justify-between gap-4 shadow-sm">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#9e7930]">
                      Estimated Budget Range
                    </div>
                    <div className="font-serif text-3xl font-bold text-[#c5a059]">
                      ₹{(estimatedTotal / 100000).toFixed(2)} Lakhs*
                    </div>
                    <div className="text-[10px] text-gray-500">
                      *Includes venue, catering, setup & basic luxury decor for {eventDays} days.
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      onOpenBooking(
                        `Wedding Quote Inquiry: ${guestCount} Guests, ${eventDays} Days, ${selectedVenue}`
                      )
                    }
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#9e7930] hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Get Detailed Quote PDF</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
