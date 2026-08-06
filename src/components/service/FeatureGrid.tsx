import type { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  label: string;
  desc: string;
};

type FeatureGridProps = {
  features: Feature[];
  title?: React.ReactNode;
  subtitle?: string;
  variant?: "card" | "compact";
  accentColor?: "violet" | "pink" | "blue";
  bgDark?: boolean;
};

const accentMap = {
  violet: { icon: "text-violet-400 bg-violet-500/10", hover: "hover:border-violet-500/30" },
  pink: { icon: "text-pink-400 bg-pink-500/10", hover: "hover:border-pink-500/30" },
  blue: { icon: "text-blue-400 bg-blue-500/10", hover: "hover:border-blue-500/30" },
};

export default function FeatureGrid({
  features,
  title,
  subtitle,
  variant = "card",
  accentColor = "violet",
  bgDark = false,
}: FeatureGridProps) {
  const accent = accentMap[accentColor];

  return (
    <section className={`py-20 ${bgDark ? "bg-[#04081A]" : ""}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-white/50 text-center mb-12 max-w-xl mx-auto">{subtitle}</p>
        )}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 ${variant === "compact" ? "gap-4" : "gap-5"}`}>
          {features.map((f) => (
            <div
              key={f.label}
              className={`${variant === "compact" ? "p-4" : "p-6"} rounded-2xl bg-white/3 border border-white/8 ${accent.hover} transition-colors`}
            >
              <div className={`${variant === "compact" ? "w-9 h-9" : "w-10 h-10"} rounded-xl ${accent.icon} flex items-center justify-center mb-4`}>
                <f.icon size={variant === "compact" ? 18 : 20} />
              </div>
              <h3 className={`text-white font-semibold mb-2 ${variant === "compact" ? "text-sm" : ""}`}>{f.label}</h3>
              <p className={`text-white/50 ${variant === "compact" ? "text-xs" : "text-sm"} leading-relaxed`}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
