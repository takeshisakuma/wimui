import React, { useRef } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { useIndicator } from "../../_internal/useIndicator";
import { useMergedRef } from "../../../hooks/useMergedRef";
import { ComponentSizeBasic } from "../../../types/tokens";
import { getRovingIndex, isRovingKey } from "../../_internal/rovingIndex";
import styles from "./tab-navigation.module.scss";

export interface TabNavigationProps extends React.ComponentPropsWithoutRef<"nav"> {
  /** Visual style of the tabs */
  variant?: "underline" | "pill" | "contained";
  /** Alignment of the tabs */
  align?: "start" | "center" | "end" | "justify";
  /** Size of the tabs */
  size?: ComponentSizeBasic;
}

const TabNavigation = React.forwardRef<HTMLElement, TabNavigationProps>(
  (
    {
      className,
      children,
      variant = "underline",
      align = "start",
      size = "md",
      ...props
    },
    ref,
  ) => {
    const localNavRef = useRef<HTMLElement>(null);
    const { containerRef, sliderStyle, isReady } = useIndicator({
      activeSelector: `.${styles.active}`,
      variant,
    });

    const setRefs = useMergedRef(localNavRef, ref, (node) => {
      if (containerRef) {
        containerRef.current = node?.querySelector(`.${styles.list}`) || null;
      }
    });

    const handleTablistKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (!isRovingKey(e.key)) return;

      e.preventDefault();

      const tabs = Array.from(
        e.currentTarget.querySelectorAll<HTMLElement>(
          '[role="tab"]:not([aria-disabled="true"])',
        ),
      );
      if (tabs.length === 0) return;

      const currentIndex = tabs.indexOf(document.activeElement as HTMLElement);
      if (currentIndex === -1) return;

      // 無効のタブは上で除いてあるので、ここは位置の計算だけ（T366）
      const nextIndex = getRovingIndex({ key: e.key, current: currentIndex, count: tabs.length });
      if (nextIndex === null) return;

      const nextTab = tabs[nextIndex];
      nextTab.focus();
      nextTab.click();
    };

    return (
      <nav
        ref={setRefs}
        className={classNames("wim-tab-navigation", 
          styles.root,
          styles[variant],
          styles[align],
          styles[size],
          isReady && styles.ready,
          className,
        )}
        {...props}
      >
        { }
        <div
          className={styles.list}
          role="tablist"
          tabIndex={0}
          onKeyDown={handleTablistKeyDown}
        >
          <div
            className={styles.slider}
            style={sliderStyle}
            aria-hidden="true"
          />
          {children}
        </div>
      </nav>
    );
  },
);

TabNavigation.displayName = "TabNavigation";

export interface TabNavigationItemProps extends React.ComponentPropsWithoutRef<"a"> {
  /**
   * If true, the item will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /** Active state */
  active?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Icon element */
  icon?: React.ReactNode;
}

export const TabNavigationItem = React.forwardRef<
  HTMLAnchorElement,
  TabNavigationItemProps
>(
  (
    {
      asChild = false,
      className,
      children,
      active,
      disabled,
      icon,
      href,
      onClick,
      ...props
    },
    ref,
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      if (onClick) {
        e.preventDefault(); // SPA routing: prevent native href navigation
        onClick(e);
      }
    };

    const Component = asChild ? Slot : "a";

    return (
      <Component
        ref={ref}
        href={asChild ? undefined : href}
        onClick={handleClick}
        className={classNames(
          styles.item,
          active && styles.active,
          disabled && styles.disabled,
          className,
        )}
        role="tab"
        aria-selected={active}
        aria-disabled={disabled}
        // roving tabindex: active タブのみ Tab フォーカス対象
        tabIndex={active && !disabled ? 0 : -1}
        {...props}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        <Slottable>{children}</Slottable>
      </Component>
    );
  },
);

TabNavigationItem.displayName = "TabNavigation.Item";

const TabNavigationComponent = TabNavigation as typeof TabNavigation & {
  Item: typeof TabNavigationItem;
};

TabNavigationComponent.Item = TabNavigationItem;

export { TabNavigationComponent as TabNavigation };
export default TabNavigationComponent;
