import React, { useCallback, useEffect, useRef } from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { Icon } from "../../media/Icon/Icon";
import { CheckIcon, CopyIcon, CloseSmallIcon } from "@/icon";
import styles from "./terminal.module.scss";

export interface TerminalLine {
  /** Unique key for React rendering */
  id?: string;
  /** Controls prefix and color treatment */
  type?: "input" | "output" | "error" | "info";
  /** Raw text content; may contain ANSI SGR escape codes */
  content: string;
}

export interface TerminalProps extends React.ComponentPropsWithoutRef<"div"> {
  /** Lines to display */
  lines?: TerminalLine[];
  /** Window title shown in header bar */
  title?: string;
  /** Explicit height; omit to let the terminal grow with content */
  height?: string | number;
  /** Scroll to bottom when lines change */
  autoScroll?: boolean;
  /** Prompt prefix for input lines */
  prompt?: string;
  /** Whether to show the copy button */
  showCopy?: boolean;
  /** Whether to show the clear button; fires onClear when clicked */
  onClear?: () => void;
  /** Additional CSS class */
  className?: string;
}

/* ── ANSI SGR parser ── */

const ANSI_FG: Record<number, string> = {
  30: "#2d2d2d", 31: "#e06c75", 32: "#98c379", 33: "#e5c07b",
  34: "#61afef", 35: "#c678dd", 36: "#56b6c2", 37: "#abb2bf",
  90: "#5c6370", 91: "#e06c75", 92: "#98c379", 93: "#e5c07b",
  94: "#61afef", 95: "#c678dd", 96: "#56b6c2", 97: "#ffffff",
};

interface AnsiState {
  color?: string;
  bold?: boolean;
}

function parseAnsi(text: string): React.ReactNode {
  const RESET = new RegExp(`${String.fromCharCode(27)}\\[([0-9;]*)m`, "g");
  const parts: React.ReactNode[] = [];
  let cursor = 0;
  let state: AnsiState = {};
  let key = 0;

  for (const match of text.matchAll(RESET)) {
    if (match.index! > cursor) {
      parts.push(
        <span key={key++} style={{ color: state.color, fontWeight: state.bold ? "bold" : undefined }}>
          {text.slice(cursor, match.index)}
        </span>
      );
    }
    const codes = match[1] ? match[1].split(";").map(Number) : [0];
    const next: AnsiState = { ...state };
    for (const code of codes) {
      if (code === 0) {
        Object.assign(next, { color: undefined, bold: undefined });
      } else if (code === 1) {
        next.bold = true;
      } else if (ANSI_FG[code]) {
        next.color = ANSI_FG[code];
      }
    }
    state = next;
    cursor = match.index! + match[0].length;
  }

  if (cursor < text.length) {
    parts.push(
      <span key={key++} style={{ color: state.color, fontWeight: state.bold ? "bold" : undefined }}>
        {text.slice(cursor)}
      </span>
    );
  }

  return parts.length === 1 ? parts[0] : <>{parts}</>;
}

/* ── Component ── */

/**
 * Terminal renders command output in a dark monospace window, with optional
 * ANSI color support, auto-scroll, copy, and clear actions.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const Terminal = React.forwardRef<HTMLDivElement, TerminalProps>(
  (
    {
      lines = [],
      title,
      height,
      autoScroll = true,
      prompt = "$",
      showCopy = true,
      onClear,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const { t } = useWimTranslation("form");
    const [copied, setCopied] = React.useState(false);
    const bodyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (autoScroll && bodyRef.current) {
        bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
      }
    }, [lines, autoScroll]);

    const handleCopy = useCallback(async () => {
      const text = lines
        .map((l) => (l.type === "input" ? `${prompt} ${l.content}` : l.content))
        .join("\n");
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // clipboard not available
      }
    }, [lines, prompt]);

    return (
      <div
        ref={ref}
        data-theme="dark"
        className={classNames(styles.root, className)}
        style={{ ...(height != null ? { height } : {}), ...style }}
        {...props}
      >
        <div className={styles.titleBar} aria-hidden="true">
          <span className={styles.dot} data-color="red" />
          <span className={styles.dot} data-color="yellow" />
          <span className={styles.dot} data-color="green" />
          {title && <span className={styles.titleText}>{title}</span>}
          <div className={styles.titleActions}>
            {showCopy && (
              <button
                type="button"
                className={classNames(styles.titleBtn, copied && styles.copied)}
                onClick={handleCopy}
                aria-label={copied ? t("terminal.copied_label") : t("terminal.copy_label")}
              >
                <Icon component={copied ? CheckIcon : CopyIcon} size="sm" />
              </button>
            )}
            {onClear && (
              <button
                type="button"
                className={styles.titleBtn}
                onClick={onClear}
                aria-label={t("terminal.clear_label")}
              >
                <Icon component={CloseSmallIcon} size="sm" />
              </button>
            )}
          </div>
        </div>

        <div ref={bodyRef} className={styles.body} role="log" aria-live="polite" aria-label={title}>
          {lines.map((line, i) => (
            <div
              key={line.id ?? i}
              className={classNames(styles.line, line.type && styles[line.type])}
            >
              {line.type === "input" && (
                <span className={styles.prompt} aria-hidden="true">{prompt}</span>
              )}
              <span className={styles.content}>{parseAnsi(line.content)}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

Terminal.displayName = "Terminal";
