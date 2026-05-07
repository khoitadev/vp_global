# Current Architecture

- Next.js 16 App Router (Turbopack)
- React 19, TypeScript strict
- Tailwind CSS v4 with `@theme inline` token mapping
- Custom dictionary i18n (no next-intl) — `lib/i18n/dictionaries.ts`
- CSS-based motion (no framer-motion) — `motion-primitives.tsx`, scroll-driven reveal in `app/globals.css` (`.reveal-*`)
- Custom UI primitives (no shadcn) — `Button`, `Text`, `Container`, `SectionWrapper`, `DropdownMenu`
- Theme: `data-theme="light|dark"` on `<html>`, persisted in localStorage, pre-paint script in `<head>` to prevent FOUC
- Theme & Locale switcher: theme toggle button + locale `DropdownMenu`
- server-first architecture (client: `ThemeSwitcher`, `LocaleSwitcher`, `DropdownMenu`, `SmoothSectionLink`, `Button` when used as link)

# Important Rules

- avoid client components unless interactive
- avoid inline styles, use CSS tokens
- use semantic HTML
- all copy goes through dictionaries (no hardcoded text)
- preserve `[data-theme]` based theming, do not introduce hardcoded colors

# Locales

- `vi` (default), `ko` — fully synced JSON shape under `content/locales/`

# Current Status

- SEO: metadata + JSON-LD (Organization, WebSite, WebPage, Breadcrumb, LocalBusiness) + sitemap/robots/manifest/og-image
- Theme: light / dark toggle in header
- Responsive: mobile-first, touch targets ≥ 44px
- Multilingual: vi + ko full coverage
- Content: realistic, sourced from `docs/company-profile.pdf`; factory WebPs live under `public/images/factory/` (no PDF extract tooling in repo)

# Known Issues

- (none currently tracked)
