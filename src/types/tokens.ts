/**
 * Utility type to allow autocomplete for literal strings while still accepting any string.
 * This works by intersecting string with an empty object, which prevents TypeScript from
 * collapsing the union into just 'string'.
 */
export type LiteralWithAutocomplete<T extends string> = T | (string & {});

/**
 * Standard size values for components.
 */
export type ComponentSize = "sm" | "md" | "lg";

/**
 * Variant values for button-style components (Button, ButtonGroup, LinkButton).
 */
export type ButtonVariant = "filled" | "outline" | "ghost";

/**
 * Variant values for form field components (Input, Textarea, DatePicker, RichTextEditor).
 */
export type FieldVariant = "outline" | "ghost";

/**
 * Variant values for indicator-style components (Badge, Chip, Tag).
 */
export type IndicatorVariant = "solid" | "outline" | "subtle";

/**
 * Unified semantic intent values for components.
 */
export type WimIntent =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "neutral"
  | "default"
  | "destructive"
  | "positive";

/**
 * Status values for indicator-style components (Badge, Chip, Tag, Progress).
 * @deprecated Use WimIntent instead.
 */
export type IndicatorStatus = WimIntent;

/**
 * Status values for feedback/notification components (Alert, Banner, Toast, Snackbar).
 * @deprecated Use WimIntent instead.
 */
export type FeedbackStatus = WimIntent;

/**
 * Status values for form field components (Input, Textarea, DatePicker, RichTextEditor).
 * @deprecated Use WimIntent instead.
 */
export type FieldStatus = WimIntent;

/**
 * Color tokens keys available as CSS variables.
 */
export type WimColorKey =
  // Semantic brand colors
  | "primary"
  | "primary-hover"
  | "primary-active"
  | "primary-light"
  | "primary-container-alpha"
  | "secondary"
  | "informative"
  | "destructive"
  | "positive"
  | "caution"
  | "disabled"
  // Text colors
  | "text-primary"
  | "text-secondary"
  | "text-tertiary"
  | "text-disabled"
  | "text-white"
  | "text-error"
  | "text-placeholder"
  // Text on semantic backgrounds
  | "text-on-primary"
  | "text-on-secondary"
  | "text-on-destructive"
  | "text-on-positive"
  | "text-on-caution"
  | "text-on-informative"
  | "text-on-disabled"
  | "text-on-overlay"
  // Surface / background colors
  | "surface"
  | "surface-variant"
  | "surface-hover"
  | "surface-variant-alpha"
  | "bg-app"
  | "bg-component"
  | "bg-primary"
  | "bg-secondary"
  | "bg-tertiary"
  | "bg-hover"
  // Border / focus colors
  | "border"
  | "border-secondary"
  | "focus-outline"
  // Overlay colors
  | "overlay-bg"
  | "overlay-bg-light"
  | "overlay-bg-dark"
  // Scrollbar colors
  | "scrollbar-thumb"
  | "scrollbar-track";

/**
 * Color tokens available as CSS variable strings.
 */
export type WimColorToken =
  | `var(--wim-color-${WimColorKey})`
  | `var(--wim-${WimColorKey})`;

export type WimColor = LiteralWithAutocomplete<WimColorKey | WimColorToken>;

/**
 * Spacing tokens keys.
 */
export type WimSpacingKey =
  | "3xs"
  | "2xs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl";

/**
 * Spacing tokens available as CSS variable strings.
 */
export type WimSpacingToken = `var(--wim-spacing-${WimSpacingKey})`;

export type WimSpacing = LiteralWithAutocomplete<WimSpacingKey | WimSpacingToken>;

/**
 * Radius tokens keys.
 */
export type WimRadiusKey = "sm" | "md" | "lg" | "full";

/**
 * Radius tokens available as CSS variable strings.
 */
export type WimRadiusToken = `var(--wim-radius-${WimRadiusKey})`;

export type WimRadius = LiteralWithAutocomplete<WimRadiusKey | WimRadiusToken>;

/**
 * Shadow tokens keys.
 */
export type WimShadowKey = "none" | "xs" | "sm" | "md" | "lg" | "inset" | "focus";

/**
 * Shadow tokens available as CSS variable strings.
 */
export type WimShadowToken = `var(--wim-shadow-${WimShadowKey})`;

export type WimShadow = LiteralWithAutocomplete<WimShadowKey | WimShadowToken>;

/**
 * Font size tokens keys.
 */
export type WimFontSizeKey =
  | "2xs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl";

/**
 * Font size tokens available as CSS variable strings.
 */
export type WimFontSizeToken = `var(--wim-font-size-${WimFontSizeKey})`;

export type WimFontSize = LiteralWithAutocomplete<WimFontSizeKey | WimFontSizeToken>;

/**
 * Font weight tokens keys.
 */
export type WimFontWeightKey = "normal" | "medium" | "bold";

/**
 * Font weight tokens available as CSS variable strings.
 */
export type WimFontWeightToken = `var(--wim-font-weight-${WimFontWeightKey})`;

export type WimFontWeight = LiteralWithAutocomplete<WimFontWeightKey | WimFontWeightToken>;

/**
 * Line height tokens keys.
 */
export type WimLineHeightKey =
  | "loose-jp"
  | "normal-jp"
  | "tight-jp"
  | "loose"
  | "normal"
  | "tight";

/**
 * Line height tokens available as CSS variable strings.
 */
export type WimLineHeightToken = `var(--wim-line-height-${WimLineHeightKey})`;

export type WimLineHeight = LiteralWithAutocomplete<WimLineHeightKey | WimLineHeightToken>;

/**
 * Opacity tokens keys.
 */
export type WimOpacityKey = "disabled" | "ghost" | "secondary";

/**
 * Opacity tokens available as CSS variable strings.
 */
export type WimOpacityToken = `var(--wim-opacity-${WimOpacityKey})`;

export type WimOpacity = LiteralWithAutocomplete<WimOpacityKey | WimOpacityToken>;

