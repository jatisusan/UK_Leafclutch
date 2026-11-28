import Image from "next/image";
import type { ServicesData } from "@/types/content";
import SectionHeading from "../ui/SectionHeading";

import softwareDevIcon from "@/assets/software-development.svg";
import webDevIcon from "@/assets/website-development.svg";
import digitalMarketingIcon from "@/assets/digital-marketing.svg";
import graphicDesignIcon from "@/assets/graphic-design.svg";

// Frontend-only decoration. The API has no icon field
const groupIcons = [
  softwareDevIcon,
  webDevIcon,
  digitalMarketingIcon,
  graphicDesignIcon,
];

const Services = ({ data }: { data: ServicesData }) => {
  const { heading, intro, groups } = data;

  if (!groups?.length) return null;

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-padding scroll-mt-20 bg-background"
    >
      <div className="section-inner">
        <SectionHeading badge="Our Services" title={heading} subtitle={intro ?? undefined} />

        <div
          className={`mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 ${
            groups.length === 3 ? "lg:grid-cols-3" : ""
          }`}
        >
          {groups.map((group, index) => {
            const icon = groupIcons[index];

            return (
              <article
                key={`${group.title}-${index}`}
                className="overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm"
              >
                <div className="flex h-32 items-center justify-center bg-glacier-blue/10 sm:h-36">
                  {icon && (
                    <Image
                      src={icon.src}
                      alt=""
                      width={100}
                      height={100}
                      unoptimized
                      className="h-full w-auto object-contain p-5"
                    />
                  )}
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="font-jakarta text-xl font-bold leading-snug text-primary">
                    {group.title}
                  </h3>

                  <ul className="mt-4 space-y-4">
                    {group.items.map((item) => (
                      <li key={item.title}>
                        <h4 className="font-jakarta text-base font-semibold text-primary">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-text-medium sm:text-base">
                          {item.summary}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
