import type { Metadata } from "next";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { FinalCta } from "@/components/sections/FinalCta";
import { getHomeData } from "@/lib/api";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore web development, mobile app development, Laravel CMS, custom software, SEO, UI/UX, and support services from Cactus IT Solutions."
};

export default async function ServicesPage() {
  const data = await getHomeData();
  console.log("Services page data:", data);

  if (!data) {
      throw new Error("No data returned from API");
    }

  return (
    <>
      <section className="pb-4 pt-36 md:pt-44">
        <div className="container-pad">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-cactus-300">Services</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Websites, apps, software, and growth systems built with clarity.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/62">
            Every service page is API-ready. Laravel can control title, slug, content, features, SEO data, and publishing status later.
          </p>
        </div>
      </section>
      <Services services={data.services} />
      <Process steps={data.processSteps} />
      <FinalCta />
    </>
  );
}
