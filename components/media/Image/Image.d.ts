import { default as React } from '../../../../node_modules/react';
import { ComponentSize, MediaRadius } from '../../../types/tokens';
/**
 * フィルタの強さを定義する型
 */
export type ImageFilterIntensity = ComponentSize | "none";
/**
 * 画像に適用するフィルタオプション
 */
export interface ImageFilterOptions {
    /** ぼかし */
    blur?: ImageFilterIntensity;
    /** グレースケール（白黒） */
    grayscale?: ImageFilterIntensity | boolean;
    /** 明るさ */
    brightness?: ImageFilterIntensity;
    /** コントラスト */
    contrast?: ImageFilterIntensity;
    /** セピア */
    sepia?: ImageFilterIntensity;
    /** 彩度 */
    saturate?: ImageFilterIntensity;
    /** 色相回転（角度） */
    hueRotate?: "none" | "90" | "180" | "270";
    /** 反転 */
    invert?: ImageFilterIntensity;
    /** 不透明度 */
    opacity?: ImageFilterIntensity;
}
/**
 * オーバーレイのオプション
 */
export interface ImageOverlayOptions {
    /** カラーまたはグラデーション（CSS） */
    color?: string;
    /** 強度（不透明度） */
    intensity?: number | "sm" | "md" | "lg";
    /** ホバー時のみ表示するか */
    showOnHover?: boolean;
    /** ブレンドモード */
    blendMode?: React.CSSProperties["mixBlendMode"];
}
/**
 * デュオトーン（2色塗り）のオプション
 */
export interface ImageDuotoneOptions {
    /** ハイライト（明るい部分）の色 */
    light: string;
    /** シャドウ（暗い部分）の色 */
    dark: string;
}
export type ImageProps = React.ComponentPropsWithoutRef<"img"> & {
    /** Source URL of the image */
    src: string;
    /** Alternative text for the image */
    alt: string;
    /** Width of the image */
    width?: string | number;
    /** Height of the image */
    height?: string | number;
    /** Corner radius size */
    radius?: MediaRadius;
    /** Whether to show a shadow */
    shadow?: boolean;
    /** Whether to show a border */
    border?: boolean;
    /** How the image fits its box */
    fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
    /** Lazy-loading behavior */
    loading?: "eager" | "lazy";
    /** Caption shown below the image */
    caption?: string;
    /** Filter applied to the image itself */
    filter?: ImageFilterOptions;
    /** Filter applied on hover (when omitted, `filter` is kept) */
    hoverFilter?: ImageFilterOptions;
    /** Filter applied to the background (effective with transparent images) */
    backdropFilter?: ImageFilterOptions;
    /** Filter applied to the background on hover */
    hoverBackdropFilter?: ImageFilterOptions;
    /** Animation speed when switching filters */
    transition?: "none" | "fast" | "normal" | "slow";
    /** Intensity of the film-grain (noise) effect */
    noise?: ImageFilterIntensity;
    /** Duotone settings */
    duotone?: ImageDuotoneOptions;
    /** Overlay settings */
    overlay?: ImageOverlayOptions;
    /** Zoom factor on hover (e.g. 1.1) or true (defaults to 1.05) */
    zoom?: boolean | number;
    /** Tilt effect that follows the mouse */
    tilt?: boolean;
    /** Whether to fade in when loading completes */
    fadeIn?: boolean;
    /** Blend mode of the image itself */
    blendMode?: React.CSSProperties["mixBlendMode"];
    /** Background color used for blending */
    bgColor?: string;
    /** Demo only: milliseconds to intentionally delay load completion */
    demoDelay?: number;
    /** Whether to raise loading priority (e.g. an LCP candidate; sets fetchpriority="high") */
    priority?: boolean;
    /** Custom element shown when loading fails */
    fallback?: React.ReactNode;
};
export declare const Image: ({ src, alt, width, height, radius, shadow, border, fit, loading, caption, filter, hoverFilter, backdropFilter, hoverBackdropFilter, transition, noise, duotone, overlay, zoom, tilt, fadeIn, blendMode, bgColor, demoDelay, priority, fallback, className, style, ...props }: ImageProps) => React.JSX.Element;
