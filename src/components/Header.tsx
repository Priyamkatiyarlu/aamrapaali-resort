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
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>("VENUES");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const id = targetId.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const venueItems = [
    { label: "BUCKINGHAM PALACE", href: "#buckingham" },
    { label: "POOLSIDE LAWN", href: "#poolside-lawn" },
    { label: "VILAS LAWN", href: "#vilas-lawn" },
    { label: "THEME LAWN", href: "#theme-lawn" },
  ];

  const experienceItems = [
    { label: "ROYAL WEDDINGS", href: "#weddings" },
    { label: "EVENTS & GATHERINGS", href: "#events" },
    { label: "LUXURY STAYS", href: "#stays" },
    { label: "WATERPARK", href: "#waterpark" },
  ];

  const navItems = [
    { label: "ABOUT US", href: "#about" },
    {
      label: "VENUES",
      href: "#venues",
      hasDropdown: true,
      subItems: venueItems,
    },
    {
      label: "EXPERIENCES",
      href: "#weddings",
      hasDropdown: true,
      subItems: experienceItems,
    },
    { label: "GALLERY", href: "#gallery" },
    { label: "CONTACT", href: "#enquire" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm text-gray-900 py-2.5"
            : "bg-gradient-to-b from-black/85 via-black/40 to-transparent py-3 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Official Logo */}
            <Link href="/" className="flex items-center gap-3 group py-1">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 transition-transform group-hover:scale-105 drop-shadow-md">
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
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm sm:text-[15px] font-bold tracking-wider uppercase transition-colors py-1 relative group flex items-center gap-1.5 ${
                    isScrolled
                      ? "text-gray-900 hover:text-[#c5a059]"
                      : "text-white hover:text-[#f5c767] drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${
                        isScrolled ? "text-gray-600" : "text-white/80"
                      } group-hover:translate-y-0.5`}
                    />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#c5a059] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Right: Rectangular Call Button with Number */}
            <div className="hidden lg:flex items-center">
              <a
                href="tel:+919876543210"
                className={`px-4 py-2.5 rounded-none border text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 flex items-center gap-2.5 shadow-md group ${
                  isScrolled
                    ? "bg-gray-900 border-gray-900 text-white hover:bg-[#c5a059] hover:border-[#c5a059]"
                    : "bg-[#0b1726]/85 border-white/80 hover:bg-white hover:text-black hover:border-white text-white"
                }`}
              >
                <Phone className="w-4 h-4 shrink-0 text-[#c5a059] group-hover:text-inherit transition-colors" />
                <span className="tracking-wide whitespace-nowrap">+91 98765 43210</span>
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
                  <div className="relative w-16 h-16">
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
                      className="flex items-center justify-between text-base font-bold text-gray-800 hover:text-[#c5a059] py-2 border-b border-gray-50"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 space-y-3">
                <a
                  href="tel:+919876543210"
                  className="w-full py-3 px-4 bg-gray-900 hover:bg-[#c5a059] text-white rounded-none border border-gray-900 flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#c5a059]" />
                  <span>+91 98765 43210</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-none bg-[#c5a059] hover:bg-[#b08b46] text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-colors"
                >
                  BOOK NOW
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


