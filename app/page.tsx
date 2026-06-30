import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { ScrollStory } from "@/components/sections/ScrollStory";
import { Work } from "@/components/sections/Work";
import { WhyUs } from "@/components/sections/WhyUs";
import { TechStack } from "@/components/sections/TechStack";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Insights } from "@/components/sections/Insights";
import { Contact } from "@/components/sections/Contact";
import { FinalCta } from "@/components/sections/FinalCta";
import { getHomeData } from "@/lib/api";
import { ReloadButton } from "@/components/ui/ReloadButton";

export default async function Home() {
  try {
    const data = await getHomeData();
    
    if (!data) {
      throw new Error("No data returned from API");
    }

    return (
      <>
        <Hero siteConfig={data.siteConfig} stats={data.stats} />
        <Insights blogs={data.blogs} />
        {/* <TechStack techStack={data.techStack} /> */}
        <Work projects={data.projects} />
        <Services services={data.services} />
        {/* <ScrollStory panels={data.scrollStory} /> */}
        {/* <WhyUs reasons={data.reasons} /> */}
        <Process steps={data.processSteps} />
        <Testimonials testimonials={data.testimonials} />
        <Contact siteConfig={data.siteConfig} services={data.services} />
        <FinalCta />
      </>
    );
  } catch (error) {
    console.error("Error loading home page data:", error);
    
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <p className="text-gray-600 mb-6">
            Failed to load page content. Please try refreshing.
          </p>
         <ReloadButton />
        </div>
      </div>
    );
  }
}