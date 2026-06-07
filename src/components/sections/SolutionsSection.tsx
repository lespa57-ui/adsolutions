"use client";

import { motion } from "framer-motion";
import { FileText, Calendar, Package, Wrench, FileOutput, BarChart3, Users, Activity } from "lucide-react";

const solutions = [
  { icon: FileText, label: "Gestion de devis", color: "blue" },
  { icon: Calendar, label: "Gestion de planning", color: "violet" },
  { icon: Package, label: "Gestion de stock", color: "pink" },
  { icon: Wrench, label: "Gestion d'interventions", color: "blue" },
  { icon: FileOutput, label: "Génération automatique de documents", color: "violet" },
  { icon: BarChart3, label: "Tableaux de bord personnalisés", color: "pink" },
  { icon: Users, label: "CRM sur mesure", color: "blue" },
  { icon: Activity, label: "Suivi d'activité", color: "violet" },
];

const colorMap: Record<string, { border: string; icon: string; bg: string; gradFrom: string }> = {
  blue: { border: "border-blue-500/25", icon: "text-blue-400", bg: "bg-blue-500/10", gradFrom: "from-blue-600" },
  violet: { border: "border-violet-500/25", icon: "text-violet-400", bg: "bg-violet-500/10", gradFrom: "from-violet-600" },
  pink: { border: "border-pink-500/25", icon: "text-pink-400", bg: "bg-pink-500/10", gradFrom: "from-pink-600" },
};

export default function SolutionsSection() {
  return (
    <section id="solutions" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#050A1A]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-700/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-blue-500/30 text-xs font-medium text-blue-400 tracking-wider uppercase mb-4">
            Solutions métier
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Des outils adaptés à{" "}
            <span className="gradient-text">votre activité</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Chaque logiciel est développé selon vos besoins réels.{" "}
            <span className="text-white/70">Aucun abonnement inutile, aucune fonctionnalité superflue.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {solutions.map((sol, i) => {
            const c = colorMap[sol.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group glass rounded-2xl border ${c.border} p-5 flex flex-col items-center text-center gap-3 cursor-default transition-all duration-300 hover:border-opacity-60`}
              >
                <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <sol.icon className={c.icon} size={22} />
                </div>
                <p className="text-white/80 font-medium text-sm leading-snug">{sol.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-white/40 text-sm mb-6">Votre besoin n&apos;est pas dans la liste ? Nous développons tout type de solution.</p>
          <a
            href="mailto:ADsolution@gmail.com?subject=Demande%20de%20devis%20ADSolutions"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 hover:opacity-90 shadow-[0_0_30px_rgba(124,58,237,0.35)] transition-all duration-300"
          >
            Obtenir un devis gratuit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
