import { WimColor, WimSpacing, WimRadius, WimShadow, WimFontSize, WimFontWeight, WimLineHeight, WimOpacity } from '../types/tokens';
/**
 * Utility to convert color tokens (primary, secondary, etc.) to CSS variables.
 */
export declare const getColorValue: (val?: WimColor) => string | undefined;
/**
 * Utility to convert spacing tokens (sm, md, lg, etc.) to CSS variables.
 */
export declare const getSpacingValue: (val?: number | WimSpacing) => string | undefined;
/**
 * Utility to convert radius tokens (sm, md, lg, full) to CSS variables.
 */
export declare const getRadiusValue: (val?: number | WimRadius) => string | undefined;
/**
 * Utility to convert shadow tokens (none, xs, sm, md, lg, inset, focus) to CSS variables.
 */
export declare const getShadowValue: (val?: WimShadow) => string | undefined;
/**
 * Utility to convert font size tokens (xs, sm, md, etc.) to CSS variables.
 */
export declare const getFontSizeValue: (val?: WimFontSize) => string | undefined;
/**
 * Utility to convert font weight tokens (normal, medium, bold) to CSS variables.
 */
export declare const getFontWeightValue: (val?: WimFontWeight) => string | undefined;
/**
 * Utility to convert line height tokens to CSS variables.
 */
export declare const getLineHeightValue: (val?: WimLineHeight) => string | undefined;
/**
 * Utility to convert opacity tokens to CSS variables.
 */
export declare const getOpacityValue: (val?: WimOpacity) => string | undefined;
