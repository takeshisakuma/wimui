import React, { ReactNode } from "react";
import classNames from "classnames";
import { ComponentSize } from "../../types/tokens";
import styles from "./status-content.module.scss";

export type StatusContentProps = {
  /**
   * Status-based icon or custom icon
   */
  icon?: ReactNode;
  /**
   * Main title
   */
  title?: ReactNode;
  /**
   * Supporting description or subtitle
   */
  description?: ReactNode;
  /**
   * Action buttons or links
   */
  actions?: ReactNode;
  /**
   * Additional content children
   */
  children?: ReactNode;
  /**
   * Custom class name for wrapping div
   */
  className?: string;
  /**
   * Size variation
   */
  size?: ComponentSize;
  /**
   * Custom prefix class name applied to the root element
   */
  prefixCls?: string;
};

/**
 * Internal component to unify layout for Result and EmptyState
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
