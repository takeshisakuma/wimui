import { default as React } from '../../../../node_modules/react';
type WatermarkProps = {
    /** Text content of the watermark (a string or multiple lines) */
    content?: string | string[];
    /** Image URL used as the watermark instead of text */
    image?: string;
    /** Width of a single watermark tile (px) */
    width?: number;
    /** Height of a single watermark tile (px) */
    height?: number;
    /** Rotation angle of the watermark (degrees) */
    rotate?: number;
    /** z-index of the watermark layer */
    zIndex?: number;
    /** Opacity of the watermark */
    opacity?: number;
    /** Gap between watermark tiles [x, y] (px) */
    gap?: [number, number];
    /** Offset of the watermark pattern [x, y] (px) */
    offset?: [number, number];
    /** Content overlaid by the watermark */
    children?: React.ReactNode;
    /** Additional class names */
    className?: string;
};
export declare const Watermark: (props: WatermarkProps) => React.JSX.Element;
export {};
