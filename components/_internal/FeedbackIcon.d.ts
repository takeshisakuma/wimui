import { default as React } from '../../../node_modules/react';
import { ComponentSize, FeedbackStatus } from '../../types/tokens';
export interface FeedbackIconProps {
    /**
     * フィードバックのステータス
     */
    status?: FeedbackStatus | "default";
    /**
     * カスタムアイコン
     */
    icon?: React.ReactNode;
    /**
     * アイコンのサイズ
     */
    size?: ComponentSize;
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
