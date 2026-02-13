import { default as React } from '../../../node_modules/react';
export type LoaderVariant = "bars" | "dots" | "pulse";
export type LoaderProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * ローダーのアニメーション形式。
     */
    variant?: LoaderVariant;
    /**
     * ローダーのサイズ。
     */
    size?: "sm" | "md" | "lg" | "xl";
    /**
     * ローダーの色。
     */
    color?: "primary" | "secondary" | "success" | "warning" | "error" | "neutral" | "currentColor";
};
/**
 * データの読み込み中や処理中であることを示すためのコンポーネント。
 */
export declare const Loader: ({ variant, size, color, className, ...props }: LoaderProps) => import("react/jsx-runtime").JSX.Element;
