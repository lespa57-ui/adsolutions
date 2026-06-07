"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Combien coûte un logiciel sur mesure ?",
    answer: "Chaque projet étant unique, un devis personnalisé est réalisé après étude de vos besoins. N'hésitez pas à me contacter pour un échange gratuit et sans engagement.",
  },
  {
    question: "Combien de temps faut-il pour développer un logiciel ?",
    answer: "La durée dépend de la complexité du projet. Certains outils peuvent être réalisés en quelques jours, d'autres en plusieurs semaines. La plupart des projets sont livrés entre 1 et 6 semaines.",
  },
  {
    question: "Intervenez-vous uniquement en Lot-et-Garonne et Dordogne ?",
    answer: "Non. ADSolutions peut accompagner des clients partout en France. La zone Lot-et-Garonne et Dordogne est ma zone de proximité, mais je travaille à distance sans problème.",
  },
  {
    question: "Proposez-vous la maintenance ?",
    answer: "Oui, un accompagnement peut être mis en place après la livraison pour assurer la maintenance, les corrections et les évolutions de votre outil.",
  },
  {
    question: "Quelle est la différence avec un logiciel généraliste ?",
    answer: "Un logiciel sur mesure est conçu uniquement pour votre activité. Pas de fonctionnalités inutiles, pas d'abonnement mensuel excessif — uniquement ce dont vous avez besoin.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 overflow-hidden">
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
