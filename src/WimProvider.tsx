import React, { createContext, useContext, useEffect, useMemo } from "react";
import { getWimDensity, setWimDensity, type WimDensity } from "./density";
import { getWimLocale, setWimLocale } from "./i18n/instance";
import { getWimPreset, setWimPreset, type WimPreset } from "./preset";
import { getWimTheme, setWimTheme, type WimTheme } from "./theme";

export type WimProviderProps = {
  children: React.ReactNode;
  /**
   * Color theme. Writes `data-theme` on `root` (`light` / `dark`), or removes it for `system`.
   * @default "system"
   */
  theme?: WimTheme;
  /**
   * Control density. Writes `data-density` on `root`.
   * @default "comfortable"
   */
  density?: WimDensity;
  /** Built-in UI locale (`en` / `ja` / `pt`). Omit to leave the current locale unchanged. */
  locale?: string;
  /**
   * Theme preset ("brand kit"). Writes `data-wim-preset` on `root`, or removes it for `none`.
   * @default "none"
   */
  preset?: WimPreset;
  /**
   * Element that receives `data-theme` / `data-density` / `data-wim-preset`.
   * Defaults to `document.documentElement` (`<html>`).
   */
  root?: Element | null;
};

export type WimContextValue = {
  theme: WimTheme;
  density: WimDensity;
  locale: string;
  preset: WimPreset;
};

const WimContext = createContext<WimContextValue | null>(null);

/**
 * Read the nearest `WimProvider` values, or fall back to document / i18n globals
 * when used outside a provider.
 */
export function useWim(): WimContextValue {
  const ctx = useContext(WimContext);
  if (ctx) return ctx;
  return {
    theme: getWimTheme(),
    density: getWimDensity(),
    locale: getWimLocale(),
    preset: getWimPreset(),
  };
}

/**
 * Front-facing setup for theme, density, and built-in locale.
 * Attributes (`data-theme` / `data-density`) remain the CSS contract; this provider
 * is the preferred way to set them from React.
 *
 * @example
 * ```tsx
 * <WimProvider theme="dark" density="compact" locale="ja">
 *   <App />
 * </WimProvider>
 * ```
 *
 * When also using `ThemeToggle` for the same document theme, lift state into the
 * parent and pass `applyToDocument={false}` on the toggle so the two do not fight.
 */
export function WimProvider({
  children,
  theme = "system",
  density = "comfortable",
  locale,
  preset = "none",
  root,
}: WimProviderProps) {
  useEffect(() => {
    setWimTheme(theme, root);
  }, [theme, root]);

  useEffect(() => {
    setWimDensity(density, root);
  }, [density, root]);

  useEffect(() => {
    if (locale != null) setWimLocale(locale);
  }, [locale]);

  useEffect(() => {
    setWimPreset(preset, root);
  }, [preset, root]);

  const value = useMemo<WimContextValue>(
    () => ({
      theme,
      density,
      locale: locale ?? getWimLocale(),
      preset,
    }),
    [theme, density, locale, preset],
  );

  return <WimContext.Provider value={value}>{children}</WimContext.Provider>;
}

WimProvider.displayName = "WimProvider";
