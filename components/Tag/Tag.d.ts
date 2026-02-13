import { default as React } from '../../../node_modules/react';
type TagProps = React.ComponentPropsWithoutRef<"span"> & {
    /** 表示するテキスト */
    children?: React.ReactNode;
    /** 色 */
    color?: "primary" | "secondary" | "success" | "warning" | "error" | "neutral";
    /** バリアント */
    variant?: "solid" | "outline" | "subtle";
    /** サイズ */
    size?: "small" | "medium";
    /** アイコン */
    icon?: React.ReactNode;
};
/**
 * カテゴリ分けや属性のラベルとして使用される非インタラクティブなコンポーネント。
 */
export declare const Tag: ({ children, color, variant, size, icon, className, ...props }: TagProps) => import("react/jsx-runtime").JSX.Element;
export {};
