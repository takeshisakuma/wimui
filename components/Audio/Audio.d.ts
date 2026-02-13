import { default as React } from '../../../node_modules/react';
type AudioProps = React.ComponentPropsWithoutRef<"audio"> & {
    src: string;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    controls?: boolean;
    radius?: "none" | "small" | "medium" | "large" | "full";
    shadow?: boolean;
    border?: boolean;
    preload?: "auto" | "metadata" | "none";
    caption?: string;
    customControls?: boolean;
};
export declare const Audio: ({ src, autoPlay, loop, muted, controls, radius, shadow, border, preload, caption, className, style, customControls, ...props }: AudioProps & {
    customControls?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export {};
