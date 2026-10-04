import { default as React } from '../../../../node_modules/react';
import { FeedbackIntent } from '../../../types/tokens';
export type ToastPosition = "top-right" | "top-left" | "top-center" | "bottom-right" | "bottom-left" | "bottom-center";
export type ToastProps = {
    /**
     * Identifier of the toast, passed to onClose. Used by ToastProvider to manage a stack.
     */
    id?: string;
    /**
     * Title of the toast.
     */
    title?: string;
    /**
     * Description text displayed below the title.
     */
    description?: string;
    /**
     * Intent (semantic state) of the toast.
     * @default "default"
     */
    intent?: FeedbackIntent;
    /**
     * Time in milliseconds before the toast closes automatically. Set 0 to disable auto-close.
     * @default 3000
     */
    duration?: number;
    /**
     * Whether the toast is shown.
     * @default true
     */
    open?: boolean;
    /**
     * Called with the toast id when the toast is closed.
     */
    onClose?: (id?: string) => void;
    /**
     * Additional CSS class name.
     */
    className?: string;
};
/**
 * Toast for communicating notifications and feedback to the user.
 */
export declare const Toast: ({ id, title, description, intent, duration, open, onClose, className, }: ToastProps) => React.JSX.Element;
type ToastItem = {
    id: string;
    title?: string;
    description?: string;
    intent?: FeedbackIntent;
    duration?: number;
};
type ToastContextType = {
    show: (toast: Omit<ToastItem, "id">) => void;
    remove: (id: string) => void;
};
export declare const ToastProvider: ({ children, position, }: {
    children: React.ReactNode;
    position?: ToastPosition;
}) => React.JSX.Element;
export declare const useToast: () => ToastContextType;
export {};
