"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Code2, Sparkles } from "lucide-react";

const badges = [
  { icon: Code2, label: "Développeur indépendant", color: "border-blue-500/30 text-blue-400 bg-blue-500/10" },
  { icon: MapPin, label: "Lot-et-Garonne & Dordogne", color: "border-violet-500/30 text-violet-400 bg-violet-500/10" },
  { icon: Sparkles, label: "Solutions sur mesure", color: "border-pink-500/30 text-pink-400 bg-pink-500/10" },
];

export default function BehindSection() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#04081A]" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-700/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-violet-700/6 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-violet-500/30 text-xs font-medium text-violet-400 tracking-wider uppercase mb-4">
            À propos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Derrière{" "}
            <span className="gradient-text">ADSolutions</span>
          </h2>
          <p className="text-white/45 text-lg">Un interlocuteur unique pour vos projets numériques</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Photo card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-600/15 via-violet-600/25 to-pink-600/15 blur-2xl" />
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden border border-white/10 glass flex flex-col items-center justify-center gap-4 p-8">
                <Image
                  src="/Arnaud.jpg"
                  alt="Arnaud Darlay – Fondateur ADSolutions"
                  fill
                  sizes="(max-width: 640px) 288px, 320px"
                  className="object-cover object-center"
                  priority
                />
                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-violet-500/40 rounded-tl-lg" />
                <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-violet-500/40 rounded-tr-lg" />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-violet-500/40 rounded-bl-lg" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-violet-500/40 rounded-br-lg" />
              </div>
            </div>
          </motion.div>

          {/* Text card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Premium glass card */}
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-violet-600/10 to-pink-600/10" />
              <div className="absolute inset-[1px] bg-[#080C22] rounded-3xl" />
              <div className="relative z-10 p-7 sm:p-9">
                <h3 className="text-2xl font-bold text-white mb-1">Arnaud Darlay</h3>
                <p className="text-violet-400 text-sm font-medium mb-5">Développeur indépendant · Fondateur d&apos;ADSolutions</p>

                <div className="space-y-4 text-white/60 leading-relaxed mb-6">
                  <p>
                    J&apos;accompagne les entreprises du{" "}
                    <span className="text-white/80 font-medium">Lot-et-Garonne et de Dordogne</span>{" "}
                    dans la création de logiciels métier, applications web et sites internet sur mesure.
                  </p>
                  <p>
                    Mon objectif est simple : vous faire gagner du temps grâce à des outils adaptés à votre activité.
                  </p>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {badges.map((badge) => (
                    <span key={badge.label} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium ${badge.color}`}>
                      <badge.icon size={12} />
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
