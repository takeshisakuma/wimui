/**
 * Utility type to allow autocomplete for literal strings while still accepting any string.
 * This works by intersecting string with an empty object, which prevents TypeScript from
 * collapsing the union into just 'string'.
 */
export type LiteralWithAutocomplete<T extends string> = T | (string & {});

/**
 * Standard size values for components.
 */
export type ComponentSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";

/**
 * Basic size values for components.
 * A deliberate subset of ComponentSize for components that only
 * provide styles for the three core sizes (AgentStatus, Kbd,
 * KeyboardShortcuts, Leaderboard).
 */
export type ComponentSizeBasic = Extract<ComponentSize, "sm" | "md" | "lg">;

/**
 * Standard width values for form field components.
 */
export type FieldWidth = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Variant values for button-style components (Button, ButtonGroup, LinkButton).
 */
export type ButtonVariant = "solid" | "outline" | "ghost";

/**
 * Semantic intent values available on Button.
 * A deliberate subset of WimIntent — buttons express danger/positive/neutral,
 * not the full palette of feedback intents.
 */
export type ButtonIntent = "default" | "destructive" | "positive";

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


import type {
  WimColorKey as GeneratedColorKey,
  WimSpacingKey as GeneratedSpacingKey,
  WimRadiusKey as GeneratedRadiusKey,
  WimShadowKey as GeneratedShadowKey,
  WimZIndexKey as GeneratedZIndexKey,
  WimOpacityKey as GeneratedOpacityKey
} from './generated-tokens';

/**
 * Color tokens keys available as CSS variables.
 */
export type WimColorKey = GeneratedColorKey;

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
export type WimSpacingKey = GeneratedSpacingKey;

/**
 * Spacing tokens available as CSS variable strings.
 */
export type WimSpacingToken = `var(--wim-spacing-${WimSpacingKey})`;

export type WimSpacing = LiteralWithAutocomplete<WimSpacingKey | WimSpacingToken>;

/**
 * Radius tokens keys.
 */
export type WimRadiusKey = GeneratedRadiusKey;

/**
 * Radius tokens available as CSS variable strings.
 */
export type WimRadiusToken = `var(--wim-radius-${WimRadiusKey})`;

export type WimRadius = LiteralWithAutocomplete<WimRadiusKey | WimRadiusToken>;

/**
 * Shadow tokens keys.
 */
export type WimShadowKey = GeneratedShadowKey;

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
export type WimOpacityKey = GeneratedOpacityKey;

/**
 * Opacity tokens available as CSS variable strings.
 */
export type WimOpacityToken = `var(--wim-opacity-${WimOpacityKey})`;

export type WimOpacity = LiteralWithAutocomplete<WimOpacityKey | WimOpacityToken>;

/**
 * Intent values for indicator-style components (Badge, Chip, Tag, Progress).
 */
export type IndicatorIntent =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "neutral";

/**
 * Intent values for feedback-style components (Alert, Banner, Toast, Notification).
 */
export type FeedbackIntent = "info" | "success" | "warning" | "error";

/**
 * Intent values for form field components (Input, Textarea, DatePicker, RichTextEditor).
 */
export type FieldIntent = "default" | "error";

/**
 * Z-index stacking layer keys.
 */
export type WimZIndexKey = GeneratedZIndexKey;

/**
 * Z-index tokens available as CSS variable strings.
 */
export type WimZIndexToken = `var(--wim-z-${WimZIndexKey})`;

export type WimZIndex = LiteralWithAutocomplete<WimZIndexToken>;
