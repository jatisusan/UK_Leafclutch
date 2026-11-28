import { ProcessData } from "@/types/content";
import SectionHeading from "../ui/SectionHeading";
import StageCards from "../ui/StageCards";

const HowWeWork = ({ data }: { data: ProcessData }) => {
  return (
    <section className="section-padding">
      <div className="section-inner">
        <SectionHeading
          mode="light"
          align="center"
          badge="A process that works for you"
          title={data.heading}
          subtitle={data.intro || undefined}
        />

        <StageCards stages={data.stages} />
      </div>
    </section>
  );
};

export default HowWeWork;
