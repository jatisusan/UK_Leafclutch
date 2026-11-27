"use client";

import { useGSAP, gsap, SplitText } from "@/lib/gsap";
import { useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

export function Reveal({ children, className, stagger = 0.1 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-reveal]", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none restart reverse",
          },
        });

        gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
          SplitText.create(el, {
            type: "words, chars",
            mask: "chars",
            autoSplit: true,
            onSplit(self) {
              gsap.set(el, { visibility: "visible" });
              return gsap.from(self.chars, {
                yPercent: 110,
                duration: 0.9,
                ease: "power3.out",
                stagger: 0.01,
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                  toggleActions: "play none restart reverse",
                },
              });
            },
          });
        });
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
