"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Peut-on reprendre les données existantes depuis Excel ?",
    answer: "Oui. Les données stockées dans des fichiers Excel (inventaire des équipements, historiques d'interventions, plans de maintenance) peuvent être importées dans la GMAO lors de la mise en place. L'objectif est de centraliser toutes vos informations dans un seul outil, sans ressaisie manuelle.",
  },
  {
    question: "La GMAO gère-t-elle la maintenance préventive et corrective ?",
    answer: "Oui. La GMAO sur mesure permet de planifier des maintenances préventives récurrentes (calendrier, compteur, cycles) et de gérer les interventions correctives en cas de panne. Chaque intervention est tracée avec son historique, sa durée et son responsable.",
  },
  {
    question: "L'application est-elle utilisable sur mobile ou tablette ?",
    answer: "Oui. La GMAO est une application web accessible depuis un navigateur sur PC, tablette ou smartphone. Les techniciens peuvent saisir leurs interventions directement sur le terrain, sans installation.",
  },
  {
    question: "Peut-on connecter la GMAO à un ERP existant ?",
    answer: "Oui. La GMAO peut être interfacée avec votre ERP ou tout autre logiciel métier via des API. Cela permet de synchroniser les données d'équipements, les stocks de pièces de rechange ou les coûts de maintenance sans double saisie.",
  },
  {
    question: "La GMAO gère-t-elle plusieurs sites ?",
    answer: "Oui. La GMAO sur mesure peut gérer plusieurs sites, avec des équipements, des plannings et des équipes distincts par site. Les responsables peuvent avoir une vue d'ensemble ou une vue par site selon leurs besoins.",
  },
  {
    question: "Le logiciel peut-il évoluer avec mes besoins ?",
    answer: "Oui. Une solution sur mesure peut être enrichie progressivement avec de nouvelles fonctionnalités, de nouveaux profils utilisateurs ou des connexions à d'autres outils, selon les modalités définies pour le projet.",
  },
  {
    question: "Suis-je propriétaire de mes données et du code ?",
    answer: "Vous restez propriétaire de vos données. Les conditions relatives au code source, aux droits d'utilisation et à la propriété intellectuelle sont précisées clairement dans le contrat du projet.",
  },
  {
    question: "Proposez-vous la maintenance et l'hébergement ?",
    answer: "Oui, des prestations de maintenance, de support et d'hébergement peuvent être proposées selon les besoins du projet. Leur périmètre est défini dans la proposition commerciale.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function GmaoFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="absolute inset-0 bg-[#04081A]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-700/6 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-blue-500/30 text-xs font-medium text-blue-400 tracking-wider uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Questions{" "}
            <span className="gradient-text">fréquentes</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`glass rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i ? "border-violet-500/40 shadow-[0_0_30px_rgba(124,58,237,0.15)]" : "border-white/8 hover:border-white/15"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className={`font-semibold text-sm sm:text-base transition-colors ${open === i ? "text-white" : "text-white/75"}`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                  open === i ? "bg-violet-500/20 text-violet-400" : "bg-white/5 text-white/40"
                }`}>
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <p className="px-5 pb-5 text-white/55 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
