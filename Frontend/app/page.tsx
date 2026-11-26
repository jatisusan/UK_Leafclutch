import Hero from "@/components/sections/Hero";
import { getHome } from "@/lib/content";

export default async function Home() {
  const homeContent = await getHome();
  return (
    <div className="min-h-screen">
      <Hero {...homeContent.hero} />
    </div>
  );
}
