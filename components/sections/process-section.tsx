import type { Dictionary } from "@/lib/i18n/dictionaries";
import { SectionWrapper } from "@/components/shared/layout/section-wrapper";
import { Text } from "@/components/shared/typography/text";

type ProcessSectionProps = {
  dictionary: Dictionary;
};

export function ProcessSection({ dictionary }: Readonly<ProcessSectionProps>) {
  const process = dictionary.landing.process;

  return (
    <SectionWrapper
      id="process"
      title={
        <div className="space-y-2">
          <Text
            variant="caption"
            tone="muted"
            className="uppercase tracking-wider"
          >
            {process.label}
          </Text>
          <Text as="h2" variant="h2">
            {process.title}
          </Text>
        </div>
      }
      description={
        <Text variant="body" tone="secondary" className="max-w-3xl">
          {process.description}
        </Text>
      }
    >
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="reveal-from-left lg:col-span-5">
          <figure className="factory-figure factory-figure--3-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={process.image}
              alt={process.imageAlt}
              width={1600}
              height={1132}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <Text variant="caption" tone="muted" className="mt-3 block">
            {process.footnote}
          </Text>

          <div className="mt-5 rounded-xl border border-border-default bg-surface p-5">
            <Text
              variant="caption"
              tone="muted"
              className="uppercase tracking-wider"
            >
              {process.commitment.title}
            </Text>
            <dl className="mt-3 space-y-3">
              {process.commitment.items.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-1 border-b border-border-default pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                >
                  <dt className="text-xs uppercase tracking-wider text-text-muted">
                    {item.label}
                  </dt>
                  <dd className="text-sm font-semibold text-foreground sm:text-right">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ol className="reveal-stagger-right grid gap-3 sm:grid-cols-2">
            {process.steps.map((step) => (
              <li
                key={step.title}
                className="premium-card flex flex-col rounded-xl border border-border-default bg-surface p-5"
              >
                <Text
                  variant="caption"
                  tone="muted"
                  className="uppercase tracking-wider"
                >
                  {step.stepLabel}
                </Text>
                <Text as="h3" variant="h3" className="mt-2">
                  {step.title}
                </Text>
                <Text
                  variant="bodySm"
                  tone="secondary"
                  className="mt-2 flex-1"
                >
                  {step.description}
                </Text>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </SectionWrapper>
  );
}
