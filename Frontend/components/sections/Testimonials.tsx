import type { TestimonialItem } from "@/types/content";
import SectionHeading from "../ui/SectionHeading";
import TestimonialList from "../ui/TestimonialList";

const Testimonials = ({
  testimonialItems,
}: {
  testimonialItems: TestimonialItem[];
}) => {
  if (testimonialItems.length === 0) return null;

  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="section-padding"
    >
      <div className="section-inner">
        <SectionHeading badge="Testimonials" title="What our clients say" />
        <TestimonialList testimonialItems={testimonialItems} />
      </div>
    </section>
  );
};

export default Testimonials;
