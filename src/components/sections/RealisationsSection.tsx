"use client";

import { motion } from "framer-motion";
import { BarChart3, FileText, Layout, Activity, Database } from "lucide-react";

const realisations = [
  {
    icon: Database,
    title: "Logiciel de gestion interne",
    category: "Logiciel métier",
    description:
      "Centralisation des données clients, stocks et factures dans un outil unique, remplaçant les tableurs éparpillés.",
    tags: ["Gestion", "Base de données", "Desktop"],
    gradient: "from-blue-600 to-violet-600",
    color: "text-blue-400",
    border: "border-blue-500/20",
  },
  {
    icon: Activity,
    title: "Application de suivi d'activité",
    category: "Application web",
    description:
      "Tableau de bord temps réel pour suivre l'activité des équipes, les objectifs et les indicateurs clés.",
    tags: ["Suivi", "KPI", "Web"],
    gradient: "from-violet-600 to-purple-700",
    color: "text-violet-400",
    border: "border-violet-500/20",
  },
  {
    icon: Layout,
    title: "Site vitrine professionnel",
    category: "Site web",
    description:
      "Site moderne, rapide et optimisé pour le référencement, reflétant l'image premium de l'entreprise.",
    tags: ["SEO", "Responsive", "Next.js"],
    gradient: "from-purple-600 to-pink-600",
    color: "text-purple-400",
    border: "border-purple-500/20",
  },
  {
    icon: FileText,
    title: "Outil de génération de documents",
    category: "Application desktop",
    description:
      "Génération automatique de devis, contrats et rapports en PDF depuis un formulaire simple.",
    tags: ["PDF", "Automatisation", "Desktop"],
    gradient: "from-pink-600 to-rose-600",
    color: "text-pink-400",
    border: "border-pink-500/20",
  },
  {
    icon: BarChart3,
    title: "Tableau de bord personnalisé",
    category: "Application web",
    description:
      "Interface de pilotage sur mesure avec graphiques interactifs, exports et alertes automatiques.",
    tags: ["Dashboard", "Analytics", "Web"],
    gradient: "from-cyan-600 to-blue-600",
    color: "text-cyan-400",
    border: "border-cyan-500/20",
  },
];

export default function RealisationsSection() {
  return (
    <section id="realisations" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#07091F]" />
      <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-violet-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-cyan-500/30 text-xs font-medium text-cyan-400 tracking-wider uppercase mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Exemples de <span className="gradient-text">réalisations</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-3">
            Chaque projet est développé sur mesure selon les besoins spécifiques du client.
            Ces exemples illustrent les types de solutions que nous pouvons créer pour vous.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-white/40 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Projets réalisés sur mesure — aucun client réel mentionné
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {realisations.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`relative glass glass-hover rounded-2xl overflow-hidden border ${item.border} group`}
              >
                {/* Header bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${item.gradient}`} />

                <div className="p-6">
                  {/* Category */}
                  <span className={`text-xs font-semibold ${item.color} tracking-wider uppercase`}>
                    {item.category}
                  </span>

                  {/* Icon + Title */}
                  <div className="flex items-start gap-3 mt-3 mb-3">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} bg-opacity-20 flex items-center justify-center`}
                      style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1))` }}
                    >
                      <Icon className={item.color} size={18} />
                    </div>
                    <h3 className="text-white font-semibold text-base leading-snug mt-0.5">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg glass border border-white/10 text-xs text-white/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative rounded-2xl overflow-hidden border border-dashed border-violet-500/40 group md:col-span-2 lg:col-span-1"
          >
            <div className="p-6 flex flex-col items-center justify-center text-center h-full py-12 gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/20 via-violet-600/20 to-pink-600/20 border border-violet-500/30 flex items-center justify-center">
                <span className="text-lg font-black gradient-text">AD</span>
              </div>
              <div>
                <p className="text-white/70 font-semibold mb-1">Votre projet ici</p>
                <p className="text-white/30 text-sm">
                  Contactez-nous pour discuter de votre besoin spécifique.
                </p>
              </div>
              <a
                href="mailto:ADsolution@gmail.com?subject=Demande%20de%20devis%20-%20ADSolutions"
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 hover:opacity-90 transition-opacity"
              >
                Discuter de mon projet
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
