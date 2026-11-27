import {
  BriefcaseIcon,
  CalendarBlankIcon,
  ChartLineUpIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { ProofFigure } from "@/types/content";

const Proof = ({ proofItems }: { proofItems: ProofFigure[] }) => {
  if (proofItems.length === 0) return null;

  return (
    <section
      aria-label="Proof figures"
      className="section-padding bg-primary text-white"
    >
      <div className="section-inner">
        <dl className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {proofItems.map((item, index) => {
            const label = item.label.toLowerCase();
            const Icon = label.includes("project")
              ? BriefcaseIcon
              : label.includes("client") || label.includes("team")
                ? UsersThreeIcon
                : label.includes("year")
                  ? CalendarBlankIcon
                  : ChartLineUpIcon;

            return (
              <div
                key={`${item.label}-${index}`}
                className="flex items-start gap-4 border-t border-white/15 pt-5"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 flex size-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent"
                >
                  <Icon size={24} weight="duotone" />
                </span>
                <div>
                  <dd className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    {item.value}
                    {item.suffix}
                  </dd>
                  <dt className="mt-1 text-sm font-medium text-white/75 sm:text-base">
                    {item.label}
                  </dt>
                </div>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
};

export default Proof;
