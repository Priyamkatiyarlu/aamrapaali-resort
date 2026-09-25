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

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.label}
                      className="relative group"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => handleScrollTo(e, item.href)}
                        className={`text-[11px] xl:text-xs font-semibold tracking-widest uppercase transition-colors py-2 relative flex items-center gap-1 ${
                          isScrolled
                            ? "text-gray-800 hover:text-[#c5a059]"
                            : "text-white/90 hover:text-white"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-3 h-3 transition-transform duration-200 ${
                            activeDropdown === item.label ? "rotate-180 text-[#c5a059]" : ""
                          } ${isScrolled ? "text-gray-500" : "text-white/70"}`}
                        />
                      </a>

                      {/* Clean Dropdown Menu without header bar or subtext */}
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.98 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 mt-1 w-56 bg-white/98 backdrop-blur-lg border border-gray-200 shadow-2xl rounded-lg overflow-hidden py-1.5 text-gray-900 z-50"
                          >
                            {item.subItems?.map((subItem) => (
                              <a
                                key={subItem.label}
                                href={subItem.href}
                                onClick={(e) => handleScrollTo(e, subItem.href)}
                                className="group/item px-4 py-2.5 flex items-center justify-between hover:bg-[#f8f5ee] transition-colors border-b border-gray-50 last:border-0"
                              >
                                <span className="text-xs font-bold text-gray-800 group-hover/item:text-[#c5a059] transition-colors uppercase tracking-wider">
                                  {subItem.label}
                                </span>
                                <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover/item:text-[#c5a059] group-hover/item:translate-x-0.5 transition-all" />
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className={`text-[11px] xl:text-xs font-semibold tracking-widest uppercase transition-colors py-1 relative group flex items-center gap-1 ${
                      isScrolled
                        ? "text-gray-800 hover:text-[#c5a059]"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                  </a>
                );
              })}
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

                <div className="py-6 space-y-2">
                  {navItems.map((item) => {
                    if (item.hasDropdown) {
                      return (
                        <div key={item.label} className="border-b border-gray-50 py-2">
                          <div className="flex items-center justify-between">
                            <a
                              href={item.href}
                              onClick={(e) => handleScrollTo(e, item.href)}
                              className="text-sm font-bold text-gray-800 hover:text-[#c5a059]"
                            >
                              {item.label}
                            </a>
                            <button
                              onClick={() =>
                                setOpenMobileAccordion(
                                  openMobileAccordion === item.label ? null : item.label
                                )
                              }
                              className="p-1.5 text-gray-500 hover:text-gray-900"
                              aria-label={`Toggle ${item.label} dropdown`}
                            >
                              <ChevronDown
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  openMobileAccordion === item.label
                                    ? "rotate-180 text-[#c5a059]"
                                    : ""
                                }`}
                              />
                            </button>
                          </div>

                          <AnimatePresence>
                            {openMobileAccordion === item.label && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-4 mt-2 space-y-2 border-l-2 border-[#c5a059]/40 overflow-hidden"
                              >
                                {item.subItems?.map((subItem) => (
                                  <a
                                    key={subItem.label}
                                    href={subItem.href}
                                    onClick={(e) => handleScrollTo(e, subItem.href)}
                                    className="block py-1.5 text-xs font-bold text-gray-700 hover:text-[#c5a059] uppercase tracking-wider"
                                  >
                                    {subItem.label}
                                  </a>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => handleScrollTo(e, item.href)}
                        className="flex items-center justify-between text-sm font-bold text-gray-800 hover:text-[#c5a059] py-2 border-b border-gray-50"
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </a>
                    );
                  })}
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


