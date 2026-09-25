"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer id="footer" className="bg-white border-t border-gray-100 font-sans">


      {/* ── Main Footer Body ───────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* Col 1 — Brand (4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Aamrapaali Resort"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#16a34a]">Aamrapaali Resort</p>
                <p className="text-xs text-gray-400 font-medium mt-0.5">Luxury · Heritage · Celebration</p>
              </div>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              India's premier 25-acre luxury heritage destination — grand banquets, royal wedding lawns, a water world, luxury stays &amp; fine dining, all under one iconic estate.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2.5 pt-1">
              {[
                {
                  label: "Instagram", href: "https://instagram.com",
                  path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                },
                {
                  label: "Facebook", href: "https://facebook.com",
                  path: "M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z",
                },
                {
                  label: "YouTube", href: "https://youtube.com",
                  path: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
                },
              ].map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-gray-200 bg-gray-50 hover:bg-[#16a34a] hover:border-[#16a34a] text-gray-500 hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Venues (3) */}
          <div className="lg:col-span-3 space-y-5">
            <div className="flex items-center gap-2">
     
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900">
                Venues
              </h4>
            </div>
            <ul className="space-y-3">
              {[
                { label: "Buckingham Palace", id: "buckingham" },
                { label: "Poolside Lawn",     id: "poolside-lawn" },
                { label: "Vilas Lawn",        id: "vilas-lawn" },
                { label: "Theme Lawn",        id: "theme-lawn" },
              ].map(({ label, id }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => scrollToSection(e, id)}
                    className="text-sm text-gray-500 hover:text-[#16a34a] transition-colors flex items-center gap-2.5 group w-fit"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#16a34a] transition-colors shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Explore (2) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900">
                Explore
              </h4>
            </div>
            <ul className="space-y-3">
              {[
                { label: "About Us",        id: "about" },
                { label: "Why Choose Us",   id: "why-us" },
                { label: "Photo Gallery",   id: "gallery" },
                { label: "Testimonials",    id: "testimonials" },
                { label: "Plan Your Event", id: "enquire", accent: true },
              ].map(({ label, id, accent }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => scrollToSection(e, id)}
                    className={`text-sm transition-colors flex items-center gap-2.5 group w-fit ${
                      accent ? "text-[#16a34a] font-semibold hover:text-[#15803d]" : "text-gray-500 hover:text-[#16a34a]"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                      accent ? "bg-[#16a34a]" : "bg-gray-300 group-hover:bg-[#16a34a]"
                    }`} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact (3) */}
          <div className="lg:col-span-3 space-y-5">
            <div className="flex items-center gap-2">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900">
                Contact
              </h4>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#16a34a] shrink-0 mt-0.5" />
                <p className="text-sm text-gray-500 leading-relaxed">
                  Grand Trunk Road, Heritage Zone,<br />Aamrapaali Resort Complex
                </p>
              </div>
              <a href="tel:+919876543210" className="flex items-center gap-3 group w-fit">
                <Phone className="w-4 h-4 text-[#16a34a] shrink-0" />
                <span className="text-sm text-gray-700 group-hover:text-[#16a34a] transition-colors font-medium">
                  +91 98765 43210
                </span>
              </a>
              <a href="mailto:info@aamrapaali.com" className="flex items-center gap-3 group w-fit">
                <Mail className="w-4 h-4 text-[#16a34a] shrink-0" />
                <span className="text-sm text-gray-700 group-hover:text-[#16a34a] transition-colors font-medium">
                  info@aamrapaali.com
                </span>
              </a>
            </div>

            {/* Hours */}
            <div className="pt-1 border-t border-gray-100 space-y-1">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Open Daily</p>
              <p className="text-sm text-gray-500">9:00 AM – 10:00 PM</p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ─────────────────────────────────────── */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Aamrapaali Resort &amp; Buckingham Palace. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <p className="text-xs text-gray-400">
              Designed &amp; Developed by{" "}
              <a
                href="https://launchwebx.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[#16a34a] hover:underline font-semibold"
              >
                LaunchWebX
              </a>
            </p>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex items-center gap-1 text-[11px] font-semibold text-gray-400 hover:text-[#16a34a] transition-colors cursor-pointer"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
              TOP
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
