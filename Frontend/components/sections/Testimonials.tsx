import type { TestimonialsData } from "@/types/content";
import SectionHeading from "../ui/SectionHeading";
import TestimonialList from "../ui/TestimonialList";

const Testimonials = ({ data }: { data: TestimonialsData }) => {
  if (data.items.length === 0) return null;

  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="section-padding"
    >
      <div className="section-inner">
        <SectionHeading badge="Testimonials" title={data.heading} />
        <TestimonialList testimonialItems={data.items} />
      </div>
    </section>
  );
};

export default Testimonials;
