import React, { useCallback, useEffect, useImperativeHandle, useMemo, useRef } from "react";
import classNames from "classnames";
import { diffLines, type Change } from "diff";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { Icon } from "../../media/Icon/Icon";
import { AlignJustifyIcon, CheckIcon, CloseIcon, ColumnsIcon, CopyIcon, SpinnerIcon } from "@/icon";
import styles from "./code-diff-viewer.module.scss";

export type DiffView = "split" | "unified";

export interface CodeDiffViewerProps extends React.ComponentPropsWithoutRef<"div"> {
  /** Code before the change */
  before: string;
  /** Code after the change */
  after: string;
  /** Language label shown in header */
  language?: string;
  /** Filename shown in header (takes precedence over language) */
  filename?: string;
  /** Display mode */
  view?: DiffView;
  /** Called when user clicks Apply */
  onApply?: () => void;
  /** Called when user clicks Reject */
  onReject?: () => void;
  /** Additional CSS class */
  className?: string;
  /** Whether the change is currently being applied */
  isApplying?: boolean;
  /** Whether the change has been successfully applied */
  isApplied?: boolean;
}

type LineType = "added" | "removed" | "unchanged" | "empty";

interface UnifiedLine {
  type: LineType;
  content: string;
  oldNum?: number;
  newNum?: number;
}

interface SplitLine {
  type: LineType;
  content: string;
  num?: number;
}

function toLines(value: string): string[] {
  const s = value.endsWith("\n") ? value.slice(0, -1) : value;
  return s === "" ? [] : s.split("\n");
}

function buildUnified(changes: Change[]): UnifiedLine[] {
  const lines: UnifiedLine[] = [];
  let o = 1;
  let n = 1;
  for (const c of changes) {
    for (const content of toLines(c.value)) {
      if (c.removed) {
        lines.push({ type: "removed", content, oldNum: o++ });
      } else if (c.added) {
        lines.push({ type: "added", content, newNum: n++ });
      } else {
        lines.push({ type: "unchanged", content, oldNum: o++, newNum: n++ });
      }
    }
  }
  return lines;
}

function buildSplit(changes: Change[]): { left: SplitLine[]; right: SplitLine[] } {
  const left: SplitLine[] = [];
  const right: SplitLine[] = [];
  let ln = 1;
  let rn = 1;
  let i = 0;
  while (i < changes.length) {
    const c = changes[i];
    if (!c.added && !c.removed) {
      for (const content of toLines(c.value)) {
        left.push({ type: "unchanged", content, num: ln++ });
        right.push({ type: "unchanged", content, num: rn++ });
      }
      i++;
    } else if (c.removed) {
      const removed = toLines(c.value);
      const next = changes[i + 1];
      const added = next?.added ? toLines(next.value) : [];
      if (next?.added) i++;
      const max = Math.max(removed.length, added.length);
      for (let j = 0; j < max; j++) {
        left.push(j < removed.length ? { type: "removed", content: removed[j], num: ln++ } : { type: "empty", content: "" });
        right.push(j < added.length ? { type: "added", content: added[j], num: rn++ } : { type: "empty", content: "" });
      }
      i++;
    } else {
      for (const content of toLines(c.value)) {
        left.push({ type: "empty", content: "" });
        right.push({ type: "added", content, num: rn++ });
      }
      i++;
    }
  }
  return { left, right };
}

function LineNum({ num }: { num?: number }) {
  return (
    <span className={styles.lineNum} aria-hidden="true">
      {num ?? ""}
    </span>
  );
}

function UnifiedRow({ line }: { line: UnifiedLine }) {
  const prefix = line.type === "added" ? "+" : line.type === "removed" ? "−" : " ";
  return (
    <div className={classNames(styles.row, styles[line.type])}>
      <LineNum num={line.oldNum} />
      <LineNum num={line.newNum} />
      <span className={styles.prefix} aria-hidden="true">{prefix}</span>
      <span className={styles.lineContent}>{line.content}</span>
    </div>
  );
}

function SplitRow({ line }: { line: SplitLine }) {
  return (
    <div className={classNames(styles.splitCell, styles[line.type])}>
      <LineNum num={line.num} />
      {line.type !== "empty" && (
        <span className={styles.prefix} aria-hidden="true">
          {line.type === "added" ? "+" : line.type === "removed" ? "−" : " "}
        </span>
      )}
      <span className={styles.lineContent}>{line.content}</span>
    </div>
  );
}

/**
 * CodeDiffViewer displays before/after code changes in git-diff style,
 * with optional Apply/Reject actions.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const CodeDiffViewer = React.forwardRef<HTMLDivElement, CodeDiffViewerProps>(
  (
    {
      before,
      after,
      language,
      filename,
      view = "split",
      onApply,
      onReject,
      className,
      isApplying = false,
      isApplied = false,
      ...props
    },
    ref
  ) => {
    const { t } = useWimTranslation("form");
    const [copied, setCopied] = React.useState(false);

    // autoView: driven by ResizeObserver. manualView: set by user click; reset when auto crosses threshold.
    const [autoView, setAutoView] = React.useState<DiffView>(view);
    const [manualView, setManualView] = React.useState<DiffView | null>(null);
    const currentView = manualView ?? autoView;

    const rootRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => rootRef.current!, []);

    useEffect(() => {
      const el = rootRef.current;
      if (!el) return;
      const observer = new ResizeObserver(([entry]) => {
        const narrow = entry.contentRect.width < 640;
        setAutoView((prev) => {
          const next: DiffView = narrow ? "unified" : "split";
          if (prev !== next) setManualView(null);
          return next;
        });
      });
      observer.observe(el);
      return () => observer.disconnect();
    }, []);

    const changes = useMemo(() => diffLines(before ?? "", after ?? ""), [before, after]);
    const unifiedLines = useMemo(() => buildUnified(changes), [changes]);
    const splitLines = useMemo(() => buildSplit(changes), [changes]);

    const headerLabel = filename ?? language;

    const handleCopy = useCallback(async () => {
      try {
        await navigator.clipboard.writeText(after);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // clipboard not available
      }
    }, [after]);

    return (
      <div
        ref={rootRef}
        className={classNames("wim-code-diff-viewer", styles.root, className)}
        {...props}
      >
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            {headerLabel && <span className={styles.filename}>{headerLabel}</span>}
            <div className={styles.viewToggle}>
              <button
                type="button"
                className={classNames(styles.viewBtn, currentView === "split" && styles.active)}
                onClick={() => setManualView("split")}
                aria-label={t("code_diff_viewer.split_view")}
                aria-pressed={currentView === "split"}
              >
                <Icon component={ColumnsIcon} size="sm" aria-hidden="true" />
              </button>
              <button
                type="button"
                className={classNames(styles.viewBtn, currentView === "unified" && styles.active)}
                onClick={() => setManualView("unified")}
                aria-label={t("code_diff_viewer.unified_view")}
                aria-pressed={currentView === "unified"}
              >
                <Icon component={AlignJustifyIcon} size="sm" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className={styles.headerActions}>
            <button
              type="button"
              className={classNames(styles.iconButton, copied && styles.copied)}
              onClick={handleCopy}
              aria-label={copied ? t("code_diff_viewer.copied_label") : t("code_diff_viewer.copy_label")}
            >
              <Icon component={copied ? CheckIcon : CopyIcon} size="sm" />
            </button>
            {onReject && (
              <button
                type="button"
                className={classNames(styles.actionButton, styles.rejectButton)}
                onClick={onReject}
              >
                <Icon component={CloseIcon} size="sm" aria-hidden="true" />
                {t("code_diff_viewer.reject")}
              </button>
            )}
            {(onApply || isApplied) && (
              <button
                type="button"
                className={classNames(
                  styles.actionButton, 
                  styles.applyButton,
                  isApplying && styles.applying,
                  isApplied && styles.applied
                )}
                onClick={onApply}
                disabled={isApplying || isApplied}
              >
                <Icon 
                  component={isApplying ? SpinnerIcon : CheckIcon} 
                  size="sm" 
                  className={classNames(isApplying && styles.spin)}
                  aria-hidden="true" 
                />
                {isApplied ? t("code_diff_viewer.applied") : t("code_diff_viewer.apply")}
              </button>
            )}
          </div>
        </div>

        {/* unified 表示時の横スクロール領域（axe: scrollable-region-focusable） */}
        <div className={styles.body} tabIndex={0}>
          {currentView === "unified" ? (
            <div className={styles.unified}>
              {unifiedLines.map((line, i) => (
                <UnifiedRow key={i} line={line} />
              ))}
            </div>
          ) : (
            <div className={styles.split}>
              {/* 横スクロール領域はキーボードで到達可能にする（axe: scrollable-region-focusable） */}
              <div className={styles.splitPane} tabIndex={0}>
                {splitLines.left.map((line, i) => (
                  <SplitRow key={i} line={line} />
                ))}
              </div>
              <div className={styles.splitDivider} aria-hidden="true" />
              <div className={styles.splitPane} tabIndex={0}>
                {splitLines.right.map((line, i) => (
                  <SplitRow key={i} line={line} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

CodeDiffViewer.displayName = "CodeDiffViewer";
