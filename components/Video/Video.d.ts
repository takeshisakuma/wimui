import { default as React } from '../../../node_modules/react';
type VideoProps = Omit<React.ComponentPropsWithoutRef<"video">, "src"> & {
    src?: string;
    width?: string | number;
    height?: string | number;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    controls?: boolean;
    poster?: string;
    radius?: "none" | "small" | "medium" | "large" | "full";
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
};
export declare const Video: ({ src, width, height, autoPlay, loop, muted, controls, poster, radius, shadow, border, fit, preload, caption, className, style, customControls, advancedControls, videoId, resumePlayback, playlist, autoPlayNext, qualities, ...props }: VideoProps) => import("react/jsx-runtime").JSX.Element;
export {};
