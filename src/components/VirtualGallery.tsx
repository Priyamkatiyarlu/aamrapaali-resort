"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";

const GALLERY_ITEMS = [
  { id: 1, title: "Presidential Royal Suite", category: "Stays", image: "/images/stay.png" },
  { id: 2, title: "Aamrapaali Heritage Palace", category: "Resort", image: "/images/hero.png" },
  { id: 3, title: "Royal Sangeet & Gala", category: "Weddings", image: "/images/events.png" },
  { id: 4, title: "Buckingham Palace Hall", category: "Palace", image: "/images/buckingham.png" },
  { id: 5, title: "Imperial Fine Dining", category: "Dining", image: "/images/dining.png" },
  { id: 6, title: "Royal Mandap Wedding Lawn", category: "Weddings", image: "/images/wedding.png" },
  { id: 7, title: "Tropical Wave Pool", category: "Waterpark", image: "/images/waterpark.png" },
  { id: 8, title: "Heritage Palace Gardens", category: "Resort", image: "/images/hero.png" },
  { id: 9, title: "Grand Banquet Ballroom", category: "Palace", image: "/images/buckingham.png" },
  { id: 10, title: "Luxury Pool Cottage", category: "Stays", image: "/images/stay.png" },
  { id: 11, title: "Royal Banquet Dining", category: "Dining", image: "/images/dining.png" },
  { id: 12, title: "Aqua World Water Slides", category: "Waterpark", image: "/images/waterpark.png" },
];

const CATEGORIES = ["ALL", "RESORT", "PALACE", "WEDDINGS", "WATERPARK", "STAYS", "DINING"];

export default function VirtualGallery() {
  const [activeTab, setActiveTab] = useState("ALL");
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const filteredItems = activeTab === "ALL"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category.toUpperCase() === activeTab);

  // Show max 6 items (2 rows of 3 columns)
  const displayedItems = filteredItems.slice(0, 6);

  return (
    <section id="gallery" className="w-full bg-[#ffffff] pt-14 lg:pt-16 pb-0 text-gray-900 relative">
      
      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        
        {/* Accent Tag with Horizontal Gold Lines */}
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="w-12 sm:w-16 h-[1px] bg-[#c5a059]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#9e7930]">
            VISUAL SPLENDOR
          </span>
          <div className="w-12 sm:w-16 h-[1px] bg-[#c5a059]" />
        </div>

        {/* Main Title */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 tracking-wide mb-2">
          <span className="text-[#111e2e] font-bold">ROYAL</span>{" "}
          <span className="text-[#c5a059]">PHOTO & MEDIA GALLERY</span>
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-gray-600 font-sans max-w-xl mx-auto mb-6">
          Immerse yourself in the grandeur of Aamrapaali Resort & Buckingham Palace.
        </p>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap border-b border-gray-200/60 pb-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`text-xs sm:text-sm tracking-widest uppercase transition-all pb-2 font-medium relative ${
                activeTab === cat
                  ? "text-gray-900 font-bold"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {cat}
              {activeTab === cat && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c5a059]" />
              )}
            </button>
          ))}
        </div>

      </div>

      {/* Edge-to-Edge Full Width 3-Column Gallery Grid (Max 6 items) */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
        <AnimatePresence mode="popLayout">
          {displayedItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={() => setActiveImage(item.image)}
              className="relative h-[280px] sm:h-[340px] lg:h-[380px] w-full overflow-hidden group cursor-pointer"
            >
              {/* Image with very slow and long zoom effect on hover and hover-release */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110 rounded-none"
              />
              
              {/* Default Subtle Vignette Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

              {/* Slight Black Tint Overlay on Hover (reverts smoothly with 1500ms slow duration) */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-[1500ms] ease-out pointer-events-none" />

              {/* Top Right Enlarge Icon */}
              <div className="absolute top-4 right-4 p-2 rounded-none bg-white/90 text-gray-900 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <Maximize2 className="w-4 h-4 text-[#c5a059]" />
              </div>

              {/* Bottom Left Title (Fixed white color without text color change on hover) */}
              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-white drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 flex items-center justify-center cursor-pointer"
          >
            <div className="relative max-w-5xl w-full h-[80vh] overflow-hidden border border-[#c5a059]/40">
              <Image
                src={activeImage}
                alt="Enlarged view"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 p-3 bg-white text-gray-900 border border-gray-300 shadow-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
