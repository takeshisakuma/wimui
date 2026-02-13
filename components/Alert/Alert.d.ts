import { default as React } from '../../../node_modules/react';
type AlertProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * アラートのタイトル
     */
    title?: string;
    /**
     * アラートの説明文
     */
    description?: string;
    /**
     * アラートのバリアント
     */
    variant?: "info" | "success" | "warning" | "error";
    /**
     * カスタムアイコン。指定しない場合はバリアントに応じたデフォルトアイコンが表示されます。
     */
    icon?: React.ReactNode;
    /**
     * 閉じるボタンをクリックした時のコールバック。指定すると閉じるボタンが表示されます。
     */
    onClose?: () => void;
    /**
     * 追加のクラス名
     */
    className?: string;
    /**
     * 子要素（説明文として扱われます）
     */
    children?: React.ReactNode;
};
/**
 * ユーザーに重要な情報を伝えるためのアラートコンポーネント。
 */
export declare const Alert: ({ title, description, variant, icon, onClose, className, children, ...props }: AlertProps) => import("react/jsx-runtime").JSX.Element;
export {};
