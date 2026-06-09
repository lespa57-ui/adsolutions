import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Clock, MessageSquare, CheckCircle } from "lucide-react";

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
        <section className="pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Left - Infos */}
            <div className="flex flex-col gap-6">
              {/* Email */}
              <div className="p-7 rounded-3xl bg-white/3 border border-white/8 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-400" size={22} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider font-medium mb-1">Email</p>
                    <a
                      href="mailto:contact@adsolutions47.fr"
                      className="text-white font-semibold hover:text-blue-400 transition-colors text-lg break-all"
                    >
                      contact@adsolutions47.fr
                    </a>
                    <p className="text-white/40 text-sm mt-1">Réponse sous 24h</p>
                  </div>
                </div>
              </div>

              {/* Zone */}
              <div className="p-7 rounded-3xl bg-white/3 border border-white/8 hover:border-violet-500/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-violet-400" size={22} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider font-medium mb-1">Zone d'intervention</p>
                    <p className="text-white font-semibold text-lg">Lot-et-Garonne & Dordogne</p>
                    <p className="text-white/40 text-sm mt-1">Et partout en France à distance</p>
                  </div>
                </div>
              </div>

              {/* Délai */}
              <div className="p-7 rounded-3xl bg-white/3 border border-white/8 hover:border-pink-500/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-pink-400" size={22} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider font-medium mb-1">Disponibilité</p>
                    <p className="text-white font-semibold text-lg">Projets livrés en 1 à 6 semaines</p>
                    <p className="text-white/40 text-sm mt-1">Selon la complexité de votre projet</p>
                  </div>
                </div>
              </div>

              {/* Reassurance */}
              <div className="p-6 rounded-2xl border border-violet-500/20 bg-white/2">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <MessageSquare size={16} className="text-violet-400" />
                  Ce que vous pouvez attendre
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    "Réponse sous 24h à votre message",
                    "Échange gratuit sans engagement",
                    "Devis personnalisé après analyse",
                    "Interlocuteur unique de A à Z",
                    "Accompagnement local et de proximité",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-white/60">
                      <CheckCircle size={14} className="text-violet-400 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - CTA email + context */}
            <div className="flex flex-col gap-6">
              <div className="relative rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-violet-600/10 to-pink-600/10" />
                <div className="absolute inset-[1px] bg-[#080C22] rounded-3xl" />
                <div className="relative z-10 p-8 sm:p-10">
                  <h2 className="text-2xl font-bold text-white mb-2">Envoyez-moi un email</h2>
                  <p className="text-white/50 text-sm mb-8 leading-relaxed">
                    Décrivez votre besoin en quelques lignes : votre activité, ce que vous souhaitez automatiser ou créer, et votre budget approximatif si possible.
                  </p>

                  <div className="flex flex-col gap-4 mb-8">
                    {[
                      { label: "Votre activité", placeholder: "Ex : artisan, PME, commerce..." },
                      { label: "Votre besoin", placeholder: "Ex : logiciel de gestion, site vitrine, application..." },
                    ].map((field) => (
                      <div key={field.label}>
                        <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">{field.label}</label>
                        <div className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/10 text-white/30 text-sm">
                          {field.placeholder}
                        </div>
                      </div>
                    ))}
                  </div>

                  <a
                    href="mailto:contact@adsolutions47.fr?subject=Demande%20de%20devis%20-%20ADSolutions&body=Bonjour%20Arnaud%2C%0A%0AJe%20souhaite%20vous%20contacter%20concernant%20%3A%0A%0A-%20Mon%20activit%C3%A9%20%3A%20%0A-%20Mon%20besoin%20%3A%20%0A-%20Mon%20budget%20approximatif%20%3A%20%0A%0AMerci%20!"
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl font-semibold text-white text-base bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 hover:opacity-90 shadow-[0_0_40px_rgba(124,58,237,0.35)] transition-all duration-300"
                  >
                    <Mail size={20} />
                    Envoyer un email
                  </a>
                  <p className="text-center text-white/30 text-xs mt-4">
                    Votre client de messagerie s'ouvrira avec un modèle pré-rempli
                  </p>
                </div>
              </div>

              {/* Arnaud intro */}
              <div className="p-6 rounded-2xl bg-white/3 border border-white/8">
                <p className="text-white/55 text-sm leading-relaxed">
                  <span className="text-white font-semibold">Arnaud Darlay</span> — Développeur indépendant et fondateur d'ADSolutions.
                  J'accompagne les entreprises du <strong className="text-white/75">Lot-et-Garonne et de la Dordogne</strong> dans
                  la création de logiciels métier, applications web et sites internet sur mesure.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
