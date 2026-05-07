import type { Locale } from "@/lib/i18n/config";

export const SITE_URL = "https://vpglobal.vn";

export const COMPANY_NAME = "VP Global Co., Ltd";
export const SITE_EMAIL = "vpglobal0201@gmail.com";
export const SITE_PHONE = "+84972011307";
export const SITE_ADDRESS = "Hap Linh Industrial Cluster, Bac Ninh, Vietnam";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph-image`;

export const LOCALE_META: Record<Locale, { ogLocale: string; languageName: string }> = {
  vi: { ogLocale: "vi_VN", languageName: "Vietnamese" },
  ko: { ogLocale: "ko_KR", languageName: "Korean" },
};

