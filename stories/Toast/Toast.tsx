import React, { useState, useEffect, useCallback, createContext, useContext } from "react";
import { Icon } from "../Icon/Icon";
import "./toast.scss";

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
export const Toast = ({
    id,
    title,
    description,
    variant = "info",
    duration = 3000,
    isVisible = true,
    onClose,
    className = "",
}: ToastProps) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Handle animation trigger
        if (isVisible) {
            const timer = setTimeout(() => setVisible(true), 10);
            return () => clearTimeout(timer);
        } else {
            setVisible(false);
        }
    }, [isVisible]);

    useEffect(() => {
        if (isVisible && duration > 0) {
            const timer = setTimeout(() => {
                setVisible(false);
                // Wait for animation to finish before calling onClose
                setTimeout(() => {
                    if (onClose) onClose(id);
                }, 300);
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [isVisible, duration, id, onClose]);

    const handleClose = () => {
        setVisible(false);
        setTimeout(() => {
            if (onClose) onClose(id);
        }, 300);
    };

    const renderIcon = () => {
        switch (variant) {
            case "success":
                return <Icon name="CheckIcon" size="small" />;
            case "error":
                return <Icon name="CircleIcon" size="small" />;
            case "warning":
                return <Icon name="CircleIcon" size="small" />;
            case "info":
            default:
                return <Icon name="CircleIcon" size="small" />;
        }
    };

    return (
        <div
            className={[
                "wim-toast",
                `wim-toast--${variant}`,
                visible ? "wim-toast--visible" : "",
                className
            ].filter(Boolean).join(" ")}
            role="status"
            aria-live="polite"
        >
            <div className="wim-toast__icon">{renderIcon()}</div>
            <div className="wim-toast__content">
                {title && <h5 className="wim-toast__title">{title}</h5>}
                {description && <p className="wim-toast__description">{description}</p>}
            </div>
            <button
                type="button"
                className="wim-toast__close"
                onClick={handleClose}
                aria-label="Close"
            >
                <Icon name="CloseIcon" />
            </button>
        </div>
    );
};

// --- Toast System (Provider & Hook) ---

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

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children, position = "top-right" }: { children: React.ReactNode, position?: ToastPosition }) => {
    const [toasts, setToasts] = useState<ToastItem[]>([]);

    const show = useCallback((toast: Omit<ToastItem, "id">) => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts((prev) => [...prev, { ...toast, id }]);
    }, []);

    const remove = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ show, remove }}>
            {children}
            <div className={`wim-toast-container wim-toast-container--${position}`}>
                {toasts.map((toast) => (
                    <Toast
                        key={toast.id}
                        {...toast}
                        onClose={() => remove(toast.id)}
                    />
                ))}
            </div>
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
};
