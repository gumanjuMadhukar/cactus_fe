import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { FinalCta } from "@/components/sections/FinalCta";
import { Insights } from "@/components/sections/Insights";
import { getHomeData } from "@/lib/api";
import { ReloadButton } from "@/components/ui/ReloadButton";

export default async function Home() {
  const data = await getHomeData();

  if (!data) {
    console.warn("Home data not available during build. Using fallback.");
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Site is under maintenance</h1>
          <p className="text-gray-600 mb-6">Please check back shortly.</p>
          <ReloadButton />
        </div>
      </div>
    );
  }

  console.log("Home page data loaded successfully");

  return (
    <>
      <Hero siteConfig={data.siteConfig} stats={data.stats} />
      <Insights blogs={data.blogs} />
      <Work projects={data.projects} />
      <Services services={data.services} />
      <Process steps={data.processSteps} />
      <Testimonials testimonials={data.testimonials} />
      <Contact siteConfig={data.siteConfig} services={data.services} />
      <FinalCta />
    </>
  );
}