import type { LucideIcon } from "lucide-react";

type CaseStudyEntry = {
  icon: LucideIcon;
  sector: string;
  projectName: string;
  context?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  benefits?: string[];
  technologies?: string[];
};

type CaseStudyProps = {
  title?: React.ReactNode;
  subtitle?: string;
  cases: CaseStudyEntry[];
  bgDark?: boolean;
};

export default function CaseStudy({
  title,
  subtitle,
  cases,
  bgDark = false,
}: CaseStudyProps) {
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
        <div className="flex flex-col gap-5">
          {cases.map((c) => (
            <div
              key={c.projectName}
              className="p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-violet-500/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                  <c.icon className="text-violet-400" size={20} />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-medium text-violet-400 tracking-wider uppercase">
                    {c.sector}
                  </span>
                  <h3 className="text-white font-semibold mt-1 mb-2">{c.projectName}</h3>

                  {c.context && (
                    <p className="text-white/50 text-sm leading-relaxed mb-3">
                      <span className="text-white/70 font-medium">Contexte : </span>
                      {c.context}
                    </p>
                  )}

                  {c.problem && (
                    <p className="text-white/50 text-sm leading-relaxed mb-3">
                      <span className="text-white/70 font-medium">Problématique : </span>
                      {c.problem}
                    </p>
                  )}

                  {c.solution && (
                    <p className="text-white/50 text-sm leading-relaxed mb-3">
                      <span className="text-white/70 font-medium">Solution : </span>
                      {c.solution}
                    </p>
                  )}

                  {c.features && c.features.length > 0 && (
                    <div className="mb-3">
                      <p className="text-white/70 font-medium text-sm mb-1">Fonctionnalités</p>
                      <ul className="flex flex-col gap-1">
                        {c.features.map((f) => (
                          <li key={f} className="text-white/50 text-sm leading-relaxed flex items-start gap-2">
                            <span className="text-violet-400 flex-shrink-0 mt-0.5">•</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {c.benefits && c.benefits.length > 0 && (
                    <div className="mb-3">
                      <p className="text-white/70 font-medium text-sm mb-1">Bénéfices</p>
                      <ul className="flex flex-col gap-1">
                        {c.benefits.map((b) => (
                          <li key={b} className="text-white/50 text-sm leading-relaxed flex items-start gap-2">
                            <span className="text-violet-400 flex-shrink-0 mt-0.5">•</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {c.technologies && c.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {c.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
