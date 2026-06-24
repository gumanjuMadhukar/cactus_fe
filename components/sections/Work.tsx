import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Project } from "@/types/content";

type WorkProps = {
  projects: Project[];
};

export function Work({ projects }: WorkProps) {
  return (
    <section id="work" className="py-24">
      <div className="container-pad">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Project concepts built for clarity, speed, and scale."
            description="These case studies are API-ready. If Laravel is offline, the frontend automatically displays the matching static fallback projects."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <Link href={`/portfolio/${project.slug}`} className="group block overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045]">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={project.image ?? ""}
                    alt={project.title ?? ""}
                    fill
                    className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night via-night/10 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-night/50 px-3 py-1 text-xs text-white/72 backdrop-blur">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/58">{project.summary}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-cactus-300">
                    View case study <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
