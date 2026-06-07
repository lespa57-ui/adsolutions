"use client";

import { motion } from "framer-motion";
import { FileText, Wrench, Calendar, Users, FileOutput, Package, BarChart3, Heart } from "lucide-react";

const exemples = [
  { icon: FileText, label: "Gestion de devis automatisée", color: "blue" },
  { icon: Wrench, label: "Gestion des interventions", color: "violet" },
  { icon: Calendar, label: "Gestion de planning", color: "pink" },
  { icon: Users, label: "Gestion des clients", color: "blue" },
  { icon: FileOutput, label: "Génération automatique de PDF", color: "violet" },
  { icon: Package, label: "Gestion de stock", color: "pink" },
  { icon: BarChart3, label: "Tableau de bord personnalisé", color: "blue" },
  { icon: Heart, label: "CRM sur mesure", color: "violet" },
];

const colorMap: Record<string, { border: string; icon: string; bg: string; hover: string }> = {
  blue: { border: "border-blue-500/25", icon: "text-blue-400", bg: "bg-blue-500/10", hover: "hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]" },
  violet: { border: "border-violet-500/25", icon: "text-violet-400", bg: "bg-violet-500/10", hover: "hover:border-violet-500/50 hover:shadow-[0_0_25px_rgba(124,58,237,0.15)]" },
  pink: { border: "border-pink-500/25", icon: "text-pink-400", bg: "bg-pink-500/10", hover: "hover:border-pink-500/50 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)]" },
};

export default function ExemplesSection() {
  return (
    <section id="exemples" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#050A1A]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-violet-700/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-pink-500/30 text-xs font-medium text-pink-400 tracking-wider uppercase mb-4">
            Exemples concrets
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Concrètement, que peut faire{" "}
            <span className="gradient-text">ADSolutions</span>
            <br className="hidden sm:block" /> pour votre entreprise&nbsp;?
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {exemples.map((ex, i) => {
            const c = colorMap[ex.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`glass rounded-2xl border ${c.border} ${c.hover} p-5 flex flex-col items-center text-center gap-3 transition-all duration-300 cursor-default`}
              >
                <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center`}>
                  <ex.icon className={c.icon} size={20} />
                </div>
                <p className="text-white/75 font-medium text-sm leading-snug">{ex.label}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass rounded-2xl border border-violet-500/20 p-7 text-center max-w-3xl mx-auto"
        >
          <p className="text-white/65 text-base leading-relaxed">
            Chaque entreprise est différente.{" "}
            <span className="text-white/85 font-medium">Tous les outils sont développés selon vos besoins réels.</span>
          </p>
          <a
            href="mailto:ADsolution@gmail.com?subject=Demande%20de%20devis%20ADSolutions"
            className="inline-flex items-center gap-2 mt-5 px-6 py-3 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 hover:opacity-90 shadow-[0_0_25px_rgba(124,58,237,0.3)] transition-all duration-300"
          >
            Discuter de mon projet
          </a>
        </motion.div>
      </div>
    </section>
  );
}
