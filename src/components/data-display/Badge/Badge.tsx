import React from "react";
import classNames from "classnames";

import { IndicatorBase } from "../../_internal/IndicatorBase";
import { ComponentSizeBasic, IndicatorIntent, IndicatorVariant } from "../../../types/tokens";
import styles from "./badge.module.scss";

export type BadgeProps = React.ComponentPropsWithoutRef<"span"> & {
  /**
   * If true, the badge will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /** Content to display */
  children?: React.ReactNode;
  /** Content to display (alternative to children) */
  content?: React.ReactNode;
  /** Icon */
  icon?: React.ReactNode;
  /** Intent (semantic state) */
  intent?: IndicatorIntent;
  /** Visual style variant */
  variant?: IndicatorVariant;
  /** Size */
  size?: ComponentSizeBasic;
  /** Whether to enable the interactive state */
  interactive?: boolean;
};

/**
 * Badge component for displaying status, counts, and similar indicators.
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
        className={classNames("wim-badge", isDot && styles.iconOnly, className)}
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

