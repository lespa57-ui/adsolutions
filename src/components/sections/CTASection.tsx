"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#050A1A]" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-violet-900/30 to-pink-900/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-violet-500/30 text-xs font-medium text-violet-400 tracking-wider uppercase mb-6">
            Passons à l&apos;action
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Parlons de{" "}
            <span className="gradient-text">votre projet</span>
          </h2>

          <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Vous avez une idée, un besoin spécifique ou un problème à résoudre ?{" "}
            <span className="text-white/75">Échangeons gratuitement sur votre projet.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:contact@adsolutions47.fr?subject=Demande%20de%20devis%20ADSolutions"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white text-lg bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 hover:from-blue-500 hover:via-violet-500 hover:to-pink-500 shadow-[0_0_50px_rgba(124,58,237,0.45)] hover:shadow-[0_0_70px_rgba(124,58,237,0.65)] transition-all duration-300 group"
            >
              <Mail size={20} />
              Demander mon devis gratuit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-white/30 text-sm">
            {["Réponse sous 24h", "Échange gratuit", "Sans engagement", "Accompagnement local"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
