import { default as React } from '../../../node_modules/react';
type SpinnerProps = React.ComponentPropsWithoutRef<"div"> & {
    size?: "sm" | "md" | "lg" | "xl";
    color?: "primary" | "secondary" | "success" | "warning" | "error" | "neutral" | "currentColor";
    label?: string;
    labelPosition?: "right" | "bottom";
};
/**
 * 読み込み中であることを示すための回転するインジケーター。
 */
export declare const Spinner: ({ size, color, label, labelPosition, className, ...props }: SpinnerProps) => import("react/jsx-runtime").JSX.Element;
export {};
