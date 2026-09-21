import React, { ReactNode } from "react";
import classNames from "classnames";
import { ComponentSize } from "../../types/tokens";
import styles from "./status-content.module.scss";

/**
 * Props for the StatusContent component.
 */
export type StatusContentProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "title" | "children"
> & {
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
   * Horizontal alignment of the icon, text, and actions. Start-aligned reads as
   * part of the surrounding content; use `"center"` only when the status is the
   * only thing in its region (for example, a full-page empty result).
   * @default "start"
   */
  align?: "start" | "center";
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
  // 既定は左揃え（T250 ③・2026-09-21）。以前は md / lg で中央揃えに固定されており
  // （sm だけ左）、空状態をカードや表の中に置くと、そこだけ中央に寄った塊になった。
  // 中央揃えは「その領域に状態表示しか無い」ときの選択肢として残す。
  align = "start",
  prefixCls,
  ...rest
}: StatusContentProps) => {
  return (
    // 残りの div 属性（id / role / aria-* など）はルートへ渡す。以前は受け取らずに
    // 捨てていたので、EmptyState の `{...props}` が型では通るのに効いていなかった。
    <div
      {...rest}
      data-align={align}
      className={classNames(
        styles.root,
        styles[size],
        align === "center" ? styles.alignCenter : styles.alignStart,
        prefixCls,
        className,
      )}
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
