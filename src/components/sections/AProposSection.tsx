"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Mail, CheckCircle } from "lucide-react";

export default function AProposSection() {
  return (
    <section id="apropos" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#04081A]" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-violet-700/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-blue-700/6 blur-[100px] rounded-full pointer-events-none" />

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Votre{" "}
            <span className="gradient-text">interlocuteur unique</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/20 via-violet-600/30 to-pink-600/20 blur-2xl scale-110" />
              {/* Photo frame */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden border border-violet-500/30 glass flex items-center justify-center">
                <Image
                  src="/Arnaud.jpg"
                  alt="Arnaud Darlay – Fondateur ADSolutions"
                  fill
                  sizes="(max-width: 640px) 288px, 320px"
                  className="object-cover object-center"
                  priority
                />
                {/* Decorative corner accents */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-violet-500/50 rounded-tl-lg" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-violet-500/50 rounded-tr-lg" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-violet-500/50 rounded-bl-lg" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-violet-500/50 rounded-br-lg" />
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">Arnaud Darlay</h3>
              <p className="text-violet-400 font-medium">Développeur indépendant · Fondateur d&apos;ADSolutions</p>
            </div>

            <div className="flex flex-col gap-4 text-white/65 leading-relaxed">
              <p>
                J&apos;accompagne les entreprises du{" "}
                <span className="text-white/80 font-medium">Lot-et-Garonne et de Dordogne</span>{" "}
                dans la création de logiciels métier, applications web et sites internet sur mesure.
              </p>
              <p>
                Mon objectif est simple : vous faire gagner du temps grâce à des outils adaptés à votre activité.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {[
                "Développeur full-stack indépendant",
                "Spécialisé logiciels métier sur mesure",
                "Proximité et réactivité garanties",
                "Suivi personnalisé de A à Z",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-violet-400 flex-shrink-0" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <MapPin size={14} className="text-violet-400" />
                Lot-et-Garonne & Dordogne
              </div>
              <a href="mailto:contact@adsolutions47.fr" className="flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors text-sm">
                <Mail size={14} className="text-violet-400" />
                contact@adsolutions47.fr
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
