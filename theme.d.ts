/**
 * Document theme (`data-theme`). Same attribute contract as ThemeToggle /
 * WimProvider — prefer those APIs; these helpers are the shared implementation.
 *
 * - `light` / `dark` → set `data-theme` on the root
 * - `system` → remove `data-theme` (OS `prefers-color-scheme` applies)
 */
export type WimTheme = "light" | "dark" | "system";
export declare function getWimTheme(root?: ParentNode | null | undefined): WimTheme;
/**
 * Apply theme to an element (defaults to `document.documentElement`).
 */
export declare function setWimTheme(theme: WimTheme, root?: Element | null | undefined): void;
