"use client";

import React from "react";
import { Star, Quote, Award } from "lucide-react";

const REVIEWS = [
  {
    name: "Vikramaditya & Radhika Singh",
    role: "Royal Destination Wedding",
    text: "Buckingham Palace at Aamrapaali exceeded every expectation for our 3-day wedding. The 35,000 sq ft pillar-less hall comfortably accommodated our 2,500 guests with flawless luxury service.",
    rating: 5,
    event: "December Destination Wedding",
  },
  {
    name: "Dr. Ananya Mehta",
    role: "Corporate Annual Convention",
    text: "The acoustics, LED screen setups, and catering for 1,200 delegates were world-class. Aamrapaali is easily the finest resort & banquet destination in the region.",
    rating: 5,
    event: "National Healthcare Summit",
  },
  {
    name: "Rajesh & Priya Sharma",
    role: "Family Waterpark Weekend Stay",
    text: "The Presidential Pool Villa gave us complete privacy while our kids enjoyed the Water World wave pool all day. The Awadhi cuisine at Imperial Dining was extraordinary!",
    rating: 5,
    event: "Weekend Resort Staycation",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#f8f8f6] text-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f7f3eb] border border-[#c5a059]/40 mb-3">
            <Award className="w-4 h-4 text-[#c5a059]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#9e7930]">
              Guest Testimonials
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            RECOLLECTIONS OF <span className="text-gold-gradient">ROYALTY & GUESTS</span>
          </h2>
          <p className="text-sm text-gray-600">
            Hear what our esteemed patrons have to say about their celebrations at Aamrapaali.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-gray-200 flex flex-col justify-between relative shadow-md hover:shadow-xl hover:border-[#c5a059] transition-all duration-300"
            >
              <div>
                <Quote className="w-10 h-10 text-[#c5a059]/20 mb-4" />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#c5a059] fill-[#c5a059]" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-serif text-lg font-bold text-gray-900">
                  {rev.name}
                </h4>
                <div className="flex items-center justify-between text-xs text-[#9e7930]">
                  <span>{rev.role}</span>
                  <span className="text-[10px] text-gray-500">{rev.event}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
