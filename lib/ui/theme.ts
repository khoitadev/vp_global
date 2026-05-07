export const THEME_STORAGE_KEY = "vpg-theme";

export const THEME_VALUES = ["light", "dark"] as const;

export type ThemeValue = (typeof THEME_VALUES)[number];

export const DEFAULT_THEME: ThemeValue = "light";

export function isThemeValue(value: unknown): value is ThemeValue {
  return (
    typeof value === "string" && (THEME_VALUES as readonly string[]).includes(value)
  );
}

export function nextTheme(value: ThemeValue): ThemeValue {
  return value === "dark" ? "light" : "dark";
}

export const THEME_INIT_SCRIPT = `(function(){try{var k=${JSON.stringify(
  THEME_STORAGE_KEY,
)};var v=localStorage.getItem(k);if(v!=='light'&&v!=='dark'){v=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'${DEFAULT_THEME}';}var d=document.documentElement;d.dataset.theme=v;d.style.colorScheme=v;}catch(e){}})();`;
