import { default as React } from '../../../node_modules/react';
export type MarqueeProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * アニメーションの速度（秒）。デフォルトは `20`。
     */
    duration?: number;
    /**
     * アニメーションを逆方向にするかどうか。
     */
    reverse?: boolean;
    /**
     * ホバー時にアニメーションを一時停止するかどうか。
     */
    pauseOnHover?: boolean;
    /**
     * 垂直方向に流すかどうか。
     */
    vertical?: boolean;
    /**
     * コンテンツの繰り返し回数。シームレスなループのために調整が必要な場合があります。デフォルトは `2`。
     */
    repeat?: number;
};
/**
 * テキストや画像を水平・垂直方向にスクロールさせるためのアニメーションコンポーネント。
 */
export declare const Marquee: ({ duration, reverse, pauseOnHover, vertical, repeat, className, children, style, ...props }: MarqueeProps) => import("react/jsx-runtime").JSX.Element;
