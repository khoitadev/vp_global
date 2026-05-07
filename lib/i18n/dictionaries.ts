import "server-only";

import { cache } from "react";

import type { Locale } from "@/lib/i18n/config";

const dictionaries = {
  vi: () => import("@/content/locales/vi.json").then((m) => m.default),
  ko: () => import("@/content/locales/ko.json").then((m) => m.default),
};

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)[Locale]>>;

export const getDictionary = cache(async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale]();
});

