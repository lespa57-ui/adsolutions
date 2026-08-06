"use client";

import { motion } from "framer-motion";
import { Clock, RefreshCw, Target, Smile, MapPin, Shield } from "lucide-react";

const avantages = [
  {
    icon: Clock,
    title: "Gain de temps au quotidien",
    description: "Vos équipes se concentrent sur l'essentiel, les tâches chronophages sont automatisées.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: RefreshCw,
    title: "Réduction des tâches répétitives",
    description: "Fini les saisies manuelles et les erreurs. Vos processus tournent en automatique.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    icon: Target,
    title: "Solutions adaptées à votre métier",
    description: "Chaque outil est pensé pour votre activité spécifique, pas une solution générique.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: Smile,
    title: "Interface simple et intuitive",
    description: "Des interfaces claires que vos équipes adoptent facilement, sans formation longue.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
  },
  {
    icon: MapPin,
    title: "Accompagnement local",
    description: "Basé à Agen, en Lot-et-Garonne et Dordogne, disponible pour vous rencontrer et comprendre votre contexte.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    icon: Shield,
    title: "Maintenance possible après livraison",
    description: "Votre outil évolue avec vous. Corrections, améliorations et nouvelles fonctionnalités assurées.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function AvantagesSection() {
  return (
    <section id="avantages" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#07091F]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-pink-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-blue-500/30 text-xs font-medium text-blue-400 tracking-wider uppercase mb-4">
            Pourquoi ADSolutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Pourquoi choisir{" "}
            <span className="gradient-text">ADSolutions&nbsp;?</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Des solutions pensées pour votre réalité, avec un suivi humain et local.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {avantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`glass glass-hover rounded-2xl p-6 border ${item.border} flex gap-4`}
              >
                <div className={`flex-shrink-0 w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center mt-0.5`}>
                  <Icon className={item.color} size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1.5">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
