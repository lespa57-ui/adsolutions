"use client";

import { motion } from "framer-motion";
import { MessageSquare, Search, Lightbulb, Code2, CheckCircle, Wrench } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Échange gratuit",
    description: "Premier contact pour comprendre votre activité, vos contraintes et vos objectifs.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    glow: "rgba(59,130,246,0.15)",
  },
  {
    number: "02",
    icon: Search,
    title: "Analyse du besoin",
    description: "Étude approfondie de vos processus pour identifier les points à optimiser.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    glow: "rgba(124,58,237,0.15)",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Proposition de solution",
    description: "Présentation d'une solution technique sur mesure, claire et adaptée à votre budget.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    glow: "rgba(168,85,247,0.15)",
  },
  {
    number: "04",
    icon: Code2,
    title: "Développement",
    description: "Création de votre outil avec des technologies modernes, propres et maintenables.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/30",
    glow: "rgba(236,72,153,0.15)",
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "Livraison",
    description: "Mise en production soignée avec tests et corrections pour une solution qui fonctionne parfaitement.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    glow: "rgba(16,185,129,0.15)",
  },
  {
    number: "06",
    icon: Wrench,
    title: "Support et maintenance",
    description: "Suivi continu, corrections de bugs et ajout de nouvelles fonctionnalités selon vos besoins.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    glow: "rgba(6,182,212,0.15)",
  },
];

export default function MethodeSection() {
  return (
    <section id="methode" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#050A1A]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-700/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-pink-500/30 text-xs font-medium text-pink-400 tracking-wider uppercase mb-4">
            Notre processus
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Une méthode <span className="gradient-text">simple et efficace</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            De la première discussion à la livraison, chaque étape est pensée pour
            votre satisfaction.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative glass glass-hover rounded-2xl p-6 border ${step.border} overflow-hidden`}
                style={{ boxShadow: `0 8px 32px ${step.glow}` }}
              >
                {/* Step number - large faded */}
                <div className="absolute top-4 right-5 text-6xl font-black text-white/[0.04] select-none pointer-events-none leading-none">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${step.bg} flex items-center justify-center mb-4`}>
                  <Icon className={step.color} size={22} />
                </div>

                {/* Step number small */}
                <span className={`text-xs font-bold ${step.color} tracking-widest uppercase mb-2 block`}>
                  Étape {step.number}
                </span>

                <h3 className="text-white font-semibold text-base mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Duration indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass border border-violet-500/25">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 animate-pulse" />
            <p className="text-white/60 text-sm">
              La plupart des projets sont livrés entre{" "}
              <span className="text-white font-semibold">1 et 6 semaines</span>{" "}
              selon leur complexité.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
