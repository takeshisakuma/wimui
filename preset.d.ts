import { WIM_PRESETS, WimPresetName } from './tokens/generated/presets';
export { WIM_PRESETS };
export type { WimPresetName };
/** A preset name, or `none` for the default (no preset). */
export type WimPreset = WimPresetName | "none";
export declare function getWimPreset(root?: ParentNode | null | undefined): WimPreset;
/**
 * Apply a preset to an element (defaults to `document.documentElement`).
 * `none` (or an unknown name) removes the attribute.
 */
export declare function setWimPreset(preset: WimPreset, root?: Element | null | undefined): void;
