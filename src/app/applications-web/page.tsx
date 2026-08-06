import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/sections/FAQSection";
import {
  Globe, ArrowRight, Zap, Shield, RefreshCw, LayoutDashboard,
  Users, Network, FileText, Calendar, Layers, Search, PenTool, Code2,
  Rocket, TestTube, Server, Lock, Gauge, Headphones,
  Clock, Unplug,
} from "lucide-react";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Développement Application Web Sur Mesure - AD Solutions",
  description:
    "Applications web sur mesure, accessibles depuis tout navigateur, sécurisées et évolutives. Développeur indépendant en Lot-et-Garonne et Dordogne. Devis gratuit.",
  keywords: [
    "application web",
    "développement application web Lot-et-Garonne",
    "application web sur mesure",
    "application web entreprise Dordogne",
    "développeur web indépendant",
    "application métier navigateur",
    "développement logiciel métier",
  ],
  alternates: {
    canonical: "/applications-web",
  },
  openGraph: {
    title: "Développement applications web sur mesure – ADSolutions",
    description:
      "Applications web professionnelles accessibles depuis n'importe quel navigateur. Sur mesure, sécurisées et évolutives.",
    type: "website",
    locale: "fr_FR",
    siteName: "ADSolutions",
  },
};

const problemes = [
  { icon: Unplug, label: "Logiciels non connectés", desc: "Vos outils ne communiquent pas entre eux. Chaque application fonctionne en silo, sans partage de données." },
  { icon: FileText, label: "Fichiers Excel partout", desc: "Des tableurs qui se multiplient, des versions qui se croisent, des données dispersées sur plusieurs postes." },
  { icon: RefreshCw, label: "Ressaisies permanentes", desc: "Recopier les mêmes informations d'un outil à un autre : perte de temps et risque d'erreur à chaque saisie." },
  { icon: Layers, label: "Manque de centralisation", desc: "Vos données sont éparpillées. Impossible d'avoir une vue d'ensemble de votre activité en temps réel." },
  { icon: Lock, label: "Accès limité", desc: "Vos outils sont installés sur un seul poste. Impossible de travailler à distance ou en équipe." },
  { icon: Clock, label: "Perte de temps", desc: "Des processus manuels qui pourraient être automatisés. Des heures perdues chaque semaine sur des tâches répétitives." },
];

const applications = [
  { icon: Users, label: "Portail client", desc: "Offrez à vos clients un accès sécurisé pour consulter leurs documents, commandes et historiques." },
  { icon: Network, label: "Extranet", desc: "Connectez vos partenaires et fournisseurs avec un accès dédié et contrôlé à vos données." },
  { icon: LayoutDashboard, label: "Intranet", desc: "Centralisez vos ressources internes : documents, actualités, annuaire et outils collaboratifs." },
  { icon: Code2, label: "Plateforme métier", desc: "L'outil complet qui gère votre activité de A à Z, selon vos processus exacts." },
  { icon: Calendar, label: "Application de réservation", desc: "Permettez à vos clients de réserver en ligne, en temps réel, 24h/24." },
  { icon: Globe, label: "Plateforme SaaS", desc: "Commercialisez votre expertise sous forme d'application web accessible par abonnement." },
  { icon: Gauge, label: "Tableau de bord", desc: "Visualisez vos indicateurs clés en temps réel, avec des graphiques clairs et personnalisés." },
  { icon: Shield, label: "Interface d'administration", desc: "Gérez vos utilisateurs, permissions et configurations depuis un back-office sécurisé." },
  { icon: Users, label: "Outil collaboratif", desc: "Faites travailler vos équipes ensemble sur un même outil, avec un accès partagé en temps réel." },
  { icon: Network, label: "Espace fournisseur", desc: "Automatisez vos échanges avec vos fournisseurs : commandes, livraisons, factures." },
];

const methode = [
  { n: "01", icon: Search, t: "Analyse", d: "Échange approfondi sur votre activité, vos besoins et vos contraintes. Identification des points de blocage et des opportunités d'automatisation." },
  { n: "02", icon: PenTool, t: "Conception", d: "Définition de l'architecture, des interfaces et des fonctionnalités. Validation avec vous avant le développement." },
  { n: "03", icon: Code2, t: "Développement", d: "Codage de votre application avec des technologies modernes et maintenables. Tests réguliers pour garantir la fiabilité." },
  { n: "04", icon: TestTube, t: "Tests", d: "Vérification de chaque fonctionnalité, correction des bugs et validation de l'expérience utilisateur." },
  { n: "05", icon: Rocket, t: "Déploiement", d: "Mise en production, formation de votre équipe et accompagnement à la prise en main de l'application." },
  { n: "06", icon: RefreshCw, t: "Maintenance", d: "Suivi, corrections et évolutions après la livraison. Votre application reste performante et s'adapte à votre croissance." },
];

const pourquoi = [
  { icon: Code2, label: "Développement sur mesure", desc: "Aucun module générique. Chaque fonctionnalité est conçue pour votre métier." },
  { icon: Zap, label: "Technologies modernes", desc: "React, Next.js, Node.js — des technologies performantes, reconnues et durables." },
  { icon: Shield, label: "Sécurité", desc: "Authentification, chiffrement, SSL. Vos données et celles de vos clients sont protégées." },
  { icon: Gauge, label: "Performances", desc: "Applications rapides et optimisées pour une expérience fluide sur tous les appareils." },
  { icon: Server, label: "Hébergement", desc: "Hébergement cloud sécurisé, nom de domaine et certificat SSL inclus dans votre projet." },
  { icon: Headphones, label: "Accompagnement", desc: "Formation, prise en main et support à chaque étape de votre projet." },
];

export default function ApplicationsWebPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Applications web", path: "/applications-web" },
        ]}
      />
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
              Application web{" "}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                sur mesure
              </span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-4 max-w-2xl mx-auto">
              Une application web sur mesure est un outil accessible depuis n&apos;importe quel navigateur, sans installation,
              utilisable par toute votre équipe en simultané.
            </p>
            <p className="text-white/50 mb-10 max-w-xl mx-auto">
              Idéale pour les entreprises qui veulent centraliser leurs données, automatiser leurs processus ou remplacer des fichiers Excel partagés. Pour un usage sur un seul poste, un{" "}
              <Link href="/logiciels-sur-mesure" className="text-violet-400 hover:text-violet-300 transition-colors">logiciel sur mesure</Link>{" "}
              en application desktop peut aussi convenir.
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

        {/* Pourquoi développer une application web */}
        <section className="py-20 bg-[#04081A]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">
              Pourquoi développer une{" "}
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">application web</span> ?
            </h2>
            <p className="text-white/50 text-center mb-12 max-w-2xl mx-auto">
              Les outils dispersés et les tableurs atteignent leurs limites face à la complexité de votre activité. Une application web centralise tout.
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

        {/* Les applications que nous développons */}
        <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">
            Les applications que nous{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">développons</span>
          </h2>
          <p className="text-white/50 text-center mb-12 max-w-xl mx-auto">
            Chaque entreprise a des besoins différents. Voici les types d'applications web que nous concevons sur mesure.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {applications.map((app) => (
              <div key={app.label} className="p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-violet-500/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4">
                  <app.icon className="text-violet-400" size={20} />
                </div>
                <h3 className="text-white font-semibold mb-2">{app.label}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Notre méthode - Timeline */}
        <section className="py-20 bg-[#04081A]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">
              Notre{" "}
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">méthode</span>
            </h2>
            <p className="text-white/50 text-center mb-12 max-w-xl mx-auto">
              Une méthode claire en 6 étapes, de l'analyse à la maintenance, pour une application qui correspond exactement à votre métier.
            </p>
            <div className="flex flex-col gap-4">
              {methode.map((step) => (
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
          </div>
        </section>

        {/* Pourquoi ADSolutions */}
        <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">
            Pourquoi{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">ADSolutions</span> ?
          </h2>
          <p className="text-white/50 text-center mb-12 max-w-xl mx-auto">
            Un accompagnement de bout en bout, pensé pour les entreprises qui veulent une application web qui leur ressemble.
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
            <Globe className="w-12 h-12 text-violet-400 mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Vous avez un projet d&apos;application web ?
            </h2>
            <p className="text-white/55 mb-8">
              Développeur indépendant en Lot-et-Garonne — je conçois des applications web adaptées à vos besoins réels, avec un accompagnement de proximité.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:contact@adsolutions47.fr?subject=Demande%20de%20devis%20application%20web"
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
