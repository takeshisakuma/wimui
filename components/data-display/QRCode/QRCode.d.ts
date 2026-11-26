import { default as React } from '../../../../node_modules/react';
import { QRCodeSVG } from 'qrcode.react';
type QRCodeProps = {
    /** Value encoded in the QR code */
    value: string;
    /** Size of the QR code in px */
    size?: number;
    /** Error correction level */
    level?: "L" | "M" | "Q" | "H";
    /** Background color */
    bgColor?: string;
    /** Foreground (module) color */
    fgColor?: string;
    /** Size of the quiet-zone margin, in modules */
    marginSize?: number;
    /** Whether to render as an SVG or a canvas */
    renderAs?: "svg" | "canvas";
    /** Settings for an image embedded in the center of the QR code */
    imageSettings?: React.ComponentProps<typeof QRCodeSVG>["imageSettings"];
    /** Additional class names */
    className?: string;
    /** Accessible label describing what the QR code represents */
    "aria-label"?: string;
};
export declare const QRCode: ({ value, size, level, bgColor, fgColor, marginSize, renderAs, imageSettings, className, "aria-label": ariaLabel, }: QRCodeProps) => React.JSX.Element;
export {};
