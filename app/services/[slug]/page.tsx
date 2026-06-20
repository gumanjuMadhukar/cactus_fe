import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { getIcon } from "@/lib/icons";
import { getServiceBySlug, getServices } from "@/lib/api";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.short
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();
  const Icon = getIcon(service.iconKey);

  return (
    <section className="min-h-screen pb-24 pt-36 md:pt-44">
      <div className="container-pad">
        <Link href="/services" className="mb-8 inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-cactus-300">
          <ArrowLeft className="h-4 w-4" /> Back to services
        </Link>

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="glass-card rounded-[2.3rem] p-8">
            <div className="grid h-16 w-16 place-items-center rounded-3xl bg-cactus-500/10 text-cactus-300">
              <Icon className="h-8 w-8" />
            </div>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.32em] text-cactus-300">{service.eyebrow}</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-7xl">{service.title}</h1>
            <p className="mt-6 text-lg leading-8 text-white/62">{service.description}</p>
            <div className="mt-8">
              <Button href="/contact">Discuss this service</Button>
            </div>
          </div>

          <div className="rounded-[2.3rem] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-3xl font-semibold text-white">What this includes</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/72">
                  <CheckCircle2 className="h-5 w-5 text-cactus-300" />
                  {feature}
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-3xl border border-cactus-300/20 bg-cactus-500/10 p-6">
              <h3 className="text-xl font-semibold text-white">API-ready direction</h3>
              <p className="mt-3 leading-7 text-white/58">
                This page first tries <code className="rounded bg-white/10 px-2 py-1 text-cactus-300">/api/services/{service.slug}</code>. If Laravel is not ready, it uses the matching static service with the same data shape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
