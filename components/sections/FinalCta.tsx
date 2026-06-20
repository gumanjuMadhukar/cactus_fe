import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";

export function FinalCta() {
  return (
    <section className="py-24">
      <div className="container-pad">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-cactus-300/20 bg-cactus-500/10 p-8 text-center shadow-glow md:p-16">
            <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cactus-400/20 blur-[80px]" />
            <div className="relative z-10 mx-auto max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.34em] text-cactus-300">Ready when you are</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Let’s build a website that feels as sharp as your company.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/62">
                Static preview is ready now. Laravel API data can replace it anytime without rebuilding the frontend structure.
              </p>
              <div className="mt-8 flex justify-center">
                <Button href="/contact">Start Your Project</Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
