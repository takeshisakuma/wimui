/**
 * Utility type to allow autocomplete for literal strings while still accepting any string.
 * This works by intersecting string with an empty object, which prevents TypeScript from
 * collapsing the union into just 'string'.
 */
export type LiteralWithAutocomplete<T extends string> = T | (string & {});
/**
 * Standard size values for components.
 */
export type ComponentSize = "small" | "medium" | "large";
/**
 * Status values for indicator-style components (Badge, Chip, Tag, Progress).
 */
export type IndicatorStatus = "primary" | "secondary" | "success" | "warning" | "error" | "info" | "neutral";
/**
 * Status values for feedback/notification components (Alert, Banner, Toast, Snackbar).
 */
export type FeedbackStatus = "info" | "success" | "warning" | "error";
/**
 * Status values for form field components (Input, Textarea, DatePicker).
 */
export type FieldStatus = "default" | "error";
/**
 * Color tokens available as CSS variables.
 */
export type WimColorToken = "var(--wim-color-destructive)" | "var(--wim-color-positive)" | "var(--wim-color-caution)" | "var(--wim-color-primary)" | "var(--wim-color-secondary)" | "var(--wim-color-informative)" | "var(--wim-color-disabled)" | "var(--wim-color-text-on-primary)" | "var(--wim-color-text-on-destructive)" | "var(--wim-color-text-on-positive)" | "var(--wim-color-text-on-caution)" | "var(--wim-color-text-on-secondary)" | "var(--wim-color-text-on-informative)" | "var(--wim-color-text-on-disabled)" | "var(--wim-color-text-primary)" | "var(--wim-color-text-secondary)" | "var(--wim-color-text-tertiary)" | "var(--wim-color-text-disabled)" | "var(--wim-color-text-white)" | "var(--wim-color-text-error)" | "var(--wim-color-bg-app)" | "var(--wim-color-bg-component)" | "var(--wim-color-bg-primary)" | "var(--wim-color-bg-secondary)" | "var(--wim-color-bg-hover)" | "var(--wim-color-border)" | "var(--wim-color-border-secondary)" | "var(--wim-color-focus-outline)" | "var(--wim-scrollbar-thumb)" | "var(--wim-scrollbar-track)" | "var(--wim-color-primary)" | "var(--wim-color-primary-hover)" | "var(--wim-color-primary-active)" | "var(--wim-color-primary-light)" | "var(--wim-color-secondary)" | "var(--wim-color-text-primary)" | "var(--wim-color-text-secondary)" | "var(--wim-color-text-tertiary)" | "var(--wim-color-text-disabled)" | "var(--wim-color-text-placeholder)" | "var(--wim-color-text-on-primary)" | "var(--wim-color-text-on-secondary)" | "var(--wim-color-surface)" | "var(--wim-color-surface-variant)" | "var(--wim-color-surface-hover)" | "var(--wim-color-primary-container-alpha)" | "var(--wim-color-surface-variant-alpha)" | "var(--wim-color-bg-tertiary)" | "var(--wim-color-bg-component)" | "var(--wim-color-overlay-bg)" | "var(--wim-color-overlay-bg-light)" | "var(--wim-color-overlay-bg-dark)" | "var(--wim-color-text-on-overlay)";
export type WimColor = LiteralWithAutocomplete<WimColorToken>;
/**
 * Spacing tokens available as CSS variables.
 */
export type WimSpacingToken = "var(--wim-spacing-3xs)" | "var(--wim-spacing-2xs)" | "var(--wim-spacing-xs)" | "var(--wim-spacing-sm)" | "var(--wim-spacing-md)" | "var(--wim-spacing-lg)" | "var(--wim-spacing-xl)" | "var(--wim-spacing-2xl)" | "var(--wim-spacing-3xl)" | "var(--wim-spacing-4xl)" | "var(--wim-spacing-5xl)" | "var(--wim-spacing-xs)" | "var(--wim-spacing-sm)" | "var(--wim-spacing-md)" | "var(--wim-spacing-lg)" | "var(--wim-spacing-xl)";
export type WimSpacing = LiteralWithAutocomplete<WimSpacingToken>;
/**
 * Radius tokens available as CSS variables.
 */
export type WimRadiusToken = "var(--wim-radius-sm)" | "var(--wim-radius-md)" | "var(--wim-radius-lg)" | "var(--wim-radius-full)" | "var(--wim-radius-sm)" | "var(--wim-radius-md)" | "var(--wim-radius-lg)" | "var(--wim-radius-full)";
export type WimRadius = LiteralWithAutocomplete<WimRadiusToken>;
/**
 * Shadow tokens available as CSS variables.
 */
export type WimShadowToken = "var(--wim-shadow-none)" | "var(--wim-shadow-xs)" | "var(--wim-shadow-sm)" | "var(--wim-shadow-md)" | "var(--wim-shadow-lg)" | "var(--wim-shadow-inset)" | "var(--wim-shadow-focus)";
export type WimShadow = LiteralWithAutocomplete<WimShadowToken>;
/**
 * Typography tokens available as CSS variables.
 */
export type WimFontSizeToken = "var(--wim-font-size-xs)" | "var(--wim-font-size-sm)" | "var(--wim-font-size-md)" | "var(--wim-font-size-lg)" | "var(--wim-font-size-xl)" | "var(--wim-font-size-xs)" | "var(--wim-font-size-sm)" | "var(--wim-font-size-md)" | "var(--wim-font-size-lg)" | "var(--wim-font-size-xl)";
export type WimFontSize = LiteralWithAutocomplete<WimFontSizeToken>;
export type WimFontWeightToken = "var(--wim-font-weight-normal)" | "var(--wim-font-weight-medium)" | "var(--wim-font-weight-bold)" | "var(--wim-font-weight-normal)" | "var(--wim-font-weight-medium)" | "var(--wim-font-weight-bold)";
export type WimFontWeight = LiteralWithAutocomplete<WimFontWeightToken>;
export type WimLineHeightToken = "var(--wim-line-height-loose-jp)" | "var(--wim-line-height-normal-jp)" | "var(--wim-line-height-tight-jp)" | "var(--wim-line-height-loose)" | "var(--wim-line-height-normal)" | "var(--wim-line-height-tight)" | "var(--wim-line-height-tight)" | "var(--wim-line-height-normal)" | "var(--wim-line-height-loose)" | "var(--wim-line-height-tight-jp)" | "var(--wim-line-height-normal-jp)" | "var(--wim-line-height-loose-jp)";
export type WimLineHeight = LiteralWithAutocomplete<WimLineHeightToken>;
/**
 * Opacity tokens available as CSS variables.
 */
export type WimOpacityToken = "var(--wim-opacity-disabled)" | "var(--wim-opacity-ghost)" | "var(--wim-opacity-secondary)";
export type WimOpacity = LiteralWithAutocomplete<WimOpacityToken>;
