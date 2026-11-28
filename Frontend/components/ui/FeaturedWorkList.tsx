"use client";

import { useState } from "react";
import Image from "next/image";
import { WorkItem } from "@/types/content";
import { Reveal } from "./Reveal";

const FeaturedWorkList = ({ projects }: { projects: WorkItem[] }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <ul className="border-t border-neutral-300">
      {projects.map((p) => {
        const open = openId === p.id;

        return (
          <Reveal key={p.id}>
            <li
              data-reveal
              className="group relative border-b border-neutral-300 text-white"
            >
              <div className="grid grid-cols-1 items-start gap-y-4 py-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-0 sm:py-8">
                {/* Left: title + description */}
                <div>
                  <h3 className="flex items-center text-xl font-semibold sm:min-h-24 sm:text-3xl lg:text-5xl">
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={`work-${p.id}`}
                      onClick={() => setOpenId(open ? null : p.id)}
                      className="text-left group-hover:cursor-pointer after:absolute after:inset-0 focus-visible:after:outline focus-visible:after:-outline-offset-2 focus-visible:after:outline-current"
                    >
                      {p.title}
                    </button>
                  </h3>

                  <div
                    id={`work-${p.id}`}
                    className={`relative z-10 grid transition-[grid-template-rows,visibility] duration-500 ease-in-out motion-reduce:transition-none ${
                      open
                        ? "visible grid-rows-[1fr]"
                        : "invisible grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="grid md:grid-cols-2 gap-4 pt-4 text-base">
                        {p.client && (
                          <p>
                            <span className="block text-sm text-accent font-jakarta font-medium uppercase tracking-wide">
                              The Client
                            </span>
                            {p.client}
                          </p>
                        )}
                        <p>
                          <span className="block text-sm text-accent font-jakarta font-medium uppercase tracking-wide">
                            The Need
                          </span>
                          {p.client_need}
                        </p>
                        <p>
                          <span className="block text-sm text-accent font-jakarta font-medium uppercase tracking-wide">
                            What We Built
                          </span>
                          {p.built}
                        </p>
                        <p>
                          <span className="block text-sm text-accent font-jakarta font-medium uppercase tracking-wide">
                            Tech Stack
                          </span>
                          {p.technologies}
                        </p>
                        {p.result && (
                          <p>
                            <span className="block text-sm font-medium uppercase tracking-wide">
                              Result
                            </span>
                            {p.result}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right: the image that morphs*/}
                <div
                  className={`relative order-first w-full overflow-hidden transition-[height,border-radius] duration-500 ease-in-out motion-reduce:transition-none sm:order-0 ${
                    open
                      ? "h-56 rounded-3xl sm:h-72"
                      : "h-20 rounded-4xl sm:h-24 sm:rounded-[3rem]"
                  }`}
                >
                  <Image
                    src={p.images?.[0]?.url ?? "/hero-bg.webp"}
                    alt={p.images?.[0]?.alt ?? "Project Image"}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </li>
          </Reveal>
        );
      })}
    </ul>
  );
};

export default FeaturedWorkList;
