import React, {
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
  useRef,
} from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { commonNs } from "@/i18n/generated/common";
import { Transition } from "../../layout/Transition/Transition";
import { useAnnounce, useAnnounceValue } from "../../_internal/useAnnounce";
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
   * Time in milliseconds before the toast closes automatically. The timer pauses while the pointer is over the toast or focus is inside it, and resumes from the remaining time. Set 0 to disable auto-close.
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

  // 読んでいる間は消さない（T393）。ポインターが載っている間と、フォーカスが中にある間は、
  // タイマーを止める。以前は止める口が無く、閉じるボタンにフォーカスを置いたままでも消えて、
  // フォーカスが文書へ落ちていた（キーボードでは、3 秒以内に届かなければ閉じるボタンを押せない）。
  const hovered = useRef(false);
  const focusWithin = useRef(false);
  const [paused, setPaused] = useState(false);
  const syncPaused = () => setPaused(hovered.current || focusWithin.current);

  // 残り時間。止めたところから再開する（離れるたびに最初から数え直すと、いつまでも消えない）。
  // 開き直したときと、duration が変わったときに、最初へ戻す
  const remaining = useRef(duration + 300); // Add extra buffer for animation
  useEffect(() => {
    if (open) remaining.current = duration + 300;
  }, [open, duration]);

  useEffect(() => {
    if (open && duration > 0 && internalVisible && !paused) {
      const startedAt = Date.now();
      const timer = setTimeout(() => {
        handleClose();
      }, remaining.current);
      return () => {
        clearTimeout(timer);
        // 止まった理由が一時停止でも、`onClose` の作り直し（ToastProvider は描画のたびに作り直す）でも、
        // 経った分だけを引く。以前は作り直しのたびに最初から数え直していて、新しいトーストが出ると、
        // 前から出ているトーストの寿命まで延びていた
        remaining.current = Math.max(0, remaining.current - (Date.now() - startedAt));
      };
    }
  }, [open, duration, internalVisible, handleClose, paused]);

  const announcedByProvider = useContext(ToastAnnouncedByProviderContext);
  // 単体で `open` を切り替えて使うときの告知。出たら読み、消えたら空に戻す（最初の描画では告げない）
  const announcementRegion = useAnnounceValue(open && internalVisible ? toastAnnouncement(title, description) : "", {
    initial: true,
  });

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
      onMouseEnter={() => {
        hovered.current = true;
        syncPaused();
      }}
      onMouseLeave={() => {
        hovered.current = false;
        syncPaused();
      }}
      onFocus={() => {
        focusWithin.current = true;
        syncPaused();
      }}
      onBlur={(e) => {
        // 中の要素どうしで移っただけなら、まだ中にある
        if (e.currentTarget.contains(e.relatedTarget)) return;
        focusWithin.current = false;
        syncPaused();
      }}
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
      {announcementRegion}
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
  /** Shows a toast and returns its id, which `remove(id)` takes to close it early. */
  show: (toast: Omit<ToastItem, "id">) => string;
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
  // 同じ文のトーストを続けて出しても、useAnnounce がいったん空にしてから入れるので読まれる
  const { announce, clear, region } = useAnnounce();
  const announcedId = useRef<string | null>(null);
  const { t } = useWimTranslation(commonNs);
  const containerRef = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const refocusAfterRemove = useRef(false);
  const hasToasts = toasts.length > 0;

  const focusNewestToast = () => {
    const buttons = containerRef.current?.querySelectorAll("button");
    const newest = buttons?.[buttons.length - 1];
    newest?.focus();
    return !!newest;
  };

  // 通知はアプリの末尾に描かれるので、ページの途中からは Tab で遠い（T426）。F8 で移り、Escape で戻る
  useEffect(() => {
    if (!hasToasts) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "F8" || event.ctrlKey || event.altKey || event.metaKey || event.shiftKey) return;
      const active = document.activeElement;
      if (!containerRef.current?.contains(active)) {
        returnFocus.current = active instanceof HTMLElement ? active : null;
      }
      if (focusNewestToast()) event.preventDefault();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [hasToasts]);

  // フォーカスのあるトーストを閉じても、文書へ落とさない。次のトーストか、元の場所へ
  useEffect(() => {
    if (!refocusAfterRemove.current) return;
    refocusAfterRemove.current = false;
    if (!focusNewestToast() && returnFocus.current?.isConnected) returnFocus.current.focus();
  }, [toasts]);

  const show = useCallback(
    (toast: Omit<ToastItem, "id">) => {
      const id = Math.random().toString(36).substr(2, 9);
      setToasts((prev) => [...prev, { ...toast, id }]);
      announcedId.current = id;
      announce(toastAnnouncement(toast.title, toast.description));
      return id;
    },
    [announce],
  );

  const remove = useCallback(
    (id: string) => {
      refocusAfterRemove.current = !!containerRef.current?.contains(document.activeElement);
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
      if (announcedId.current === id) {
        announcedId.current = null;
        clear();
      }
    },
    [clear],
  );

  return (
    <ToastContext.Provider value={{ show, remove }}>
      {children}
      <div
        ref={containerRef}
        className={classNames(
          styles.container,
          styles[position],
        )}
        // 通知が無いあいだは、空のランドマークを読ませない
        role={hasToasts ? "region" : undefined}
        aria-label={hasToasts ? t("notifications") : undefined}
        aria-keyshortcuts={hasToasts ? "F8" : undefined}
        onKeyDown={(event) => {
          if (event.key !== "Escape" || !returnFocus.current?.isConnected) return;
          // 止めないと、下に開いている Dialog まで同じ Escape で閉じる
          event.preventDefault();
          returnFocus.current.focus();
        }}
      >
        {/* 最初から置いておく、画面に見えない読み上げの領域。トーストが出るたびに、文字が書き換わる。 */}
        {region}
        <ToastAnnouncedByProviderContext.Provider value={true}>
          {toasts.map((toast) => (
            <Toast key={toast.id} {...toast} onClose={() => remove(toast.id)} />
          ))}
        </ToastAnnouncedByProviderContext.Provider>
      </div>
    </ToastContext.Provider>
  );
};

/**
 * Show a short, self-dismissing message (a toast) from anywhere under `ToastProvider`.
 * Use it for a one-off confirmation of something the user just did; for state that stays
 * true (a limit, an outage), render an inline `Alert` instead.
 *
 * Throws when called outside `ToastProvider`.
 *
 * @returns `show(toast)` — `{ title?, description?, intent?, duration? }`, returning the toast id — and `remove(id)`.
 *
 * @example
 * const { show } = useToast();
 * show({ title: "Saved", intent: "success" });
 */
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
