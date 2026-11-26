import type { HomeContent } from "@/types/content";

export const mockHome: HomeContent = {
  seo: {
    title: "Placeholder title",
    description: "Placeholder description",
    ogImage: null,
  },
  hero: {
    headline: "Leafclutch",
    subhead: "Technologies Pvt. Ltd.",
    intro:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.",
    primaryCta: { label: "Discuss your project", href: "#contact" },
    secondaryCta: { label: "See our work", href: "#work" },
  },
  proof: [],
  services: [
    {
      slug: "service-one",
      title: "Placeholder service one",
      intro: "Placeholder outcome-led text.",
      icon: null,
    },
    {
      slug: "service-two",
      title: "Placeholder service two",
      intro: "Placeholder outcome-led text.",
      icon: null,
    },
    {
      slug: "service-three",
      title: "Placeholder service three",
      intro: "Placeholder outcome-led text.",
      icon: null,
    },
  ],
  work: [
    {
      title: "Placeholder project",
      clientNeed: "Placeholder need",
      workDone: "Placeholder work",
      result: null,
      images: [],
    },
  ],
  process: {
    stages: [
      { title: "First call", description: "Placeholder" },
      { title: "Plan", description: "Placeholder" },
      { title: "Build", description: "Placeholder" },
      { title: "Handover", description: "Placeholder" },
    ],
    points: [],
  },
  about: {
    heading: "Placeholder about heading",
    body: "Placeholder body",
    team: [],
  },
  testimonials: [], 
  faqs: [
    { question: "Placeholder question one?", answer: "Placeholder answer." },
    { question: "Placeholder question two?", answer: "Placeholder answer." },
  ],
};
