"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 overflow-hidden">
      <div className="absolute inset-0 bg-[#030712]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-violet-700/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Logo size="md" className="mb-4" />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              ADSolutions accompagne les entreprises dans leur transformation numérique grâce à des logiciels, applications et sites web conçus sur mesure.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contact@adsolutions47.fr"
                className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors text-sm group"
              >
                <Mail size={14} className="text-violet-400 group-hover:text-violet-300 transition-colors" />
                contact@adsolutions47.fr
              </a>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <MapPin size={14} className="text-violet-400" />
                Lot-et-Garonne & Dordogne
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-4">Navigation</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Accueil", href: "#accueil" },
                { label: "Services", href: "#services" },
                { label: "Avantages", href: "#avantages" },
                { label: "Réalisations", href: "#realisations" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const el = document.querySelector(link.href);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-left text-white/40 hover:text-white/70 transition-colors text-sm cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <Link
                href="/mentions-legales"
                className="text-white/40 hover:text-white/70 transition-colors text-sm"
              >
                Mentions légales
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © 2025 ADSolutions. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/mentions-legales"
              className="text-white/25 hover:text-white/50 transition-colors text-xs"
            >
              Mentions légales
            </Link>
            <a
              href="mailto:contact@adsolutions47.fr?subject=Demande%20de%20devis%20-%20ADSolutions"
              className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-blue-600/80 via-violet-600/80 to-pink-600/80 hover:from-blue-600 hover:via-violet-600 hover:to-pink-600 transition-all"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
