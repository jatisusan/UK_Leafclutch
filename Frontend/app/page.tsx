import { Fragment } from "react";

import Hero from "@/components/sections/Hero";
import Proof from "@/components/sections/Proof";
import Services from "@/components/sections/Services";
import NotSure from "@/components/sections/NotSure";
import Work from "@/components/sections/Work";
import HowWeWork from "@/components/sections/HowWeWork";
import Faq from "@/components/sections/Faq";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";

import { getLandingPage } from "@/lib/content";
import type { Section } from "@/types/content";

export const aboutMock = {
  leftPoints: [
    "Based in Nepal",
    "Working UK hours",
    "Plain-English updates",
    "You own your code",
  ],
  rightPoints: [
    "Small, focused team",
    "One point of contact",
    "Secure by default",
    "Clear handover",
  ],
  closingTitle: "Built in Nepal, for UK businesses",
  closingText:
    "We're a development team in Nepal. We work UK hours and keep you updated in plain English, from first call to handover.",
};


function renderSection(section: Section) {
  switch (section.key) {
    case "hero":
      return <Hero data={section.data} />;
    case "proof":
      return <Proof data={section.data} />;
    case "services":
      return <Services data={section.data} />;
    case "not-sure":
      return <NotSure data={section.data} />;
    case "work":
      return <Work data={section.data} />;
    case "process":
      return <HowWeWork data={section.data} />;
    case "about":
      return <About data={section.data} />;
    case "testimonials":
      return <Testimonials data={section.data} />;
    case "faqs":
      return <Faq data={section.data} />;
    case "contact":
      // TODO: build Contact
      return null;
  }
}

export default async function Home() {
  const page = await getLandingPage();

  return (
    <div className="min-h-screen">
      {page.sections.map((section) => (
        <Fragment key={section.key}>{renderSection(section)}</Fragment>
      ))}
    </div>
  );
}
