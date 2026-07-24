/**
 * Theme preset ("brand kit") applied via `data-wim-preset` on the root — the
 * same attribute contract as `data-theme` / `data-density`. Prefer the
 * `WimProvider` `preset` prop; these helpers are the shared implementation.
 *
 * A preset (see `tokens/presets/*.json`) overrides a small set of role tokens
 * (radius + accent) and composes with theme and density. `none` removes the
 * attribute (the default look from `styles.css`).
 */

import { WIM_PRESETS, type WimPresetName } from "./tokens/generated/presets";

export { WIM_PRESETS };
export type { WimPresetName };

/** A preset name, or `none` for the default (no preset). */
export type WimPreset = WimPresetName | "none";

const ATTR = "data-wim-preset";

const NAMES = new Set<string>(WIM_PRESETS.map((p) => p.name));

export function getWimPreset(
  root: ParentNode | null | undefined = undefined,
): WimPreset {
  if (typeof document === "undefined") return "none";
  const el = (root as Element | null | undefined) ?? document.documentElement;
  const value = el.getAttribute?.(ATTR);
  return value && NAMES.has(value) ? (value as WimPresetName) : "none";
}

/**
 * Apply a preset to an element (defaults to `document.documentElement`).
 * `none` (or an unknown name) removes the attribute.
 */
export function setWimPreset(
  preset: WimPreset,
  root: Element | null | undefined = undefined,
): void {
  if (typeof document === "undefined") return;
  const el = root ?? document.documentElement;
  if (preset === "none" || !NAMES.has(preset)) el.removeAttribute(ATTR);
  else el.setAttribute(ATTR, preset);
}
