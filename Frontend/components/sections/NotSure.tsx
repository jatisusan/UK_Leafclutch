import { NotSureData } from "@/types/content";
import SectionHeading from "../ui/SectionHeading";
import Link from "next/link";

const NotSure = ({ data }: { data: NotSureData }) => {
  const { heading, body, cta } = data;
  return (
    <section className="section-padding">
      <div className="section-inner bg-white rounded-2xl p-8 sm:p-12 lg:p-16 grid gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
        <SectionHeading
          badge="Not sure where to start?"
          title={heading}
          subtitle="Our team of experts is ready to guide you through the process and answer any questions you may have."
        />

        <div className="flex flex-col gap-4">
          <p className="text-lg leading-relaxed text-text-medium">{body}</p>

          <Link href={cta.href}>
            <button className="btn btn-primary">{cta.label}</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotSure;
