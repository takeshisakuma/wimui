import React, {
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
} from "react";
import { Button } from "../../form/Button/Button";
import classNames from "classnames";
import { FeedbackIcon } from "../../_internal/FeedbackIcon";
import { FeedbackCloseButton } from "../../_internal/FeedbackCloseButton";
import { FeedbackStatus } from "../../../types/tokens";
import "./snackbar.scss";
export type SnackbarPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export interface SnackbarProps {
  /** スナックバーに表示するメッセージ */
  message: string;
  /** 表示状態 */
  open?: boolean;
  /** 表示するタイプ */
  status?: FeedbackStatus | "default";
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
export const Snackbar = ({
  message,
  open = false,
  status = "default",
  position = "bottom-center",
  autoHideDuration = 5000,
  showCloseButton = false,
  actionLabel,
  onAction,
  onClose,
  className,
}: SnackbarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [prevOpen, setPrevOpen] = useState(open);

  if (open !== prevOpen) {
    setPrevOpen(open);
    if (open) {
      setIsRendered(true);
    } else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setIsRendered(false), 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      if (onClose) onClose();
    }, 300);
  }, [onClose]);

    const [remainingTime, setRemainingTime] = useState(autoHideDuration);
    const [lastStartTime, setLastStartTime] = useState(() => Date.now());
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
      if (open && autoHideDuration > 0 && !isPaused) {
        const timer = setTimeout(() => {
          handleClose();
        }, remainingTime);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLastStartTime(Date.now());
        return () => clearTimeout(timer);
      }
    }, [open, autoHideDuration, handleClose, isPaused, remainingTime]);

    const handleMouseEnter = () => {
      if (autoHideDuration > 0) {
        setIsPaused(true);
        const elapsed = Date.now() - lastStartTime;
        setRemainingTime((prev) => Math.max(0, prev - elapsed));
      }
    };

    const handleMouseLeave = () => {
      if (autoHideDuration > 0) {
        setLastStartTime(Date.now());
        setIsPaused(false);
      }
    };

    const handleAction = () => {
      if (onAction) onAction();
    };

    if (!isRendered && !open) return null;

    const role = status === "error" || status === "warning" ? "alert" : "status";
    const ariaLive = status === "error" || status === "warning" ? "assertive" : "polite";

    return (
      <div
        className={classNames(
          "wim-snackbar-wrapper",
          `wim-snackbar-wrapper--${position}`,
        )}
      >
        <div
          className={classNames(
            "wim-snackbar",
            `wim-snackbar--${status}`,
            isVisible && "wim-snackbar--visible",
            className,
          )}
          role={role}
          aria-live={ariaLive}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleMouseEnter}
          onBlur={handleMouseLeave}
        >
          <div className="wim-snackbar__content">
            {status !== "default" && (
              <div className="wim-snackbar__icon">
                <FeedbackIcon
                  status={status}
                  size="sm"
                />
              </div>
            )}
            <span className="wim-snackbar__message">{message}</span>
          </div>

          <div className="wim-snackbar__actions">
            {actionLabel && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleAction}
                className="wim-snackbar__action-button"
                label={actionLabel}
              />
            )}
            <FeedbackCloseButton
              onClose={showCloseButton ? handleClose : undefined}
              className="wim-snackbar__close-button"
              size="sm"
            />
          </div>
        </div>
      </div>
    );
  };

// --- Snackbar System (Provider & Hook) ---

type SnackbarState = Omit<SnackbarProps, "open" | "onClose"> & {
  id: string;
  onClose?: () => void;
};

type SnackbarContextType = {
  showMessage: (
    props: string | Omit<SnackbarProps, "open" | "onClose">,
  ) => void;
  hideMessage: () => void;
};

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined,
);

export const SnackbarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [snackbar, setSnackbar] = useState<SnackbarState | null>(null);
  const [open, setOpen] = useState(false);

  const showMessage = useCallback(
    (props: string | Omit<SnackbarProps, "open" | "onClose">) => {
      const id = Math.random().toString(36).substr(2, 9);
      const snackbarProps =
        typeof props === "string" ? { message: props } : props;

      // If one is already open, close it first
      setOpen(false);
      setTimeout(
        () => {
          setSnackbar({ ...snackbarProps, id });
          setOpen(true);
        },
        snackbar ? 300 : 0,
      );
    },
    [snackbar],
  );

  const hideMessage = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <SnackbarContext.Provider value={{ showMessage, hideMessage }}>
      {children}
      {snackbar && (
        <Snackbar
          {...snackbar}
          open={open}
          onClose={() => {
            setOpen(false);
            if (snackbar.onClose) snackbar.onClose();
          }}
        />
      )}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};
