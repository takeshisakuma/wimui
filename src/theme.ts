/**
 * Document theme (`data-theme`). Same attribute contract as ThemeToggle /
 * WimProvider — prefer those APIs; these helpers are the shared implementation.
 *
 * - `light` / `dark` → set `data-theme` on the root
 * - `system` → remove `data-theme` (OS `prefers-color-scheme` applies)
 */

export type WimTheme = "light" | "dark" | "system";

const ATTR = "data-theme";

export function getWimTheme(root: ParentNode | null | undefined = undefined): WimTheme {
  if (typeof document === "undefined") return "system";
  const el = (root as Element | null | undefined) ?? document.documentElement;
  const value = el.getAttribute?.(ATTR);
  return value === "light" || value === "dark" ? value : "system";
}

/**
 * Apply theme to an element (defaults to `document.documentElement`).
 */
export function setWimTheme(
  theme: WimTheme,
  root: Element | null | undefined = undefined,
): void {
  if (typeof document === "undefined") return;
  const el = root ?? document.documentElement;
  if (theme === "system") el.removeAttribute(ATTR);
  else el.setAttribute(ATTR, theme);
}
