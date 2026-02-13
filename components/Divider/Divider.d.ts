import { default as React } from '../../../node_modules/react';
export type DividerProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * 分割線の方向
     */
    orientation?: "horizontal" | "vertical";
    /**
     * 線の太さ (px)
     */
    thickness?: number;
};
/**
 * `Divider` はコンテンツを視覚的に区切るためのコンポーネントです。
 */
export declare const Divider: ({ orientation, thickness, className, style, ...props }: DividerProps) => import("react/jsx-runtime").JSX.Element;
