import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code2, CheckCircle, ArrowRight, FileText, BarChart3, Wrench, Package, Calendar, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Logiciels sur mesure pour entreprises – ADSolutions Lot-et-Garonne",
  description:
    "ADSolutions développe des logiciels métier sur mesure pour les entreprises du Lot-et-Garonne et de la Dordogne. Automatisation, gestion, productivité. Devis gratuit.",
  keywords: [
    "logiciel sur mesure Lot-et-Garonne",
    "logiciel métier entreprise",
    "développement logiciel Dordogne",
    "automatisation entreprise",
    "logiciel personnalisé",
  ],
  openGraph: {
    title: "Logiciels sur mesure pour entreprises – ADSolutions",
    description:
      "Des logiciels métier conçus spécifiquement pour votre activité. Automatisez vos tâches, gagnez du temps. Développeur indépendant en Lot-et-Garonne.",
    type: "website",
    locale: "fr_FR",
    siteName: "ADSolutions",
  },
};

const avantages = [
  "Conçu 100% selon vos besoins réels",
  "Interface simple, sans formation longue",
  "Données hébergées où vous le souhaitez",
  "Évolutif au fil de votre activité",
  "Pas d'abonnement mensuel excessif",
  "Accompagnement local, interlocuteur unique",
];

const exemples = [
  { icon: FileText, label: "Gestion de devis automatisée", desc: "Générez vos devis en quelques clics, sans saisie répétitive." },
  { icon: Wrench, label: "Gestion des interventions", desc: "Planifiez et suivez vos interventions terrain en temps réel." },
  { icon: Calendar, label: "Gestion de planning", desc: "Organisez les plannings de vos équipes sans Excel." },
  { icon: Users, label: "Gestion des clients (CRM)", desc: "Centralisez vos contacts, historiques et relances." },
  { icon: Package, label: "Gestion de stock", desc: "Suivez vos stocks et alertes en temps réel." },
  { icon: BarChart3, label: "Tableau de bord personnalisé", desc: "Visualisez vos indicateurs métiers clés d'un seul coup d'œil." },
];

export default function LogicielsSurMesurePage() {
  return (
    <>
      <Header />
      <main className="bg-[#050A1A] min-h-screen">

        {/* Hero */}
        <section className="relative pt-36 pb-24 overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 text-xs font-medium text-blue-400 tracking-wider uppercase mb-6 bg-blue-500/5">
              Logiciels sur mesure
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Logiciels sur mesure{" "}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                pour entreprises
              </span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-4 max-w-2xl mx-auto">
              Vous perdez du temps avec des outils génériques qui ne correspondent pas à votre activité ?
              ADSolutions développe des logiciels métier entièrement adaptés à vos processus, en{" "}
              <strong className="text-white/80">Lot-et-Garonne et Dordogne</strong>.
            </p>
            <p className="text-white/50 mb-10 max-w-xl mx-auto">
              Un logiciel sur mesure, c'est un outil conçu uniquement pour vous — pas de fonctionnalités inutiles, pas d'abonnement excessif.
            </p>
            <a
              href="mailto:contact@adsolutions47.fr?subject=Demande%20de%20devis%20logiciel%20sur%20mesure"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 hover:opacity-90 shadow-[0_0_40px_rgba(124,58,237,0.35)] transition-all duration-300"
            >
              Obtenir un devis gratuit
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            Pourquoi choisir un logiciel{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">sur mesure</span> ?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {avantages.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-2xl bg-white/3 border border-white/8">
                <CheckCircle className="text-violet-400 flex-shrink-0 mt-0.5" size={18} />
                <p className="text-white/70 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Exemples */}
        <section className="py-20 bg-[#04081A]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">
              Exemples de logiciels développés
            </h2>
            <p className="text-white/50 text-center mb-12 max-w-xl mx-auto">
              Chaque entreprise est différente. Voici des exemples de ce qui peut être réalisé selon vos besoins.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {exemples.map((ex) => (
                <div key={ex.label} className="p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-violet-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4">
                    <ex.icon className="text-violet-400" size={20} />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{ex.label}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{ex.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            Comment ça se passe ?
          </h2>
          <div className="flex flex-col gap-4">
            {[
              { n: "01", t: "Échange gratuit", d: "On discute de votre besoin, sans engagement." },
              { n: "02", t: "Analyse & proposition", d: "Je vous propose une solution adaptée à votre activité et votre budget." },
              { n: "03", t: "Développement", d: "Je développe votre logiciel avec des technologies modernes et maintenables." },
              { n: "04", t: "Livraison & formation", d: "Livraison soignée, prise en main et support inclus." },
            ].map((step) => (
              <div key={step.n} className="flex gap-5 p-5 rounded-2xl bg-white/3 border border-white/8">
                <span className="text-3xl font-bold text-violet-500/30 flex-shrink-0 leading-none">{step.n}</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">{step.t}</h3>
                  <p className="text-white/50 text-sm">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#04081A]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Code2 className="w-12 h-12 text-violet-400 mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Prêt à automatiser votre activité ?
            </h2>
            <p className="text-white/55 mb-8">
              Développeur logiciel indépendant en Lot-et-Garonne — je vous accompagne de A à Z pour créer l'outil qui correspond vraiment à votre métier.
            </p>
            <a
              href="mailto:contact@adsolutions47.fr?subject=Demande%20de%20devis%20logiciel%20sur%20mesure"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 hover:opacity-90 shadow-[0_0_40px_rgba(124,58,237,0.35)] transition-all duration-300"
            >
              Démarrer mon projet
              <ArrowRight size={18} />
            </a>
            <p className="text-white/35 text-sm mt-4">Réponse sous 24h · Échange gratuit · Sans engagement</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
