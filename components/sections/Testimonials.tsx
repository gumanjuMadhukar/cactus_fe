import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Testimonial } from "@/types/content";

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="py-24">
      <div className="container-pad">
        <Reveal>
          <SectionHeading
            eyebrow="Client words"
            title="Built for teams who need both beauty and control."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <figure className="glass-card h-full rounded-[2rem] p-6">
                <blockquote className="text-base leading-8 text-white/72">“{item.quote}”</blockquote>
                <figcaption className="mt-8 border-t border-white/10 pt-5">
                  <div className="font-semibold text-white">{item.name}</div>
                  <div className="mt-1 text-sm text-white/45">{item.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
