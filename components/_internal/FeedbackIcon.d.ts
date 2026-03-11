import { default as React } from '../../../node_modules/react';
export type FeedbackStatus = "info" | "success" | "warning" | "error" | "default";
export interface FeedbackIconProps {
    /**
     * フィードバックのステータス
     */
    status?: FeedbackStatus;
    /**
     * カスタムアイコン
     */
    icon?: React.ReactNode;
    /**
     * アイコンのサイズ
     */
    size?: "small" | "medium" | "large";
    /**
     * 追加のクラス名
     */
    className?: string;
    /**
     * アイコンの色（Iconコンポーネントに渡されます）
     */
    color?: "destructive" | "positive" | "caution" | "informative";
}
/**
 * 通知系コンポーネントで共通して使用されるアイコン表示用コンポーネント（内部用）
 */
export declare const FeedbackIcon: ({ status, icon, size, className, color, }: FeedbackIconProps) => import("react/jsx-runtime").JSX.Element | null;
