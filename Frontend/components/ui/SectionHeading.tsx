import { Reveal } from "./Reveal";

const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = "left",
  mode = "light",
}: {
  badge?: string;
  title: string;
  subtitle?: string | null;
  align?: "left" | "center" | "right";
  mode?: "light" | "dark";
}) => {
  const alignmentClasses = {
    left: "items-start text-left",
    center: "mx-auto items-center text-center",
    right: "ml-auto items-end text-right",
  }[align];

  return (
    <Reveal>
      <div
        className={`flex max-w-2xl flex-col justify-center ${alignmentClasses}`}
      >
        {badge && (
          <p className="font-jakarta w-fit text-sm font-semibold uppercase tracking-wider bg-accent text-primary inline-block px-3 py-1 mb-3 rounded-full">
            {badge}
          </p>
        )}
        <h2
          data-split
          className={`mb-5 font-jakarta text-3xl font-bold tracking-wide ${
            mode === "light" ? "text-primary" : "text-white"
          } sm:text-5xl lg:text-7xl`}
        >
          {title}
        </h2>
        <div
          aria-hidden="true"
          className="mt-4 h-1 w-16 rounded-full bg-accent"
        />

        {subtitle && (
          <p
            data-reveal
            className="mt-4 text-lg leading-relaxed text-text-medium"
          >
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
};

export default SectionHeading;
