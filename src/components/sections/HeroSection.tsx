"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#050A1A]" />

      {/* Radial glow top-left */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none" />
      {/* Radial glow top-right */}
      <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[100px] pointer-events-none" />
      {/* Radial glow bottom-center */}
      <div className="absolute bottom-[0%] left-[40%] w-[400px] h-[400px] rounded-full bg-pink-600/10 blur-[120px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-violet-500/30 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 animate-pulse" />
              <span className="text-xs font-medium text-white/70 tracking-wider uppercase">
                Lot-et-Garonne & Dordogne
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Gagnez{" "}
              <span className="gradient-text">plusieurs heures</span>
              <br />
              par semaine grâce à des logiciels
              <br />
              conçus pour votre entreprise
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-lg text-white/60 leading-relaxed mb-8 max-w-lg space-y-3"
            >
              <p>Vous perdez du temps avec Excel, des tâches répétitives ou des outils mal adaptés à votre activité ?</p>
              <p>ADSolutions développe des <span className="text-white/80">logiciels et applications sur mesure</span> pour automatiser votre travail et améliorer votre productivité.</p>
            </motion.div>

            {/* Counters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {[
                { label: "Logiciels sur mesure", color: "border-blue-500/30 text-blue-400" },
                { label: "Applications web", color: "border-violet-500/30 text-violet-400" },
                { label: "Sites internet professionnels", color: "border-pink-500/30 text-pink-400" },
              ].map((item) => (
                <span key={item.label} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass border ${item.color} text-xs font-medium`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                  {item.label}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="mailto:ADsolution@gmail.com?subject=Demande%20de%20devis%20-%20ADSolutions"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 hover:from-blue-500 hover:via-violet-500 hover:to-pink-500 shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_45px_rgba(124,58,237,0.6)] transition-all duration-300"
              >
                <Mail size={18} />
                Obtenir un devis gratuit
              </a>
              <button
                onClick={() => scrollTo("#services")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white glass border border-white/15 hover:border-violet-500/50 hover:bg-white/5 transition-all duration-300"
              >
                Découvrir les services
                <ArrowRight size={18} />
              </button>
            </motion.div>

            {/* Reassurance checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-8 flex flex-col gap-2"
            >
              {[
                "Développement 100% sur mesure",
                "Accompagnement local Lot-et-Garonne & Dordogne",
                "Maintenance et suivi possibles",
                "Applications web, desktop et sites internet",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/60">
                  <span className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative w-[380px] h-[380px] sm:w-[480px] sm:h-[480px]">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-violet-500/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-blue-500/15 animate-[spin_15s_linear_infinite_reverse]" />

              {/* Glow rings */}
              <div className="absolute inset-[15%] rounded-full bg-gradient-to-br from-blue-600/10 via-violet-600/20 to-pink-600/10 blur-2xl" />

              {/* Center logo */}
              <div className="absolute inset-[8%] flex items-center justify-center">
                <div className="relative w-full h-full" style={{ filter: "brightness(1.15) drop-shadow(0 0 20px rgba(124,58,237,0.5))" }}>
                  <Image
                    src="/LogoVF-transparent.png"
                    alt="ADSolutions"
                    fill
                    sizes="(max-width: 640px) 340px, 480px"
                    className="object-contain"
                    priority
                  />
                  {/* Reflection */}
                  <div className="absolute inset-0 scale-y-[-1] origin-bottom opacity-20" style={{ transform: "scaleY(-1)", maskImage: "linear-gradient(to bottom, transparent 50%, black 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 50%, black 100%)" }}>
                    <Image src="/LogoVF-transparent.png" alt="" fill sizes="(max-width: 640px) 340px, 480px" className="object-contain" />
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-4 glass border border-blue-500/30 rounded-xl px-3 py-2 shadow-glow-blue"
              >
                <p className="text-xs font-semibold text-blue-400">App Desktop</p>
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 right-2 glass border border-pink-500/30 rounded-xl px-3 py-2 shadow-glow-pink"
              >
                <p className="text-xs font-semibold text-pink-400">Site Web</p>
              </motion.div>

              <motion.div
                animate={{ y: [-6, 10, -6] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-16 left-2 glass border border-violet-500/30 rounded-xl px-3 py-2 shadow-glow"
              >
                <p className="text-xs font-semibold text-violet-400">App Web</p>
              </motion.div>

              <motion.div
                animate={{ y: [10, -6, 10] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-14 left-0 glass border border-white/20 rounded-xl px-3 py-2"
              >
                <p className="text-xs font-semibold text-white/70">Logiciel Métier</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-gradient-to-b from-blue-400 to-violet-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
