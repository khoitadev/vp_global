"use client";

import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

import {
  CheckIcon,
  FlagKoreaIcon,
  FlagVietnamIcon,
} from "@/components/shared/icons/icons";
import { DropdownMenu } from "@/components/shared/ui/dropdown-menu";
import { SUPPORTED_LOCALES, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { cn } from "@/lib/ui/cn";

type FlagComponent = ComponentType<SVGProps<SVGSVGElement>>;

const flagFor: Record<Locale, FlagComponent> = {
  vi: FlagVietnamIcon,
  ko: FlagKoreaIcon,
};

type LocaleSwitcherProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function LocaleSwitcher({ locale, dictionary }: Readonly<LocaleSwitcherProps>) {
  const labels = dictionary.ui.localeSwitcher;
  const localeNames = dictionary.ui.localeLabel;
  const ActiveFlag = flagFor[locale];

  return (
    <DropdownMenu
      triggerLabel={`${labels.menuLabel} – ${labels.currentLabel}: ${localeNames[locale]}`}
      menuLabel={labels.menuLabel}
      align="end"
      triggerContent={() => (
        <>
          <ActiveFlag className="h-3.5 w-5 rounded-[2px] shadow-[0_0_0_1px_var(--border-default)]" />
          <span className="text-xs font-semibold uppercase tracking-wider">
            {labels[locale]}
          </span>
        </>
      )}
    >
      {(close) => (
        <>
          {SUPPORTED_LOCALES.map((code) => {
            const FlagIcon = flagFor[code];
            const isActive = code === locale;
            return (
              <li key={code} role="none">
                <Link
                  href={`/${code}`}
                  role="menuitem"
                  aria-current={isActive ? "page" : undefined}
                  onClick={close}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors",
                    isActive
                      ? "bg-surface-elevated text-foreground"
                      : "text-text-secondary hover:bg-surface-elevated hover:text-foreground",
                  )}
                >
                  <FlagIcon className="h-3.5 w-5 shrink-0 rounded-[2px] shadow-[0_0_0_1px_var(--border-default)]" />
                  <span className="flex-1 font-medium">{localeNames[code]}</span>
                  {isActive ? (
                    <CheckIcon className="h-4 w-4 text-accent-primary" />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </>
      )}
    </DropdownMenu>
  );
}
