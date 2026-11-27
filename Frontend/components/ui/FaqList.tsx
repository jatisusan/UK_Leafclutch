"use client";

import { useState } from "react";
import { PlusIcon } from "@phosphor-icons/react/dist/ssr";
import type { FaqItem } from "@/types/content";

const FaqList = ({ faqItems }: { faqItems: FaqItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-primary/15">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;
        const questionId = `faq-question-${index}`;
        const answerId = `faq-answer-${index}`;

        return (
          <article key={`${item.question}-${index}`}>
            <h3>
              <button
                id={questionId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left font-jakarta text-lg font-semibold text-primary outline-none transition-colors hover:text-primary-dark hover:cursor-pointer focus-visible:ring-2 focus-visible:ring-primary-dark focus-visible:ring-offset-4 sm:text-xl"
              >
                <span>{item.question}</span>
                <PlusIcon
                  aria-hidden="true"
                  size={24}
                  weight="bold"
                  className={`shrink-0 transition-transform duration-300 motion-reduce:transition-none ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
            </h3>

            <div
              id={answerId}
              role="region"
              aria-labelledby={questionId}
              aria-hidden={!isOpen}
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pr-10 leading-relaxed text-text-medium">
                  {item.answer}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default FaqList;
