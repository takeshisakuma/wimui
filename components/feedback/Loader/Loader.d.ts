import { default as React } from '../../../../node_modules/react';
import { WimColor, ComponentSize } from '../../../types/tokens';
export type LoaderVariant = "bars" | "dots" | "pulse";
export type LoaderProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * ローダーのアニメーション形式。
     */
    variant?: LoaderVariant;
    /**
     * ローダーのサイズ。
     */
    size?: ComponentSize;
    /**
     * ローダーの色。
     */
    color?: "currentColor" | WimColor;
};
/**
 * データの読み込み中や処理中であることを示すためのコンポーネント。
 */
export declare const Loader: ({ variant, size, color, className, style, ...props }: LoaderProps) => import("react/jsx-runtime").JSX.Element;
