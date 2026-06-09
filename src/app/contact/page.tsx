import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Clock, Calendar, ArrowRight } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact – ADSolutions | Devis gratuit logiciel sur mesure",
  description:
    "Contactez ADSolutions pour un devis gratuit. Développeur logiciel indépendant en Lot-et-Garonne et Dordogne. Réponse sous 24h, échange sans engagement.",
  keywords: [
    "contact ADSolutions",
    "devis logiciel sur mesure",
    "développeur logiciel Lot-et-Garonne",
    "contact développeur Dordogne",
  ],
  openGraph: {
    title: "Contact – ADSolutions | Devis gratuit",
    description:
      "Contactez ADSolutions pour discuter de votre projet. Développeur indépendant en Lot-et-Garonne. Réponse sous 24h.",
    type: "website",
    locale: "fr_FR",
    siteName: "ADSolutions",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-[#050A1A] min-h-screen">

        {/* Hero */}
        <section className="relative pt-36 pb-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-violet-600/8 blur-[120px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-violet-500/30 text-xs font-medium text-violet-400 tracking-wider uppercase mb-6 bg-violet-500/5">
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Parlons de{" "}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                votre projet
              </span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
              Chaque projet commence par une simple discussion. Expliquez-moi votre besoin et je vous proposerai la solution la plus adaptée à votre activité.
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 items-start">

            {/* Left - Infos */}
            <div className="flex flex-col gap-5">

              {/* Email */}
              <div className="p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider font-medium mb-1">Email</p>
                    <a
                      href="mailto:contact@adsolutions47.fr"
                      className="text-white font-semibold hover:text-blue-400 transition-colors break-all text-sm"
                    >
                      contact@adsolutions47.fr
                    </a>
                    <p className="text-white/35 text-xs mt-1">Réponse sous 24h</p>
                  </div>
                </div>
              </div>

              {/* Zone */}
              <div className="p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-violet-500/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-violet-400" size={20} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider font-medium mb-1">Zone d'intervention</p>
                    <p className="text-white font-semibold text-sm">Lot-et-Garonne & Dordogne</p>
                    <p className="text-white/35 text-xs mt-1">Et partout en France à distance</p>
                  </div>
                </div>
              </div>

              {/* Délai */}
              <div className="p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-pink-500/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-pink-400" size={20} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider font-medium mb-1">Délai de réponse</p>
                    <p className="text-white font-semibold text-sm">Sous 24h</p>
                    <p className="text-white/35 text-xs mt-1">Lundi au vendredi</p>
                  </div>
                </div>
              </div>

              {/* Disponibilité */}
              <div className="p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider font-medium mb-1">Disponibilité</p>
                    <p className="text-white font-semibold text-sm">Lundi à vendredi</p>
                    <p className="text-white/35 text-xs mt-1">Projets livrés en 1 à 6 semaines</p>
                  </div>
                </div>
              </div>

              {/* Que se passe-t-il après ? */}
              <div className="p-6 rounded-2xl border border-violet-500/20 bg-white/2">
                <h3 className="text-white font-semibold mb-4 text-sm">
                  Que se passe-t-il après votre message ?
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    { n: "01", t: "Réponse sous 24h" },
                    { n: "02", t: "Échange gratuit sans engagement" },
                    { n: "03", t: "Analyse du besoin" },
                    { n: "04", t: "Proposition adaptée à votre activité" },
                  ].map((step) => (
                    <div key={step.n} className="flex items-center gap-3">
                      <span className="text-xs font-bold text-violet-500/50 w-6 flex-shrink-0">{step.n}</span>
                      <ArrowRight size={12} className="text-violet-500/40 flex-shrink-0" />
                      <p className="text-white/65 text-sm">{step.t}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right - Form */}
            <ContactForm />

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
