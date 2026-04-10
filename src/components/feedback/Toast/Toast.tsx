import React, {
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
} from "react";
import classNames from "classnames";
import { Transition } from "../../layout/Transition/Transition";
import { FeedbackIcon } from "../../_internal/FeedbackIcon";
import { FeedbackCloseButton } from "../../_internal/FeedbackCloseButton";
import { FeedbackStatus } from "../../../types/tokens";
import styles from "./toast.module.scss";

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
  status?: FeedbackStatus;
  duration?: number;
  open?: boolean;
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
  status = "info",
  duration = 3000,
  open = true,
  onClose,
  className,
}: ToastProps) => {
  const [internalVisible, setInternalVisible] = useState(true);

  const handleClose = useCallback(() => {
    setInternalVisible(false);
    if (onClose) onClose(id);
  }, [onClose, id]);

  useEffect(() => {
    if (open && duration > 0 && internalVisible) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration + 300); // Add extra buffer for animation
      return () => clearTimeout(timer);
    }
  }, [open, duration, id, onClose, internalVisible, handleClose]);

  return (
    <Transition
      show={open && internalVisible}
      enter={styles.enter}
      enterFrom={styles.enterFrom}
      enterTo={styles.enterTo}
      leave={styles.leave}
      leaveFrom={styles.leaveFrom}
      leaveTo={styles.leaveTo}
      className={classNames(styles.root, styles[status], className)}
      role="status"
      aria-live="polite"
    >
      <div className={styles.icon}>
        <FeedbackIcon status={ status } size="sm" />
      </div>
      <div className={styles.content}>
        {title && <h5 className={styles.title}>{title}</h5>}
        {description && <p className={styles.description}>{description}</p>}
      </div>
      <FeedbackCloseButton
        onClose={onClose ? handleClose : undefined}
        id={id}
        className={styles.closeButton}
        size="md"
      />
    </Transition>
  );
};

// --- Toast System (Provider & Hook) ---

type ToastItem = {
  id: string;
  title?: string;
  description?: string;
  status?: FeedbackStatus;
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
          styles.container,
          styles[position],
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
