import type { Dictionary } from "@/lib/i18n/dictionaries";
import { SectionWrapper } from "@/components/shared/layout/section-wrapper";
import { Text } from "@/components/shared/typography/text";

type WhyChooseUsSectionProps = {
  dictionary: Dictionary;
};

export function WhyChooseUsSection({
  dictionary,
}: Readonly<WhyChooseUsSectionProps>) {
  const why = dictionary.landing.whyChooseUs;

  return (
    <SectionWrapper
      id="why-choose-us"
      title={
        <Text as="h2" variant="h2">
          {why.title}
        </Text>
      }
      description={
        <Text variant="body" tone="secondary" className="max-w-3xl">
          {why.description}
        </Text>
      }
    >
      <div className="space-y-8">
        <div className="rounded-xl border border-border-default bg-surface-elevated p-5 sm:p-6">
          <Text variant="caption" tone="muted" className="uppercase tracking-wider">
            {why.kpisTitle}
          </Text>
          <dl className="reveal-stagger-fade mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {why.kpis.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-border-default bg-surface p-4"
              >
                <dt className="text-xs uppercase tracking-wider text-text-muted">
                  {item.label}
                </dt>
                <dd className="mt-1 text-xl font-semibold text-foreground">
                  {item.value}
                </dd>
                <Text variant="caption" tone="muted" className="mt-1 block">
                  {item.note}
                </Text>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="reveal-from-left space-y-4 lg:col-span-5">
              <figure className="factory-figure factory-figure--4-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={why.image}
                  alt={why.imageAlt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <Text variant="caption" tone="muted">
                {why.imageCaption}
              </Text>

              <div className="rounded-xl border border-border-default bg-surface p-5">
                <Text
                  variant="caption"
                  tone="muted"
                  className="uppercase tracking-wider"
                >
                  {why.commitment.title}
                </Text>
                <dl className="mt-3 space-y-3">
                  {why.commitment.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col gap-1 border-b border-border-default pb-3 last:border-b-0 last:pb-0"
                    >
                      <dt className="text-xs uppercase tracking-wider text-text-muted">
                        {item.label}
                      </dt>
                      <dd className="text-sm font-semibold text-foreground">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="reveal-stagger-right grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {why.points.map((point, index) => (
                <article
                  key={point.title}
                  className="premium-card rounded-xl border border-border-default bg-surface p-5"
                >
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent-primary"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <Text as="h3" variant="h3">
                        {point.title}
                      </Text>
                      <Text variant="bodySm" tone="secondary" className="mt-2">
                        {point.description}
                      </Text>
                    </div>
                  </div>
                </article>
              ))}
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
