import { default as React } from '../../../node_modules/react';
export type SnackbarVariant = "default" | "success" | "warning" | "error" | "info";
export type SnackbarPosition = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
export interface SnackbarProps {
    /** スナックバーに表示するメッセージ */
    message: string;
    /** 表示状態 */
    open?: boolean;
    /** 表示するタイプ */
    variant?: SnackbarVariant;
    /** 表示位置 */
    position?: SnackbarPosition;
    /** 自動で閉じるまでの時間（ミリ秒）。0を指定すると自動で閉じません。 */
    autoHideDuration?: number;
    /** 閉じるボタンを表示するかどうか */
    showCloseButton?: boolean;
    /** アクションボタンのラベル */
    actionLabel?: string;
    /** アクションボタンがクリックされた時のコールバック */
    onAction?: () => void;
    /** スナックバーが閉じられる時のコールバック */
    onClose?: () => void;
    /** カスタムクラス名 */
    className?: string;
}
/**
 * ユーザーに短いメッセージを通知するためのスナックバーコンポーネント。
 */
export declare const Snackbar: ({ message, open, variant, position, autoHideDuration, showCloseButton, actionLabel, onAction, onClose, className, }: SnackbarProps) => import("react/jsx-runtime").JSX.Element | null;
type SnackbarContextType = {
    showMessage: (props: string | Omit<SnackbarProps, "open" | "onClose">) => void;
    hideMessage: () => void;
};
export declare const SnackbarProvider: ({ children, }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useSnackbar: () => SnackbarContextType;
export {};
