import type { Metadata } from "next";
import { BriefcaseBusiness, MapPin } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { getJobs } from "@/lib/api";

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore open roles at Cactus IT Solutions."
};

export default async function CareersPage() {
  const jobs = await getJobs();

  return (
    <section className="min-h-screen pb-24 pt-36 md:pt-44">
      <div className="container-pad">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-cactus-300">Careers</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Join a team building sharp digital products.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/62">
            Job listings are API-ready. Laravel can later control job posts, application status, and candidate submissions from the CMS dashboard.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {jobs.map((job, index) => (
            <Reveal key={job.slug} delay={index * 0.08}>
              <article className="glass-card rounded-[2rem] p-6">
                <div className="flex flex-wrap gap-3 text-xs text-white/52">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1"><BriefcaseBusiness className="h-4 w-4" /> {job.type}</span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1"><MapPin className="h-4 w-4" /> {job.location}</span>
                </div>
                <h2 className="mt-6 text-3xl font-semibold text-white">{job.title}</h2>
                <p className="mt-4 leading-8 text-white/60">{job.summary}</p>
                <ul className="mt-6 grid gap-3 text-sm text-white/58">
                  {job.requirements.map((requirement) => (
                    <li key={requirement}>• {requirement}</li>
                  ))}
                </ul>
                <div className="mt-7">
                  <Button href={`/contact?role=${job.slug}`}>Apply / Ask about this role</Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
