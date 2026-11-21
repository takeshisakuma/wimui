import { default as React } from '../../../../node_modules/react';
import { BarcodeFormat } from './encode';
export type { BarcodeFormat };
export type BarcodeProps = Omit<React.ComponentPropsWithoutRef<"div">, "children"> & {
    /**
     * Value to encode. For `ean13`, 12 digits (the check digit is calculated) or
     * 13 digits (the check digit is verified).
     */
    value: string;
    /**
     * Symbology to encode `value` in.
     * @default "code128"
     */
    format?: BarcodeFormat;
    /**
     * Height of the bars, in px.
     * @default 64
     */
    height?: number;
    /**
     * Width of the narrowest bar, in px. Below 2 most phone cameras stop reading
     * the symbol on screen.
     * @default 2
     */
    moduleWidth?: number;
    /**
     * Whether the value is printed under the bars.
     * @default true
     */
    showValue?: boolean;
    /**
     * Accessible name. Defaults to the value, so that a screen reader can read out
     * what a scanner would read.
     */
    label?: string;
};
/**
 * Draws a scannable 1D barcode — Code 128 for logistics, tickets and internal
 * SKUs, EAN-13 for retail product codes.
 *
 * Two things are deliberate. **The symbol keeps dark bars on a light background
 * in both themes**: laser and CCD scanners are built for that polarity and read
 * an inverted symbol unreliably, so following the theme here would produce a
 * barcode that looks right and does not scan. And **a value that cannot be
 * encoded is never drawn** — an approximate barcode scans to the wrong thing,
 * which is worse than one that is visibly missing. For the same reason the
 * symbol is never scaled down to fit a narrow container: it scrolls instead,
 * because a squeezed symbol looks identical and stops being read.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const Barcode: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "children"> & {
    /**
     * Value to encode. For `ean13`, 12 digits (the check digit is calculated) or
     * 13 digits (the check digit is verified).
     */
    value: string;
    /**
     * Symbology to encode `value` in.
     * @default "code128"
     */
    format?: BarcodeFormat;
    /**
     * Height of the bars, in px.
     * @default 64
     */
    height?: number;
    /**
     * Width of the narrowest bar, in px. Below 2 most phone cameras stop reading
     * the symbol on screen.
     * @default 2
     */
    moduleWidth?: number;
    /**
     * Whether the value is printed under the bars.
     * @default true
     */
    showValue?: boolean;
    /**
     * Accessible name. Defaults to the value, so that a screen reader can read out
     * what a scanner would read.
     */
    label?: string;
} & React.RefAttributes<HTMLDivElement>>;
