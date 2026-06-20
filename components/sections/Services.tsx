import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Service } from "@/types/content";
import { getIcon } from "@/lib/icons";

type ServicesProps = {
  services: Service[];
};

export function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="py-24">
      <div className="container-pad">
        <Reveal>
          <SectionHeading
            eyebrow="What we build"
            title="Digital products with a sharper business edge."
            description="From websites and apps to custom business systems, every service is planned around speed, clarity, scalability, and real business use."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = getIcon(service.iconKey);
            return (
              <Reveal key={service.slug} delay={index * 0.06}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-cactus-300/40 hover:bg-white/[0.075] hover:shadow-glow"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cactus-500/10 text-cactus-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-white/35 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cactus-300" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-cactus-300/80">{service.eyebrow}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/58">{service.short}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature) => (
                      <span key={feature} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/55">
                        {feature}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
