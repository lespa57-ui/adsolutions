import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Code2, Globe, Monitor, ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Réalisations – ADSolutions | Projets logiciels et sites web",
  description:
    "Découvrez les projets réalisés par ADSolutions : logiciels métier, applications web et sites internet pour les entreprises du Lot-et-Garonne et de la Dordogne.",
  keywords: [
    "réalisations ADSolutions",
    "projets logiciels sur mesure",
    "portfolio développeur Lot-et-Garonne",
  ],
  openGraph: {
    title: "Réalisations – ADSolutions | Projets logiciels et sites web",
    description:
      "Portfolio de projets réalisés : logiciels métier, applications web et sites internet sur mesure.",
    type: "website",
    locale: "fr_FR",
    siteName: "ADSolutions",
  },
};

const projets = [
  {
    icon: Code2,
    type: "Logiciel métier",
    title: "Gestion d'interventions",
    desc: "Application desktop de gestion des interventions terrain pour une entreprise de maintenance. Suivi en temps réel, génération de rapports PDF, planning intégré.",
    tags: ["Desktop", "PDF", "Planning"],
    color: "blue",
  },
  {
    icon: Globe,
    type: "Application web",
    title: "Portail client sur mesure",
    desc: "Espace client sécurisé permettant à une PME de partager des documents, suivre des commandes et communiquer avec ses clients.",
    tags: ["Web", "Authentification", "Tableau de bord"],
    color: "violet",
  },
  {
    icon: Monitor,
    type: "Site internet",
    title: "Site vitrine professionnel",
    desc: "Création d'un site vitrine moderne pour une entreprise locale, avec référencement Google, design responsive et formulaire de contact.",
    tags: ["Vitrine", "SEO", "Mobile"],
    color: "pink",
  },
  {
    icon: Code2,
    type: "Logiciel métier",
    title: "Gestion de devis automatisée",
    desc: "Outil de création et suivi de devis pour un artisan. Génération automatique de PDF, relances automatiques, tableau de bord de suivi.",
    tags: ["Devis", "PDF", "Automatisation"],
    color: "blue",
  },
  {
    icon: Globe,
    type: "Application web",
    title: "CRM simplifié",
    desc: "CRM léger et sur mesure pour une équipe commerciale. Gestion des contacts, suivi des opportunités, notes et rappels.",
    tags: ["CRM", "Contacts", "Suivi"],
    color: "violet",
  },
  {
    icon: Monitor,
    type: "Site internet",
    title: "Landing page de conversion",
    desc: "Page unique optimisée pour une campagne de communication locale, avec formulaire de contact et suivi des conversions.",
    tags: ["Landing", "Conversion", "SEO"],
    color: "pink",
  },
];

const colorMap: Record<string, { border: string; badge: string; icon: string; bg: string }> = {
  blue: { border: "hover:border-blue-500/40", badge: "bg-blue-500/10 text-blue-400 border-blue-500/20", icon: "text-blue-400 bg-blue-500/10", bg: "" },
  violet: { border: "hover:border-violet-500/40", badge: "bg-violet-500/10 text-violet-400 border-violet-500/20", icon: "text-violet-400 bg-violet-500/10", bg: "" },
  pink: { border: "hover:border-pink-500/40", badge: "bg-pink-500/10 text-pink-400 border-pink-500/20", icon: "text-pink-400 bg-pink-500/10", bg: "" },
};

export default function RealisationsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#050A1A] min-h-screen">

        {/* Hero */}
        <section className="relative pt-36 pb-24 overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-violet-600/8 blur-[120px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-violet-500/30 text-xs font-medium text-violet-400 tracking-wider uppercase mb-6 bg-violet-500/5">
              Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Mes{" "}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                réalisations
              </span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
              Voici quelques exemples de projets réalisés pour des entreprises en Lot-et-Garonne et Dordogne.
              Chaque projet est unique et conçu selon les besoins réels du client.
            </p>
          </div>
        </section>

        {/* Projets */}
        <section className="pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projets.map((p) => {
              const c = colorMap[p.color];
              return (
                <div
                  key={p.title}
                  className={`flex flex-col p-6 rounded-2xl bg-white/3 border border-white/8 ${c.border} transition-all duration-300`}
                >
                  <div className={`w-10 h-10 rounded-xl ${c.icon} flex items-center justify-center mb-4`}>
                    <p.icon size={20} />
                  </div>
                  <span className={`inline-block self-start px-2.5 py-0.5 rounded-full border text-xs font-medium mb-3 ${c.badge}`}>
                    {p.type}
                  </span>
                  <h2 className="text-white font-bold text-lg mb-3">{p.title}</h2>
                  <p className="text-white/55 text-sm leading-relaxed mb-5 flex-1">{p.desc}</p>

                  {/* Screenshot placeholder */}
                  <div className="rounded-xl border border-white/8 bg-white/2 h-28 flex flex-col items-center justify-center gap-2 mb-4">
                    <ImageIcon size={22} className="text-white/20" />
                    <p className="text-white/20 text-xs">Capture d'écran à venir</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className={`px-2 py-0.5 rounded-full border text-xs ${c.badge}`}>{tag}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Témoignages futurs */}
        <section className="py-16 bg-[#04081A]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Témoignages clients</h2>
            <p className="text-white/45 mb-8">Les retours de nos clients seront affichés ici prochainement.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[1, 2].map((i) => (
                <div key={i} className="p-6 rounded-2xl border border-white/8 bg-white/2 text-left">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill="rgba(124,58,237,0.3)">
                        <path d="M7 1l1.8 3.6L13 5.4l-3 2.9.7 4.1L7 10.4l-3.7 2 .7-4.1-3-2.9 4.2-.8z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/30 text-sm italic">Témoignage client à venir...</p>
                  <p className="text-white/20 text-xs mt-3">— Client, Lot-et-Garonne</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Votre projet sera la prochaine réalisation
            </h2>
            <p className="text-white/55 mb-8">
              Contactez-moi pour discuter de votre besoin. Échange gratuit, sans engagement.
            </p>
            <a
              href="mailto:contact@adsolutions47.fr?subject=Demande%20de%20devis%20-%20ADSolutions"
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
