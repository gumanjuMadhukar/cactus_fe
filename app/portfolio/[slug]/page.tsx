import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { getProjectBySlug, getProjects } from "@/lib/api";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary
  };
}

export default async function PortfolioPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <section className="min-h-screen pb-24 pt-36 md:pt-44">
      <div className="container-pad">
        <Link href="/portfolio" className="mb-8 inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-cactus-300">
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-cactus-300">{project.category}</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">{project.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/62">{project.summary}</p>
          </div>

          <div className="glass-card rounded-[2rem] p-6">
            <h2 className="text-2xl font-semibold text-white">Project result</h2>
            <p className="mt-4 leading-8 text-white/62">{project.result}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/58">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-12 h-[520px] overflow-hidden rounded-[2.5rem] border border-white/10">
          <Image src={project.image} alt={project.title} fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-night/80 to-transparent" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {["Challenge", "Solution", "CMS future"].map((title, index) => (
            <div key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6">
              <CheckCircle2 className="h-6 w-6 text-cactus-300" />
              <h3 className="mt-5 text-2xl font-semibold text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/58">
                {index === 0 && "The client needed a cleaner digital experience that explained the offer quickly and supported future growth."}
                {index === 1 && "We planned a sharp interface, clear content structure, reusable components, and scalable frontend patterns."}
                {index === 2 && "This case study can come from Laravel with images, tags, results, SEO metadata, and publishing controls."}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Button href="/contact">Build something like this</Button>
        </div>
      </div>
    </section>
  );
}
