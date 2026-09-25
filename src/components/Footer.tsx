"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Heart, ChevronRight, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-[#ffffff] text-gray-900 pt-16 pb-10 border-t border-gray-200 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-gray-200/80">
          
          {/* Column 1: Brand & Socials (4 Columns) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-16 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Aamrapaali Resort & Buckingham Palace"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-sm">
              India's premier 25-acre luxury heritage destination featuring Buckingham Palace grand banquet, royal destination wedding lawns, waterpark, luxury hotel stays, and fine dining.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#c5a059] text-gray-700 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#c5a059] text-gray-700 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#c5a059] text-gray-700 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Venues & Offerings (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base sm:text-lg font-bold text-gray-900 border-l-2 border-[#c5a059] pl-2.5">
              Venues & Offerings
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-600">
              <li>
                <a
                  href="#buckingham"
                  onClick={(e) => scrollToSection(e, "buckingham")}
                  className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3 h-3 text-[#c5a059] group-hover:translate-x-0.5 transition-transform" />
                  <span>Buckingham Palace</span>
                </a>
              </li>
              <li>
                <a
                  href="#poolside-lawn"
                  onClick={(e) => scrollToSection(e, "poolside-lawn")}
                  className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3 h-3 text-[#c5a059] group-hover:translate-x-0.5 transition-transform" />
                  <span>Poolside Lawn</span>
                </a>
              </li>
              <li>
                <a
                  href="#vilas-lawn"
                  onClick={(e) => scrollToSection(e, "vilas-lawn")}
                  className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3 h-3 text-[#c5a059] group-hover:translate-x-0.5 transition-transform" />
                  <span>Vilas Lawn</span>
                </a>
              </li>
              <li>
                <a
                  href="#theme-lawn"
                  onClick={(e) => scrollToSection(e, "theme-lawn")}
                  className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3 h-3 text-[#c5a059] group-hover:translate-x-0.5 transition-transform" />
                  <span>Theme Lawn</span>
                </a>
              </li>
              <li>
                <a
                  href="#weddings"
                  onClick={(e) => scrollToSection(e, "weddings")}
                  className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3 h-3 text-[#c5a059] group-hover:translate-x-0.5 transition-transform" />
                  <span>Royal Weddings</span>
                </a>
              </li>
              <li>
                <a
                  href="#waterpark"
                  onClick={(e) => scrollToSection(e, "waterpark")}
                  className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3 h-3 text-[#c5a059] group-hover:translate-x-0.5 transition-transform" />
                  <span>Water Park & Fun World</span>
                </a>
              </li>
              <li>
                <a
                  href="#stays"
                  onClick={(e) => scrollToSection(e, "stays")}
                  className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3 h-3 text-[#c5a059] group-hover:translate-x-0.5 transition-transform" />
                  <span>Luxury Hotel Stays</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base sm:text-lg font-bold text-gray-900 border-l-2 border-[#c5a059] pl-2.5">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-600">
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, "about")}
                  className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3 h-3 text-[#c5a059] group-hover:translate-x-0.5 transition-transform" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => scrollToSection(e, "why-us")}
                  className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3 h-3 text-[#c5a059] group-hover:translate-x-0.5 transition-transform" />
                  <span>Why Choose Us</span>
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => scrollToSection(e, "gallery")}
                  className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3 h-3 text-[#c5a059] group-hover:translate-x-0.5 transition-transform" />
                  <span>Photo Gallery</span>
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => scrollToSection(e, "testimonials")}
                  className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3 h-3 text-[#c5a059] group-hover:translate-x-0.5 transition-transform" />
                  <span>Testimonials</span>
                </a>
              </li>
              <li>
                <a
                  href="#enquire"
                  onClick={(e) => scrollToSection(e, "enquire")}
                  className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5 group font-semibold text-[#9e7930]"
                >
                  <ChevronRight className="w-3 h-3 text-[#c5a059] group-hover:translate-x-0.5 transition-transform" />
                  <span>Plan Your Event</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Royal Desk Contact (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base sm:text-lg font-bold text-gray-900 border-l-2 border-[#c5a059] pl-2.5">
              Royal Desk Contact
            </h4>
            <ul className="space-y-3 text-xs text-gray-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span className="leading-relaxed">Grand Trunk Road, Heritage Zone, Aamrapaali Resort Complex</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#c5a059] transition-colors font-medium text-gray-900">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href="mailto:info@aamrapaali.com" className="hover:text-[#c5a059] transition-colors font-medium text-gray-900">
                  info@aamrapaali.com
                </a>
              </li>
            </ul>

            {/* Quick Action Button */}
            <div className="pt-2">
              <a
                href="#enquire"
                onClick={(e) => scrollToSection(e, "enquire")}
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#c5a059] hover:bg-[#b08b46] text-white text-[11px] font-bold uppercase tracking-widest transition-all shadow-sm rounded-none"
              >
                BOOK AN EVENT ENQUIRY
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Aamrapaali Resort & Buckingham Palace. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <p className="text-xs text-gray-500">
              Designed & Developed by{" "}
              <a
                href="https://launchwebx.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#9e7930] hover:text-[#c5a059] hover:underline transition-colors"
              >
                LaunchWebX
              </a>
            </p>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex items-center gap-1.5 text-xs font-semibold text-[#9e7930] hover:text-gray-900 transition-colors"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
