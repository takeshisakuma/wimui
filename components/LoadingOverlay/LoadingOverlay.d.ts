import { default as React } from '../../../node_modules/react';
export type LoadingOverlayProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * オーバーレイの表示/非表示を制御します。
     */
    visible?: boolean;
    /**
     * ローディングインジケーターのタイプ。
     */
    loaderType?: "spinner" | "bars" | "dots" | "pulse";
    /**
     * ローディングインジケーターのサイズ。
     */
    loaderSize?: "sm" | "md" | "lg" | "xl";
    /**
     * ローディングインジケーターの色。
     */
    loaderColor?: "primary" | "secondary" | "success" | "warning" | "error" | "neutral" | "currentColor";
    /**
     * オーバーレイの背景スタイル。
     */
    backdropVariant?: "light" | "dark";
    /**
     * 背景のぼかし効果の強さ。
     */
    blur?: "none" | "sm" | "md" | "lg";
    /**
     * ローディングメッセージ。
     */
    message?: string;
    /**
     * position: fixed を使用するかどうか（画面全体をカバー）。
     */
    fixed?: boolean;
    /**
     * z-index の値。
     */
    zIndex?: number;
    /**
     * カスタムローディングコンテンツ。
     */
    children?: React.ReactNode;
};
/**
 * 画面全体または特定の要素をオーバーレイし、ローディング状態を表示するコンポーネント。
 */
export declare const LoadingOverlay: ({ visible, loaderType, loaderSize, loaderColor, backdropVariant, blur, message, fixed, zIndex, children, className, style, ...props }: LoadingOverlayProps) => import("react/jsx-runtime").JSX.Element | null;
export default LoadingOverlay;
