import { default as React } from '../../../node_modules/react';
import { ComponentSize } from '../../types/tokens';
export type TagProps = React.ComponentPropsWithoutRef<"span"> & {
    /** 表示するコンテンツ */
    children?: React.ReactNode;
    /** ステータス */
    status?: "primary" | "secondary" | "success" | "warning" | "error" | "neutral" | "info";
    /** バリアント */
    variant?: "solid" | "outline" | "subtle";
    /** サイズ */
    size?: ComponentSize;
    /** アイコン */
    icon?: React.ReactNode;
};
/**
 * カテゴリ分けや属性のラベルとして使用される非インタラクティブなコンポーネント。
 */
export declare const Tag: ({ children, icon, ...props }: TagProps) => import("react/jsx-runtime").JSX.Element;
