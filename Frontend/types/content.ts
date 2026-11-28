// ---------- shared ----------
export interface MediaImage {
  url: string; // host-free, e.g. /media/abc.webp
  alt: string;
  width: number;
  height: number;
}

export interface Cta {
  label: string;
  href: string; // fixed by the API: #contact or #work
}

// ---------- page shell ----------
export interface Seo {
  title: string;
  description: string;
  og_image: MediaImage | null;
  noindex: boolean;
}

// ---------- section data, by key ----------
export interface HeroData {
  eyebrow: string | null;
  heading: string;
  body?: string | null;
  primary_cta: Cta;
  secondary_cta: Cta;
}

export interface ProofItem {
  label: string;
  value: string; // a string, not a number
  prefix?: string | null;
  suffix?: string | null;
}

export interface ProofData {
  items: ProofItem[]; // 0 to 4, hide the section if empty
}

export interface ServiceItem {
  title: string;
  summary: string;
}
export interface ServiceGroup {
  title: string;
  items: ServiceItem[]; // 2 to 6
}
export interface ServicesData {
  heading: string;
  intro?: string | null;
  nav_label: string;
  groups: ServiceGroup[]; // 3 to 4
}

export interface NotSureData {
  heading: string;
  body?: string | null;
  cta: Cta;
}

export interface WorkItem {
  id: string;
  title: string;
  client: string | null;
  client_need: string;
  built: string;
  technologies?: string[]; // 0 to 8
  result: string | null;
  images?: MediaImage[]; // 0 to 3
}
export interface WorkData {
  heading: string;
  intro?: string | null;
  nav_label: string;
  items: WorkItem[]; // 3 to 6
}

export interface TitleBody {
  title: string;
  body: string;
}
export interface ProcessData {
  heading: string;
  intro?: string | null;
  nav_label: string;
  stages: TitleBody[]; // exactly 4
  assurances: TitleBody[]; // exactly 3
}

export interface AboutData {
  heading: string;
  body: string[]; // 1 to 4 paragraphs
  nav_label: string;
  image: MediaImage | null;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string | null;
  role: string | null;
  company: string | null;
}
export interface TestimonialsData {
  heading: string;
  items: TestimonialItem[]; // 0 to 6, hide the section if empty
}

export interface FaqItem {
  question: string;
  answer: string; // plain text
}
export interface FaqsData {
  heading: string;
  items: FaqItem[];
}

export interface ContactData {
  heading: string;
  body?: string | null;
  nav_label: string;
  next_steps: TitleBody[]; // 1 to 4
  privacy_note: { text: string; link_label: string };
  form: { services: string[] };
}

// ---------- sections (discriminated on key) ----------
interface SectionBase {
  nav_label: string | null;
}

export type Section =
  | (SectionBase & { key: "hero"; type: "hero"; data: HeroData })
  | (SectionBase & { key: "proof"; type: "proof_figures"; data: ProofData })
  | (SectionBase & { key: "services"; type: "service_groups"; data: ServicesData })
  | (SectionBase & { key: "not-sure"; type: "not_sure"; data: NotSureData })
  | (SectionBase & { key: "work"; type: "featured_work"; data: WorkData })
  | (SectionBase & { key: "process"; type: "how_we_work"; data: ProcessData })
  | (SectionBase & { key: "about"; type: "about"; data: AboutData })
  | (SectionBase & { key: "testimonials"; type: "testimonials"; data: TestimonialsData })
  | (SectionBase & { key: "faqs"; type: "faqs"; data: FaqsData })
  | (SectionBase & { key: "contact"; type: "contact"; data: ContactData });

export type SectionKey = Section["key"];

export interface LandingPage {
  type: "landing";
  path: "/";
  revision: number;
  published_at: string | null;
  seo: Seo;
  sections: Section[]; // always 10, in render order
}

