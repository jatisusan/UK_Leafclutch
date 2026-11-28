"use client";

import Image from "next/image";
import { useRef } from "react";
import aboutImg from "../../assets/about-img.jpg";
import { AboutData } from "@/types/content";
import { gsap, useGSAP } from "@/lib/gsap/index";

const leftPoints = [
  "Based in Nepal",
  "Working UK hours",
  "Plain-English updates",
  "You own your code",
];

const rightPoints = [
  "Small, focused team",
  "One point of contact",
  "Secure by default",
  "Clear handover",
];

export default function About({ data }: { data: AboutData }) {
  const { heading, body, image } = data;

  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 767px)",
          motionOK: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { isMobile, motionOK } = context.conditions as {
            isMobile: boolean;
            motionOK: boolean;
          };

          // Reduced motion: no animation, CSS shows a plain stacked layout
          if (!motionOK) return;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: root.current,
              start: isMobile ? "top 20%" : "top top",
              end: "bottom center",
              scrub: 1.5,
              pin: true,
            },
          });

          tl.to(".will-fade", {
            opacity: 0,
            stagger: 0.2,
            ease: "power1.inOut",
          })
            .to(".masked-img", {
              scale: 1.3,
              maskPosition: "center",
              maskSize: "400%",
              duration: 2,
              ease: "power1.inOut",
            })
            .to(".masked-content", {
              opacity: 1,
              duration: 1,
              ease: "power1.inOut",
            });
        },
      );

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      id="about"
      ref={root}
      aria-labelledby="about-heading"
      className="relative bg-white text-primary flex min-h-dvh flex-col items-center overflow-hidden px-5 py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h2
          id="about-heading"
          className="will-fade mb-8 text-center text-5xl font-bold md:text-7xl"
        >
          About LeafClutch
        </h2>

        <div className="relative mt-40 flex flex-col gap-10 md:mt-0 md:flex-row md:justify-between">
          <ul className="will-fade space-y-4">
            {leftPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span aria-hidden className="size-2 rounded-full bg-current" />
                <p>{point}</p>
              </li>
            ))}
          </ul>

          {/* Image box: absolute + centred only when motion is allowed */}
          <div className="relative h-[38vh] w-full overflow-hidden rounded-3xl motion-safe:absolute motion-safe:left-1/2 motion-safe:top-8 motion-safe:-translate-x-1/2 md:h-[52vh] md:w-[60vw] md:motion-safe:top-[65%] md:motion-safe:-translate-y-1/2">
            <Image
              src={image?.url ?? aboutImg}
              alt="The LeafClutch team"
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="masked-img object-cover object-center motion-safe:masked-img"
            />
          </div>

          <ul className="will-fade space-y-4">
            {rightPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span aria-hidden className="size-2 rounded-full bg-current" />
                <p className="w-60 md:w-fit">{point}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-content mt-10 w-[calc(100%-2.5rem)] max-w-4xl space-y-4 text-center motion-safe:absolute motion-safe:bottom-6 motion-safe:left-1/2 motion-safe:-translate-x-1/2 motion-safe:opacity-0 md:motion-safe:bottom-12">
          <h3 className="text-2xl font-semibold md:text-5xl">{heading}</h3>
          {body.map((paragraph, index) => (
            <p
              key={index}
              className="mx-auto max-w-2xl text-base md:text-lg mb-2"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
