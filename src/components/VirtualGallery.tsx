"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";

const GALLERY_ITEMS = [
  { id: 1, title: "Aamrapaali Heritage Facade", category: "Resort", image: "/images/hero.png" },
  { id: 2, title: "Buckingham Palace Grand Ballroom", category: "Palace", image: "/images/buckingham.png" },
  { id: 3, title: "Royal Destination Mandap Setup", category: "Weddings", image: "/images/wedding.png" },
  { id: 4, title: "Tropical Wave Pool & Slides", category: "Waterpark", image: "/images/waterpark.png" },
  { id: 5, title: "Presidential Villa Suite Bedroom", category: "Stays", image: "/images/stay.png" },
  { id: 6, title: "Imperial Fine Dining Table", category: "Dining", image: "/images/dining.png" },
];

const CATEGORIES = ["All", "Resort", "Palace", "Weddings", "Waterpark", "Stays", "Dining"];

export default function VirtualGallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const filteredItems = activeTab === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="py-24 bg-[#ffffff] text-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9e7930] block mb-2">
            Visual Splendor
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            ROYAL <span className="text-gold-gradient">PHOTO & MEDIA GALLERY</span>
          </h2>
          <p className="text-sm text-gray-600">
            Immerse yourself in the grandeur of Aamrapaali Resort & Buckingham Palace.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === cat
                  ? "bg-[#c5a059] text-white shadow-md"
                  : "bg-white text-gray-700 hover:text-[#c5a059] border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => setActiveImage(item.image)}
                className="relative h-72 rounded-2xl overflow-hidden border border-gray-200 group cursor-pointer shadow-md hover:shadow-xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                <div className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-gray-900 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-[#c5a059]" />
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#f2d488] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#f2d488] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
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
            <div className="relative max-w-5xl w-full h-[80vh] rounded-2xl overflow-hidden border border-[#c5a059]/40">
              <Image
                src={activeImage}
                alt="Enlarged view"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 p-3 rounded-full bg-white text-gray-900 border border-gray-300"
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
