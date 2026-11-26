import { HeroContent } from "@/types/content";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

const Hero = ({
  headline,
  subhead,
  intro,
  primaryCta,
  secondaryCta,
  note,
}: HeroContent) => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="section-padding -mt-20 pt-28 sm:pt-32 lg:pt-36 relative min-h-150 lg:min-h-175 bg-[url('/hero-bg.webp')] bg-cover bg-center bg-no-repeat"
    >
      <div className="section-inner flex-center text-center">
        <div className="mx-auto flex-center flex-col mb-6">
          <h1
            id="hero-heading"
            className="hero-heading-text uppercase text-primary"
          >
            {headline}
          </h1>

          <h2 className="hero-heading-text underline underline-offset-12 decoration-accent">
            {subhead}
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-text-medium">
            {intro}
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Link
              href={primaryCta.href}
              data-enquire-location="hero"
              className="btn btn-primary pl-5 pr-2 text-background"
            >
              {primaryCta.label}
              <span className="bg-background rounded-full inline-flex size-9 shrink-0 items-center justify-center ml-4">
                <ArrowUpRightIcon size={18} className="text-primary" />
              </span>
            </Link>
            <Link
              href={secondaryCta.href}
              className="btn btn-outline pl-5 pr-2"
            >
              {secondaryCta.label}
              <span className="border-2 border-primary rounded-full inline-flex size-9 shrink-0 items-center justify-center ml-4">
                <ArrowUpRightIcon size={18} className="text-primary" />
              </span>
            </Link>
          </div>

          {note && <p className="mt-6 text-sm text-text-medium">{note}</p>}
        </div>
      </div>
    </section>
  );
}

export default Hero;
