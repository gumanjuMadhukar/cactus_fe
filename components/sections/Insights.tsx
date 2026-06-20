import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { BlogPost } from "@/types/content";

type InsightsProps = {
  blogs: BlogPost[];
};

export function Insights({ blogs }: InsightsProps) {
  return (
    <section id="insights" className="py-24">
      <div className="container-pad">
        <Reveal>
          <SectionHeading
            eyebrow="Insights"
            title="Simple thinking for better digital decisions."
            description="Blog cards are connected through the API layer. Laravel can later control categories, tags, SEO data, publishing status, and full rich content."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {blogs.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.08}>
              <Link href={`/blog/${post.slug}`} className="group block h-full rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-cactus-300/35">
                <div className="mb-8 flex items-center justify-between text-xs text-white/42">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-2xl font-semibold leading-tight text-white">{post.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/58">{post.excerpt}</p>
                <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-cactus-300">
                  Read insight <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
