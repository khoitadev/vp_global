import type { Dictionary } from "@/lib/i18n/dictionaries";
import { SectionWrapper } from "@/components/shared/layout/section-wrapper";
import { Text } from "@/components/shared/typography/text";

type ServicesSectionProps = {
  dictionary: Dictionary;
};

export function ServicesSection({ dictionary }: Readonly<ServicesSectionProps>) {
  const services = dictionary.landing.services;

  return (
    <SectionWrapper
      id="services"
      tone="muted"
      title={
        <Text as="h2" variant="h2">
          {services.title}
        </Text>
      }
      description={
        <Text variant="body" tone="secondary" className="max-w-3xl">
          {services.description}
        </Text>
      }
    >
      <div className="reveal-stagger-scale grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.items.map((item, index) => (
            <article
              key={item.title}
              className="premium-card flex flex-col overflow-hidden rounded-xl border border-border-default bg-background"
            >
              <figure className="factory-figure factory-figure--3-2 rounded-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  width={1600}
                  height={1132}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <Text as="h3" variant="h3">
                    {item.title}
                  </Text>
                  <span
                    aria-hidden
                    className="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-border-default bg-surface px-2 text-xs font-semibold text-text-secondary"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <Text variant="bodySm" tone="secondary" className="mt-2">
                  {item.description}
                </Text>
                <ul className="mt-4 space-y-2 border-t border-border-default pt-3">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-xs text-text-secondary"
                    >
                      <span
                        aria-hidden
                        className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
      </div>
      <Text variant="caption" tone="muted" className="mt-6 block">
        {services.footnote}
      </Text>
    </SectionWrapper>
  );
}
