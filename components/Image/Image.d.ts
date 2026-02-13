import { default as React } from '../../../node_modules/react';
type ImageProps = React.ComponentPropsWithoutRef<"img"> & {
    src: string;
    alt: string;
    width?: string | number;
    height?: string | number;
    radius?: "none" | "small" | "medium" | "large" | "full";
    shadow?: boolean;
    border?: boolean;
    fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
    loading?: "eager" | "lazy";
    caption?: string;
};
export declare const Image: ({ src, alt, width, height, radius, shadow, border, fit, loading, caption, className, style, ...props }: ImageProps) => import("react/jsx-runtime").JSX.Element;
export {};
