"use client";

import { motion } from "framer-motion";
import { Monitor, Globe, Layout, Wrench, Code2 } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Logiciels métier sur mesure",
    description:
      "Des outils développés selon vos besoins pour automatiser vos processus, centraliser vos données et simplifier votre organisation.",
    gradient: "from-blue-600 to-violet-600",
    glow: "rgba(59,130,246,0.2)",
    border: "border-blue-500/20",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    icon: Monitor,
    title: "Applications desktop",
    description:
      "Des applications installées sur ordinateur, rapides et adaptées à votre activité quotidienne.",
    gradient: "from-violet-600 to-purple-700",
    glow: "rgba(124,58,237,0.2)",
    border: "border-violet-500/20",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
  },
  {
    icon: Globe,
    title: "Applications web",
    description:
      "Des plateformes accessibles depuis un navigateur, idéales pour travailler depuis plusieurs postes ou sites.",
    gradient: "from-purple-600 to-pink-600",
    glow: "rgba(168,85,247,0.2)",
    border: "border-purple-500/20",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
  },
  {
    icon: Layout,
    title: "Création de sites web",
    description:
      "Des sites vitrines modernes, rapides et professionnels pour présenter votre activité et attirer de nouveaux clients.",
    gradient: "from-pink-600 to-rose-600",
    glow: "rgba(236,72,153,0.2)",
    border: "border-pink-500/20",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-400",
  },
  {
    icon: Wrench,
    title: "Maintenance et évolutions",
    description:
      "Un accompagnement pour corriger, améliorer et faire évoluer vos outils dans le temps.",
    gradient: "from-cyan-600 to-blue-600",
    glow: "rgba(6,182,212,0.2)",
    border: "border-cyan-500/20",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050A1A]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-700/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-violet-500/30 text-xs font-medium text-violet-400 tracking-wider uppercase mb-4">
            Nos expertises
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Des solutions <span className="gradient-text">adaptées à votre métier</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Chaque projet est unique. Nous développons des outils sur mesure qui
            correspondent exactement à vos besoins.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`relative glass glass-hover rounded-2xl p-6 border ${service.border} overflow-hidden group cursor-default`}
                style={{
                  boxShadow: `0 8px 32px ${service.glow}`,
                }}
              >
                {/* Gradient top bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} opacity-60`}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-5`}
                >
                  <Icon className={`${service.iconColor}`} size={22} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover glow */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </motion.div>
            );
          })}

          {/* Last card - CTA */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative rounded-2xl p-6 overflow-hidden group cursor-pointer sm:col-span-2 lg:col-span-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-violet-600/20 to-pink-600/20 border border-violet-500/30 rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-violet-600/5 to-pink-600/5 rounded-2xl" />
            <div className="relative z-10 flex flex-col h-full justify-center items-center text-center gap-4 py-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 via-violet-600 to-pink-600 flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.4)]">
                <span className="text-xl font-black text-white">AD</span>
              </div>
              <p className="text-white font-semibold text-lg">Votre projet sur mesure</p>
              <p className="text-white/50 text-sm">
                Discutons de vos besoins et trouvons la solution idéale ensemble.
              </p>
              <a
                href="mailto:ADsolution@gmail.com?subject=Demande%20de%20devis%20-%20ADSolutions"
                className="mt-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(124,58,237,0.3)]"
              >
                Me contacter
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
