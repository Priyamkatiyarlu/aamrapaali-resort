"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink, Star } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    name: "Vikramaditya & Radhika Singh",
    role: "Royal Destination Wedding",
    date: "December 2025",
    text: "Buckingham Palace at Aamrapaali exceeded every expectation for our 3-day wedding. The 35,000 sq ft pillar-less hall comfortably accommodated our 2,500 guests with flawless luxury service.",
    image: "/images/hero.png",
    avatar: "/images/wedding.png",
    venue: "BUCKINGHAM PALACE",
    resort: "AAMRAPAALI RESORT",
  },
  {
    id: 2,
    name: "Dr. Ananya & Sameer Mehta",
    role: "Corporate Annual Convention",
    date: "November 2025",
    text: "The acoustics, LED screen setups, and grand banquet catering for 1,200 delegates were world-class. Aamrapaali is easily the finest resort & banquet destination in the region.",
    image: "/images/events.png",
    avatar: "/images/events.png",
    venue: "GRAND CONVENTION HALL",
    resort: "AAMRAPAALI RESORT",
  },
  {
    id: 3,
    name: "Rajesh & Priya Sharma",
    role: "Family Waterpark Weekend Stay",
    date: "October 2025",
    text: "The Presidential Pool Villa gave us complete privacy while our kids enjoyed the Water World wave pool all day. The Awadhi cuisine at Imperial Dining was extraordinary!",
    image: "/images/waterpark.png",
    avatar: "/images/waterpark.png",
    venue: "AAMRAPAALI WATER WORLD",
    resort: "AAMRAPAALI RESORT",
  },
  {
    id: 4,
    name: "Karan & Tanya Kapoor",
    role: "Pre-Wedding Sangeet & Mehendi",
    date: "January 2026",
    text: "The Poolside Lawn with fairy lights transformed our Sangeet evening into a magical fairytale. The royal decor and hospitable team handled everything effortlessly.",
    image: "/images/wedding.png",
    avatar: "/images/hero.png",
    venue: "POOLSIDE ROYAL LAWN",
    resort: "AAMRAPAALI RESORT",
  },
  {
    id: 5,
    name: "Siddharth & Meera Goel",
    role: "Luxury Staycation & Dining",
    date: "February 2026",
    text: "Staying in the Royal Suite felt like living in a palace. Impeccable 5-star service, pristine gardens, and magnificent architecture everywhere you look.",
    image: "/images/stay.png",
    avatar: "/images/stay.png",
    venue: "ROYAL SUITES & VILLAS",
    resort: "AAMRAPAALI RESORT",
  },
  {
    id: 6,
    name: "Harshvardhan & Ritu Rathore",
    role: "Grand Reception & Gala",
    date: "March 2026",
    text: "Our 3,000 guest reception was executed flawlessly! From valet parking for 500 cars to Swarovski illuminated banquet hall setups, Aamrapaali sets the gold standard.",
    image: "/images/buckingham.png",
    avatar: "/images/buckingham.png",
    venue: "BUCKINGHAM PALACE",
    resort: "AAMRAPAALI RESORT",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const current = REVIEWS[currentIndex];

  return (
    <section id="testimonials" className="w-full h-auto lg:h-screen lg:min-h-screen bg-[#fcfbf9] text-gray-900 border-t border-gray-200 overflow-hidden py-0">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Left Column: Full Viewport Height Full-Bleed Image */}
        <div className="lg:col-span-6 relative w-full h-[450px] sm:h-[550px] lg:h-full">
          <Image
            src={current.image}
            alt={current.venue}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 rounded-none"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          
          {/* Bottom Left Venue Label Overlay */}
          <div className="absolute bottom-6 left-6 text-white space-y-0.5 pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#c5a059]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#f5d78a]">
                {current.venue}
              </span>
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-200 pl-7">
              {current.resort}
            </p>
          </div>
        </div>

        {/* Right Column: Vertically Centered Header, Active Card & Navigation */}
        <div className="lg:col-span-6 w-full h-full flex flex-col justify-center px-6 sm:px-10 lg:px-12 xl:px-16 py-8 lg:py-10 space-y-6">
          
          {/* Header Content */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9e7930] block">
              GUEST TESTIMONIALS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-bold text-gray-900 leading-tight">
              REAL STORIES, <br />
              <span className="text-[#c5a059]">LASTING MEMORIES</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed pt-1 max-w-lg">
              Hear from families, couples and guests who celebrated unforgettable moments at Aamrapaali.
            </p>
          </div>

          {/* Testimonial Card + Slider Controls Container */}
          <div className="flex items-center gap-4 sm:gap-6 pt-2">
            
            {/* White Testimonial Card */}
            <div className="flex-1 bg-white border border-gray-200 p-6 sm:p-8 rounded-none shadow-sm space-y-6 relative">
              
              {/* Top Row: Google Reviews Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Official Colorful Google G Icon */}
                  <div className="w-8 h-8 relative shrink-0">
                    <svg viewBox="0 0 24 24" className="w-8 h-8">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h4 className="font-sans text-sm font-bold text-gray-900 leading-none mb-1">
                      Google Reviews
                    </h4>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-gray-900">5.0</span>
                      <div className="flex items-center text-[#ffc107]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#ffc107] stroke-none" />
                        ))}
                      </div>
                      <span className="text-[10px] text-gray-500 font-medium">
                        2,400+ reviews
                      </span>
                    </div>
                  </div>
                </div>

                {/* View on Google Link */}
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-medium text-[#4285F4] hover:underline flex items-center gap-1"
                >
                  <span>View on Google</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Quote Text */}
              <div className="relative">
                <span className="text-4xl sm:text-5xl font-serif text-[#c5a059]/40 leading-none absolute -top-4 -left-2 pointer-events-none">
                  “
                </span>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans relative z-10 pt-1">
                  "{current.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-2 border-t border-gray-100">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-gray-200">
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-sans text-sm font-bold text-gray-900">
                    {current.name}
                  </h5>
                  <p className="text-[11px] text-gray-500 font-medium">
                    {current.role} • {current.date}
                  </p>
                </div>
              </div>

            </div>

            {/* Slider Navigation Buttons (Far Right) */}
            <div className="flex flex-col items-center gap-4 shrink-0">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-gray-300 hover:border-[#c5a059] bg-white text-gray-700 hover:text-[#c5a059] flex items-center justify-center transition-all shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Vertical Gold Accent Line */}
              <div className="w-[1px] h-8 bg-gray-300" />

              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-gray-300 hover:border-[#c5a059] bg-white text-gray-700 hover:text-[#c5a059] flex items-center justify-center transition-all shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Counter */}
              <span className="text-[11px] font-medium text-gray-500 tracking-wider">
                {String(currentIndex + 1).padStart(2, "0")} / {String(REVIEWS.length).padStart(2, "0")}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
