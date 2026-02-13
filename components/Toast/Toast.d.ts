import { default as React } from '../../../node_modules/react';
export type ToastVariant = "info" | "success" | "warning" | "error";
export type ToastPosition = "top-right" | "top-left" | "top-center" | "bottom-right" | "bottom-left" | "bottom-center";
export type ToastProps = {
    id?: string;
    title?: string;
    description?: string;
    variant?: ToastVariant;
    duration?: number;
    isVisible?: boolean;
    onClose?: (id?: string) => void;
    className?: string;
};
/**
 * ユーザーに通知やフィードバックを伝えるためのトーストコンポーネント。
 */
export declare const Toast: ({ id, title, description, variant, duration, isVisible, onClose, className, }: ToastProps) => import("react/jsx-runtime").JSX.Element;
type ToastItem = {
    id: string;
    title?: string;
    description?: string;
    variant?: ToastVariant;
    duration?: number;
};
type ToastContextType = {
    show: (toast: Omit<ToastItem, "id">) => void;
    remove: (id: string) => void;
};
export declare const ToastProvider: ({ children, position }: {
    children: React.ReactNode;
    position?: ToastPosition;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useToast: () => ToastContextType;
export {};
