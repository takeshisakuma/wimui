import { default as React } from '../../../node_modules/react';
import { WimColor } from '../../types/tokens';
type SpinnerProps = React.ComponentPropsWithoutRef<"div"> & {
    size?: "small" | "medium" | "large";
    color?: "primary" | "secondary" | "success" | "warning" | "error" | "neutral" | "currentColor" | WimColor;
    label?: string;
    labelPosition?: "right" | "bottom";
};
/**
 * 読み込み中であることを示すための回転するインジケーター。
 */
export declare const Spinner: ({ size, color, label, labelPosition, className, style, ...props }: SpinnerProps) => import("react/jsx-runtime").JSX.Element;
export {};
