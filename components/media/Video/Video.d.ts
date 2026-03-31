import { default as React } from '../../../../node_modules/react';
type VideoProps = Omit<React.ComponentPropsWithoutRef<"video">, "src"> & {
    src?: string;
    width?: string | number;
    height?: string | number;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    controls?: boolean;
    poster?: string;
    radius?: "none" | "sm" | "md" | "lg" | "full";
    shadow?: boolean;
    border?: boolean;
    fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
    preload?: "auto" | "metadata" | "none";
    caption?: string;
    customControls?: boolean;
    advancedControls?: boolean;
    videoId?: string;
    resumePlayback?: boolean;
    playlist?: {
        src: string;
        title?: string;
        poster?: string;
    }[];
    autoPlayNext?: boolean;
    qualities?: {
        label: string;
        src: string;
    }[];
    /** 読み込み設定。"lazy" の場合に Intersection Observer が有効化されます */
    loading?: "eager" | "lazy";
    /** 読み込み完了時にフェードインさせるか */
    fadeIn?: boolean;
    /** デモ用：読み込み完了を意図的に遅らせるミリ秒 */
    demoDelay?: number;
};
export declare const Video: ({ src, width: _width, height, autoPlay, loop, muted, controls, poster, radius, shadow, border, fit, preload, caption, className, style, customControls, advancedControls, videoId, resumePlayback, playlist, autoPlayNext, qualities, loading, fadeIn, demoDelay, ...props }: VideoProps) => import("react/jsx-runtime").JSX.Element;
export {};
