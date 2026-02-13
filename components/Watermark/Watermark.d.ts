import { default as React } from '../../../node_modules/react';
type WatermarkProps = {
    content?: string | string[];
    image?: string;
    width?: number;
    height?: number;
    rotate?: number;
    zIndex?: number;
    opacity?: number;
    gap?: [number, number];
    offset?: [number, number];
    children?: React.ReactNode;
    className?: string;
};
export declare const Watermark: ({ content, image, width, height, rotate, zIndex, opacity, gap, offset, children, className, }: WatermarkProps) => import("react/jsx-runtime").JSX.Element;
export {};
