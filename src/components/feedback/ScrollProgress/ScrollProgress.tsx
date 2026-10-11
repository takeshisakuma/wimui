import React, { useEffect, useState } from "react";
import type { IndicatorIntent } from "../../../types/tokens";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { commonNs } from "@/i18n/generated/common";
import styles from "./scrollprogress.module.scss";

export type ScrollProgressProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * Color of the progress bar.
   * @default "primary"
   */
  /**
   * 意味の軸。兄弟の `Progress` / `ProgressRing` と同じ語彙にそろえてある。
   *
   * 以前は `color` という名前で、値も独自（`secondary` を含む）だった。
   * 塗っているものは `Progress.intent` と構造まで同一だったので、prop 名だけが
   * ずれていた（T114）。
   */
  intent?: IndicatorIntent;
  /**
   * Element whose scroll position is tracked. Defaults to `window`.
   */
  target?: React.RefObject<HTMLElement | null>;
};

/**
 * Visualizes reading progress or scroll position as a bar.
 */
export const ScrollProgress = ({
  intent = "primary",
  target,
  className,
  "aria-label": ariaLabel,
  ...props
}: ScrollProgressProps) => {
  const { t } = useWimTranslation(commonNs);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let currentProgress = 0;
      if (target && target.current) {
        const element = target.current;
        const totalHeight = element.scrollHeight - element.clientHeight;
        if (totalHeight > 0) {
          currentProgress = (element.scrollTop / totalHeight) * 100;
        }
      } else {
        const totalHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
          currentProgress = (window.scrollY / totalHeight) * 100;
        }
      }
      setProgress(currentProgress);
    };

    const scrollTarget = target && target.current ? target.current : window;
    scrollTarget.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calc

    // スクロールしなくても、進み具合は変わる ── 中身の高さが変わったとき（遅れて読み込まれる画像・
    // 開いたアコーディオン）と、窓の大きさが変わったとき。以前は scroll しか聞いておらず、半分まで
    // 送ったあとに中身が 2 倍に伸びても、50% のままだった（実際は 18%。2026-10-11 に実測）。
    // 入れ物の箱は中身が伸びても変わらないので、見るのは中身の側（入れ物の子）。子が足されたら、
    // 見る相手を取り直す。
    window.addEventListener("resize", handleScroll);
    const container = target && target.current ? target.current : document.body;
    const resizeObserver = typeof ResizeObserver !== "undefined" ? new ResizeObserver(handleScroll) : null;
    const observeContent = () => {
      resizeObserver?.disconnect();
      resizeObserver?.observe(container);
      for (const child of Array.from(container.children)) resizeObserver?.observe(child);
      handleScroll();
    };
    const mutationObserver = typeof MutationObserver !== "undefined" ? new MutationObserver(observeContent) : null;
    mutationObserver?.observe(container, { childList: true });
    observeContent();

    return () => {
      scrollTarget.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      resizeObserver?.disconnect();
      mutationObserver?.disconnect();
    };
  }, [target]);

  return (
    <div
      className={classNames("wim-scroll-progress", 
        styles.root,
        styles[intent],
        className,
      )}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={ariaLabel ?? t("a11y.scroll_progress")}
      {...props}
    >
      <div
        className={styles.bar}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
