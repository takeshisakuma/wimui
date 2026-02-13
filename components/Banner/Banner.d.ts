import { default as React } from '../../../node_modules/react';
type BannerProps = {
    /**
     * バナーのタイトル
     */
    title?: string;
    /**
     * バナーの説明文
     */
    description?: string;
    /**
     * バナーのバリアント
     */
    variant?: "info" | "success" | "warning" | "error";
    /**
     * アイコンを表示するかどうか、またはカスタムアイコン
     */
    icon?: boolean | React.ReactNode;
    /**
     * アクションボタン要素（例：Buttonコンポーネント）
     */
    action?: React.ReactNode;
    /**
     * 閉じるボタンをクリックした時のコールバック。指定すると閉じるボタンが表示されます。
     */
    onClose?: () => void;
    /**
     * 追加のクラス名
     */
    className?: string;
    /**
     * 子要素
     */
    children?: React.ReactNode;
};
/**
 * 重要なメッセージやアクションをユーザーに提示するためのバナーコンポーネント。
 * 通常、ページの上部に表示されます。
 */
export declare const Banner: ({ title, description, variant, icon, action, onClose, className, children, ...props }: BannerProps) => import("react/jsx-runtime").JSX.Element;
export {};
