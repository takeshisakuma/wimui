import { default as React } from '../../../node_modules/react';
export type FocusTrapProps = {
    /**
     * トラップされるコンテンツ。
     */
    children: React.ReactNode;
    /**
     * トラップが有効かどうか。
     */
    active?: boolean;
    /**
     * マウント時に最初の要素にフォーカスするかどうか。
     */
    autoFocus?: boolean;
    /**
     * 追加のクラス名。
     */
    className?: string;
};
/**
 * フォーカスを特定の領域内に閉じ込めるためのユーティリティコンポーネント。
 * ダイアログやモーダルなどで使用します。
 */
export declare const FocusTrap: ({ children, active, autoFocus, className, }: FocusTrapProps) => import("react/jsx-runtime").JSX.Element;
