import { Reveal } from "./Reveal";

const SectionHeading = ({
  badge,
  title,
  subtitle,
}: {
  badge: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <Reveal>
      <div className="max-w-2xl">
        <p className="font-jakarta text-sm font-semibold uppercase tracking-wider bg-accent text-primary inline-block px-3 py-1 mb-3 rounded-full">
          {badge}
        </p>
        <h2
          id="services-heading"
          data-split
          className="font-jakarta text-3xl font-bold tracking-tight text-primary sm:text-4xl"
        >
          {title}
        </h2>
        <div
          aria-hidden="true"
          className="mt-4 h-1 w-16 rounded-full bg-accent"
        />

        <p
          data-reveal
          className="mt-4 text-lg leading-relaxed text-text-medium"
        >
          {subtitle}
        </p>
      </div>
    </Reveal>
  );
};

export default SectionHeading;
