import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import styles from "./scrollprogress.module.scss";

export type ScrollProgressProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * Color of the progress bar.
   * @default "primary"
   */
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  /**
   * Element whose scroll position is tracked. Defaults to `window`.
   */
  target?: React.RefObject<HTMLElement | null>;
};

/**
 * Visualizes reading progress or scroll position as a bar.
 */
export const ScrollProgress = ({
  color = "primary",
  target,
  className,
  "aria-label": ariaLabel,
  ...props
}: ScrollProgressProps) => {
  const { t } = useWimTranslation("common");
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

    return () => {
      scrollTarget.removeEventListener("scroll", handleScroll);
    };
  }, [target]);

  return (
    <div
      className={classNames("wim-scroll-progress", 
        styles.root,
        color && styles[color],
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
