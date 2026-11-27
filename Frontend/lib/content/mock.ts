import type { HomeContent } from "@/types/content";

import softwareDevIcon from "@/assets/software-development.svg";
import webDevIcon from "@/assets/website-development.svg";
import digitalMarketingIcon from "@/assets/digital-marketing.svg";
import graphicDesignIcon from "@/assets/graphic-design.svg";

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
  proof: [
    { value: "50+", label: "Projects completed" },
    { value: "100+", label: "Happy clients" },
    { value: "10+", label: "Expert team members" },
  ],
  services: [
    {
      slug: "service-one",
      title: "Software Development",
      intro:
        "Custom enterprise software, cloud applications, and automated workflow systems built to scale.",
      icon: {
        url: softwareDevIcon.src,
        alt: "",
        width: softwareDevIcon.width,
        height: softwareDevIcon.height,
      },
    },
    {
      slug: "service-two",
      title: "Website Development",
      intro: "High-performance, modern, and SEO-optimized corporate websites and web applications.",
      icon: {
        url: webDevIcon.src,
        alt: "",
        width: webDevIcon.width,
        height: webDevIcon.height,
      },
    },
    {
      slug: "service-three",
      title: "Digital Marketing",
      intro: "Data-driven marketing campaigns, social media management, and performance advertising.",
      icon: {
        url: digitalMarketingIcon.src,
        alt: "",
        width: digitalMarketingIcon.width,
        height: digitalMarketingIcon.height,
      },
    },
    {
      slug: "service-four",
      title: "Graphic Design",
      intro: "Distinctive branding, visual identity, logos, print media, and digital creative assets.",
      icon: {
        url: graphicDesignIcon.src,
        alt: "",
        width: graphicDesignIcon.width,
        height: graphicDesignIcon.height,
      },
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
