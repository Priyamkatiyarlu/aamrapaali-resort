"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hello%20Aamrapaali%20Resort,%20I%20would%20like%20to%20inquire%20about%20booking%20and%20availability."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
        Chat with Us
      </span>
    </a>
  );
}
