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
      },
    },
    {
      slug: "service-two",
      title: "Website Development",
      intro:
        "High-performance, modern, and SEO-optimized corporate websites and web applications.",
      icon: {
        url: webDevIcon.src,
        alt: "",
      },
    },
    {
      slug: "service-three",
      title: "Digital Marketing",
      intro:
        "Data-driven marketing campaigns, social media management, and performance advertising.",
      icon: {
        url: digitalMarketingIcon.src,
        alt: "",
      },
    },
    {
      slug: "service-four",
      title: "Graphic Design",
      intro:
        "Distinctive branding, visual identity, logos, print media, and digital creative assets.",
      icon: {
        url: graphicDesignIcon.src,
        alt: "",
      },
    },
  ],
  work: [
    {
      id: "project-one",
      title: "Placeholder project",
      clientNeed: "Placeholder need",
      workDone: "Placeholder work",
      result: null,
      images: [{ url: "/hero-bg.webp", alt: "Placeholder image" }],
    },
    {
      id: "project-two",
      title: "Placeholder project",
      clientNeed: "Placeholder need",
      workDone: "Placeholder work",
      result: null,
      images: [{ url: "/hero-bg.webp", alt: "Placeholder image" }],
    },
  ],
  process: {
    stages: [
      {
        title: "Discovery Phase",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Project Planning",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Development",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Final Delivery",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
    points: [],
  },
  about: {
    heading: "Placeholder about heading",
    body: "Placeholder body",
    team: [],
  },
  testimonials: [
    {
      name: "John Doe",
      role: "CEO",
      company: "Acme Inc.",
      image: { url: "/hero-bg.webp", alt: "John Doe" },
      quote: "This is a placeholder testimonial.",
    },
    {
      name: "John Doe",
      role: "CEO",
      company: "Acme Inc.",
      image: { url: "/hero-bg.webp", alt: "John Doe" },
      quote: "This is a placeholder testimonial.",
    },
    {
      name: "John Doe",
      role: "CEO",
      company: "Acme Inc.",
      image: { url: "/hero-bg.webp", alt: "John Doe" },
      quote: "This is a placeholder testimonial.",
    },
    {
      name: "John Doe",
      role: "CEO",
      company: "Acme Inc.",
      image: { url: "/hero-bg.webp", alt: "John Doe" },
      quote: "This is a placeholder testimonial.",
    }
  ],
  faqs: [
    { question: "Placeholder question one?", answer: "Placeholder answer." },
    { question: "Placeholder question two?", answer: "Placeholder answer." },
  ],
};
