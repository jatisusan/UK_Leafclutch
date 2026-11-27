import FeaturedWorkList from "@/components/ui/FeaturedWorkList";
import { Project } from "@/types/content";
import { Reveal } from "../ui/Reveal";

const Work = ({ projects }: { projects: Project[] }) => {
  if (projects.length === 0) return null;

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="section-padding bg-primary"
    >
      <Reveal>
        <div className="section-inner">
          <h2
            data-split
            id="work-heading"
            className="font-jakarta text-3xl font-bold tracking-wide text-white sm:text-5xl lg:text-7xl mb-5"
          >
            Featured Work
          </h2>
          <FeaturedWorkList projects={projects} />
        </div>
      </Reveal>
    </section>
  );
};

export default Work;
