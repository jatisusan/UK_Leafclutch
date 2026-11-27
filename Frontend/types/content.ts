export interface Img {
  url: string;
  alt: string;
}

export interface Link {
  label: string;
  href: string;
}

export interface HeroContent {
  headline: string;
  subhead: string;
  intro: string;
  primaryCta: Link;
  secondaryCta: Link;
  note?: string;
  image?: { src: string; alt: string; width: number; height: number };
}

export interface ProofFigure {
  value: string;
  suffix?: string;
  label: string;
}

export interface Service {
  slug: string;
  title: string;
  intro: string;
  icon: Img | null;
}

export interface Project {
  id: string;
  title: string;
  clientNeed: string;
  workDone: string;
  result: string | null;
  images: Img[];
}

export interface Stage {
  title: string;
  description: string;
}

export interface Process {
  stages: Stage[];
  points: { title: string; text: string }[];
}

export interface AboutContent {
  heading: string;
  body: string;
  team: { name: string; role: string; photo: Img | null }[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface HomeContent {
  seo: { title: string; description: string; ogImage: Img | null };
  hero: HeroContent;
  proof: ProofFigure[]; 
  services: Service[];
  work: Project[];
  process: Process;
  about: AboutContent;
  testimonials: Testimonial[];
  faqs: Faq[];
}
