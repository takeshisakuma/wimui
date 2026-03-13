import { default as React } from '../../../node_modules/react';
/**
 * フィルタの強さを定義する型
 */
export type ImageFilterIntensity = "none" | "sm" | "md" | "lg";
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
    intensity?: number | "light" | "medium" | "heavy";
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
    src: string;
    alt: string;
    width?: string | number;
    height?: string | number;
    /** 角丸のサイズ */
    radius?: "none" | "small" | "medium" | "large" | "full";
    /** シャドウ（影）を表示するか */
    shadow?: boolean;
    /** 枠線を表示するか */
    border?: boolean;
    /** 画像のフィット感 */
    fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
    /** 遅延読み込み設定 */
    loading?: "eager" | "lazy";
    /** 画像の下に表示する説明文 */
    caption?: string;
    /** 画像自体に適用するフィルタ */
    filter?: ImageFilterOptions;
    /** ホバー時に適用するフィルタ（指定がない場合はfilterが維持されます） */
    hoverFilter?: ImageFilterOptions;
    /** 背景に適用するフィルタ（透過画像などで効果的） */
    backdropFilter?: ImageFilterOptions;
    /** ホバー時に背景に適用するフィルタ */
    hoverBackdropFilter?: ImageFilterOptions;
    /** フィルタ切り替え時のアニメーション速度 */
    transition?: "none" | "fast" | "normal" | "slow";
    /** フィルムグレイン（ノイズ）の強度 */
    noise?: ImageFilterIntensity;
    /** デュオトーン設定 */
    duotone?: ImageDuotoneOptions;
    /** オーバーレイ設定 */
    overlay?: ImageOverlayOptions;
    /** ホバー時の拡大倍率 (例: 1.1) または true (デフォルト1.05) */
    zoom?: boolean | number;
    /** マウスに追従するチルト（傾き）エフェクト */
    tilt?: boolean;
    /** 読み込み完了時にフェードインさせるか */
    fadeIn?: boolean;
    /** 画像自体のブレンドモード */
    blendMode?: React.CSSProperties["mixBlendMode"];
    /** ブレンド用の背景色 */
    bgColor?: string;
    /** デモ用：読み込み完了を意図的に遅らせるミリ秒 */
    demoDelay?: number;
    /** LCP候補など、読み込み優先度を上げるかどうか（fetchpriority="high"） */
    priority?: boolean;
};
export declare const Image: ({ src, alt, width, height, radius, shadow, border, fit, loading, caption, filter, hoverFilter, backdropFilter, hoverBackdropFilter, transition, noise, duotone, overlay, zoom, tilt, fadeIn, blendMode, bgColor, demoDelay, priority, className, style, ...props }: ImageProps) => import("react/jsx-runtime").JSX.Element;
