import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type CtaLink = {
  label: string;
  href: string;
};

type ServiceCTAProps = {
  icon: LucideIcon;
  iconColor: "blue" | "violet" | "pink";
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  links?: CtaLink[];
};

const iconColorMap = {
  blue: "text-blue-400",
  violet: "text-violet-400",
  pink: "text-pink-400",
};

export default function ServiceCTA({
  icon: Icon,
  iconColor,
  title,
  description,
  ctaLabel = "Démarrer mon projet",
  ctaHref = "mailto:contact@adsolutions47.fr?subject=Demande%20de%20devis%20-%20ADSolutions",
  links = [],
}: ServiceCTAProps) {
  return (
    <section className="py-20 bg-[#04081A]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Icon className={`w-12 h-12 ${iconColorMap[iconColor]} mx-auto mb-6`} />
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-white/55 mb-8">{description}</p>
        <a
          href={ctaHref}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 hover:opacity-90 shadow-[0_0_40px_rgba(124,58,237,0.35)] transition-all duration-300"
        >
          {ctaLabel}
          <ArrowRight size={18} />
        </a>
        <p className="text-white/35 text-sm mt-4">Réponse sous 24h · Échange gratuit · Sans engagement</p>
        {links.length > 0 && (
          <p className="text-white/35 text-sm mt-6">
            {links.map((link, i) => (
              <span key={link.href}>
                {i > 0 && " · "}
                <Link href={link.href} className="text-violet-400 hover:text-violet-300 transition-colors">
                  {link.label}
                </Link>
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}
