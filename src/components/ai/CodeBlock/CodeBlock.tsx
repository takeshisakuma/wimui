import React, { useCallback, useId } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Icon } from "../../media/Icon/Icon";
import { CopyIcon, CheckIcon, ChevronDownIcon } from "@/icon";
import styles from "./code-block.module.scss";

export interface CodeBlockProps extends React.ComponentPropsWithoutRef<"div"> {
  /** The code string to display */
  code: string;
  /** Programming language label shown in the header (e.g. "tsx", "bash") */
  language?: string;
  /** Optional filename shown in the header instead of the language label */
  filename?: string;
  /** Whether to show the copy-to-clipboard button (default: true) */
  showCopy?: boolean;
  /** Whether to show line numbers (default: false) */
  showLineNumbers?: boolean;
  /**
   * Maximum visible height before the block becomes scrollable.
   * Pass a CSS value (e.g. "300px") or a number of lines (e.g. 20).
   * When set, an expand/collapse toggle is shown.
   */
  maxLines?: number;
  /** Additional CSS class */
  className?: string;
}

/**
 * CodeBlock renders a styled code snippet with a language/filename header,
 * optional copy button, line numbers, and overflow collapse.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  (
    {
      code,
      language,
      filename,
      showCopy = true,
      showLineNumbers = false,
      maxLines,
      className,
      ...props
    },
    ref
  ) => {
    const { t } = useTranslation("form");
    const [copied, setCopied] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);
    const bodyId = useId();

    const lineCount = code.split("\n").length;
    const isCollapsible = maxLines != null && lineCount > maxLines;

    const handleCopy = useCallback(async () => {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // clipboard not available
      }
    }, [code]);

    const headerLabel = filename ?? language;

    return (
      <div
        ref={ref}
        className={classNames(styles.root, className)}
        {...props}
      >
        {(headerLabel || showCopy) && (
          <div className={styles.header}>
            {headerLabel && (
              <span className={styles.lang}>{headerLabel}</span>
            )}
            <div className={styles.headerActions}>
              {isCollapsible && (
                <button
                  type="button"
                  className={styles.iconButton}
                  onClick={() => setExpanded((v) => !v)}
                  aria-expanded={expanded}
                  aria-controls={bodyId}
                  aria-label={expanded ? t("code_block.collapse_label") : t("code_block.expand_label")}
                >
                  <Icon
                    component={ChevronDownIcon}
                    size="sm"
                    className={classNames(styles.chevron, expanded && styles.chevronUp)}
                  />
                </button>
              )}
              {showCopy && (
                <button
                  type="button"
                  className={classNames(styles.iconButton, copied && styles.copied)}
                  onClick={handleCopy}
                  aria-label={copied ? t("code_block.copied_label") : t("code_block.copy_label")}
                >
                  <Icon component={copied ? CheckIcon : CopyIcon} size="sm" />
                </button>
              )}
            </div>
          </div>
        )}
        <div
          id={bodyId}
          className={classNames(
            styles.body,
            isCollapsible && !expanded && styles.collapsed
          )}
          style={
            isCollapsible && !expanded
              ? ({ "--_max-lines": maxLines } as React.CSSProperties)
              : undefined
          }
        >
          <pre className={styles.pre}>
            {showLineNumbers ? (
              <code className={styles.code}>
                {code.split("\n").map((line, i) => (
                  <span key={i} className={styles.line}>
                    <span className={styles.lineNumber} aria-hidden="true">
                      {i + 1}
                    </span>
                    <span className={styles.lineContent}>{line}</span>
                  </span>
                ))}
              </code>
            ) : (
              <code className={styles.code}>{code}</code>
            )}
          </pre>
        </div>
      </div>
    );
  }
);

CodeBlock.displayName = "CodeBlock";
