import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { Container } from "@/components/shared/layout/container";
import { FadeInUp } from "@/components/shared/motion/motion-primitives";
import { Text } from "@/components/shared/typography/text";
import { Button } from "@/components/shared/ui/button";

type HeroSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function HeroSection({ locale, dictionary }: Readonly<HeroSectionProps>) {
  const hero = dictionary.landing.hero;

  return (
    <section
      id="hero"
      className="hero-canvas relative overflow-hidden border-b border-border-default"
    >
      <Container width="wide" className="pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-28">
        <FadeInUp>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="entrance-stagger space-y-8 lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full border border-border-default bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  {hero.badge}
                </span>
                <Text variant="caption" tone="muted">
                  {hero.trustNote}
                </Text>
              </div>

              <Text as="h1" variant="display" className="break-words">
                {hero.title}
              </Text>

              <Text variant="bodyLg" tone="secondary">
                {hero.description}
              </Text>

              <ul className="grid gap-2 sm:grid-cols-2 lg:gap-3">
                {hero.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-md border border-border-default bg-surface px-3 py-2 text-sm text-text-secondary"
                  >
                    <span
                      aria-hidden
                      className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <Button href={`/${locale}#contact`} variant="primary" size="lg">
                  {hero.primaryCta}
                </Button>
                <Button href={`/${locale}#services`} variant="secondary" size="lg">
                  {hero.secondaryCta}
                </Button>
              </div>
            </div>

            <div className="entrance-stagger space-y-5 lg:col-span-5 lg:pt-12 xl:pt-16">
              <figure className="factory-figure factory-figure--1-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={hero.featureImage}
                  alt={hero.featureImageAlt}
                  width={1200}
                  height={1200}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </figure>
              <Text variant="caption" tone="muted">
                {hero.featureImageCaption}
              </Text>

              <dl className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {hero.stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-border-default bg-surface p-4"
                  >
                    <dt className="text-xs uppercase tracking-wider text-text-muted">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-xl font-semibold sm:text-2xl">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </FadeInUp>
      </Container>
    </section>
  );
}
