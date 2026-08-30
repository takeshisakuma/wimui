import { default as React } from '../../../../node_modules/react';
import { WimColor } from '../../../types/tokens';
export type LoadingOverlayProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * Whether the overlay is shown.
     * @default false
     */
    visible?: boolean;
    /**
     * Type of the loading indicator.
     * @default "spinner"
     */
    loaderType?: "spinner" | "bars" | "dots" | "pulse";
    /**
     * Size of the loading indicator.
     * @default "lg"
     */
    loaderSize?: "sm" | "md" | "lg" | "xl";
    /**
     * Color of the loading indicator.
     * @default "primary"
     */
    /**
     * 渡した値はそのまま `Spinner` / `Loader` の `color` へ流れる。
     * 以前はここだけが独自の閉じた集合を持っており、同じ値が 3 段で違う型を
     * 通っていた（T118）。委譲先と同じ型にそろえる。
     */
    loaderColor?: "currentColor" | WimColor;
    /**
     * Background style of the overlay.
     * @default "dark"
     */
    backdropVariant?: "light" | "dark";
    /**
     * Strength of the backdrop blur effect.
     * @default "sm"
     */
    blur?: "none" | "sm" | "md" | "lg";
    /**
     * Loading message displayed below the indicator.
     */
    message?: string;
    /**
     * Whether to use position: fixed (covers the whole screen).
     *
     * When `false` (the default) the overlay is `position: absolute`, so it covers
     * the nearest positioned ancestor — not necessarily the element you wrapped.
     * Give that element a position explicitly, e.g. `<Box position="relative">`.
     *
     * `Card` sets `position: relative` for this reason (T88), so
     * `<Card><LoadingOverlay /></Card>` covers the card. A plain `<div>` does not,
     * and the overlay will spread to the viewport — measured at 1280x800 from the
     * origin while the card it was meant to cover was 1248x75.
     *
     * @default false
     */
    fixed?: boolean;
    /**
     * z-index of the overlay.
     */
    zIndex?: number;
    /**
     * Custom loading content, replacing the default indicator.
     */
    children?: React.ReactNode;
};
/**
 * Overlays the whole screen or a specific element to display a loading state.
 */
export declare const LoadingOverlay: ({ visible, loaderType, loaderSize, loaderColor, backdropVariant, blur, message, fixed, zIndex, children, className, style, ...props }: LoadingOverlayProps) => React.JSX.Element | null;
export default LoadingOverlay;
