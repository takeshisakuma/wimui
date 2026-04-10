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
  /** アイコン */
  icon?: React.ReactNode;
  /** インテント（意味的状態） */
  intent?: IndicatorIntent;
  /** バリアント */
  variant?: IndicatorVariant;
  /** サイズ */
  size?: ComponentSize;
};

/**
 * 状態やカウントなどを表示するためのバッジコンポーネント。
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, icon, className, role, "aria-label": ariaLabel, ...props }, ref) => {
    return (
      <IndicatorBase
        ref={ref}
        styles={styles}
        icon={icon}
        className={classNames(!children && styles.iconOnly, className)}
        role={role ?? (ariaLabel ? "img" : undefined)}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </IndicatorBase>
    );
  },
);

Badge.displayName = "Badge";

