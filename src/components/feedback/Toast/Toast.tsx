import React, {
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
} from "react";
import classNames from "classnames";
import { Transition } from "../../layout/Transition/Transition";
import { VisuallyHidden } from "../../layout/VisuallyHidden/VisuallyHidden";
import { FeedbackIcon } from "../../_internal/FeedbackIcon";
import { FeedbackCloseButton } from "../../_internal/FeedbackCloseButton";
import { FeedbackIntent } from "../../../types/tokens";
import styles from "./toast.module.scss";

export type ToastPosition =
  | "top-right"
  | "top-left"
  | "top-center"
  | "bottom-right"
  | "bottom-left"
  | "bottom-center";

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
  /** Accessible name for the toast. */
  "aria-label"?: string;
  /** ID of the element that labels the toast. Takes precedence over `aria-label`. */
  "aria-labelledby"?: string;
};

/**
 * Toast for communicating notifications and feedback to the user.
 */
export const Toast = ({
  id,
  title,
  description,
  intent = "default",
  duration = 3000,
  open = true,
  onClose,
  className,
  // 標準の属性でも名前を付けられる（T341）。以前は受ける口が無く、渡しても黙って捨てられていた。
  "aria-label": ariaLabelAttr,
  "aria-labelledby": ariaLabelledBy,
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

  const announcedByProvider = useContext(ToastAnnouncedByProviderContext);

  const toast = (
    <Transition
      show={open && internalVisible}
      enter={styles.enter}
      enterFrom={styles.enterFrom}
      enterTo={styles.enterTo}
      leave={styles.leave}
      leaveFrom={styles.leaveFrom}
      leaveTo={styles.leaveTo}
      className={classNames("wim-toast", styles.root, styles[intent], className)}
      // 名前を渡されたときだけ、まとまりとして名乗る（役割の無い要素には、名前を付けられない）。
      role={ariaLabelAttr || ariaLabelledBy ? "group" : undefined}
      aria-label={ariaLabelledBy ? undefined : ariaLabelAttr}
      aria-labelledby={ariaLabelledBy}
    >
      {(intent === "success" ||
        intent === "warning" ||
        intent === "danger" ||
        intent === "info") && (
        <div className={styles.icon}>
          <FeedbackIcon intent={intent} size="sm" />
        </div>
      )}
      <div className={styles.content}>
        {/* 題は見出しにしない（T333）。以前は `h5` で、出て消えるたびにページの見出しの一覧が変わり、
            置いたページの見出しの順とも合わなかった。`role="status"` の中身なので、見出しでなくても読まれる。 */}
        {title && <div className={styles.title}>{title}</div>}
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

  // 読むのは、画面に見えない読み上げの領域（先に在って、文字だけが書き換わる）。見えているトーストを
  // 読み上げの領域にして中身ごと差し込むと、スクリーンリーダーは文を読まない（ナレーター + Chrome の
  // 実機で、2 通りの置き方を試して、どちらも無音だった）。ToastProvider の中では、プロバイダーが
  // 領域を 1 つ持つ。単体で `open` を切り替えて使うときは、ここに置く（包みは display: contents で、
  // レイアウトには出ない）。
  if (announcedByProvider) return toast;
  return (
    <div className={styles.live}>
      <VisuallyHidden role="status" aria-atomic="true">
        {open && internalVisible ? toastAnnouncement(title, description) : ""}
      </VisuallyHidden>
      {toast}
    </div>
  );
};

/** 読み上げる文。題と説明を、区切って 1 つにする。 */
const toastAnnouncement = (title?: string, description?: string) => [title, description].filter(Boolean).join(": ");

// --- Toast System (Provider & Hook) ---

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

const ToastContext = createContext<ToastContextType | undefined>(undefined);

/** ToastProvider の中にいるか（読み上げは、プロバイダーの領域が受け持つ）。 */
const ToastAnnouncedByProviderContext = createContext(false);

export const ToastProvider = ({
  children,
  position = "top-right",
}: {
  children: React.ReactNode;
  position?: ToastPosition;
}) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  // 読み上げるのは、出したばかりのトースト。そのトーストが消えたら、領域を空に戻す。
  // 「残っている中でいちばん新しいもの」にはしない ── 新しいほうが先に消えると、前のトーストを読み直す。
  const [announced, setAnnounced] = useState<ToastItem | null>(null);

  const show = useCallback((toast: Omit<ToastItem, "id">) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
    setAnnounced({ ...toast, id });
  }, []);

  const remove = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    setAnnounced((prev) => (prev?.id === id ? null : prev));
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
        {/* 最初から置いておく、画面に見えない読み上げの領域。トーストが出るたびに、文字が書き換わる。 */}
        <VisuallyHidden role="status" aria-atomic="true">
          {announced ? toastAnnouncement(announced.title, announced.description) : ""}
        </VisuallyHidden>
        <ToastAnnouncedByProviderContext.Provider value={true}>
          {toasts.map((toast) => (
            <Toast key={toast.id} {...toast} onClose={() => remove(toast.id)} />
          ))}
        </ToastAnnouncedByProviderContext.Provider>
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
