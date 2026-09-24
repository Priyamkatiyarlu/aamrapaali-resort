"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Phone, Mail, User, Sparkles, CheckCircle2, Crown } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultExperience?: string;
  defaultGuests?: string;
}

export default function ReservationModal({
  isOpen,
  onClose,
  defaultExperience = "Buckingham Palace Wedding",
  defaultGuests = "500+ Guests",
}: ModalProps) {
  const [experience, setExperience] = useState(defaultExperience);
  const [guests, setGuests] = useState(defaultGuests);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultExperience) setExperience(defaultExperience);
    if (defaultGuests) setGuests(defaultGuests);
  }, [defaultExperience, defaultGuests]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white text-gray-900 border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-[#c5a059] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-20 h-20 rounded-full bg-[#c5a059]/20 border-2 border-[#c5a059] text-[#c5a059] flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-gray-900">
                Reservation Request Received!
              </h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Thank you, <span className="text-[#c5a059] font-bold">{name || "Valued Guest"}</span>. Our Royal Concierge Team will call you back shortly on <span className="text-[#c5a059] font-bold">{phone || "your contact number"}</span> with availability details.
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Crown className="w-5 h-5 text-[#c5a059]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#9e7930]">
                  Direct Reservation Inquiry
                </span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                RESERVE YOUR <span className="text-gold-gradient">ROYAL EXPERIENCE</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-[#9e7930] uppercase tracking-wider block mb-1.5">
                    Category / Experience
                  </label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full p-3.5 rounded-xl bg-[#f8f8f6] text-gray-900 text-sm font-semibold border border-gray-300 focus:border-[#c5a059] focus:outline-none"
                  >
                    <option value="Buckingham Palace Wedding">Buckingham Palace Grand Wedding</option>
                    <option value="Waterpark & Fun World Pass">Waterpark & Fun World Pass</option>
                    <option value="Presidential Suite Stay">Luxury Hotel Villa / Suite Stay</option>
                    <option value="Corporate Gala & Banquets">Corporate Gala & Banquets</option>
                    <option value="Imperial Fine Dining Table">Imperial Fine Dining Table</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#9e7930] uppercase tracking-wider block mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="His / Her Highness"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-10 p-3 rounded-xl bg-[#f8f8f6] text-gray-900 text-sm border border-gray-300 focus:border-[#c5a059] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#9e7930] uppercase tracking-wider block mb-1.5">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-10 p-3 rounded-xl bg-[#f8f8f6] text-gray-900 text-sm border border-gray-300 focus:border-[#c5a059] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#9e7930] uppercase tracking-wider block mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        placeholder="royalty@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 p-3 rounded-xl bg-[#f8f8f6] text-gray-900 text-sm border border-gray-300 focus:border-[#c5a059] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#9e7930] uppercase tracking-wider block mb-1.5">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full pl-10 p-3 rounded-xl bg-[#f8f8f6] text-gray-900 text-sm border border-gray-300 focus:border-[#c5a059] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#9e7930] uppercase tracking-wider block mb-1.5">
                    Event Details & Special Requests
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about expected guest count, theme setup, catering preferences or specific questions..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#f8f8f6] text-gray-900 text-sm border border-gray-300 focus:border-[#c5a059] focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#9e7930] hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all mt-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Submit Royal Reservation Inquiry</span>
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
