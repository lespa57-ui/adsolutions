"use client";

import { motion } from "framer-motion";
import { FileSpreadsheet, RefreshCw, Database, GitMerge, Clock } from "lucide-react";

const problems = [
  { icon: FileSpreadsheet, label: "Des fichiers Excel compliqués ?", color: "blue" },
  { icon: RefreshCw, label: "Des tâches répétitives ?", color: "violet" },
  { icon: Database, label: "Une gestion manuelle des données ?", color: "pink" },
  { icon: GitMerge, label: "Plusieurs logiciels qui ne communiquent pas entre eux ?", color: "blue" },
  { icon: Clock, label: "Des pertes de temps quotidiennes ?", color: "violet" },
];

const colorMap: Record<string, { border: string; icon: string; glow: string; bg: string }> = {
  blue: {
    border: "border-blue-500/30",
    icon: "text-blue-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
    bg: "bg-blue-500/10",
  },
  violet: {
    border: "border-violet-500/30",
    icon: "text-violet-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]",
    bg: "bg-violet-500/10",
  },
  pink: {
    border: "border-pink-500/30",
    icon: "text-pink-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]",
    bg: "bg-pink-500/10",
  },
};

export default function ProblemsSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#04081A]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-violet-700/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-pink-500/30 text-xs font-medium text-pink-400 tracking-wider uppercase mb-4">
            Vous reconnaissez-vous ?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Votre entreprise perd-elle du temps avec&nbsp;
            <span className="gradient-text">...</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {problems.map((problem, i) => {
            const c = colorMap[problem.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className={`group glass rounded-2xl border ${c.border} p-6 flex items-start gap-4 transition-all duration-300 ${c.glow} cursor-default`}
              >
                <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center flex-shrink-0`}>
                  <problem.icon className={c.icon} size={20} />
                </div>
                <p className="text-white/70 font-medium leading-snug pt-1">{problem.label}</p>
              </motion.div>
            );
          })}

          {/* Last card — full width on lg */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="sm:col-span-2 lg:col-span-3 glass rounded-2xl border border-violet-500/20 p-8 text-center"
          >
            <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto">
              Nous développons des solutions adaptées à votre activité pour{" "}
              <span className="text-white font-semibold">automatiser ces tâches</span> et vous permettre de vous concentrer sur votre métier.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
