"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown, ChevronRight } from "lucide-react";

interface HeaderProps {
  onOpenBooking: (experience?: string) => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 40);

      const offsetHeight = 120;
      if (currentScrollY > offsetHeight) {
        if (currentScrollY > lastScrollY) {
          // Scrolling DOWN (top to bottom) -> Hide navbar
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling UP (bottom to top) -> Show navbar
          setIsVisible(true);
        }
      } else {
        // At top of page -> Always visible
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Clean 5-item navbar like Viraj
  const navItems = [
    { label: "ABOUT US", href: "#about", hasDropdown: true },
    { label: "VENUES", href: "#buckingham" },
    { label: "ROYAL WEDDINGS", href: "#weddings" },
    { label: "WATERPARK", href: "#waterpark" },
    { label: "CONTACT", href: "#footer" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm text-gray-900 py-3"
            : "bg-gradient-to-b from-black/80 via-black/30 to-transparent py-4 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Official Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 shrink-0 transition-transform group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="Aamrapaali Official Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Center: Clean Navbar Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-xs font-semibold tracking-widest uppercase transition-colors py-1 relative group flex items-center gap-1 ${
                    isScrolled
                      ? "text-gray-800 hover:text-[#c5a059]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`w-3 h-3 transition-transform ${
                        isScrolled ? "text-gray-500" : "text-white/70"
                      } group-hover:translate-y-0.5`}
                    />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#c5a059] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Right: Circular Phone & Mail Icon Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919876543210"
                aria-label="Call Us"
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all shadow-md ${
                  isScrolled
                    ? "bg-gray-100 text-gray-800 border-gray-200 hover:bg-[#c5a059] hover:text-white hover:border-[#c5a059]"
                    : "bg-[#111e2e]/80 text-white border-white/20 hover:bg-[#c5a059] hover:border-[#c5a059]"
                }`}
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href="mailto:info@aamrapaali.com"
                aria-label="Email Us"
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all shadow-md ${
                  isScrolled
                    ? "bg-gray-100 text-gray-800 border-gray-200 hover:bg-[#c5a059] hover:text-white hover:border-[#c5a059]"
                    : "bg-[#111e2e]/80 text-white border-white/20 hover:bg-[#c5a059] hover:border-[#c5a059]"
                }`}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className={`p-2 rounded-lg ${
                  isScrolled ? "bg-gray-100 text-gray-900" : "bg-black/60 text-white"
                }`}
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white text-gray-900 p-6 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/images/logo.png"
                      alt="Aamrapaali Official Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full bg-gray-100 text-gray-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="py-6 space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between text-sm font-bold text-gray-800 hover:text-[#c5a059] py-2 border-b border-gray-50"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-full bg-[#c5a059] text-white text-xs font-bold uppercase tracking-wider shadow-lg"
                >
                  Reserve Venue / Stay
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
