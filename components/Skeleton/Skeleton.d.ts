import { default as React } from '../../../node_modules/react';
type SkeletonProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * スケルトンの形状。
     * - `text`: テキスト行のような形状。
     * - `rect`: 矩形。
     * - `circle`: 円形。
     */
    variant?: "text" | "rect" | "circle";
    /**
     * アニメーションの種類。
     * - `pulse`: ゆっくりとした明滅。
     * - `wave`: 左から右への波のような動き。
     * - `none`: アニメーションなし。
     */
    animation?: "pulse" | "wave" | "none";
    /**
     * 幅。CSSの単位（px, %, remなど）を含めて指定します。
     */
    width?: string | number;
    /**
     * 高さ。CSSの単位（px, %, remなど）を含めて指定します。
     */
    height?: string | number;
};
/**
 * コンテンツの読み込み中に表示するプレースホルダー。
 */
export declare const Skeleton: ({ variant, animation, width, height, style, className, ...props }: SkeletonProps) => import("react/jsx-runtime").JSX.Element;
export {};
