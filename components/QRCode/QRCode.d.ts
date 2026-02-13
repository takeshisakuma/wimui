import { default as React } from '../../../node_modules/react';
import { QRCodeSVG } from 'qrcode.react';
type QRCodeProps = {
    value: string;
    size?: number;
    level?: "L" | "M" | "Q" | "H";
    bgColor?: string;
    fgColor?: string;
    marginSize?: number;
    renderAs?: "svg" | "canvas";
    imageSettings?: React.ComponentProps<typeof QRCodeSVG>["imageSettings"];
    className?: string;
};
export declare const QRCode: ({ value, size, level, bgColor, fgColor, marginSize, renderAs, imageSettings, className, }: QRCodeProps) => import("react/jsx-runtime").JSX.Element;
export {};
