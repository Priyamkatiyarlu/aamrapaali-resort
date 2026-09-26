"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Waves, Bed, Utensils, Briefcase, ArrowUpRight, Check, Star, Users } from "lucide-react";

interface ExplorerProps {
  onOpenBooking: (experience?: string) => void;
}

const CATEGORIES = [
  { id: "all", label: "All Offerings", icon: Sparkles },
  { id: "weddings", label: "Royal Weddings", icon: Heart },
  { id: "waterpark", label: "Waterpark & Fun", icon: Waves },
  { id: "stays", label: "Luxury Stays", icon: Bed },
  { id: "dining", label: "Fine Dining", icon: Utensils },
  { id: "corporate", label: "Conventions & Galas", icon: Briefcase },
];

const EXPERIENCES = [
  {
    id: 1,
    category: "weddings",
    title: "Buckingham Palace Grand Wedding",
    tagline: "Ultra Luxury Heritage Destination Wedding",
    image: "/images/BUCKINGHAM PALACE Drone shot.png",
    capacity: "1,000 - 5,000 Guests",
    price: "Custom Package",
    rating: 4.95,
    reviews: 142,
    features: ["Pillar-less Grand Hall", "50,000 sq ft Royal Lawn", "2 Bridal VIP Suites", "Valet for 500 Cars"],
    highlight: "Most Popular Venue",
  },
  {
    id: 2,
    category: "weddings",
    title: "Royal Lawn & Mandap Ceremony",
    tagline: "Under the Open Sky & Fairy-lit Canopy",
    image: "/images/wedding.png",
    capacity: "500 - 3,000 Guests",
    price: "Custom Package",
    rating: 4.92,
    reviews: 98,
    features: ["Traditional Floral Mandap", "Ambient Fairy Light Trees", "Live Shehnai Stage", "Custom Fireworks Area"],
    highlight: "Romantic Outdoor Setup",
  },
  {
    id: 3,
    category: "waterpark",
    title: "Aamrapaali Water World Day Pass",
    tagline: "Wave Pool, High-Speed Slides & Fun Oasis",
    image: "/images/Water Park.png",
    capacity: "Family & Group Day Out",
    price: "₹899 / Person",
    rating: 4.88,
    reviews: 320,
    features: ["Gigantic Artificial Wave Pool", "12 High-Speed Water Slides", "Kids Splash Water Fort", "Poolside Restaurant"],
    highlight: "Family Best Seller",
  },
  {
    id: 4,
    category: "stays",
    title: "Presidential Royal Villa with Private Pool",
    tagline: "Opulent Heritage Stay for VIP Guests",
    image: "/images/Luxury Stay Room inside.png",
    capacity: "2 Adults + 2 Kids",
    price: "₹18,500 / Night",
    rating: 4.98,
    reviews: 76,
    features: ["Private Heated Plunge Pool", "King Canopy Bed", "24/7 Personal Butler", "Complimentary Breakfast & Spa"],
    highlight: "Luxury Signature Suite",
  },
  {
    id: 5,
    category: "dining",
    title: "Imperial Fine Dining & Candlelight Grill",
    tagline: "Royal Heritage Culinary Experience",
    image: "/images/dining.png",
    capacity: "Table Reservations & Private Dining",
    price: "₹2,500 for two",
    rating: 4.90,
    reviews: 210,
    features: ["Authentic Royal Awadhi Feast", "Live Tandoor & Barbecue", "Courtyard Candlelight Seating", "Vintage Wine Cellar"],
    highlight: "Fine Dining",
  },
  {
    id: 6,
    category: "corporate",
    title: "Executive Convention & Exhibition Center",
    tagline: "Corporate Summits, Product Launches & Banquets",
    image: "/images/Amrapaali.png",
    capacity: "100 - 2,500 Delegates",
    price: "Day & Residential Packages",
    rating: 4.85,
    reviews: 64,
    features: ["4K High-Res LED Walls", "Breakout Boardrooms", "Hi-Speed Wi-Fi 6", "Delegate Buffet Dining"],
    highlight: "Corporate Preferred",
  },
];

export default function ExperienceExplorer({ onOpenBooking }: ExplorerProps) {
  const [activeTab, setActiveTab] = useState("all");

  const filteredExperiences = activeTab === "all"
    ? EXPERIENCES
    : EXPERIENCES.filter((exp) => exp.category === activeTab);

  return (
    <section id="services" className="py-24 bg-[#f8f8f6] text-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9e7930] block mb-2">
            Curated Experiences & Venues
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            WORLD-CLASS <span className="text-gold-gradient">HERITAGE LUXURY</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-sans">
            From majestic wedding palaces to thrill-packed waterparks and presidential pool villas, discover everything Aamrapaali has to offer.
          </p>
        </div>

        {/* Category Tab Buttons */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-[#c5a059] text-white shadow-md scale-105"
                    : "bg-white text-gray-700 hover:text-[#c5a059] border border-gray-200 hover:border-[#c5a059]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp) => (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#c5a059] transition-all duration-300 hover:-translate-y-2 group shadow-md hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#c5a059]/40 text-[10px] font-bold text-[#9e7930] uppercase tracking-wider shadow-sm">
                      {exp.highlight}
                    </span>

                    <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-xs font-semibold text-white">
                      <Star className="w-3.5 h-3.5 text-[#c5a059] fill-[#c5a059]" />
                      <span>{exp.rating}</span>
                      <span className="text-[10px] text-gray-300">({exp.reviews})</span>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-[#9e7930] font-semibold mb-1">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" /> {exp.capacity}
                      </span>
                      <span className="font-bold text-gray-900">{exp.price}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#c5a059] transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-gray-500 italic mb-4">
                      {exp.tagline}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {exp.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                          <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenBooking(exp.title)}
                    className="w-full py-3 rounded-xl bg-gray-900 hover:bg-[#c5a059] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md"
                  >
                    <span>Inquire / Reserve</span>
                    <ArrowUpRight className="w-4 h-4 text-[#c5a059] group-hover/btn:text-white transition-colors" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
