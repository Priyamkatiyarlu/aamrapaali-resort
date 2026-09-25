"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LawnsSection from "@/components/LawnsSection";
import WeddingsCelebrationsParallax from "@/components/WeddingsCelebrationsParallax";
import LuxuryStayParallax from "@/components/LuxuryStayParallax";
import EventsGatheringsParallax from "@/components/EventsGatheringsParallax";
import WaterParkParallax from "@/components/WaterParkParallax";
import WhyChooseUs from "@/components/WhyChooseUs";
import VirtualGallery from "@/components/VirtualGallery";
import Testimonials from "@/components/Testimonials";
import EnquirySection from "@/components/EnquirySection";
import ReservationModal from "@/components/ReservationModal";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Footer from "@/components/Footer";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState("Buckingham Palace Wedding");
  const [selectedGuests, setSelectedGuests] = useState("500+ Guests");

  const handleOpenBooking = (experience?: string, guests?: string) => {
    if (experience) setSelectedExperience(experience);
    if (guests) setSelectedGuests(guests);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#fcfbf9] text-[#1a1a1a] overflow-x-hidden selection:bg-[#c5a059] selection:text-white">
      {/* Floating Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Hero Section */}
      <HeroSection onOpenBooking={handleOpenBooking} />

      {/* About Us Section */}
      <AboutSection onOpenBooking={handleOpenBooking} />

      {/* Lawns & Venues Showcase Section */}
      <LawnsSection onOpenBooking={handleOpenBooking} />

      {/* Parallax Content Sections */}
      <WeddingsCelebrationsParallax onOpenBooking={handleOpenBooking} />
      <EventsGatheringsParallax onOpenBooking={handleOpenBooking} />
      <LuxuryStayParallax onOpenBooking={handleOpenBooking} />
      <WaterParkParallax onOpenBooking={handleOpenBooking} />

      {/* Why Choose Us Section */}
      <WhyChooseUs onOpenBooking={handleOpenBooking} />

      {/* Virtual Media Gallery */}
      <VirtualGallery />

      {/* Guest Reviews & Testimonials */}
      <Testimonials />

      {/* Full-Width Enquiry Section */}
      <EnquirySection onOpenBooking={handleOpenBooking} />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Contact Widget */}
      <WhatsAppWidget />

      {/* Interactive Reservation / Inquiry Modal */}
      <ReservationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultExperience={selectedExperience}
        defaultGuests={selectedGuests}
      />
    </main>
  );
}
