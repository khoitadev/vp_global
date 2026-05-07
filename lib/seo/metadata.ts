import type { Metadata } from "next";

import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import {
  COMPANY_NAME,
  DEFAULT_OG_IMAGE,
  LOCALE_META,
  SITE_URL,
} from "@/lib/seo/site";

export function createHomeMetadata({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}): Metadata {
  const title = dictionary.meta.title;
  const description = dictionary.meta.description;
  const canonicalPath = `/${locale}`;
  const localeMeta = LOCALE_META[locale];
  const keywordsByLocale: Record<Locale, string[]> = {
    vi: [
      "gia cong CNC Viet Nam",
      "ep dun nhom Viet Nam",
      "injection molding Viet Nam",
      "OEM ODM manufacturing",
      "VP Global",
    ],
    ko: [
      "베트남 CNC 가공",
      "베트남 알루미늄 압출",
      "베트남 사출 생산",
      "OEM ODM manufacturing",
      "VP Global",
    ],
  };

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${SITE_URL}${canonicalPath}`,
      languages: {
        vi: `${SITE_URL}/vi`,
        ko: `${SITE_URL}/ko`,
        "x-default": `${SITE_URL}/vi`,
      },
    },
    openGraph: {
      type: "website",
      locale: localeMeta.ogLocale,
      alternateLocale: Object.values(LOCALE_META)
        .map((item) => item.ogLocale)
        .filter((ogLocale) => ogLocale !== localeMeta.ogLocale),
      url: `${SITE_URL}${canonicalPath}`,
      title,
      description,
      siteName: COMPANY_NAME,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: COMPANY_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    keywords: keywordsByLocale[locale],
  };
}

