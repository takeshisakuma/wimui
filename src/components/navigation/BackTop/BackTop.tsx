import React, { useState, useEffect, useCallback } from "react";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import styles from "./backtop.module.scss";
import { ChevronUpIcon } from "@/icon";

export interface BackTopProps {
  /** Target container that will be scrolled */
  target?: () => HTMLElement | Window | Document | null;
  /** Scroll height after which the button becomes visible */
  visibilityHeight?: number;
  /** Callback when clicked */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  /** Children to be rendered inside the button */
  children?: React.ReactNode;
  /** Additional class names */
  className?: string;
  /** Style attribute */
  style?: React.CSSProperties;
  /** Accessible label for the button */
  "aria-label"?: string;
}

export const BackTop = ({
  target = () => window,
  visibilityHeight = 400,
  onClick,
  children,
  className,
  style,
  "aria-label": ariaLabel,
}: BackTopProps) => {
  const { t } = useWimTranslation("common");
  const [visible, setVisible] = useState(false);

  const getScrollTop = useCallback(
    (targetElement: HTMLElement | Window | Document) => {
      if (targetElement === window || targetElement instanceof Window) {
        return window.pageYOffset || document.documentElement.scrollTop;
      }
      if (targetElement instanceof Document) {
        return document.documentElement.scrollTop;
      }
      return (targetElement as HTMLElement).scrollTop;
    },
    [],
  );

  const handleScroll = useCallback(() => {
    const targetElement = target();
    if (!targetElement) return;

    const scrollTop = getScrollTop(targetElement);
    setVisible(scrollTop > visibilityHeight);
  }, [target, visibilityHeight, getScrollTop]);

  useEffect(() => {
    const targetElement = target();
    if (!targetElement) return;

     
    requestAnimationFrame(handleScroll); // Initial check

    targetElement.addEventListener("scroll", handleScroll);
    return () => {
      targetElement.removeEventListener("scroll", handleScroll);
    };
  }, [target, handleScroll]);

  const scrollToTop = (e: React.MouseEvent<HTMLDivElement>) => {
    const targetElement = target();
    if (!targetElement) return;

    if (targetElement === window || targetElement instanceof Window) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (targetElement instanceof Document) {
      document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      (targetElement as HTMLElement).scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    onClick?.(e);
  };

  const defaultElement = (
    <div className={styles.content}>
      <Icon component={ChevronUpIcon} className={styles.icon} />
    </div>
  );

  return (
    <div
      className={classNames(
        styles.root,
        !visible && styles.hidden,
        className,
      )}
      style={style}
      onClick={scrollToTop}
      role="button"
      tabIndex={0}
      aria-label={ariaLabel ?? t("a11y.back_to_top")}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.currentTarget.click(); } }}
    >
      {children || defaultElement}
    </div>
  );
};

export default BackTop;
