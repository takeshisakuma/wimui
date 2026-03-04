/**
 * Utility type to allow autocomplete for literal strings while still accepting any string.
 * This works by intersecting string with an empty object, which prevents TypeScript from
 * collapsing the union into just 'string'.
 */
export type LiteralWithAutocomplete<T extends string> = T | (string & {});
/**
 * Color tokens available as CSS variables.
 */
export type WimColorToken = "var(--color-destructive)" | "var(--color-positive)" | "var(--color-caution)" | "var(--color-primary)" | "var(--color-secondary)" | "var(--color-informative)" | "var(--color-disabled)" | "var(--color-text-on-primary)" | "var(--color-text-on-destructive)" | "var(--color-text-on-positive)" | "var(--color-text-on-caution)" | "var(--color-text-on-secondary)" | "var(--color-text-on-informative)" | "var(--color-text-on-disabled)" | "var(--text-primary)" | "var(--text-secondary)" | "var(--text-tertiary)" | "var(--text-disabled)" | "var(--text-white)" | "var(--text-error)" | "var(--bg-app)" | "var(--bg-component)" | "var(--wim-color-bg-primary)" | "var(--wim-color-bg-secondary)" | "var(--wim-color-bg-hover)" | "var(--wim-color-border)" | "var(--wim-color-border-secondary)" | "var(--color-focus-outline)" | "var(--scrollbar-thumb)" | "var(--scrollbar-track)" | "var(--wim-color-primary)" | "var(--wim-color-primary-hover)" | "var(--wim-color-primary-active)" | "var(--wim-color-primary-light)" | "var(--wim-color-secondary)" | "var(--wim-color-text-primary)" | "var(--wim-color-text-secondary)" | "var(--wim-color-text-tertiary)" | "var(--wim-color-text-disabled)" | "var(--wim-color-text-placeholder)" | "var(--wim-color-text-on-primary)" | "var(--wim-color-text-on-secondary)" | "var(--wim-color-surface)" | "var(--wim-color-surface-variant)" | "var(--wim-color-surface-hover)" | "var(--wim-color-primary-container-alpha)" | "var(--wim-color-surface-variant-alpha)" | "var(--wim-color-bg-tertiary)" | "var(--wim-color-bg-component)" | "var(--wim-color-overlay-bg)" | "var(--wim-color-overlay-bg-light)" | "var(--wim-color-overlay-bg-dark)" | "var(--wim-color-text-on-overlay)";
export type WimColor = LiteralWithAutocomplete<WimColorToken>;
/**
 * Spacing tokens available as CSS variables.
 */
export type WimSpacingToken = "var(--spacing-3xs)" | "var(--spacing-2xs)" | "var(--spacing-xs)" | "var(--spacing-sm)" | "var(--spacing-md)" | "var(--spacing-lg)" | "var(--spacing-xl)" | "var(--spacing-2xl)" | "var(--spacing-3xl)" | "var(--spacing-4xl)" | "var(--spacing-5xl)" | "var(--wim-spacing-xs)" | "var(--wim-spacing-sm)" | "var(--wim-spacing-md)" | "var(--wim-spacing-lg)" | "var(--wim-spacing-xl)";
export type WimSpacing = LiteralWithAutocomplete<WimSpacingToken>;
/**
 * Radius tokens available as CSS variables.
 */
export type WimRadiusToken = "var(--radius-sm)" | "var(--radius-md)" | "var(--radius-lg)" | "var(--radius-full)" | "var(--wim-radius-sm)" | "var(--wim-radius-md)" | "var(--wim-radius-lg)" | "var(--wim-radius-full)";
export type WimRadius = LiteralWithAutocomplete<WimRadiusToken>;
/**
 * Shadow tokens available as CSS variables.
 */
export type WimShadowToken = "var(--shadow-none)" | "var(--shadow-xs)" | "var(--shadow-sm)" | "var(--shadow-md)" | "var(--shadow-lg)" | "var(--shadow-inset)" | "var(--shadow-focus)";
export type WimShadow = LiteralWithAutocomplete<WimShadowToken>;
/**
 * Typography tokens available as CSS variables.
 */
export type WimFontSizeToken = "var(--font-size-ex-small)" | "var(--font-size-small)" | "var(--font-size-medium)" | "var(--font-size-large)" | "var(--font-size-ex-large)" | "var(--wim-font-size-xs)" | "var(--wim-font-size-sm)" | "var(--wim-font-size-md)" | "var(--wim-font-size-lg)" | "var(--wim-font-size-xl)";
export type WimFontSize = LiteralWithAutocomplete<WimFontSizeToken>;
export type WimFontWeightToken = "var(--font-weight-normal)" | "var(--font-weight-medium)" | "var(--font-weight-bold)" | "var(--wim-font-weight-normal)" | "var(--wim-font-weight-medium)" | "var(--wim-font-weight-bold)";
export type WimFontWeight = LiteralWithAutocomplete<WimFontWeightToken>;
export type WimLineHeightToken = "var(--line-height-loose-jpan)" | "var(--line-height-normal-jpan)" | "var(--line-height-tight-jpan)" | "var(--line-height-loose-latn)" | "var(--line-height-normal-latn)" | "var(--line-height-tight-latn)" | "var(--wim-line-height-tight)" | "var(--wim-line-height-normal)" | "var(--wim-line-height-loose)" | "var(--wim-line-height-tight-jp)" | "var(--wim-line-height-normal-jp)" | "var(--wim-line-height-loose-jp)";
export type WimLineHeight = LiteralWithAutocomplete<WimLineHeightToken>;
