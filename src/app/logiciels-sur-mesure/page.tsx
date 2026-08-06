import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/sections/FAQSection";
import {
  Code2, ArrowRight, FileText, Wrench, Package,
  Calendar, Users, Search, PenTool, Rocket, RefreshCw, Settings,
  Factory, Headphones, Globe, Network, Shield, Zap,
  Layers, UserCheck, TrendingUp, AlertTriangle, Clock, XCircle,
} from "lucide-react";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Logiciel Sur Mesure pour Entreprise - AD Solutions",
  description:
    "Développement de logiciels métier sur mesure pour automatiser vos tâches et gagner du temps. Développeur indépendant en Lot-et-Garonne. Devis gratuit sous 24h.",
  keywords: [
    "logiciel sur mesure",
    "développement logiciel métier",
    "logiciel sur mesure Lot-et-Garonne",
    "logiciel métier entreprise",
    "développement logiciel Dordogne",
    "automatisation entreprise",
    "logiciel personnalisé",
    "application web",
  ],
  alternates: {
    canonical: "/logiciels-sur-mesure",
  },
  openGraph: {
    title: "Logiciels sur mesure pour entreprises – ADSolutions",
    description:
      "Des logiciels métier conçus spécifiquement pour votre activité. Automatisez vos tâches, gagnez du temps. Développeur indépendant en Lot-et-Garonne.",
    type: "website",
    locale: "fr_FR",
    siteName: "ADSolutions",
  },
};

const problemes = [
  { icon: AlertTriangle, label: "Logiciels standards limités", desc: "Les outils génériques ne couvrent jamais 100% de vos besoins réels. Vous vous adaptez à eux, pas l'inverse." },
  { icon: XCircle, label: "Doubles saisies", desc: "Recopier les mêmes informations d'un outil à un autre fait perdre des heures et multiplie les erreurs." },
  { icon: FileText, label: "Excel poussé dans ses retranchements", desc: "Un tableur n'est pas fait pour gérer un métier complet : versions qui se multiplient, formules qui cassent, données dispersées." },
  { icon: Clock, label: "Pertes de temps quotidiennes", desc: "Des tâches répétitives et manuelles qui pourraient être automatisées en quelques clics avec un outil adapté." },
  { icon: AlertTriangle, label: "Erreurs humaines", desc: "Saisie manuelle = risque d'erreur. Un logiciel sur mesure fiabilise vos données et vos processus." },
  { icon: Layers, label: "Processus spécifiques non couverts", desc: "Chaque entreprise a sa façon de travailler. Un logiciel sur mesure épouse exactement vos processus, pas l'inverse." },
];

const approche = [
  { n: "01", icon: Search, t: "Analyse", d: "Échange approfondi sur votre activité, vos besoins et vos contraintes. Identification des points de blocage et des opportunités d'automatisation." },
  { n: "02", icon: PenTool, t: "Conception", d: "Définition de l'architecture, des interfaces et des fonctionnalités. Validation avec vous avant le développement." },
  { n: "03", icon: Code2, t: "Développement", d: "Codage du logiciel avec des technologies modernes et maintenables. Tests réguliers pour garantir la fiabilité." },
  { n: "04", icon: Rocket, t: "Déploiement", d: "Mise en production, formation de votre équipe et accompagnement à la prise en main de l'outil." },
  { n: "05", icon: RefreshCw, t: "Maintenance", d: "Suivi, corrections et évolutions après la livraison. Votre logiciel reste performant et s'adapte à votre croissance." },
];

const categories = [
  { icon: Users, label: "CRM", desc: "Centralisez vos contacts, historiques, relances et opportunités commerciales." },
  { icon: Network, label: "ERP", desc: "Gérez l'ensemble de votre entreprise : stocks, achats, ventes, comptabilité, RH." },
  { icon: FileText, label: "Logiciel commercial", desc: "Devis, factures, bons de commande — automatisez tout votre cycle commercial." },
  { icon: Factory, label: "Gestion de production", desc: "Suivez vos ordres de fabrication, gammes opératoires et coûts de revient." },
  { icon: Headphones, label: "Gestion SAV", desc: "Tracez les interventions, pièces de rechange et historiques de maintenance." },
  { icon: Package, label: "Gestion de stock", desc: "Inventaires en temps réel, alertes de seuil, gestion des entrées et sorties." },
  { icon: Calendar, label: "Planning", desc: "Organisez les plannings de vos équipes, ressources et chantiers sans Excel." },
  { icon: Wrench, label: "Suivi d'interventions", desc: "Planifiez et suivez vos interventions terrain en temps réel depuis un navigateur." },
  { icon: Globe, label: "Portail client", desc: "Offrez à vos clients un accès sécurisé pour consulter leurs documents et commandes." },
  { icon: Network, label: "Extranet", desc: "Connectez vos partenaires et fournisseurs avec un accès dédié et sécurisé." },
];

const pourquoi = [
  { icon: Code2, label: "Développement 100% sur mesure", desc: "Aucun module générique. Chaque fonctionnalité est conçue pour votre métier." },
  { icon: UserCheck, label: "Interlocuteur unique", desc: "Un seul contact du début à la fin. Pas de transferts, pas de déperdition." },
  { icon: TrendingUp, label: "Code évolutif", desc: "Votre logiciel grandit avec votre activité. Ajoutez des fonctionnalités au fur et à mesure." },
  { icon: Zap, label: "Technologies modernes", desc: "React, Next.js, Node.js — des technologies performantes, reconnues et durables." },
  { icon: Settings, label: "Maintenance", desc: "Support, corrections et mises à jour après la livraison pour un outil toujours fiable." },
  { icon: Shield, label: "Accompagnement", desc: "Formation, prise en main et conseils à chaque étape de votre projet." },
];

export default function LogicielsSurMesurePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Logiciels sur mesure", path: "/logiciels-sur-mesure" },
        ]}
      />
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
              Logiciel sur mesure{" "}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                pour votre entreprise
              </span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-4 max-w-2xl mx-auto">
              Vous perdez du temps avec des outils génériques qui ne correspondent pas à votre activité ?
              Le développement de logiciels métier sur mesure permet d&apos;adapter entièrement l&apos;outil à vos processus, en{" "}
              <strong className="text-white/80">Lot-et-Garonne, à Agen et en Dordogne</strong>.
            </p>
            <p className="text-white/50 mb-10 max-w-xl mx-auto">
              Un logiciel sur mesure, c&apos;est un outil conçu uniquement pour vous — pas de fonctionnalités inutiles, pas d&apos;abonnement excessif. Vous pouvez aussi opter pour une{" "}
              <Link href="/applications-web" className="text-violet-400 hover:text-violet-300 transition-colors">application web</Link>{" "}
              si vous préférez un accès depuis un navigateur.
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

        {/* Pourquoi développer un logiciel sur mesure */}
        <section className="py-20 bg-[#04081A]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">
              Pourquoi développer un logiciel{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">sur mesure</span> ?
            </h2>
            <p className="text-white/50 text-center mb-12 max-w-2xl mx-auto">
              Les outils standards et les tableurs atteignent vite leurs limites face à la complexité de votre métier. Un logiciel sur mesure supprime ces freins.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {problemes.map((item) => (
                <div key={item.label} className="flex items-start gap-3 p-4 rounded-2xl bg-white/3 border border-white/8">
                  <item.icon className="text-violet-400 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{item.label}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notre approche - Timeline */}
        <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">
            Notre{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">approche</span>
          </h2>
          <p className="text-white/50 text-center mb-12 max-w-xl mx-auto">
            Une méthode claire en 5 étapes, de l'analyse à la maintenance, pour un résultat qui correspond exactement à votre métier.
          </p>
          <div className="flex flex-col gap-4">
            {approche.map((step) => (
              <div key={step.n} className="flex gap-5 p-5 rounded-2xl bg-white/3 border border-white/8">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                    <step.icon className="text-violet-400" size={20} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold text-violet-500/50">{step.n}</span>
                    <h3 className="text-white font-semibold">{step.t}</h3>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ce que nous développons */}
        <section className="py-20 bg-[#04081A]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">
              Ce que nous{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">développons</span>
            </h2>
            <p className="text-white/50 text-center mb-12 max-w-xl mx-auto">
              Chaque entreprise est différente. Voici les types de logiciels métier que nous concevons sur mesure.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {categories.map((cat) => (
                <div key={cat.label} className="p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-violet-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4">
                    <cat.icon className="text-violet-400" size={20} />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{cat.label}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi ADSolutions */}
        <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">
            Pourquoi{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">ADSolutions</span> ?
          </h2>
          <p className="text-white/50 text-center mb-12 max-w-xl mx-auto">
            Un accompagnement de bout en bout, pensé pour les entreprises qui veulent un outil qui leur ressemble.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pourquoi.map((item) => (
              <div key={item.label} className="flex items-start gap-3 p-4 rounded-2xl bg-white/3 border border-white/8">
                <div className="w-9 h-9 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-violet-400" size={18} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">{item.label}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <FAQSection />

        {/* CTA final */}
        <section className="py-20 bg-[#04081A]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Code2 className="w-12 h-12 text-violet-400 mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Parlons de votre projet
            </h2>
            <p className="text-white/55 mb-8">
              Développeur logiciel indépendant en Lot-et-Garonne — je vous accompagne de A à Z pour créer l&apos;outil qui correspond vraiment à votre métier.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:contact@adsolutions47.fr?subject=Demande%20de%20devis%20logiciel%20sur%20mesure"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 hover:opacity-90 shadow-[0_0_40px_rgba(124,58,237,0.35)] transition-all duration-300"
              >
                Demander un devis
                <ArrowRight size={18} />
              </a>
              <Link
                href="/realisations"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white/80 border border-white/15 hover:border-white/30 hover:text-white transition-all duration-300"
              >
                Découvrir nos réalisations
              </Link>
            </div>
            <p className="text-white/35 text-sm mt-4">Réponse sous 24h · Échange gratuit · Sans engagement</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
