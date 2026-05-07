import type { ReactNode } from "react";

import { SiteFooter } from "@/components/shared/navigation/site-footer";
import { SiteHeader } from "@/components/shared/navigation/site-header";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type PageShellProps = {
  locale: Locale;
  dictionary: Dictionary;
  children: ReactNode;
};

export function PageShell({
  locale,
  dictionary,
  children,
}: Readonly<PageShellProps>) {
  return (
    <>
      <SiteHeader locale={locale} dictionary={dictionary} />
      <main lang={locale} className="flex-1">
        {children}
      </main>
      <SiteFooter dictionary={dictionary} />
    </>
  );
}

