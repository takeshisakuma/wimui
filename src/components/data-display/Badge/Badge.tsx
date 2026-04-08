import React from "react";
import classNames from "classnames";

import { IndicatorBase } from "../../_internal/IndicatorBase";
import { ComponentSize, WimIntent, IndicatorVariant } from "../../../types/tokens";
import "./badge.scss";
export type BadgeProps = React.ComponentPropsWithoutRef<"span"> & {
  /**
   * If true, the badge will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /** 表示するコンテンツ */
  children?: React.ReactNode;
  /** アイコン */
  icon?: React.ReactNode;
  /** ステータス */
  intent?: WimIntent;
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
        prefixClass="wim-badge"
        icon={icon}
        className={classNames(!children && "wim-badge--icon-only", className)}
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

