import { default as React } from '../../../../node_modules/react';
import { ComponentSize, IndicatorStatus } from '../../../types/tokens';
export type BadgeProps = React.ComponentPropsWithoutRef<"span"> & {
    /** 表示するコンテンツ */
    children?: React.ReactNode;
    /** アイコン */
    icon?: React.ReactNode;
    /** ステータス */
    status?: IndicatorStatus;
    /** バリアント */
    variant?: "solid" | "outline" | "subtle";
    /** サイズ */
    size?: ComponentSize;
};
/**
 * 状態やカウントなどを表示するためのバッジコンポーネント。
 */
export declare const Badge: ({ children, icon, className, ...props }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
