import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Reason } from "@/types/content";
import { getIcon } from "@/lib/icons";

type WhyUsProps = {
  reasons: Reason[];
};

export function WhyUs({ reasons }: WhyUsProps) {
  return (
    <section className="py-24">
      <div className="container-pad grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Why Cactus"
            title="Sharp design, clean systems, and business-first thinking."
            description="Cactus IT Solutions should feel premium, but also practical. The frontend is built to impress users. The future CMS will help your team control the content easily."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {reasons.map((item, index) => {
            const Icon = getIcon(item.iconKey);
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="glass-card rounded-[2rem] p-6">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cactus-500/10 text-cactus-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/58">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
