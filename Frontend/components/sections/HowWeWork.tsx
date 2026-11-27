import { Process } from "@/types/content";
import SectionHeading from "../ui/SectionHeading";
import StageCards from "../ui/StageCards";

const HowWeWork = ({ stages }: Process) => {
  return (
    <section className="section-padding">
      <div className="section-inner">
        <SectionHeading
          mode="light"
          align="center"
          badge="A process that works for you"
          title="How We Work"
          subtitle="A proven methodology that ensures project success."
        />

        <StageCards stages={stages} />
      </div>
    </section>
  );
};

export default HowWeWork;
