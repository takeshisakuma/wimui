import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
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
  /**
   * If true, the item will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
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
  (
    {
      asChild = false,
      className,
      active,
      icon,
      label,
      badge,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : "button";

    return (
      <Component
        ref={ref}
        type={asChild ? undefined : "button"}
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
        <Slottable>{children}</Slottable>
      </Component>
    );
  },
);

TabBarItem.displayName = "TabBar.Item";

export const TabBar = TabBarInner as typeof TabBarInner & {
  Item: typeof TabBarItem;
};

TabBar.Item = TabBarItem;

export default TabBar;
