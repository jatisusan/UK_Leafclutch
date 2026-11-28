"use client";

import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";
import { TitleBody } from "@/types/content";

const StageCards = ({ stages }: { stages: TitleBody[] }) => {
  const listRef = useRef<HTMLOListElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const items = gsap.utils.toArray<HTMLElement>("[data-stage]");
          const cards = gsap.utils.toArray<HTMLElement>("[data-stage-card]");
          if (items.length < 2) return;

          const step =
            items[1].getBoundingClientRect().top -
            items[0].getBoundingClientRect().top;

          // Extra height the cards fall from, on top of the staircase offset
          const drop = step * 2;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 75%",
              toggleActions: "play none restart reverse",
            },
          });

          // The fall: all cards start level and high, then drop one by one
          tl.from(cards, {
            y: (i) => -i * step - drop,
            duration: 1.1,
            ease: "back.out(1.4)",
            stagger: 0.18,
          });

          // Fade in faster than the fall, so the cards aren't see-through for long
          tl.from(
            cards,
            {
              opacity: 0,
              duration: 0.35,
              ease: "none",
              stagger: 0.18,
            },
            0,
          );
        },
      );

      return () => mm.revert();
    },
    { scope: listRef },
  );

  return (
    <ol
      ref={listRef}
      className="mt-12 grid grid-cols-1 lg:grid-cols-4 lg:pb-[calc(3*var(--step))] lg:[--step:4rem]"
    >
      {stages.map((stage, index) => (
        <li
          key={stage.title}
          data-stage
          style={{ "--i": index } as React.CSSProperties}
          className="relative flex first:mt-0 lg:mt-0 lg:-ml-px lg:first:ml-0 lg:translate-y-[calc(var(--i)*var(--step))] hover:z-10"
        >
          <article
            data-stage-card
            className="group relative h-full w-full overflow-hidden border border-text-light bg-white p-6 transition-[box-shadow,border-color,background-color] duration-300 hover:border-accent hover:bg-accent/5 hover:shadow-2xl motion-reduce:transition-none lg:p-8"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
            />

            <span className="inline-block origin-left text-5xl font-bold tabular-nums text-accent transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="mt-6 text-2xl font-bold text-primary lg:text-4xl">
              {stage.title}
            </h3>
            <p className="mt-3 text-text-medium">{stage.body}</p>
          </article>
        </li>
      ))}
    </ol>
  );
};

export default StageCards;
