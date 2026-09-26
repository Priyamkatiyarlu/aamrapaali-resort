"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";

const GALLERY_ITEMS = [
  { id: 1,  title: "Grand Wedding Ceremony",      category: "Wedding",    image: "/images/wedding.png" },
  { id: 2,  title: "Buckingham Palace Mandap",    category: "Wedding",    image: "/images/BUCKINGHAM PALACE Drone shot.png" },
  { id: 3,  title: "Haldi Celebration Lawn",      category: "Haldi",     image: "/images/Amrapaali.png" },
  { id: 4,  title: "Royal Haldi Ceremony",        category: "Haldi",     image: "/images/Luxury Stay Room inside.png" },
  { id: 5,  title: "Poolside Mehandi Evening",    category: "Mehandi",   image: "/images/Water Park.png" },
  { id: 6,  title: "Heritage Mehandi Decor",      category: "Mehandi",   image: "/images/events.png" },
  { id: 7,  title: "Royal Sangeet Gala Night",    category: "Sangeet",   image: "/images/events.png" },
  { id: 8,  title: "Vilas Lawn Sangeet Stage",    category: "Sangeet",   image: "/images/BUCKINGHAM PALACE front.png" },
  { id: 9,  title: "Grand Reception Banquet",     category: "Reception", image: "/images/BUCKINGHAM PALACE Drone shot.png" },
  { id: 10, title: "Candlelight Reception Hall",  category: "Reception", image: "/images/dining.png" },
  { id: 11, title: "Engagement Ring Ceremony",    category: "Engagement",image: "/images/wedding.png" },
  { id: 12, title: "Poolside Engagement Setup",   category: "Engagement",image: "/images/Water Park.png" },
];

const CATEGORIES = ["ALL", "WEDDING", "HALDI", "MEHANDI", "SANGEET", "RECEPTION", "ENGAGEMENT"];

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
        
        {/* Accent Tag (Clean, Without Side Lines) */}
        <div className="mb-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#16a34a]">
            VISUAL SPLENDOR
          </span>
        </div>

        {/* Main Title */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 tracking-wide mb-2">
          <span className="text-[#111e2e] font-bold">ROYAL</span>{" "}
          <span className="text-[#16a34a]">PHOTO & MEDIA GALLERY</span>
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
              className={`text-xs sm:text-sm tracking-widest uppercase transition-all pb-2 font-medium relative cursor-pointer ${
                activeTab === cat
                  ? "text-gray-900 font-bold"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {cat}
              {activeTab === cat && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#16a34a]" />
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
                <Maximize2 className="w-4 h-4 text-[#16a34a]" />
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
            <div className="relative max-w-5xl w-full h-[80vh] overflow-hidden border border-[#16a34a]/40">
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
