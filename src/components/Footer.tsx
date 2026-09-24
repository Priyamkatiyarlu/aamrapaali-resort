"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Sparkles, Send, Heart, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer id="footer" className="bg-[#ffffff] text-gray-900 pt-16 pb-12 border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#fcfbf9] border border-gray-200 mb-16 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7f3eb] border border-[#c5a059]/40 text-xs font-bold text-[#9e7930] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                Royal Concierge Newsletter
              </div>
              <h3 className="font-serif text-3xl font-bold text-gray-900">
                RECEIVE EXCLUSIVE <span className="text-gold-gradient">WEDDING & EVENT</span> OFFERS
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Subscribe to get priority booking dates, wedding decor showcases, and waterpark seasonal packages.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="p-4 rounded-xl bg-white border border-[#c5a059] text-[#9e7930] flex items-center gap-3 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#c5a059]" />
                  <span className="text-xs font-bold">Subscribed! Welcome to Aamrapaali Club.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 text-xs border border-gray-300 focus:border-[#c5a059] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#9e7930] hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shrink-0 shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Join</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-200">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Aamrapaali Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed max-w-sm">
              India's premier 25-acre luxury heritage destination featuring Buckingham Palace grand banquet, royal destination wedding lawns, waterpark, luxury hotel stays, and fine dining.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="Instagram" className="p-2.5 rounded-full bg-gray-100 text-gray-700 hover:bg-[#c5a059] hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="p-2.5 rounded-full bg-gray-100 text-gray-700 hover:bg-[#c5a059] hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="p-2.5 rounded-full bg-gray-100 text-gray-700 hover:bg-[#c5a059] hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-gray-900 border-l-2 border-[#c5a059] pl-2">
              Venues & Offerings
            </h4>
            <ul className="space-y-2 text-xs text-gray-700">
              <li><a href="#buckingham" className="hover:text-[#c5a059] transition-colors">Buckingham Palace</a></li>
              <li><a href="#weddings" className="hover:text-[#c5a059] transition-colors">Royal Weddings</a></li>
              <li><a href="#waterpark" className="hover:text-[#c5a059] transition-colors">Water Park & Fun World</a></li>
              <li><a href="#services" className="hover:text-[#c5a059] transition-colors">Luxury Hotel Stays</a></li>
              <li><a href="#services" className="hover:text-[#c5a059] transition-colors">Imperial Fine Dining</a></li>
            </ul>
          </div>

          {/* Guest Services */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-gray-900 border-l-2 border-[#c5a059] pl-2">
              Guest Services
            </h4>
            <ul className="space-y-2 text-xs text-gray-700">
              <li><a href="#weddings" className="hover:text-[#c5a059] transition-colors">Wedding Cost Estimator</a></li>
              <li><a href="#waterpark" className="hover:text-[#c5a059] transition-colors">Day Pass Ticket Calculator</a></li>
              <li><a href="#gallery" className="hover:text-[#c5a059] transition-colors">Photo & Video Gallery</a></li>
              <li><a href="#hero" className="hover:text-[#c5a059] transition-colors">Resort Map & Layout</a></li>
              <li><a href="#weddings" className="hover:text-[#c5a059] transition-colors">Celebrity Catering Menu</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-gray-900 border-l-2 border-[#c5a059] pl-2">
              Royal Desk Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-700">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>Grand Trunk Road, Heritage Zone, Aamrapaali Resort Complex</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#c5a059]">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href="mailto:info@aamrapaali.com" className="hover:text-[#c5a059]">info@aamrapaali.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Aamrapaali Resort & Buckingham Palace. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for Unrivaled UI/UX
          </p>
        </div>
      </div>
    </footer>
  );
}
