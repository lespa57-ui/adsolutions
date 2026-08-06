type Step = {
  n: string;
  t: string;
  d: string;
};

type ProcessStepsProps = {
  steps: Step[];
  title?: string;
};

export default function ProcessSteps({ steps, title = "Comment ça se passe ?" }: ProcessStepsProps) {
  return (
    <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">{title}</h2>
      <div className="flex flex-col gap-4">
        {steps.map((step) => (
          <div key={step.n} className="flex gap-5 p-5 rounded-2xl bg-white/3 border border-white/8">
            <span className="text-3xl font-bold text-violet-500/30 flex-shrink-0 leading-none">{step.n}</span>
            <div>
              <h3 className="text-white font-semibold mb-1">{step.t}</h3>
              <p className="text-white/50 text-sm">{step.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
