import { default as React } from '../../../../node_modules/react';
import { WimColor, ComponentSize } from '../../../types/tokens';
type IndicatorProps = {
    children?: React.ReactNode;
    color?: WimColor;
    size?: ComponentSize;
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    pulse?: boolean;
    inline?: boolean;
    className?: string;
    style?: React.CSSProperties;
};
/**
 * 要素の状態（オンライン、未読、エラーなど）を示す小さなドットコンポーネント。
 */
export declare const Indicator: ({ children, color, size, position, pulse, inline, className, style, }: IndicatorProps) => import("react/jsx-runtime").JSX.Element;
export {};
