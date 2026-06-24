import type { Metadata } from "next";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getHomeData } from "@/lib/api";

import { stats , reasons } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Cactus IT Solutions, our process, values, and business-first approach to digital products."
};

export default async function AboutPage() {
  const data = await getHomeData();

  return (
    <section className="min-h-screen pb-24 pt-36 md:pt-44">
      <div className="container-pad">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-cactus-300">About Cactus</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            We build digital systems that look sharp and work harder for your business.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/62">
            Cactus IT Solutions is built around a simple idea: technology should make businesses clearer, faster, and easier to grow. We combine design, frontend development, Laravel backend systems, SEO thinking, and long-term support.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {stats?.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="glass-card rounded-[2rem] p-6">
                <div className="text-4xl font-bold text-white">{stat.value}</div>
                <p className="mt-3 text-sm leading-7 text-white/58">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Our mindset"
              title="Design first, business always."
              description="We do not treat websites, apps, and software as isolated screens. We plan them as business tools that need to explain value, reduce friction, and support growth."
            />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {reasons?.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 0.06}>
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6">
                  <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/58">{reason.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Button href="/contact">Start a project with us</Button>
        </div>
      </div>
    </section>
  );
}
