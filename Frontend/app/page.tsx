import Hero from "@/components/sections/Hero";
import { getHome } from "@/lib/content";
import Proof from "../components/sections/Proof";
import Services from "@/components/sections/Services";
import NotSure from "@/components/sections/NotSure";
import Work from "@/components/sections/Work";
import HowWeWork from "@/components/sections/HowWeWork";

export default async function Home() {
  const homeContent = await getHome();
  return (
    <div className="min-h-screen">
      <Hero {...homeContent.hero} />
      <Proof proofItems={homeContent.proof} />
      <Services services={homeContent.services} />
      <NotSure />
      <Work projects={homeContent.work} />
      <HowWeWork {...homeContent.process} />
    </div>
  );
}
