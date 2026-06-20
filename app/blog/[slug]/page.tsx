import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { getBlogBySlug, getBlogs } from "@/lib/api";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) notFound();

  return (
    <article className="min-h-screen pb-24 pt-36 md:pt-44">
      <div className="container-pad max-w-4xl">
        <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-cactus-300">
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-cactus-300">{post.category} / {post.date}</p>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white md:text-7xl">{post.title}</h1>
        <p className="mt-7 text-xl leading-9 text-white/66">{post.excerpt}</p>

        <div className="mt-12 space-y-6 rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 text-white/62">
          <p className="leading-8">{post.content}</p>
          <h2 className="text-2xl font-semibold text-white">API-ready publishing</h2>
          <p className="leading-8">
            This page first tries <code className="rounded bg-white/10 px-2 py-1 text-cactus-300">/api/blogs/{post.slug}</code>. If Laravel is offline, the static fallback blog with the same response shape is used.
          </p>
        </div>

        <div className="mt-10">
          <Button href="/contact">Talk to Cactus</Button>
        </div>
      </div>
    </article>
  );
}
