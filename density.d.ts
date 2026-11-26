/**
 * Global UI density. Mirrors ThemeToggle's `data-theme` pattern:
 * set `data-density` on `<html>` (or any ancestor) so control-size tokens remappable
 * in `_ui-patterns.scss` take effect.
 *
 * @example
 * ```ts
 * import { setWimDensity } from "wimui";
 * setWimDensity("compact");
 * ```
 */
export type WimDensity = "comfortable" | "compact";
export declare function getWimDensity(root?: ParentNode | null | undefined): WimDensity;
/**
 * Apply density to an element (defaults to `document.documentElement`).
 * Pass `"comfortable"` (or omit attribute) for the default spacing/heights.
 */
export declare function setWimDensity(density: WimDensity, root?: Element | null | undefined): void;
