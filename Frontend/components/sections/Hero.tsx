import { HeroData } from "@/types/content";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../ui/Reveal";

const Hero = ({ data }: { data: HeroData }) => {
  const { eyebrow, heading, body, primary_cta, secondary_cta } = data;
  return (
    <section
      aria-labelledby="hero-heading"
      className="section-padding -mt-20 pt-28 sm:pt-32 lg:pt-36 relative min-h-150 lg:min-h-175 bg-[url('/hero-bg.webp')] bg-cover bg-center bg-no-repeat"
    >
      <div className="section-inner flex-center text-center">
        <Reveal>
          <div className="mx-auto flex-center flex-col mb-6">
            <h1
              id="hero-heading"
              data-split
              className="hero-heading-text uppercase text-primary"
            >
              {heading}
            </h1>

            <p
              data-reveal
              className="mt-5 max-w-xl text-lg leading-relaxed text-text-medium"
            >
              {body}
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Link
                href={primary_cta.href}
                data-enquire-location="hero"
                className="btn btn-primary pl-5 pr-2 text-background"
              >
                {primary_cta.label}
                <span className="bg-background rounded-full inline-flex size-9 shrink-0 items-center justify-center ml-4">
                  <ArrowUpRightIcon size={18} className="text-primary" />
                </span>
              </Link>
              <Link
                href={secondary_cta.href}
                className="btn btn-outline pl-5 pr-2"
              >
                {secondary_cta.label}
                <span className="border-2 border-primary rounded-full inline-flex size-9 shrink-0 items-center justify-center ml-4">
                  <ArrowUpRightIcon size={18} className="text-primary" />
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
