/**
 * Do not edit directly, this file was auto-generated from tokens/intents.json.
 * Run `npm run intents:build` (also part of `npm run tokens:build`).
 */

/** Every semantic intent, in canonical order. */
export const WIM_INTENTS = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info",
  "neutral",
  "default"
] as const;

/**
 * Unified semantic intent values for components.
 */
export type WimIntent =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "neutral"
  | "default";

/**
 * Semantic intent values available on Button. A deliberate subset of WimIntent — buttons express danger/success/neutral, not the full palette of feedback intents.
 */
export type ButtonIntent =
  | "default"
  | "danger"
  | "success";

/**
 * Intent values for indicator-style components (Badge, Chip, Tag, Progress).
 */
export type IndicatorIntent =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "neutral";

/**
 * Intent values for feedback-style components (Alert, Banner, Toast, Notification).
 */
export type FeedbackIntent =
  | "info"
  | "success"
  | "warning"
  | "danger";

/**
 * Intent values for form field components (Input, Textarea, DatePicker, RichTextEditor).
 */
export type FieldIntent =
  | "default"
  | "danger";

