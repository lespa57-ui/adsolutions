import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Monitor, CheckCircle, ArrowRight, Search, Smartphone, Wrench, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Création Site Internet Agen et Lot-et-Garonne | AD Solutions",
  description:
    "Création de sites internet vitrine et e-commerce, optimisés SEO, pour les entreprises d'Agen et du Lot-et-Garonne. Devis gratuit, réponse sous 24h.",
  keywords: [
    "création site internet",
    "création site internet Agen",
    "agence web Agen",
    "création site vitrine",
    "création site e-commerce",
    "création site internet Lot-et-Garonne",
    "création site web professionnel",
    "référencement naturel",
    "SEO",
    "création site internet Dordogne",
    "Nouvelle-Aquitaine",
  ],
  alternates: {
    canonical: "/sites-internet",
  },
  openGraph: {
    title: "Création sites internet professionnels – ADSolutions",
    description:
      "Sites internet modernes, rapides et référencés sur Google pour les entreprises locales en Lot-et-Garonne et Dordogne.",
    type: "website",
    locale: "fr_FR",
    siteName: "ADSolutions",
  },
};

const inclus = [
  { icon: Smartphone, label: "100% responsive mobile", desc: "Votre site s'adapte parfaitement sur smartphone, tablette et ordinateur." },
  { icon: Search, label: "Référencement Google (SEO)", desc: "Structure optimisée pour apparaître dans les résultats de recherche locaux." },
  { icon: Zap, label: "Chargement rapide", desc: "Sites optimisés pour des temps de chargement minimaux." },
  { icon: Monitor, label: "Design moderne premium", desc: "Une interface soignée qui reflète le sérieux de votre entreprise." },
  { icon: TrendingUp, label: "Appel à l'action clair", desc: "Boutons de contact, formulaires et éléments de conversion bien positionnés." },
  { icon: Wrench, label: "Maintenance possible", desc: "Mises à jour, corrections et évolutions prises en charge après livraison." },
];

const types = [
  {
    title: "Site vitrine",
    desc: "Présentez votre activité, vos services et vos coordonnées de façon professionnelle. Idéal pour les artisans, commerçants et PME d'Agen et du Lot-et-Garonne.",
    tags: ["Présentation", "Contact", "SEO local"],
  },
  {
    title: "Site e-commerce",
    desc: "Une boutique en ligne sur mesure pour vendre vos produits : catalogue, panier, paiement sécurisé et gestion des commandes.",
    tags: ["Boutique en ligne", "Paiement", "Catalogue"],
  },
  {
    title: "Site avec espace client",
    desc: "Ajoutez une zone sécurisée pour vos clients : documents, suivi de commandes, devis en ligne.",
    tags: ["Authentification", "Tableau de bord", "Téléchargements"],
  },
];

export default function SitesInternetPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Sites internet", path: "/sites-internet" },
        ]}
      />
      <Header />
      <main className="bg-[#050A1A] min-h-screen">

        {/* Hero */}
        <section className="relative pt-36 pb-24 overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-pink-600/8 blur-[120px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-pink-500/30 text-xs font-medium text-pink-400 tracking-wider uppercase mb-6 bg-pink-500/5">
              Sites internet
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Création de site internet{" "}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                à Agen et en Lot-et-Garonne
              </span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-4 max-w-2xl mx-auto">
              Votre site internet, c&apos;est votre vitrine en ligne. AD Solutions crée des sites vitrine et e-commerce modernes, rapides et optimisés pour le référencement naturel,
              pour les entreprises d&apos;<strong className="text-white/80">Agen, du Lot-et-Garonne et de la Dordogne</strong>.
            </p>
            <p className="text-white/50 mb-10 max-w-xl mx-auto">
              Un site professionnel conçu sur mesure, responsive mobile, avec un travail de SEO soigné dès la création pour vous aider à apparaître sur Google.
            </p>
            <a
              href="mailto:contact@adsolutions47.fr?subject=Demande%20de%20devis%20site%20internet"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 hover:opacity-90 shadow-[0_0_40px_rgba(124,58,237,0.35)] transition-all duration-300"
            >
              Obtenir un devis gratuit
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Types de sites */}
        <section className="py-20 bg-[#04081A]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
              Quel type de site pour votre activité ?
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {types.map((t) => (
                <div key={t.title} className="p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-pink-500/30 transition-colors">
                  <h3 className="text-white font-bold text-lg mb-3">{t.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-4">{t.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {t.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ce qui est inclus */}
        <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            Ce qui est inclus dans chaque site
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {inclus.map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-5 rounded-2xl bg-white/3 border border-white/8">
                <div className="w-9 h-9 rounded-xl bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-pink-400" size={18} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">{item.label}</h3>
                  <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEO local mention */}
        <section className="py-16 bg-[#04081A]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 rounded-3xl border border-violet-500/20 bg-white/2 text-center">
              <Search className="w-10 h-10 text-violet-400 mx-auto mb-4" />
              <h3 className="text-white font-bold text-xl mb-3">Référencement naturel (SEO) local inclus</h3>
              <p className="text-white/55 leading-relaxed">
                Chaque site est construit avec une structure SEO optimisée : balises H1/H2, métadonnées, vitesse de chargement,
                compatibilité mobile. L&apos;objectif est que vos clients vous trouvent sur Google quand ils cherchent vos services à{" "}
                <strong className="text-white/75">Agen, en Lot-et-Garonne ou en Dordogne</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Monitor className="w-12 h-12 text-pink-400 mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Créons votre site internet ensemble
            </h2>
            <p className="text-white/55 mb-8">
              Développeur indépendant en Lot-et-Garonne — je crée des sites clairs, rapides et référencés qui donnent une image professionnelle de votre activité.
            </p>
            <a
              href="mailto:contact@adsolutions47.fr?subject=Demande%20de%20devis%20site%20internet"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 hover:opacity-90 shadow-[0_0_40px_rgba(124,58,237,0.35)] transition-all duration-300"
            >
              Démarrer mon projet
              <ArrowRight size={18} />
            </a>
            <p className="text-white/35 text-sm mt-4">Réponse sous 24h · Échange gratuit · Sans engagement</p>
            <p className="text-white/35 text-sm mt-6">
              Voir des <Link href="/realisations" className="text-violet-400 hover:text-violet-300 transition-colors">exemples de sites réalisés</Link>,
              découvrir nos <Link href="/logiciels-sur-mesure" className="text-violet-400 hover:text-violet-300 transition-colors">logiciels sur mesure</Link>,
              consulter la <Link href="/#faq" className="text-violet-400 hover:text-violet-300 transition-colors">FAQ</Link> ou{" "}
              <Link href="/contact" className="text-violet-400 hover:text-violet-300 transition-colors">nous contacter</Link>.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
