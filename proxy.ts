import { NextResponse, type NextRequest } from "next/server";

import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "@/lib/i18n/config";

function resolvePreferredLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const normalized = acceptLanguage.toLowerCase();

  if (normalized.startsWith("ko")) {
    return "ko";
  }

  return DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameHasLocale) {
    return;
  }

  const locale = resolvePreferredLocale(request);
  const nextUrl = request.nextUrl.clone();
  nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};

