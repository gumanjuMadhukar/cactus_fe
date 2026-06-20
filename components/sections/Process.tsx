import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ProcessStep } from "@/types/content";
import { getIcon } from "@/lib/icons";

type ProcessProps = {
  steps: ProcessStep[];
};

export function Process({ steps }: ProcessProps) {
  return (
    <section id="process" className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cactus-300/30 to-transparent" />
      <div className="container-pad relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="How we work"
            title="A clear process from first idea to live product."
            description="The goal is simple: understand the business clearly, design with purpose, build with quality, and keep improving after launch."
            align="center"
          />
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = getIcon(step.iconKey);
            return (
              <Reveal key={step.title} delay={index * 0.08}>
                <div className="glass-card h-full rounded-[1.7rem] p-5">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cactus-500/10 text-cactus-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold text-white/35">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/56">{step.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
