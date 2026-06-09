import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe, CheckCircle, ArrowRight, Smartphone, Zap, Shield, RefreshCw, LayoutDashboard } from "lucide-react";

export const metadata: Metadata = {
  title: "Développement applications web sur mesure – ADSolutions Lot-et-Garonne",
  description:
    "ADSolutions développe des applications web sur mesure pour les entreprises du Lot-et-Garonne et Dordogne. Accessibles depuis un navigateur, sécurisées et évolutives.",
  keywords: [
    "développement application web Lot-et-Garonne",
    "application web sur mesure",
    "application web entreprise Dordogne",
    "développeur web indépendant",
    "application métier navigateur",
  ],
  openGraph: {
    title: "Développement applications web sur mesure – ADSolutions",
    description:
      "Applications web professionnelles accessibles depuis n'importe quel navigateur. Sur mesure, sécurisées et évolutives.",
    type: "website",
    locale: "fr_FR",
    siteName: "ADSolutions",
  },
};

const benefices = [
  { icon: Smartphone, label: "Accessible partout", desc: "Depuis un navigateur, sur PC, tablette ou smartphone, sans installation." },
  { icon: Shield, label: "Données sécurisées", desc: "Hébergement sécurisé, accès par identifiants, données protégées." },
  { icon: RefreshCw, label: "Toujours à jour", desc: "Une mise à jour déployée = disponible immédiatement pour tous les utilisateurs." },
  { icon: LayoutDashboard, label: "Interface moderne", desc: "Des interfaces claires qui s'adaptent facilement, sans formation longue." },
  { icon: Zap, label: "Performances optimisées", desc: "Applications rapides, construites avec des technologies modernes." },
  { icon: Globe, label: "Multi-utilisateurs", desc: "Plusieurs membres de votre équipe peuvent travailler en simultané." },
];

const techStack = [
  { cat: "Frontend", techs: ["React / Next.js", "TypeScript", "Tailwind CSS"] },
  { cat: "Backend", techs: ["Node.js", "API REST", "Base de données SQL / NoSQL"] },
  { cat: "Déploiement", techs: ["Hébergement cloud", "Nom de domaine", "SSL inclus"] },
];

export default function ApplicationsWebPage() {
  return (
    <>
      <Header />
      <main className="bg-[#050A1A] min-h-screen">

        {/* Hero */}
        <section className="relative pt-36 pb-24 overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-violet-500/30 text-xs font-medium text-violet-400 tracking-wider uppercase mb-6 bg-violet-500/5">
              Applications web
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Développement d'applications web{" "}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                sur mesure
              </span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-4 max-w-2xl mx-auto">
              Une application web, c'est un outil accessible depuis n'importe quel navigateur, sans installation,
              utilisable par toute votre équipe en simultané.
            </p>
            <p className="text-white/50 mb-10 max-w-xl mx-auto">
              Idéale pour les entreprises qui veulent centraliser leurs données, automatiser leurs processus ou remplacer des fichiers Excel partagés.
            </p>
            <a
              href="mailto:contact@adsolutions47.fr?subject=Demande%20de%20devis%20application%20web"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 hover:opacity-90 shadow-[0_0_40px_rgba(124,58,237,0.35)] transition-all duration-300"
            >
              Obtenir un devis gratuit
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Bénéfices */}
        <section className="py-20 bg-[#04081A]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
              Les avantages d'une{" "}
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">application web</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefices.map((b) => (
                <div key={b.label} className="p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-violet-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4">
                    <b.icon className="text-violet-400" size={20} />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{b.label}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            Technologies utilisées
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {techStack.map((t) => (
              <div key={t.cat} className="p-6 rounded-2xl bg-white/3 border border-white/8">
                <h3 className="text-violet-400 font-semibold text-sm uppercase tracking-wider mb-4">{t.cat}</h3>
                <ul className="flex flex-col gap-2">
                  {t.techs.map((tech) => (
                    <li key={tech} className="flex items-center gap-2 text-white/65 text-sm">
                      <CheckCircle size={14} className="text-blue-400 flex-shrink-0" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#04081A]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Globe className="w-12 h-12 text-violet-400 mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Votre application web, conçue pour votre métier
            </h2>
            <p className="text-white/55 mb-8">
              Développeur indépendant en Lot-et-Garonne — je conçois des applications web adaptées à vos besoins réels, avec un accompagnement de proximité.
            </p>
            <a
              href="mailto:contact@adsolutions47.fr?subject=Demande%20de%20devis%20application%20web"
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
