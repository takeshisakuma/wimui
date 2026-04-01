import { default as React } from '../../../../node_modules/react';
import { AudioLabels } from './components/AudioCustomControls';
export type { AudioLabels };
export type AudioTrack = {
    src: string;
    title?: string;
    artist?: string;
    coverArt?: string;
};
type AudioProps = Omit<React.ComponentPropsWithoutRef<"audio">, "src"> & {
    src?: string | string[] | AudioTrack | AudioTrack[];
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    controls?: boolean;
    preload?: "auto" | "metadata" | "none";
    radius?: "none" | "sm" | "md" | "lg" | "full";
    shadow?: boolean;
    border?: boolean;
    caption?: React.ReactNode;
    customControls?: boolean;
    visualizer?: boolean;
    showMetadata?: boolean;
    fadeIn?: boolean | number;
    fadeOut?: boolean | number;
    crossfade?: boolean | number;
    playbackRate?: boolean;
    hotkeys?: boolean;
    presets?: boolean;
    sleepTimer?: boolean;
    /** 読み込み設定。"lazy" の場合に Intersection Observer が有効化されます */
    loading?: "eager" | "lazy";
    /** デモ用：読み込み完了を意図的に遅らせるミリ秒 */
    demoDelay?: number;
    /** 手動翻訳用のラベル */
    labels?: AudioLabels;
};
export declare const Audio: ({ src, autoPlay, loop, muted, controls, radius, shadow, border, preload, caption, className, style, customControls, visualizer, showMetadata, fadeIn, fadeOut, crossfade, playbackRate, hotkeys, presets, sleepTimer, loading, demoDelay, labels, ...props }: AudioProps) => import("react/jsx-runtime").JSX.Element;
