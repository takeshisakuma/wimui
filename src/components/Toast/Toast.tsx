import React, {
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
} from "react";
import classNames from "classnames";
import { Transition } from "../Transition/Transition";
import { useTranslation } from "react-i18next";
import { FeedbackIcon } from "../_internal/FeedbackIcon";
import { FeedbackCloseButton } from "../_internal/FeedbackCloseButton";
import "./toast.scss";

export type ToastVariant = "info" | "success" | "warning" | "error";
export type ToastPosition =
  | "top-right"
  | "top-left"
  | "top-center"
  | "bottom-right"
  | "bottom-left"
  | "bottom-center";

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
  className,
}: ToastProps) => {
  const { t } = useTranslation();
  const [internalVisible, setInternalVisible] = useState(true);

  const handleClose = useCallback(() => {
    setInternalVisible(false);
    if (onClose) onClose(id);
  }, [onClose, id]);

  useEffect(() => {
    if (isVisible && duration > 0 && internalVisible) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration + 300); // Add extra buffer for animation
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, id, onClose, internalVisible, handleClose]);

  return (
    <Transition
      show={isVisible && internalVisible}
      enter="toast-enter"
      enterFrom="toast-enter-from"
      enterTo="toast-enter-to"
      leave="toast-leave"
      leaveFrom="toast-leave-from"
      leaveTo="toast-leave-to"
      className={classNames("wim-toast", `wim-toast--${variant}`, className)}
      role="status"
      aria-live="polite"
    >
      <div className="wim-toast__icon">
        <FeedbackIcon status={variant} size="small" />
      </div>
      <div className="wim-toast__content">
        {title && <h5 className="wim-toast__title">{title}</h5>}
        {description && <p className="wim-toast__description">{description}</p>}
      </div>
      <FeedbackCloseButton
        onClose={onClose ? handleClose : undefined}
        id={id}
        className="wim-toast__close-button"
        size="medium"
      />
    </Transition>
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

export const ToastProvider = ({
  children,
  position = "top-right",
}: {
  children: React.ReactNode;
  position?: ToastPosition;
}) => {
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
      <div
        className={classNames(
          "wim-toast-container",
          `wim-toast-container--${position}`,
        )}
      >
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onClose={() => remove(toast.id)} />
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
