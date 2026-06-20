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

export default async function Home() {
  const data = await getHomeData();
  console.log("Home page data:", data);

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
}
