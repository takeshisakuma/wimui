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

const ATTR = "data-density";

export function getWimDensity(root: ParentNode | null | undefined = undefined): WimDensity {
  if (typeof document === "undefined") return "comfortable";
  const el = (root as Element | null | undefined) ?? document.documentElement;
  const value = el.getAttribute?.(ATTR);
  return value === "compact" ? "compact" : "comfortable";
}

/**
 * Apply density to an element (defaults to `document.documentElement`).
 * Pass `"comfortable"` (or omit attribute) for the default spacing/heights.
 */
export function setWimDensity(
  density: WimDensity,
  root: Element | null | undefined = undefined,
): void {
  if (typeof document === "undefined") return;
  const el = root ?? document.documentElement;
  if (density === "compact") {
    el.setAttribute(ATTR, "compact");
  } else {
    // Keep an explicit value so nested scopes can reset without inheriting compact.
    el.setAttribute(ATTR, "comfortable");
  }
}
