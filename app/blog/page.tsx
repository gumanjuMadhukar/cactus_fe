import type { Metadata } from "next";
import { Insights } from "@/components/sections/Insights";
import { FinalCta } from "@/components/sections/FinalCta";
import { getBlogs } from "@/lib/api";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read Cactus IT Solutions insights on websites, Laravel CMS, software, SEO, and digital product strategy."
};

export default async function BlogIndexPage() {
  const blogs = await getBlogs();

  return (
    <>
      <section className="pb-4 pt-36 md:pt-44">
        <div className="container-pad">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-cactus-300">Blog</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Useful thinking for sharper digital decisions.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/62">
            Blog content is ready for Laravel CMS publishing with categories, rich content, status, SEO title, meta description, and featured images.
          </p>
        </div>
      </section>
      <Insights blogs={blogs} />
      <FinalCta />
    </>
  );
}
