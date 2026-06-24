import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { getHomeData } from "@/lib/api";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Cactus IT Solutions to discuss your website, app, software, CMS, or digital growth project.",
};

export default async function ContactPage() {
  const data = await getHomeData();
  if (!data || !data.siteConfig) {
    notFound();
  }

  return (
    <section className="pt-20">
      <Contact siteConfig={data.siteConfig} services={data.services ?? []} />
    </section>
  );
}
