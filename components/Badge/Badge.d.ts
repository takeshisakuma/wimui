import { default as React } from '../../../node_modules/react';
type BadgeProps = React.ComponentPropsWithoutRef<"span"> & {
    content?: string;
    icon?: React.ReactNode;
    color?: "primary" | "secondary" | "success" | "warning" | "error" | "info" | "neutral";
    variant?: "solid" | "outline";
    size?: "small" | "medium";
};
/**
 * 状態やカウントなどを表示するためのバッジコンポーネント。
 */
export declare const Badge: ({ content, icon, color, variant, size, className, ...props }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
export {};
