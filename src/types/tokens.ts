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
 * provide styles for the three core sizes (Button, Avatar, Chip,
 * Tag, Link, Switch など大多数のコンポーネント).
 */
export type ComponentSizeBasic = Extract<ComponentSize, "sm" | "md" | "lg">;

/**
 * Extended size values for components that additionally provide
 * an "xl" style (Loader, Spinner).
 */
export type ComponentSizeExtended = Extract<ComponentSize, "sm" | "md" | "lg" | "xl">;

/**
 * Size values for text-scale components that provide styles
 * from "xs" to "xl" (Text, Span).
 */
export type ComponentSizeText = Extract<ComponentSize, "xs" | "sm" | "md" | "lg" | "xl">;

/**
 * Radius scale values implemented by media components (Image, Video, Audio).
 * A deliberate subset of WimRadiusKey — only these keys have corresponding
 * SCSS classes (.radiusSm / .radiusMd / .radiusLg / .radiusFull).
 */
export type MediaRadius = "none" | "sm" | "md" | "lg" | "full";

/**
 * Standard width values for form field components.
 */
export type FieldWidth = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Variant values for button-style components (Button, ButtonGroup, LinkButton).
 */
export type ButtonVariant = "solid" | "outline" | "ghost";

/**
 * Semantic intent values available on Button. Generated from tokens/intents.json.
 */
export type ButtonIntent = GeneratedButtonIntent;

/**
 * Variant values for form field components (Input, Textarea, DatePicker, RichTextEditor).
 */
export type FieldVariant = "outline" | "ghost";

/**
 * Variant values for indicator-style components (Badge, Chip, Tag).
 */
export type IndicatorVariant = "solid" | "outline" | "subtle";

/**
 * Unified semantic intent values for components. Generated from tokens/intents.json.
 */
export type WimIntent = GeneratedWimIntent;


import type {
  WimColorKey as GeneratedColorKey,
  WimSpacingKey as GeneratedSpacingKey,
  WimRadiusKey as GeneratedRadiusKey,
  WimShadowKey as GeneratedShadowKey,
  WimZIndexKey as GeneratedZIndexKey,
  WimOpacityKey as GeneratedOpacityKey,
  WimFontSizeKey as GeneratedFontSizeKey,
  WimFontWeightKey as GeneratedFontWeightKey,
  WimLineHeightKey as GeneratedLineHeightKey
} from './generated-tokens';

// Intent types are generated from tokens/intents.json (the single source of
// truth for the semantic intent vocabulary). Do not hand-edit the unions below;
// change tokens/intents.json and run `npm run intents:build`.
import type {
  WimIntent as GeneratedWimIntent,
  ButtonIntent as GeneratedButtonIntent,
  IndicatorIntent as GeneratedIndicatorIntent,
  FeedbackIntent as GeneratedFeedbackIntent,
  FieldIntent as GeneratedFieldIntent,
} from './generated-intents';

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
 * Font size tokens keys.（生成物 generated-tokens.ts を単一情報源とする。手書き再定義は
 * トークン追加時にドリフトするため禁止。）
 */
export type WimFontSizeKey = GeneratedFontSizeKey;

/**
 * Font size tokens available as CSS variable strings.
 */
export type WimFontSizeToken = `var(--wim-font-size-${WimFontSizeKey})`;

export type WimFontSize = LiteralWithAutocomplete<WimFontSizeKey | WimFontSizeToken>;

/**
 * Font weight tokens keys.（generated-tokens.ts が単一情報源）
 */
export type WimFontWeightKey = GeneratedFontWeightKey;

/**
 * Font weight tokens available as CSS variable strings.
 */
export type WimFontWeightToken = `var(--wim-font-weight-${WimFontWeightKey})`;

export type WimFontWeight = LiteralWithAutocomplete<WimFontWeightKey | WimFontWeightToken>;

/**
 * Line height tokens keys.（generated-tokens.ts が単一情報源）
 */
export type WimLineHeightKey = GeneratedLineHeightKey;

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
 * Generated from tokens/intents.json.
 */
export type IndicatorIntent = GeneratedIndicatorIntent;

/**
 * Intent values for feedback-style components (Alert, Banner, Toast, Notification, Snackbar).
 * Generated from tokens/intents.json.
 */
export type FeedbackIntent = GeneratedFeedbackIntent;

/**
 * Intent values for form field components (Input, Textarea, DatePicker, RichTextEditor).
 * Generated from tokens/intents.json.
 */
export type FieldIntent = GeneratedFieldIntent;

/**
 * Z-index stacking layer keys.
 */
export type WimZIndexKey = GeneratedZIndexKey;

/**
 * Z-index tokens available as CSS variable strings.
 */
export type WimZIndexToken = `var(--wim-z-${WimZIndexKey})`;

export type WimZIndex = LiteralWithAutocomplete<WimZIndexToken>;
