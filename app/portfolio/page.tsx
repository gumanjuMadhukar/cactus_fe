import type { Metadata } from "next";
import { Work } from "@/components/sections/Work";
import { FinalCta } from "@/components/sections/FinalCta";
import { getProjects } from "@/lib/api";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "View selected Cactus IT Solutions project concepts and case studies."
};

export default async function PortfolioIndexPage() {
  const projects = await getProjects();

  console.log("DEBUG PROJECTS:", projects);

  return (
    <>
      <section className="pb-4 pt-36 md:pt-44">
        <div className="container-pad">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-cactus-300">Portfolio</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Selected digital work planned for trust, clarity, and scale.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/62">
            Portfolio items can later be fully managed from Laravel CMS, including client, industry, gallery, result, technologies, and SEO metadata.
          </p>
        </div>
      </section>
      <Work projects={projects} />
      <FinalCta />
    </>
  );
}
