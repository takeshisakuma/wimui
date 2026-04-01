import {
  WimColor,
  WimSpacing,
  WimRadius,
  WimShadow,
  WimFontSize,
  WimFontWeight,
  WimLineHeight,
  WimOpacity,
} from "../types/tokens";

/**
 * Utility to convert color tokens (primary, secondary, etc.) to CSS variables.
 */
export const getColorValue = (val?: WimColor): string | undefined => {
  if (val === undefined || val === null) return undefined;

  const colorKeys = [
    "primary",
    "primary-hover",
    "primary-active",
    "primary-light",
    "primary-container-alpha",
    "secondary",
    "informative",
    "destructive",
    "positive",
    "caution",
    "disabled",
    "text-primary",
    "text-secondary",
    "text-tertiary",
    "text-disabled",
    "text-white",
    "text-error",
    "text-placeholder",
    "text-on-primary",
    "text-on-secondary",
    "text-on-destructive",
    "text-on-positive",
    "text-on-caution",
    "text-on-informative",
    "text-on-disabled",
    "text-on-overlay",
    "surface",
    "surface-variant",
    "surface-hover",
    "surface-variant-alpha",
    "bg-app",
    "bg-component",
    "bg-primary",
    "bg-secondary",
    "bg-tertiary",
    "bg-hover",
    "border",
    "border-secondary",
    "focus-outline",
    "overlay-bg",
    "overlay-bg-light",
    "overlay-bg-dark",
  ];

  if (colorKeys.includes(val as string)) {
    return `var(--wim-color-${val})`;
  }

  const otherKeys = ["scrollbar-thumb", "scrollbar-track"];
  if (otherKeys.includes(val as string)) {
    return `var(--wim-${val})`;
  }

  return val as string;
};

/**
 * Utility to convert spacing tokens (sm, md, lg, etc.) to CSS variables.
 */
export const getSpacingValue = (
  val?: number | WimSpacing,
): string | undefined => {
  if (val === undefined || val === null) return undefined;
  if (typeof val === "number") return `${val}px`;

  const tokens = [
    "3xs",
    "2xs",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
  ];

  if (tokens.includes(val as string)) {
    return `var(--wim-spacing-${val})`;
  }

  return val as string;
};

/**
 * Utility to convert radius tokens (sm, md, lg, full) to CSS variables.
 */
export const getRadiusValue = (
  val?: number | WimRadius,
): string | undefined => {
  if (val === undefined || val === null) return undefined;
  if (typeof val === "number") return `${val}px`;

  const tokens = ["sm", "md", "lg", "full"];

  if (tokens.includes(val as string)) {
    return `var(--wim-radius-${val})`;
  }

  return val as string;
};

/**
 * Utility to convert shadow tokens (none, xs, sm, md, lg, inset, focus) to CSS variables.
 */
export const getShadowValue = (val?: WimShadow): string | undefined => {
  if (val === undefined || val === null) return undefined;

  const tokens = ["none", "xs", "sm", "md", "lg", "inset", "focus"];

  if (tokens.includes(val as string)) {
    return `var(--wim-shadow-${val})`;
  }

  return val as string;
};

/**
 * Utility to convert font size tokens (xs, sm, md, etc.) to CSS variables.
 */
export const getFontSizeValue = (val?: WimFontSize): string | undefined => {
  if (val === undefined || val === null) return undefined;

  const tokens = [
    "2xs",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
    "7xl",
  ];

  if (tokens.includes(val as string)) {
    return `var(--wim-font-size-${val})`;
  }

  return val as string;
};

/**
 * Utility to convert font weight tokens (normal, medium, bold) to CSS variables.
 */
export const getFontWeightValue = (val?: WimFontWeight): string | undefined => {
  if (val === undefined || val === null) return undefined;

  const tokens = ["normal", "medium", "bold"];

  if (tokens.includes(val as string)) {
    return `var(--wim-font-weight-${val})`;
  }

  return val as string;
};

/**
 * Utility to convert line height tokens to CSS variables.
 */
export const getLineHeightValue = (val?: WimLineHeight): string | undefined => {
  if (val === undefined || val === null) return undefined;

  const tokens = [
    "loose-jp",
    "normal-jp",
    "tight-jp",
    "loose",
    "normal",
    "tight",
  ];

  if (tokens.includes(val as string)) {
    return `var(--wim-line-height-${val})`;
  }

  return val as string;
};

/**
 * Utility to convert opacity tokens to CSS variables.
 */
export const getOpacityValue = (val?: WimOpacity): string | undefined => {
  if (val === undefined || val === null) return undefined;

  const tokens = ["disabled", "ghost", "secondary"];

  if (tokens.includes(val as string)) {
    return `var(--wim-opacity-${val})`;
  }

  return val as string;
};
