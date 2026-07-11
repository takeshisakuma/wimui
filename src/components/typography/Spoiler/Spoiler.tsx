import React from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import localStyles from "./spoiler.module.scss";

export type SpoilerProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * Number of text lines shown while collapsed.
   * @default 3
   */
  lines?: number;
  /**
   * Controlled expanded state. Use together with onExpandedChange.
   */
  expanded?: boolean;
  /**
   * Initial expanded state for uncontrolled usage.
   * @default false
   */
  defaultExpanded?: boolean;
  /**
   * Called with the next state when the toggle is activated.
   */
  onExpandedChange?: (expanded: boolean) => void;
  /**
   * Label of the toggle while collapsed.
   * @default t("spoiler.show_more")
   */
  showLabel?: React.ReactNode;
  /**
   * Label of the toggle while expanded.
   * @default t("spoiler.show_less")
   */
  hideLabel?: React.ReactNode;
};

/**
 * Spoiler collapses long text (reviews, comments, descriptions) to a fixed
 * number of lines via CSS line-clamp and reveals the rest with an accessible
 * "show more" toggle (aria-expanded / aria-controls). The toggle only appears
 * when the content actually overflows the collapsed height, and the clamped
 * text stays in the DOM so screen readers and in-page search still see it.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 * - Observers: Owns a ResizeObserver on its content (disconnected on
 *   unmount) to re-check overflow when the container or text changes.
 */
export const Spoiler = React.forwardRef<HTMLDivElement, SpoilerProps>(
  (
    {
      lines = 3,
      expanded,
      defaultExpanded = false,
      onExpandedChange,
      showLabel,
      hideLabel,
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const { t } = useWimTranslation("components");
    const contentId = React.useId();

    const isControlled = expanded !== undefined;
    const [internalExpanded, setInternalExpanded] =
      React.useState(defaultExpanded);
    const isExpanded = isControlled ? expanded : internalExpanded;

    const outerRef = React.useRef<HTMLDivElement>(null);
    const innerRef = React.useRef<HTMLDivElement>(null);
    const [hasOverflow, setHasOverflow] = React.useState(false);

    // 折りたたみ時のみ「全文の高さ > クランプ後の高さ」でオーバーフローを判定する。
    // 展開中は両者が一致してしまうため計測せず、直前の判定結果を保持する
    // （「折りたたむ」ボタンが消えないようにする）。
    React.useLayoutEffect(() => {
      if (isExpanded) return undefined;
      const outer = outerRef.current;
      const inner = innerRef.current;
      if (!outer || !inner) return undefined;

      const measure = () => {
        // +1 はサブピクセルレンダリングによる誤差の吸収
        setHasOverflow(inner.scrollHeight > outer.clientHeight + 1);
      };
      measure();

      if (typeof ResizeObserver === "undefined") return undefined;
      const observer = new ResizeObserver(measure);
      observer.observe(outer);
      observer.observe(inner);
      return () => observer.disconnect();
    }, [isExpanded, lines]);

    const handleToggle = () => {
      const next = !isExpanded;
      if (!isControlled) setInternalExpanded(next);
      onExpandedChange?.(next);
    };

    // 一度展開したら、再び折りたたむ手段を残すためトグルは表示し続ける
    const showToggle = hasOverflow || isExpanded;

    return (
      <div
        ref={ref}
        className={classNames("wim-spoiler", localStyles.root, className)}
        style={{ ...style, "--wim-spoiler-lines": lines } as React.CSSProperties}
        {...props}
      >
        <div
          ref={outerRef}
          id={contentId}
          className={classNames(
            localStyles.content,
            !isExpanded && localStyles.collapsed,
          )}
        >
          <div ref={innerRef} className={localStyles.inner}>
            {children}
          </div>
        </div>
        {showToggle && (
          <button
            type="button"
            className={localStyles.toggle}
            aria-expanded={isExpanded}
            aria-controls={contentId}
            onClick={handleToggle}
          >
            {isExpanded
              ? (hideLabel ?? t("spoiler.show_less"))
              : (showLabel ?? t("spoiler.show_more"))}
          </button>
        )}
      </div>
    );
  },
);

Spoiler.displayName = "Spoiler";
