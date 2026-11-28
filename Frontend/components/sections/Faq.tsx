import type { FaqsData } from "@/types/content";
import SectionHeading from "../ui/SectionHeading";
import FaqList from "../ui/FaqList";

const Faq = ({ data }: { data: FaqsData }) => {
  if (data.items.length === 0) return null;

  return (
    <section
      id="faqs"
      aria-label="Frequently asked questions"
      className="section-padding bg-white"
    >
      <div className="section-inner grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <SectionHeading badge="FAQs" title={data.heading} />
        <FaqList faqItems={data.items} />
      </div>
    </section>
  );
};

export default Faq;
