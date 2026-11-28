import FeaturedWorkList from "@/components/ui/FeaturedWorkList";
import { WorkData } from "@/types/content";
import SectionHeading from "../ui/SectionHeading";

const Work = ({ data }: { data: WorkData }) => {
  const { heading, intro, nav_label, items } = data;
  if (items.length === 0) return null;

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="section-padding bg-primary"
    >
      <div className="section-inner">
        <SectionHeading mode="dark" title={heading} subtitle={intro || null} />
        <FeaturedWorkList projects={items} />
      </div>
    </section>
  );
};

export default Work;
