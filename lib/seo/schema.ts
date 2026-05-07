import type { Locale } from "@/lib/i18n/config";
import {
  COMPANY_NAME,
  SITE_ADDRESS,
  SITE_EMAIL,
  SITE_PHONE,
  SITE_URL,
} from "@/lib/seo/site";

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    url: SITE_URL,
    email: SITE_EMAIL,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE_EMAIL,
        telephone: SITE_PHONE,
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "VN",
      addressLocality: "Bac Ninh",
      streetAddress: SITE_ADDRESS,
    },
  };
}

export function createWebsiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "VP Global",
    url: SITE_URL,
    inLanguage: locale,
  };
}

export function createWebPageSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "VP Global Landing Page",
    url: `${SITE_URL}/${locale}`,
    inLanguage: locale,
    isPartOf: {
      "@type": "WebSite",
      name: "VP Global",
      url: SITE_URL,
    },
  };
}

export function createBreadcrumbSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/${locale}`,
      },
    ],
  };
}

export function createLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY_NAME,
    url: SITE_URL,
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_ADDRESS,
      addressLocality: "Bac Ninh",
      addressCountry: "VN",
    },
  };
}

