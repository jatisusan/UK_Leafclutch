"use client";

import Image from "next/image";
import { StarIcon } from "@phosphor-icons/react/dist/ssr";
import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import type { TestimonialItem } from "@/types/content";

const TestimonialList = ({
  testimonialItems,
}: {
  testimonialItems: TestimonialItem[];
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const track = trackRef.current;
        const firstSet = track?.querySelector<HTMLElement>(
          "[data-testimonial-set]",
        );

        if (!track || !firstSet) return;

        animationRef.current = gsap.timeline({ repeat: -1 }).to(track, {
          xPercent: -50,
          duration: Math.max(firstSet.scrollWidth / 40, 18),
          ease: "none",
        });
      });

      return () => {
        media.revert();
        animationRef.current = null;
      };
    },
    { scope: trackRef },
  );

  const toggleAnimation = () => {
    const shouldPause = !isPaused;
    animationRef.current?.paused(shouldPause);
    setIsPaused(shouldPause);
  };

  return (
    <div className="mt-10">
      <div className="mb-4 flex justify-end motion-reduce:hidden">
        <button
          type="button"
          aria-pressed={isPaused}
          onClick={toggleAnimation}
          className="btn btn-outline"
        >
          {isPaused ? "Resume scrolling" : "Pause scrolling"}
        </button>
      </div>

      <div
        role="region"
        aria-label="Client testimonials"
        tabIndex={0}
        className="overflow-hidden motion-reduce:overflow-x-auto focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-dark"
      >
        <div
          ref={trackRef}
          className="flex w-max will-change-transform motion-reduce:will-change-auto"
        >
          {[0, 1].map((setIndex) => (
            <div
              key={setIndex}
              data-testimonial-set
              aria-hidden={setIndex === 1}
              className={`flex w-max shrink-0 gap-6 pr-6 ${
                setIndex === 1 ? "motion-reduce:hidden" : ""
              }`}
            >
              {testimonialItems.map((item, index) => (
                <article
                  key={`${setIndex}-${item.name}-${index}`}
                  className="flex w-[min(85vw,24rem)] shrink-0 flex-col rounded-2xl border border-primary/10 bg-white p-6 shadow-sm sm:p-8"
                >
                  <div aria-hidden="true" className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }, (_, starIndex) => (
                      <StarIcon
                        key={starIndex}
                        aria-hidden="true"
                        size={20}
                        weight="fill"
                      />
                    ))}
                  </div>

                  <blockquote className="mt-5 flex-1 leading-relaxed text-text-medium">
                    “{item.quote}”
                  </blockquote>

                  <div className="mt-6 flex items-center gap-4 border-t border-primary/10 pt-5">
                    <Image
                      src={item.image.url}
                      alt={item.image.alt}
                      width={56}
                      height={56}
                      sizes="56px"
                      unoptimized
                      className="size-14 shrink-0 rounded-full object-cover"
                    />
                    <div className="min-w-0">
                      <p className="font-jakarta font-semibold text-primary">
                        {item.name}
                      </p>
                      <p className="text-sm leading-relaxed text-text-medium">
                        {item.role}, {item.company}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialList;
