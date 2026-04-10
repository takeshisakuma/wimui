import React, { ReactNode } from "react";
import classNames from "classnames";
import { ComponentSize } from "../../types/tokens";
import styles from "./status-content.module.scss";

/**
 * Props for the StatusContent component.
 */
export type StatusContentProps = {
  /**
   * Main icon representing the status or state.
   */
  icon?: ReactNode;
  /**
   * Primary title or heading.
   */
  title?: ReactNode;
  /**
   * Supporting description or subtitle text.
   */
  description?: ReactNode;
  /**
   * Action elements (e.g., buttons, links) typically rendered at the bottom.
   */
  actions?: ReactNode;
  /**
   * Additional content children.
   */
  children?: ReactNode;
  /**
   * Additional CSS class name for the root element.
   */
  className?: string;
  /**
   * Size variation of the content and icons.
   * @default "md"
   */
  size?: ComponentSize;
  /**
   * Custom class name prefix for the root element.
   */
  prefixCls?: string;
};

/**
 * StatusContent is an internal component that unifies the layout and presentation 
 * for status-driven components like `Result`, `EmptyState`, and `ErrorBoundary`.
 * 
 * Composition Contract:
 * - Provides standardized layout slots for `icon`, `title`, `description`, and `actions`.
 * - Ensures consistent spacing and typography across different status displays.
 * - Supports responsive sizing via the `size` prop.
 */
export const StatusContent = ({
  icon,
  title,
  description,
  actions,
  children,
  className,
  size = "md",
  prefixCls,
}: StatusContentProps) => {
  return (
    <div
      className={classNames(styles.root, styles[size], prefixCls, className)}
    >
      <div className={styles.container}>
        {icon && <div className={styles.icon}>{icon}</div>}
        <div className={styles.content}>
          {title && (
            <div className={styles.title}>{title}</div>
          )}
          {description && (
            <div className={styles.description}>
              {description}
            </div>
          )}
        </div>
      </div>
      {children && <div className={styles.body}>{children}</div>}
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  );
};
