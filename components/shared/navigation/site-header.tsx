import Link from "next/link";

import { Container } from "@/components/shared/layout/container";
import { LocaleSwitcher } from "@/components/shared/navigation/locale-switcher";
import { SmoothSectionLink } from "@/components/shared/navigation/smooth-section-link";
import { ThemeSwitcher } from "@/components/shared/navigation/theme-switcher";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type SiteHeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function SiteHeader({ locale, dictionary }: Readonly<SiteHeaderProps>) {
  const navItems = [
    { href: `/${locale}#about`, label: dictionary.ui.nav.about },
    { href: `/${locale}#services`, label: dictionary.ui.nav.services },
    { href: `/${locale}#process`, label: dictionary.ui.nav.process },
    { href: `/${locale}#projects`, label: dictionary.ui.nav.projects },
    { href: `/${locale}#contact`, label: dictionary.ui.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border-default bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <Container width="wide" className="py-3">
        <div className="flex items-center justify-between gap-4">
          <Link
            href={`/${locale}`}
            className="inline-flex h-11 items-center"
            aria-label={dictionary.ui.brand}
          >
            <span className="brand-logo brand-logo--header">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.svg"
                alt={dictionary.ui.brand}
                width={400}
                height={200}
                decoding="async"
                loading="eager"
              />
            </span>
          </Link>

          <nav
            aria-label={dictionary.ui.nav.ariaLabel}
            className="hidden lg:block"
          >
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <SmoothSectionLink
                    href={item.href}
                    className="inline-flex h-10 items-center rounded-md px-3 text-sm font-medium text-text-secondary underline-offset-4 transition-colors motion-safe:duration-200 hover:bg-surface-elevated hover:text-foreground focus-visible:underline"
                  >
                    {item.label}
                  </SmoothSectionLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeSwitcher dictionary={dictionary} />
            <LocaleSwitcher locale={locale} dictionary={dictionary} />
          </div>
        </div>

        <nav aria-label={dictionary.ui.nav.ariaLabel} className="mt-2 lg:hidden">
          <ul className="-mx-1 flex flex-wrap items-center gap-x-1 gap-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <SmoothSectionLink
                  href={item.href}
                  className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-text-secondary underline-offset-4 transition-colors motion-safe:duration-200 hover:bg-surface-elevated hover:text-foreground focus-visible:underline"
                >
                  {item.label}
                </SmoothSectionLink>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
