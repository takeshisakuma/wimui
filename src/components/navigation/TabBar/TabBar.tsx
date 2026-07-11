import React from "react";
import classNames from "classnames";
import styles from "./tab-bar.module.scss";

export interface TabBarProps extends React.ComponentPropsWithoutRef<"nav"> {
  /** Fixed position at the bottom of the screen */
  fixed?: boolean;
  /** Show top border */
  bordered?: boolean;
  /** Glassmorphism effect */
  glass?: boolean;
}

const TabBarInner = React.forwardRef<HTMLElement, TabBarProps>(
  (
    {
      className,
      children,
      fixed = true,
      bordered = true,
      glass = false,
      ...props
    },
    ref,
  ) => {
    return (
      <nav
        ref={ref}
        className={classNames("wim-tab-bar", 
          styles.root,
          fixed && styles.fixed,
          bordered && styles.bordered,
          glass && styles.glass,
          className,
        )}
        {...props}
      >
        <div className={styles.container}>{children}</div>
      </nav>
    );
  },
);

TabBarInner.displayName = "TabBar";

export interface TabBarItemProps extends React.ComponentPropsWithoutRef<"button"> {
  /** Active state */
  active?: boolean;
  /** Icon element */
  icon?: React.ReactNode;
  /** Text label */
  label?: string;
  /** Badge content (optional) */
  badge?: React.ReactNode;
}

export const TabBarItem = React.forwardRef<HTMLButtonElement, TabBarItemProps>(
  ({ className, active, icon, label, badge, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={classNames(
          styles.item,
          active && styles.active,
          className,
        )}
        aria-pressed={active}
        {...props}
      >
        {badge && <span className={styles.badge}>{badge}</span>}
        {icon && <span className={styles.icon}>{icon}</span>}
        {label && <span className={styles.label}>{label}</span>}
        {children}
      </button>
    );
  },
);

TabBarItem.displayName = "TabBar.Item";

export const TabBar = TabBarInner as typeof TabBarInner & {
  Item: typeof TabBarItem;
};

TabBar.Item = TabBarItem;

export default TabBar;
