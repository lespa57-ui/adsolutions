"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#050A1A]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-700/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-violet-500/30 text-xs font-medium text-violet-400 tracking-wider uppercase mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Parlons de <span className="gradient-text">votre projet</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Vous avez besoin d&apos;un logiciel, d&apos;une application ou d&apos;un site web pour votre
            entreprise ? Contactez ADSolutions pour discuter de votre besoin.
          </p>
        </motion.div>

        {/* Main contact card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-violet-600/20 to-pink-600/20 rounded-3xl" />
          <div className="absolute inset-[1px] bg-[#080C22] rounded-3xl" />

          <div className="relative z-10 p-8 sm:p-12">
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              {/* Email */}
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-6 border border-blue-500/20 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-400" size={22} />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1">Email</p>
                  <a
                    href="mailto:contact@adsolutions47.fr"
                    className="text-white font-semibold hover:text-blue-400 transition-colors text-sm sm:text-base break-all"
                  >
                    contact@adsolutions47.fr
                  </a>
                </div>
              </motion.div>

              {/* Zone */}
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-6 border border-violet-500/20 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-violet-400" size={22} />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1">Zone géographique</p>
                  <p className="text-white font-semibold text-sm sm:text-base">
                    Lot-et-Garonne & Dordogne
                  </p>
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-white/50 text-base leading-relaxed mb-6 max-w-xl mx-auto">
                Chaque projet commence par une simple discussion. Expliquez-nous votre besoin et nous vous proposerons la solution la plus adaptée.
              </p>
              <a
                href="mailto:contact@adsolutions47.fr?subject=Demande%20de%20devis%20-%20ADSolutions"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white text-lg bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 hover:from-blue-500 hover:via-violet-500 hover:to-pink-500 shadow-[0_0_40px_rgba(124,58,237,0.4)] hover:shadow-[0_0_60px_rgba(124,58,237,0.6)] transition-all duration-300 group"
              >
                <Mail size={20} />
                Envoyer un email
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Reassurance checklist */}
              <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
                {[
                  "Réponse sous 24h",
                  "Échange gratuit",
                  "Sans engagement",
                  "Étude personnalisée",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-white/45">
                    <span className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom reassurance */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-6 text-white/30 text-sm"
        >
          {["Échange gratuit", "Sans engagement", "Réponse rapide", "Accompagnement local"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
