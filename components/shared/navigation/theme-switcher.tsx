"use client";

import { useSyncExternalStore } from "react";

import { MoonIcon, SunIcon } from "@/components/shared/icons/icons";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import {
  DEFAULT_THEME,
  isThemeValue,
  nextTheme,
  THEME_STORAGE_KEY,
  type ThemeValue,
} from "@/lib/ui/theme";

const THEME_CHANGE_EVENT = "vpg:theme-change";

function applyTheme(value: ThemeValue) {
  const root = globalThis.document?.documentElement;
  if (!root) return;
  root.dataset.theme = value;
  root.style.colorScheme = value;
}

function readSelectedTheme(): ThemeValue {
  try {
    const fromDom = globalThis.document?.documentElement?.dataset.theme;
    if (isThemeValue(fromDom)) return fromDom;
    const stored = globalThis.localStorage?.getItem(THEME_STORAGE_KEY);
    return isThemeValue(stored) ? stored : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

function getServerSnapshot(): ThemeValue {
  return DEFAULT_THEME;
}

function subscribe(callback: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key !== THEME_STORAGE_KEY) return;
    callback();
  };
  const onLocal = () => callback();
  globalThis.addEventListener("storage", onStorage);
  globalThis.addEventListener(THEME_CHANGE_EVENT, onLocal);
  return () => {
    globalThis.removeEventListener("storage", onStorage);
    globalThis.removeEventListener(THEME_CHANGE_EVENT, onLocal);
  };
}

function persistTheme(value: ThemeValue) {
  try {
    globalThis.localStorage?.setItem(THEME_STORAGE_KEY, value);
  } catch {}
  globalThis.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

type ThemeSwitcherProps = {
  dictionary: Dictionary;
};

export function ThemeSwitcher({ dictionary }: Readonly<ThemeSwitcherProps>) {
  const labels = dictionary.ui.themeSwitcher;
  const active = useSyncExternalStore(
    subscribe,
    readSelectedTheme,
    getServerSnapshot,
  );

  const isDark = active === "dark";
  const target = nextTheme(active);
  const targetLabel = target === "dark" ? labels.dark : labels.light;

  const handleToggle = () => {
    applyTheme(target);
    persistTheme(target);
  };

  const Icon = isDark ? MoonIcon : SunIcon;

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={`${labels.menuLabel} – ${targetLabel}`}
      title={targetLabel}
      className="theme-toggle inline-flex h-10 w-10 items-center justify-center rounded-md border border-border-default bg-surface text-foreground transition-colors motion-safe:duration-200 hover:bg-surface-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span key={active} className="theme-toggle__icon">
        <Icon className="h-[18px] w-[18px]" aria-hidden />
      </span>
    </button>
  );
}
