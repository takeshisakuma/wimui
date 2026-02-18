import { default as React } from '../../../node_modules/react';
export type ScrollProgressProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * 進捗バーの色。
     */
    color?: "primary" | "secondary" | "success" | "warning" | "error";
    /**
     * スクロールを検知するターゲット要素。デフォルトは `window`。
     */
    target?: React.RefObject<HTMLElement | null>;
};
/**
 * 読み込みの進捗やスクロール位置を視覚的に表示するためのコンポーネント。
 */
export declare const ScrollProgress: ({ color, target, className, ...props }: ScrollProgressProps) => import("react/jsx-runtime").JSX.Element;
