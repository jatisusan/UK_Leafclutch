import FeaturedWorkList from "@/components/ui/FeaturedWorkList";
import { Project } from "@/types/content";
import { Reveal } from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const Work = ({ projects }: { projects: Project[] }) => {
  if (projects.length === 0) return null;

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="section-padding bg-primary"
    >
      <div className="section-inner">
        <SectionHeading mode="dark" title="Featured Work" />
        <FeaturedWorkList projects={projects} />
      </div>
    </section>
  );
};

export default Work;
