import { ArrowRight } from "lucide-react";

type ServiceHeroProps = {
  badge: string;
  badgeColor: "blue" | "violet" | "pink";
  h1: React.ReactNode;
  paragraphs: React.ReactNode[];
  ctaLabel?: string;
  ctaHref?: string;
};

const colorMap = {
  blue: {
    badge: "border-blue-500/30 text-blue-400 bg-blue-500/5",
    blur1: "bg-blue-600/10",
    blur2: "bg-violet-600/10",
  },
  violet: {
    badge: "border-violet-500/30 text-violet-400 bg-violet-500/5",
    blur1: "bg-violet-600/10",
    blur2: "bg-blue-600/10",
  },
  pink: {
    badge: "border-pink-500/30 text-pink-400 bg-pink-500/5",
    blur1: "bg-pink-600/8",
    blur2: "bg-violet-600/10",
  },
};

export default function ServiceHero({
  badge,
  badgeColor,
  h1,
  paragraphs,
  ctaLabel = "Obtenir un devis gratuit",
  ctaHref = "mailto:contact@adsolutions47.fr?subject=Demande%20de%20devis%20-%20ADSolutions",
}: ServiceHeroProps) {
  const c = colorMap[badgeColor];

  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className={`absolute top-0 left-0 w-[500px] h-[500px] rounded-full ${c.blur1} blur-[120px] pointer-events-none`} />
      <div className={`absolute top-0 right-0 w-[400px] h-[400px] rounded-full ${c.blur2} blur-[100px] pointer-events-none`} />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className={`inline-block px-4 py-1.5 rounded-full border ${c.badge} text-xs font-medium tracking-wider uppercase mb-6`}>
          {badge}
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          {h1}
        </h1>
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className={i === 0 ? "text-lg text-white/60 leading-relaxed mb-4 max-w-2xl mx-auto" : "text-white/50 mb-10 max-w-xl mx-auto"}
          >
            {p}
          </p>
        ))}
        <a
          href={ctaHref}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 hover:opacity-90 shadow-[0_0_40px_rgba(124,58,237,0.35)] transition-all duration-300"
        >
          {ctaLabel}
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
