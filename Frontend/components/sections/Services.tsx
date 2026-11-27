import Image from "next/image";
import type { Service } from "@/types/content";
import SectionHeading from "../ui/SectionHeading";

const Services = ({ services }: { services: Service[] }) => {
  if (services.length === 0) return null;

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-padding bg-background"
    >
      <div className="section-inner">
        <SectionHeading
          badge="Our services"
          title="Everything you need, under one roof"
          subtitle="From the first line of code to the campaign that brings customers in — our teams cover the full journey."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm"
            >
              <div className="flex aspect-4/3 items-center justify-center bg-glacier-blue/10">
                {service.icon && (
                  <Image
                    src={service.icon.url}
                    alt={service.icon.alt}
                    width={100}
                    height={100}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    unoptimized
                    className="h-full w-full object-contain p-5"
                  />
                )}
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="font-jakarta text-xl font-bold leading-snug text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-medium sm:text-base">
                  {service.intro}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
