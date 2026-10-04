import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import styles from "./focus-trap.module.scss";

export type FocusTrapProps = {
  /**
   * Content to trap focus within.
   */
  children: React.ReactNode;
  /**
   * Whether the trap is active.
   * @default true
   */
  active?: boolean;
  /**
   * Whether to focus the first focusable element on mount.
   */
  initialFocus?: boolean;
  /**
   * Additional CSS class name.
   */
  className?: string;
};

/**
 * Utility component that keeps focus inside a region.
 * Used by dialogs, modals, and similar overlays.
 */
export const FocusTrap = ({
  children,
  active = true,
  initialFocus = true,
  className,
}: FocusTrapProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active) return;

    previouslyFocusedElement.current = document.activeElement as HTMLElement;

    const root = rootRef.current;
    if (!root) return;

    const getFocusableElements = () => {
      return Array.from(
        root.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => {
        const style = window.getComputedStyle(el);
        return (
          // Tab で届かない要素は端として数えない。セレクタの `button` / `input` などは tabindex="-1" でも
          // 当たるので、ここで落とす。落とさないと、末尾が tabindex="-1" のボタンのとき「最後の要素」が
          // Tab で届かない要素になり、折り返しの条件に一度も当たらずフォーカスが外へ出る
          // （TreeSelect の開いたパネルで実測。roving tabindex を中に持つものが当たる）。
          el.tabIndex >= 0 &&
          style.display !== "none" &&
          style.visibility !== "hidden" &&
          !(el as HTMLElement & { disabled?: boolean }).disabled
        );
      });
    };

    if (initialFocus) {
      const focusableElements = getFocusableElements();
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) {
        e.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const active = document.activeElement;
      // 根の外にフォーカスがあるときは触らない（入れ子の面は自分の FocusTrap が見る）。
      if (!active || !root.contains(active)) return;

      // いまの要素が停止点の一覧に無いことがある（スクリプトでフォーカスした tabindex="-1" の入れ物など）。
      // 「一覧の端と同じか」ではなく、「進む方向に停止点が残っているか」で折り返す。
      const index = focusableElements.indexOf(active as HTMLElement);
      if (e.shiftKey) {
        // Shift + Tab
        const hasPrevious =
          index >= 0
            ? index > 0
            : focusableElements.some(
                (el) => el.compareDocumentPosition(active) & Node.DOCUMENT_POSITION_FOLLOWING,
              );
        if (!hasPrevious) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        const hasNext =
          index >= 0
            ? index < focusableElements.length - 1
            : focusableElements.some(
                (el) => active.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING,
              );
        if (!hasNext) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (previouslyFocusedElement.current) {
        previouslyFocusedElement.current.focus();
      }
    };
  }, [active, initialFocus]);

  return (
    <div ref={rootRef} className={classNames("wim-focus-trap", styles.root, className)}>
      {children}
    </div>
  );
};

