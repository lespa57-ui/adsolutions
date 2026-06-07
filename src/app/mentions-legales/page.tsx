import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales – ADSolutions",
  description: "Mentions légales de ADSolutions, micro-entrepreneur spécialisé en logiciels sur mesure.",
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-[#050A1A]">
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
          <p className="text-white/40 text-sm">Dernière mise à jour : 2025</p>
        </div>

        <div className="space-y-10 text-white/70 leading-relaxed">

          <section className="glass rounded-2xl p-6 border border-white/8">
            <h2 className="text-white font-semibold text-lg mb-4 pb-3 border-b border-white/8">
              1. Éditeur du site
            </h2>
            <div className="space-y-2 text-sm">
              <p><span className="text-white/40">Nom de l&apos;entrepreneur :</span> <span className="text-white/70">À compléter</span></p>
              <p><span className="text-white/40">Statut :</span> <span className="text-white/70">Micro-entrepreneur</span></p>
              <p><span className="text-white/40">SIRET :</span> <span className="text-white/70">À compléter</span></p>
              <p><span className="text-white/40">Email :</span>{" "}
                <a href="mailto:contact@adsolutions47.fr" className="text-violet-400 hover:text-violet-300 transition-colors">
                  contact@adsolutions47.fr
                </a>
              </p>
              <p><span className="text-white/40">Zone géographique :</span> <span className="text-white/70">Lot-et-Garonne & Dordogne</span></p>
            </div>
          </section>

          <section className="glass rounded-2xl p-6 border border-white/8">
            <h2 className="text-white font-semibold text-lg mb-4 pb-3 border-b border-white/8">
              2. Hébergeur
            </h2>
            <div className="space-y-2 text-sm">
              <p><span className="text-white/40">Hébergeur :</span> <span className="text-white/70">À compléter</span></p>
            </div>
          </section>

          <section className="glass rounded-2xl p-6 border border-white/8">
            <h2 className="text-white font-semibold text-lg mb-4 pb-3 border-b border-white/8">
              3. Propriété intellectuelle
            </h2>
            <p className="text-sm">
              L&apos;ensemble du contenu de ce site (textes, images, logos, graphismes) est la propriété exclusive
              d&apos;ADSolutions, sauf mention contraire. Toute reproduction, distribution ou utilisation sans
              autorisation préalable est interdite.
            </p>
          </section>

          <section className="glass rounded-2xl p-6 border border-white/8">
            <h2 className="text-white font-semibold text-lg mb-4 pb-3 border-b border-white/8">
              4. Responsabilité
            </h2>
            <p className="text-sm">
              ADSolutions s&apos;efforce de fournir des informations exactes et à jour sur ce site. Cependant,
              l&apos;éditeur ne peut garantir l&apos;exhaustivité ou l&apos;exactitude des informations publiées et ne saurait
              être tenu responsable d&apos;éventuelles erreurs ou omissions.
            </p>
          </section>

          <section className="glass rounded-2xl p-6 border border-white/8">
            <h2 className="text-white font-semibold text-lg mb-4 pb-3 border-b border-white/8">
              5. Données personnelles
            </h2>
            <p className="text-sm">
              Ce site ne collecte pas de données personnelles via un formulaire. Le seul moyen de contact est
              l&apos;adresse email{" "}
              <a href="mailto:contact@adsolutions47.fr" className="text-violet-400 hover:text-violet-300 transition-colors">
                contact@adsolutions47.fr
              </a>
              . Les informations transmises par email sont utilisées uniquement pour répondre à vos demandes.
            </p>
          </section>

          <section className="glass rounded-2xl p-6 border border-white/8">
            <h2 className="text-white font-semibold text-lg mb-4 pb-3 border-b border-white/8">
              6. Cookies
            </h2>
            <p className="text-sm">
              Ce site n&apos;utilise pas de cookies de traçage ou de publicité. Des cookies techniques nécessaires
              au bon fonctionnement du site peuvent être déposés.
            </p>
          </section>

          <section className="glass rounded-2xl p-6 border border-white/8">
            <h2 className="text-white font-semibold text-lg mb-4 pb-3 border-b border-white/8">
              7. Droit applicable
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
