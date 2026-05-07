function normalizePathname(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname || "/";
}

/**
 * Same-document scroll to #id when the link targets the current page.
 * Returns true if navigation was handled (caller should preventDefault on the click event).
 */
export function trySmoothScrollToHash(href: string): boolean {
  if (typeof window === "undefined") return false;

  let hash = "";
  let targetPathname = "";

  if (href.startsWith("#")) {
    hash = href.slice(1);
    targetPathname = window.location.pathname;
  } else {
    let url: URL;
    try {
      url = new URL(href, window.location.href);
    } catch {
      return false;
    }
    hash = url.hash.slice(1);
    if (!hash) return false;
    targetPathname = url.pathname;
  }

  if (!hash) return false;

  const current = normalizePathname(window.location.pathname);
  const target = normalizePathname(targetPathname);
  if (current !== target) return false;

  const el = document.getElementById(hash);
  if (!el) return false;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  window.history.pushState(null, "", `${window.location.pathname}#${hash}`);
  return true;
}
