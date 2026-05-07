import type { Dictionary } from "@/lib/i18n/dictionaries";

import { Container } from "@/components/shared/layout/container";
import { SmoothSectionLink } from "@/components/shared/navigation/smooth-section-link";
import { Text } from "@/components/shared/typography/text";

type SiteFooterProps = {
  dictionary: Dictionary;
};

export function SiteFooter({ dictionary }: Readonly<SiteFooterProps>) {
  const footer = dictionary.ui.footer;

  return (
    <footer className="border-t border-border-default bg-surface">
      <Container width="wide" className="py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-4">
            <span className="brand-logo brand-logo--footer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.svg"
                alt={dictionary.ui.brand}
                width={400}
                height={200}
                decoding="async"
                loading="lazy"
              />
            </span>
            <Text as="p" variant="bodySm" tone="secondary" className="max-w-sm">
              {footer.tagline}
            </Text>
            <dl className="mt-2 grid grid-cols-2 gap-3 sm:max-w-md">
              {footer.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-md border border-border-default bg-surface-elevated p-3"
                >
                  <dt className="text-xs uppercase tracking-wider text-text-muted">
                    {fact.label}
                  </dt>
                  <dd className="mt-0.5 text-sm font-semibold text-foreground">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-2">
            <Text as="p" variant="caption" tone="muted" className="uppercase tracking-wider">
              {footer.quickLinksTitle}
            </Text>
            <nav aria-label={footer.quickLinksTitle}>
              <ul className="mt-3 space-y-2">
                {footer.quickLinks.map((item) => (
                  <li key={item.href}>
                    <SmoothSectionLink
                      href={item.href}
                      className="text-sm text-text-secondary underline-offset-4 transition-colors motion-safe:duration-200 motion-safe:ease-out hover:text-foreground hover:underline focus-visible:underline"
                    >
                      {item.label}
                    </SmoothSectionLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="lg:col-span-3">
            <Text as="p" variant="caption" tone="muted" className="uppercase tracking-wider">
              {footer.capabilitiesTitle}
            </Text>
            <ul className="mt-3 space-y-2">
              {footer.capabilities.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <Text as="p" variant="caption" tone="muted" className="uppercase tracking-wider">
              {footer.contactTitle}
            </Text>
            <address className="mt-3 not-italic">
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>
                  <span className="text-text-muted">{footer.addressLabel}: </span>
                  {footer.address}
                </li>
                <li>
                  <span className="text-text-muted">{footer.emailLabel}: </span>
                  <a
                    href={`mailto:${footer.emailValue}`}
                    className="underline-offset-4 transition-colors motion-safe:duration-200 motion-safe:ease-out hover:text-foreground hover:underline focus-visible:underline"
                  >
                    {footer.emailValue}
                  </a>
                </li>
                <li>
                  <span className="text-text-muted">{footer.phoneLabel}: </span>
                  <a
                    href={`tel:${footer.phoneValue.replace(/\s+/g, "")}`}
                    className="underline-offset-4 transition-colors motion-safe:duration-200 motion-safe:ease-out hover:text-foreground hover:underline focus-visible:underline"
                  >
                    {footer.phoneValue}
                  </a>
                </li>
                <li>
                  <span className="text-text-muted">{footer.vnContactLabel}: </span>
                  {footer.vnContactValue}
                </li>
                <li>
                  <span className="text-text-muted">{footer.ceoLabel}: </span>
                  {footer.ceoValue}
                </li>
              </ul>
            </address>
          </div>
        </div>
        <div aria-hidden className="divider-soft mt-10 h-px w-full" />
        <Text as="p" variant="caption" tone="muted" className="mt-6 block">
          {footer.copyright}
        </Text>
      </Container>
    </footer>
  );
}
