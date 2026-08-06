import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Mentions légales – AD Solutions | Arnaud Darlay, développeur Lot-et-Garonne",
  description:
    "Mentions légales d'AD Solutions (Arnaud Darlay), entrepreneur individuel spécialisé en logiciels sur mesure, applications web et sites internet à Lougratte (47).",
  alternates: {
    canonical: "/mentions-legales",
  },
  openGraph: {
    title: "Mentions légales – AD Solutions",
    description:
      "Informations légales, hébergement, propriété intellectuelle et protection des données d'AD Solutions.",
    type: "website",
    locale: "fr_FR",
    siteName: "AD Solutions",
  },
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-[#050A1A]">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Mentions légales", path: "/mentions-legales" },
        ]}
      />
      {/* Header */}
      <div className="border-b border-white/8 bg-[#030712]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-xl">
            <span className="gradient-text">AD</span>Solutions
          </Link>
          <Link
            href="/"
            className="text-white/50 hover:text-white text-sm transition-colors"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Mentions <span className="gradient-text">légales</span>
          </h1>
          <p className="text-white/40 text-sm">Dernière mise à jour : août 2026</p>
        </div>

        <div className="space-y-10 text-white/70 leading-relaxed">

          <section className="glass rounded-2xl p-6 border border-white/8">
            <h2 className="text-white font-semibold text-lg mb-4 pb-3 border-b border-white/8">
              1. Éditeur du site
            </h2>
            <div className="space-y-2 text-sm">
              <p><span className="text-white/40">Nom commercial :</span> <span className="text-white/70">AD Solutions</span></p>
              <p><span className="text-white/40">Statut :</span> <span className="text-white/70">Entrepreneur individuel – Micro-entreprise</span></p>
              <p><span className="text-white/40">SIREN :</span> <span className="text-white/70">108 175 829</span></p>
              <p><span className="text-white/40">SIRET :</span> <span className="text-white/70">108 175 829 00010</span></p>
              <p><span className="text-white/40">Code APE :</span> <span className="text-white/70">6201Z – Programmation informatique</span></p>
              <p><span className="text-white/40">Date d&apos;immatriculation :</span> <span className="text-white/70">03/08/2026</span></p>
              <p><span className="text-white/40">Email :</span>{" "}
                <a href="mailto:contact@adsolutions47.fr" className="text-violet-400 hover:text-violet-300 transition-colors">
                  contact@adsolutions47.fr
                </a>
              </p>
              <p><span className="text-white/40">Nom de domaine :</span>{" "}
                <a href="https://www.adsolutions47.fr" className="text-violet-400 hover:text-violet-300 transition-colors">
                  www.adsolutions47.fr
                </a>
              </p>
              <p><span className="text-white/40">Zone géographique d&apos;intervention :</span> <span className="text-white/70">Lot-et-Garonne & Dordogne</span></p>
              <p><span className="text-white/40">Directeur de la publication :</span> <span className="text-white/70">Arnaud Darlay</span></p>
            </div>
          </section>

          <section className="glass rounded-2xl p-6 border border-white/8">
            <h2 className="text-white font-semibold text-lg mb-4 pb-3 border-b border-white/8">
              2. Hébergeur
            </h2>
            <div className="space-y-2 text-sm">
              <p><span className="text-white/40">Nom :</span> <span className="text-white/70">Vercel Inc.</span></p>
              <p><span className="text-white/40">Adresse :</span> <span className="text-white/70">340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</span></p>
              <p><span className="text-white/40">Site internet :</span>{" "}
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 transition-colors">
                  vercel.com
                </a>
              </p>
            </div>
          </section>

          <section className="glass rounded-2xl p-6 border border-white/8">
            <h2 className="text-white font-semibold text-lg mb-4 pb-3 border-b border-white/8">
              3. Propriété intellectuelle
            </h2>
            <p className="text-sm">
              L&apos;ensemble du contenu de ce site (textes, logos, graphismes, illustrations, logiciels, code source
              et développements spécifiques) est protégé par le Code de la propriété intellectuelle et demeure la
              propriété exclusive d&apos;AD Solutions, sauf mention contraire. Toute reproduction, représentation ou
              diffusion, totale ou partielle, sans autorisation écrite préalable est interdite.
            </p>
          </section>

          <section className="glass rounded-2xl p-6 border border-white/8">
            <h2 className="text-white font-semibold text-lg mb-4 pb-3 border-b border-white/8">
              4. Responsabilité
            </h2>
            <p className="text-sm">
              AD Solutions s&apos;efforce de fournir des informations exactes et à jour sur ce site. Cependant,
              l&apos;éditeur ne peut garantir l&apos;exhaustivité ou l&apos;exactitude des informations publiées et ne saurait
              être tenu responsable d&apos;éventuelles erreurs ou omissions.
            </p>
          </section>

          <section className="glass rounded-2xl p-6 border border-white/8">
            <h2 className="text-white font-semibold text-lg mb-4 pb-3 border-b border-white/8">
              5. Données personnelles (RGPD)
            </h2>
            <div className="space-y-3 text-sm">
              <p>
                <span className="text-white/40">Responsable du traitement :</span>{" "}
                <span className="text-white/70">Arnaud Darlay</span>
              </p>
              <p>
                <span className="text-white/40">Contact :</span>{" "}
                <a href="mailto:contact@adsolutions47.fr" className="text-violet-400 hover:text-violet-300 transition-colors">
                  contact@adsolutions47.fr
                </a>
              </p>
              <p>
                Dans le cadre du formulaire de contact disponible sur ce site, les données suivantes peuvent être
                collectées : nom, entreprise, email, téléphone, besoin exprimé et description du projet.
              </p>
              <p>
                <span className="text-white/40">Finalité :</span> ces données sont collectées uniquement afin de
                traiter votre demande de contact ou de devis et de vous répondre dans les meilleurs délais. Elles ne
                sont ni cédées, ni vendues, ni utilisées à des fins commerciales tierces.
              </p>
              <p>
                <span className="text-white/40">Durée de conservation :</span> les données transmises via le
                formulaire de contact sont conservées le temps nécessaire au traitement de la demande, puis
                supprimées ou archivées dans un délai maximal de 3 ans en l&apos;absence de suite commerciale.
              </p>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et
                Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression, de limitation et
                d&apos;opposition concernant vos données personnelles. Vous pouvez exercer ces droits à tout moment en
                écrivant à{" "}
                <a href="mailto:contact@adsolutions47.fr" className="text-violet-400 hover:text-violet-300 transition-colors">
                  contact@adsolutions47.fr
                </a>
                .
              </p>
              <p>
                Vous disposez également du droit d&apos;introduire une réclamation auprès de la Commission Nationale
                de l&apos;Informatique et des Libertés (CNIL) —{" "}
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 transition-colors">
                  www.cnil.fr
                </a>
                .
              </p>
            </div>
          </section>

          <section className="glass rounded-2xl p-6 border border-white/8">
            <h2 className="text-white font-semibold text-lg mb-4 pb-3 border-b border-white/8">
              6. Cookies
            </h2>
            <p className="text-sm">
              Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement. Aucun cookie
              publicitaire ou de suivi n&apos;est déposé.
            </p>
          </section>

          <section className="glass rounded-2xl p-6 border border-white/8">
            <h2 className="text-white font-semibold text-lg mb-4 pb-3 border-b border-white/8">
              7. TVA
            </h2>
            <p className="text-sm">
              TVA non applicable, article 293 B du Code Général des Impôts.
            </p>
          </section>

          <section className="glass rounded-2xl p-6 border border-white/8">
            <h2 className="text-white font-semibold text-lg mb-4 pb-3 border-b border-white/8">
              8. Médiation de la consommation
            </h2>
            <p className="text-sm">
              L&apos;activité d&apos;AD Solutions s&apos;adresse exclusivement à une clientèle professionnelle (relation B2B).
              En conséquence, aucun dispositif de médiation de la consommation n&apos;est applicable dans le cadre des
              prestations proposées sur ce site.
            </p>
          </section>

          <section className="glass rounded-2xl p-6 border border-white/8">
            <h2 className="text-white font-semibold text-lg mb-4 pb-3 border-b border-white/8">
              9. Accessibilité
            </h2>
            <p className="text-sm">
              Ce site est développé dans une démarche visant une accessibilité conforme au Référentiel Général
              d&apos;Amélioration de l&apos;Accessibilité (RGAA), afin de permettre à tous les utilisateurs, y compris en
              situation de handicap, d&apos;accéder aux contenus dans de bonnes conditions.
            </p>
          </section>

          <section className="glass rounded-2xl p-6 border border-white/8">
            <h2 className="text-white font-semibold text-lg mb-4 pb-3 border-b border-white/8">
              10. Droit applicable
            </h2>
            <p className="text-sm">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux
              compétents seront ceux du ressort du domicile de l&apos;éditeur.
            </p>
          </section>

        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 hover:opacity-90 transition-opacity"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
