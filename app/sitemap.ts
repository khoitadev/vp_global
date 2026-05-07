import type { MetadataRoute } from "next";

import { SUPPORTED_LOCALES } from "@/lib/i18n/config";
import { SITE_URL } from "@/lib/seo/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return SUPPORTED_LOCALES.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: locale === "vi" ? 1 : 0.9,
    alternates: {
      languages: {
        vi: `${SITE_URL}/vi`,
        ko: `${SITE_URL}/ko`,
      },
    },
  }));
}

