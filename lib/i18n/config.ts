export const SUPPORTED_LOCALES = ["vi", "ko"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "vi";

export function hasLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

