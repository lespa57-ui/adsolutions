import type { Metadata } from "next";
import Link from "next/link";
import {
  ServicePageLayout,
  FeatureGrid,
  ProcessSteps,
  ServiceCTA,
  CaseStudy,
} from "@/components/service";
import GmaoFAQ from "./GmaoFAQ";
import GmaoGallery from "./GmaoGallery";
import { ArrowRight, Wrench, AlertTriangle, RefreshCw, Clock, Package, ClipboardList, BarChart3, Calendar, Factory, FileText, LayoutDashboard, Code2, Zap, Network, Headphones } from "lucide-react";

export const metadata: Metadata = {
  title: "GMAO sur mesure pour les entreprises | ADSolutions",
  description:
    "Développement de GMAO sur mesure pour optimiser la maintenance de vos équipements. Gestion des interventions, plans de maintenance, suivi des pannes. Développeur indépendant en Lot-et-Garonne.",
  keywords: [
    "GMAO sur mesure",
    "logiciel de maintenance",
    "gestion maintenance assistée par ordinateur",
    "GMAO entreprise Lot-et-Garonne",
    "logiciel maintenance sur mesure",
    "suivi des interventions",
    "plan de maintenance",
  ],
  alternates: {
    canonical: "/gmao-sur-mesure",
  },
  openGraph: {
    title: "GMAO sur mesure pour entreprises – ADSolutions",
    description:
      "Une GMAO conçue spécifiquement pour votre activité. Gérez vos maintenances, interventions et équipements sur mesure.",
    type: "website",
    locale: "fr_FR",
    siteName: "ADSolutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "GMAO sur mesure pour entreprises – ADSolutions",
    description:
      "Une GMAO conçue spécifiquement pour votre activité. Gérez vos maintenances, interventions et équipements sur mesure.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GMAO sur mesure",
  provider: {
    "@type": "Organization",
    name: "ADSolutions",
    email: "contact@adsolutions47.fr",
    url: "https://www.adsolutions47.fr",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Lot-et-Garonne" },
    { "@type": "AdministrativeArea", name: "Dordogne" },
  ],
  description:
    "Développement de GMAO sur mesure pour optimiser la maintenance de vos équipements.",
};

export default function GmaoSurMesurePage() {
  return (
    <ServicePageLayout
      breadcrumbs={[
        { name: "Accueil", path: "/" },
        { name: "GMAO sur mesure", path: "/gmao-sur-mesure" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* 1. Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 text-xs font-medium text-blue-400 tracking-wider uppercase mb-6 bg-blue-500/5">
            GMAO sur mesure
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Gagnez le contrôle de votre maintenance avec une{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              GMAO sur mesure
            </span>
          </h1>
          <p className="text-lg text-white/60 leading-relaxed mb-4 max-w-2xl mx-auto">
            Centralisez vos demandes d&apos;intervention, votre planning, votre parc machine, vos pièces détachées, vos dépenses et vos rapports dans une seule application conçue selon vos méthodes de travail.
          </p>
          <p className="text-white/50 mb-10 max-w-xl mx-auto">
            ADSolutions développe des logiciels de GMAO sur mesure pour les entreprises qui souhaitent améliorer la traçabilité de leurs interventions, réduire les tâches administratives et disposer d&apos;une vision claire de leur activité de maintenance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 hover:opacity-90 shadow-[0_0_40px_rgba(124,58,237,0.35)] transition-all duration-300"
            >
              Échanger sur votre projet
              <ArrowRight size={18} />
            </Link>
            <a
              href="#cas-client"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white/80 border border-white/15 hover:border-white/30 hover:text-white transition-all duration-300"
            >
              Découvrir le cas client
            </a>
          </div>
        </div>
      </section>

      {/* 2. Pourquoi développer une GMAO ? */}
      <FeatureGrid
        title={
          <>
            Pourquoi développer une{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">GMAO sur mesure</span> ?
          </>
        }
        subtitle="Lorsque les informations sont dispersées entre des fichiers Excel, des e-mails, du papier et plusieurs logiciels, le suivi de la maintenance devient difficile. Une GMAO sur mesure rassemble les données utiles dans un outil unique adapté à votre organisation."
        features={[
          { icon: AlertTriangle, label: "Demandes dispersées", desc: "Les demandes d'intervention reçues par téléphone, e-mail ou papier peuvent être oubliées ou difficiles à prioriser." },
          { icon: RefreshCw, label: "Doubles saisies", desc: "Les mêmes informations sont parfois recopiées dans plusieurs fichiers, ce qui fait perdre du temps et augmente le risque d'erreur." },
          { icon: Clock, label: "Historique incomplet", desc: "Sans suivi centralisé, il devient difficile de retrouver les opérations réalisées sur un équipement et d'analyser les pannes récurrentes." },
          { icon: Package, label: "Stock difficile à suivre", desc: "Les consommations de pièces, les niveaux de stock et les besoins de réapprovisionnement manquent souvent de visibilité." },
          { icon: ClipboardList, label: "Rapports chronophages", desc: "La rédaction manuelle des comptes rendus et des synthèses hebdomadaires mobilise inutilement les équipes." },
          { icon: BarChart3, label: "Manque de visibilité", desc: "Sans indicateurs fiables, les responsables ne disposent pas d'une vision globale des interventions, des coûts et de l'état du parc machine." },
        ]}
        variant="compact"
        accentColor="violet"
        bgDark
      />

      {/* 3. Fonctionnalités */}
      <FeatureGrid
        title={
          <>
            Les fonctionnalités de votre{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">GMAO</span>
          </>
        }
        subtitle="Chaque fonctionnalité est adaptée à vos processus, à vos équipes et à vos objectifs."
        features={[
          { icon: ClipboardList, label: "Demandes d'intervention", desc: "Centralisez les demandes, définissez leur priorité, affectez-les à un technicien et suivez leur avancement." },
          { icon: Calendar, label: "Planning des interventions", desc: "Visualisez les interventions dans un calendrier et organisez plus facilement la charge de travail des équipes." },
          { icon: Factory, label: "Gestion du parc machine", desc: "Regroupez les informations techniques, documents, historiques et opérations de maintenance de chaque équipement." },
          { icon: Package, label: "Gestion des pièces détachées", desc: "Suivez les stocks, les mouvements de pièces et les consommations associées aux interventions." },
          { icon: BarChart3, label: "Suivi des dépenses", desc: "Centralisez les coûts liés à la maintenance et facilitez l'analyse des dépenses par équipement, intervention ou période." },
          { icon: FileText, label: "Rapports automatiques", desc: "Générez automatiquement les rapports d'intervention et les synthèses hebdomadaires à partir des données saisies." },
          { icon: Clock, label: "Historique et traçabilité", desc: "Conservez une trace complète des opérations réalisées, des pannes rencontrées et des actions menées." },
          { icon: LayoutDashboard, label: "Tableaux de bord", desc: "Suivez les informations utiles à votre activité grâce à des indicateurs adaptés à vos besoins." },
        ]}
        variant="card"
        accentColor="violet"
      />

      {/* 3.5. Galerie d'images */}
      <GmaoGallery />

      {/* 4. Cas client */}
      <div id="cas-client">
        <CaseStudy
          title={
            <>
              Une GMAO complète conçue pour une entreprise{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">industrielle</span>
            </>
          }
          bgDark
          cases={[
            {
              icon: Factory,
              sector: "Industrie",
              projectName: "Plateforme de gestion de maintenance sur mesure",
              context: "L'entreprise avait besoin de centraliser le suivi de sa maintenance dans un seul outil afin de simplifier le travail des équipes et d'améliorer la visibilité sur son parc machine.",
              problem: "Les demandes d'intervention, le calendrier, les pièces détachées, les dépenses et les rapports étaient gérés avec plusieurs supports. Cette organisation rendait le suivi plus complexe et demandait de nombreuses opérations manuelles.",
              solution: "ADSolutions a développé une GMAO complète adaptée aux processus de l'entreprise. La plateforme permet de gérer les demandes d'intervention, le planning, le parc machine, le stock de pièces, les dépenses et la génération automatique des rapports hebdomadaires.",
              features: [
                "Gestion des demandes d'intervention",
                "Calendrier des interventions",
                "Suivi du parc machine",
                "Gestion du stock de pièces",
                "Suivi des dépenses",
                "Génération automatique des rapports hebdomadaires",
                "Historique centralisé",
              ],
              benefits: [
                "Informations regroupées dans un outil unique",
                "Meilleure traçabilité des interventions",
                "Réduction des opérations administratives",
                "Suivi simplifié des équipements et des pièces",
                "Rapports hebdomadaires générés automatiquement",
                "Solution évolutive selon les besoins de l'entreprise",
              ],
            },
          ]}
        />
      </div>

      {/* 5. Pourquoi une solution sur mesure ? */}
      <FeatureGrid
        title={
          <>
            Pourquoi choisir une{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">GMAO sur mesure</span> ?
          </>
        }
        subtitle="Une solution standard impose généralement son fonctionnement. Une GMAO sur mesure est développée autour de votre organisation."
        features={[
          { icon: Code2, label: "Adaptée à vos processus", desc: "Le logiciel reprend vos méthodes de travail au lieu de vous obliger à modifier toute votre organisation." },
          { icon: Zap, label: "Sans fonctionnalités inutiles", desc: "Vous disposez uniquement des fonctions réellement utiles à vos équipes et à votre activité." },
          { icon: RefreshCw, label: "Évolutive", desc: "De nouveaux modules et de nouvelles connexions peuvent être ajoutés lorsque vos besoins évoluent." },
          { icon: Network, label: "Connectable à vos outils", desc: "La GMAO peut être reliée à vos outils existants lorsque les conditions techniques le permettent." },
          { icon: BarChart3, label: "Indicateurs personnalisés", desc: "Les tableaux de bord sont conçus à partir des informations réellement utiles au pilotage de votre maintenance." },
          { icon: Headphones, label: "Accompagnement dans la durée", desc: "ADSolutions peut assurer la maintenance, le support et les évolutions de la solution selon les modalités définies dans le projet." },
        ]}
        variant="compact"
        accentColor="blue"
      />

      {/* 6. Notre méthode */}
      <ProcessSteps
        title="Notre méthode"
        steps={[
          { n: "01", t: "Analyse", d: "Nous étudions vos processus de maintenance, les outils existants, les utilisateurs concernés et les difficultés rencontrées." },
          { n: "02", t: "Conception", d: "Nous définissons les fonctionnalités, les parcours et les écrans nécessaires à votre future solution." },
          { n: "03", t: "Développement", d: "La plateforme est développée progressivement avec des points de validation réguliers." },
          { n: "04", t: "Tests", d: "Les fonctionnalités sont vérifiées avec les utilisateurs afin de corriger les écarts et de valider les usages." },
          { n: "05", t: "Déploiement", d: "La solution est mise en service avec la reprise des données prévue dans le périmètre du projet." },
          { n: "06", t: "Maintenance", d: "Le logiciel peut ensuite être maintenu et enrichi selon l'évolution de vos besoins." },
        ]}
      />

      {/* 7. FAQ locale GMAO */}
      <GmaoFAQ />

      {/* 8. CTA final */}
      <ServiceCTA
        icon={Wrench}
        iconColor="blue"
        title="Vous souhaitez moderniser la gestion de votre maintenance ?"
        description="Présentez-nous vos méthodes de travail, vos outils actuels et les difficultés rencontrées. Nous étudierons avec vous la possibilité de créer une GMAO réellement adaptée à votre entreprise."
        ctaLabel="Échanger sur votre projet"
        ctaHref="/contact"
        links={[
          { label: "Découvrir nos réalisations", href: "/realisations" },
        ]}
      />
    </ServicePageLayout>
  );
}
