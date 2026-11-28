import type { LandingPage } from "@/types/content";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.";

const placeholderImage = {
  url: "/hero-bg.webp",
  alt: "Placeholder image",
  width: 1600,
  height: 1000,
};

export const mockLanding: LandingPage = {
  type: "landing",
  path: "/",
  revision: 1,
  published_at: null,
  seo: {
    title: "Placeholder title",
    description: "Placeholder description",
    og_image: null,
    noindex: false,
  },
  sections: [
    {
      key: "hero",
      type: "hero",
      nav_label: null,
      data: {
        eyebrow: null,
        heading: "Leafclutch Technologies",
        body: LOREM,
        primary_cta: { label: "Discuss your project", href: "#contact" },
        secondary_cta: { label: "See our work", href: "#work" },
      },
    },
    {
      key: "proof",
      type: "proof_figures",
      nav_label: null,
      data: {
        items: [
          { value: "50", suffix: "+", label: "Projects completed" },
          { value: "100", suffix: "+", label: "Clients served" },
          { value: "10", suffix: "+", label: "Team members" },
        ],
      },
    },
    {
      key: "services",
      type: "service_groups",
      nav_label: "Services",
      data: {
        heading: "What we do",
        intro: "One short sentence about what we do.",
        nav_label: "Services",
        groups: [
          {
            title: "Software",
            items: [
              {
                title: "Custom software",
                summary: "Placeholder outcome-led summary.",
              },
              {
                title: "Workflow automation",
                summary: "Placeholder outcome-led summary.",
              },
            ],
          },
          {
            title: "Websites",
            items: [
              {
                title: "Business websites",
                summary: "Placeholder outcome-led summary.",
              },
              {
                title: "Web applications",
                summary: "Placeholder outcome-led summary.",
              },
            ],
          },
          {
            title: "Marketing and design",
            items: [
              {
                title: "Digital marketing",
                summary: "Placeholder outcome-led summary.",
              },
              {
                title: "Graphic design",
                summary: "Placeholder outcome-led summary.",
              },
            ],
          },
        ],
      },
    },
    {
      key: "not-sure",
      type: "not_sure",
      nav_label: null,
      data: {
        heading: "Not sure what you need?",
        body: "Tell us what you're trying to fix and we'll point you the right way.",
        cta: { label: "Tell us about it", href: "#contact" },
      },
    },
    {
      key: "work",
      type: "featured_work",
      nav_label: "Work",
      data: {
        heading: "Featured Work",
        intro: null,
        nav_label: "Work",
        items: [
          {
            id: "project-one",
            title: "Project one",
            client: null,
            client_need: "Placeholder need",
            built: "Placeholder work",
            technologies: ["Next.js", "Python"],
            result: null,
            images: [placeholderImage],
          },
          {
            id: "project-two",
            title: "Project two",
            client: null,
            client_need: "Placeholder need",
            built: "Placeholder work",
            technologies: [],
            result: null,
            images: [placeholderImage],
          },
          {
            id: "project-three",
            title: "Project three",
            client: null,
            client_need: "Placeholder need",
            built: "Placeholder work",
            result: null,
            images: [],
          },
        ],
      },
    },
    {
      key: "process",
      type: "how_we_work",
      nav_label: "How we work",
      data: {
        heading: "How we work",
        intro: "From first call to handover.",
        nav_label: "How we work",
        stages: [
          { title: "Discovery", body: LOREM },
          { title: "Planning", body: LOREM },
          { title: "Development", body: LOREM },
          { title: "Handover", body: LOREM },
        ],
        assurances: [
          { title: "You own the code", body: LOREM },
          { title: "Security", body: LOREM },
          { title: "UK-hours contact", body: LOREM },
        ],
      },
    },
    {
      key: "about",
      type: "about",
      nav_label: "About",
      data: {
        heading: "Built in Nepal, for UK businesses",
        body: [
          "We're a development team in Nepal. We work UK hours and keep you updated in plain English, from first call to handover.",
          "Placeholder paragraph two.",
        ],
        nav_label: "About",
        image: null,
      },
    },
    {
      key: "testimonials",
      type: "testimonials",
      nav_label: null,
      data: {
        heading: "What clients say",
        items: [
          {
            id: "t1",
            quote: "This is a placeholder testimonial.",
            name: "John Doe",
            role: "CEO",
            company: "Acme Inc.",
          },
          {
            id: "t2",
            quote: "Another placeholder testimonial, with the name withheld.",
            name: null,
            role: null,
            company: null,
          },
        ],
      },
    },
    {
      key: "faqs",
      type: "faqs",
      nav_label: null,
      data: {
        heading: "Frequently asked questions",
        items: [
          {
            question: "Placeholder question one?",
            answer: "Placeholder answer.",
          },
          {
            question: "Placeholder question two?",
            answer: "Placeholder answer.",
          },
          {
            question: "Placeholder question three?",
            answer: "Placeholder answer.",
          },
          {
            question: "Placeholder question four?",
            answer: "Placeholder answer.",
          },
          {
            question: "Placeholder question five?",
            answer: "Placeholder answer.",
          },
        ],
      },
    },
    {
      key: "contact",
      type: "contact",
      nav_label: "Contact",
      data: {
        heading: "Tell us about your project",
        body: "One short line about getting in touch.",
        nav_label: "Contact",
        next_steps: [
          {
            title: "We reply within 1 UK working day",
            body: "A real person reads every enquiry.",
          },
          {
            title: "A short first call",
            body: "We talk through what you need.",
          },
        ],
        privacy_note: {
          text: "We only use your details to reply to your enquiry.",
          link_label: "Privacy notice",
        },
        form: {
          services: [
            "Custom software",
            "Workflow automation",
            "Business websites",
            "Web applications",
            "Digital marketing",
            "Graphic design",
          ],
        },
      },
    },
  ],
};
