"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronRight, ChevronDown } from "lucide-react";

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
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {/* Trigger */}
                    <a
                      href={item.href}
                      onClick={(e) => handleScrollTo(e, item.href)}
                      className={`text-sm sm:text-[15px] font-bold tracking-wider uppercase transition-colors py-1 relative group flex items-center gap-1 ${
                        isScrolled
                          ? "text-gray-900 hover:text-[#16a34a]"
                          : "text-white hover:text-white/80 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                      <span className={`absolute bottom-0 left-0 h-[2px] bg-[#16a34a] transition-all duration-300 ${
                        activeDropdown === item.label ? "w-full" : "w-0 group-hover:w-full"
                      }`} />
                    </a>

                    {/* Dropdown Panel */}
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-gray-100 shadow-xl z-50 overflow-hidden"
                        >
                          <div className="h-[3px] bg-[#16a34a] w-full" />
                          {item.subItems!.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              onClick={(e) => handleScrollTo(e, sub.href)}
                              className="flex items-center gap-2.5 px-4 py-3 text-[11px] font-bold uppercase tracking-widest text-gray-700 hover:text-[#16a34a] hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0 group"
                            >
                              <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#16a34a] transition-colors shrink-0" />
                              {sub.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className={`text-sm sm:text-[15px] font-bold tracking-wider uppercase transition-colors py-1 relative group flex items-center ${
                      isScrolled
                        ? "text-gray-900 hover:text-[#16a34a]"
                        : "text-white hover:text-white/80 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#16a34a] transition-all duration-300 group-hover:w-full" />
                  </a>
                )
              )}
            </nav>

            {/* Right: Rectangular Call Button with Number */}
            <div className="hidden lg:flex items-center">
              <a
                href="tel:+919876543210"
                className={`px-4 py-2.5 rounded-none border text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 flex items-center gap-2.5 shadow-md bg-white text-gray-900 cursor-pointer ${
                  isScrolled
                    ? "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                    : "border-white hover:bg-gray-100"
                }`}
              >
                <Phone className="w-4 h-4 shrink-0 text-[#16a34a]" />
                <span className="tracking-wide whitespace-nowrap font-bold text-gray-900">+91 98765 43210</span>
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

                <div className="py-6 space-y-1">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      <button
                        onClick={(e) => {
                          if (item.hasDropdown) {
                            setOpenMobileAccordion(
                              openMobileAccordion === item.label ? null : item.label
                            );
                          } else {
                            handleScrollTo(e as unknown as React.MouseEvent<HTMLAnchorElement>, item.href);
                          }
                        }}
                        className="w-full flex items-center justify-between text-base font-bold text-gray-800 hover:text-[#16a34a] py-3 border-b border-gray-100 cursor-pointer"
                      >
                        <span>{item.label}</span>
                        {item.hasDropdown ? (
                          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${
                            openMobileAccordion === item.label ? "rotate-180 text-[#16a34a]" : ""
                          }`} />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                      {item.hasDropdown && openMobileAccordion === item.label && (
                        <div className="pl-4 pb-2 space-y-1 border-b border-gray-100">
                          {item.subItems!.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              onClick={(e) => handleScrollTo(e, sub.href)}
                              className="flex items-center gap-2 py-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-[#16a34a] transition-colors"
                            >
                              <span className="w-1 h-1 rounded-full bg-gray-300" />
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 space-y-3">
                <a
                  href="tel:+919876543210"
                  className="w-full py-3 px-4 bg-white hover:bg-gray-50 text-gray-900 rounded-none border border-gray-300 flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#16a34a]" />
                  <span className="font-bold text-gray-900">+91 98765 43210</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-none bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-colors cursor-pointer"
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


