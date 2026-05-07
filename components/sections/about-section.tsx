import type { Dictionary } from "@/lib/i18n/dictionaries";
import { SectionWrapper } from "@/components/shared/layout/section-wrapper";
import { Text } from "@/components/shared/typography/text";

type AboutSectionProps = {
  dictionary: Dictionary;
};

export function AboutSection({ dictionary }: Readonly<AboutSectionProps>) {
  const about = dictionary.landing.about;

  return (
    <SectionWrapper
      id="about"
      title={
        <Text as="h2" variant="h2">
          {about.title}
        </Text>
      }
      description={
        <Text variant="body" tone="secondary" className="max-w-3xl">
          {about.description}
        </Text>
      }
    >
      <div className="mb-10 grid gap-6 lg:grid-cols-12 lg:gap-8">
        <figure className="factory-figure factory-figure--3-2 reveal-from-left lg:col-span-7">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={about.facilityImage}
            alt={about.facilityImageAlt}
            width={1600}
            height={1067}
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div className="reveal-from-right space-y-4 lg:col-span-5">
          <Text
            variant="caption"
            tone="muted"
            className="uppercase tracking-wider"
          >
            {about.facilityCaption}
          </Text>
          <dl className="grid gap-3">
            {about.facts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-lg border border-border-default bg-surface p-4"
              >
                <dt className="text-xs uppercase tracking-wider text-text-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-foreground">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div>
        <div className="grid gap-6 lg:grid-cols-2">
          <ul className="reveal-stagger-left space-y-3">
            {about.highlights.map((item) => (
              <li
                key={item}
                className="premium-card flex gap-3 rounded-lg border border-border-default bg-surface p-4"
              >
                <span
                  aria-hidden
                  className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-accent-primary"
                />
                <Text variant="bodySm" tone="secondary">
                  {item}
                </Text>
              </li>
            ))}
          </ul>
          <ol className="reveal-stagger-right relative space-y-3 border-l border-border-default pl-5">
            {about.timeline.map((item) => (
              <li key={item.year} className="premium-card relative rounded-lg border border-border-default bg-surface p-4">
                <span
                  aria-hidden
                  className="absolute -left-[1.625rem] top-5 h-3 w-3 rounded-full border-2 border-background bg-accent-primary"
                />
                <Text as="p" variant="caption" tone="muted" className="uppercase tracking-wider">
                  {item.year}
                </Text>
                <Text as="p" variant="bodySm" className="mt-1 font-semibold">
                  {item.title}
                </Text>
                <Text as="p" variant="bodySm" tone="secondary" className="mt-1">
                  {item.event}
                </Text>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-10 rounded-xl border border-border-default bg-surface-elevated p-5 sm:p-6">
        <Text as="h3" variant="h3">
          {about.byTheNumbers.title}
        </Text>
        <Text variant="body" tone="secondary" className="mt-2 max-w-3xl">
          {about.byTheNumbers.description}
        </Text>
        <dl className="reveal-stagger-scale mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {about.byTheNumbers.items.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-border-default bg-surface p-4"
            >
              <dt className="text-xs uppercase tracking-wider text-text-muted">
                {item.label}
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-foreground">
                {item.value}
              </dd>
              <Text variant="caption" tone="muted" className="mt-1 block">
                {item.note}
              </Text>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-10 rounded-xl border border-border-default bg-surface p-5 sm:p-6">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-5 lg:col-span-7">
            <Text
              variant="caption"
              tone="muted"
              className="uppercase tracking-wider"
            >
              {about.missionVision.label}
            </Text>
            <div className="reveal-stagger-alternate grid gap-5 sm:grid-cols-2">
              <div className="rounded-lg border border-border-default bg-background p-5">
                <Text as="h3" variant="h3">
                  {about.missionVision.missionTitle}
                </Text>
                <Text variant="bodySm" tone="secondary" className="mt-3">
                  {about.missionVision.missionBody}
                </Text>
              </div>
              <div className="rounded-lg border border-border-default bg-background p-5">
                <Text as="h3" variant="h3">
                  {about.missionVision.visionTitle}
                </Text>
                <Text variant="bodySm" tone="secondary" className="mt-3">
                  {about.missionVision.visionBody}
                </Text>
              </div>
            </div>
          </div>
          <figure className="factory-figure factory-figure--3-2 reveal-from-right lg:col-span-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={about.teamImage}
              alt={about.teamImageAlt}
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>

        <div className="mt-8">
          <Text
            variant="caption"
            tone="muted"
            className="uppercase tracking-wider"
          >
            {about.missionVision.valuesTitle}
          </Text>
          <ul className="reveal-stagger-scale mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {about.missionVision.values.map((value, index) => (
              <li
                key={value.title}
                className="rounded-lg border border-border-default bg-background p-4"
              >
                <span
                  aria-hidden
                  className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-accent-soft px-2 text-xs font-semibold text-accent-primary"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Text as="p" variant="bodySm" className="mt-3 font-semibold">
                  {value.title}
                </Text>
                <Text
                  as="p"
                  variant="caption"
                  tone="muted"
                  className="mt-1 block"
                >
                  {value.description}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
