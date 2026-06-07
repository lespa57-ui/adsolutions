"use client";

import { motion } from "framer-motion";

const items = [
  "Solutions développées sur mesure",
  "Accompagnement local",
  "Maintenance possible",
];

export default function CredibilityBanner() {
  return (
    <div className="relative overflow-hidden border-y border-white/8">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/15 via-violet-900/20 to-pink-900/15" />
      <div className="absolute inset-0 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-violet-400 flex-shrink-0" />
              <span className="text-white/60 text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
