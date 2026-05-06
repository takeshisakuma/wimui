import React from "react";
import classNames from "classnames";

import { IndicatorBase } from "../../_internal/IndicatorBase";
import { ComponentSize, IndicatorIntent, IndicatorVariant } from "../../../types/tokens";
import styles from "./badge.module.scss";

export type BadgeProps = React.ComponentPropsWithoutRef<"span"> & {
  /**
   * If true, the badge will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /** 表示するコンテンツ */
  children?: React.ReactNode;
  /** 表示するコンテンツ (childrenの代替) */
  content?: React.ReactNode;
  /** アイコン */
  icon?: React.ReactNode;
  /** インテント（意味的状態） */
  intent?: IndicatorIntent;
  /** バリアント */
  variant?: IndicatorVariant;
  /** サイズ */
  size?: ComponentSize;
  /** インタラクティブな状態を有効にするか */
  interactive?: boolean;
};

/**
 * 状態やカウントなどを表示するためのバッジコンポーネント。
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, content, icon, className, role, "aria-label": ariaLabel, interactive = false, ...props }, ref) => {
    const finalContent = content ?? children;
    const isDot = !finalContent && !icon;

    return (
      <IndicatorBase
        ref={ref}
        styles={styles}
        icon={icon}
        className={classNames(isDot && styles.iconOnly, className)}
        role={role ?? (ariaLabel ? "img" : undefined)}
        aria-label={ariaLabel}
        interactive={interactive}
        {...props}
      >
        {finalContent}
      </IndicatorBase>
    );
  },
);

Badge.displayName = "Badge";

