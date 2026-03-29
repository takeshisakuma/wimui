import React, { useRef, useCallback } from "react";
import classNames from "classnames";
import { useIndicator } from "../_internal/useIndicator";
import { ComponentSize } from "../../types/tokens";
import "./tab-navigation.scss";

export interface TabNavigationProps extends React.ComponentPropsWithoutRef<"nav"> {
  /** Visual style of the tabs */
  variant?: "underline" | "pill" | "contained";
  /** Alignment of the tabs */
  align?: "start" | "center" | "end" | "justify";
  /** Size of the tabs */
  size?: ComponentSize;
}

const TabNavigation = React.forwardRef<HTMLElement, TabNavigationProps>(
  (
    {
      className,
      children,
      variant = "underline",
      align = "start",
      size = "medium",
      ...props
    },
    ref,
  ) => {
    const localNavRef = useRef<HTMLElement>(null);
    const { containerRef, sliderStyle, isReady } = useIndicator({
      activeSelector: ".wim-tab-navigation__item--active",
      variant,
    });

    const setRefs = useCallback(
      (node: HTMLElement) => {
        localNavRef.current = node;
        containerRef.current = node?.querySelector(".wim-tab-navigation__list");
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        }
      },
      [ref, containerRef],
    );

    const handleTablistKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      const keys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"];
      if (!keys.includes(e.key)) return;

      e.preventDefault();

      const tabs = Array.from(
        e.currentTarget.querySelectorAll<HTMLElement>(
          '[role="tab"]:not([aria-disabled="true"])',
        ),
      );
      if (tabs.length === 0) return;

      const currentIndex = tabs.indexOf(document.activeElement as HTMLElement);
      if (currentIndex === -1) return;

      let nextIndex: number;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        nextIndex = (currentIndex + 1) % tabs.length;
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      } else if (e.key === "Home") {
        nextIndex = 0;
      } else {
        nextIndex = tabs.length - 1;
      }

      const nextTab = tabs[nextIndex];
      nextTab.focus();
      nextTab.click();
    };

    return (
      <nav
        ref={setRefs}
        className={classNames(
          "wim-tab-navigation",
          `wim-tab-navigation--${variant}`,
          `wim-tab-navigation--${align}`,
          `wim-tab-navigation--${size}`,
          isReady && "wim-tab-navigation--ready",
          className,
        )}
        {...props}
      >
        {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus */}
        <div
          className="wim-tab-navigation__list"
          role="tablist"
          onKeyDown={handleTablistKeyDown}
        >
          <div
            className="wim-tab-navigation__slider"
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
    { className, children, active, disabled, icon, href, onClick, ...props },
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

    return (
      <a
        ref={ref}
        href={href}
        onClick={handleClick}
        className={classNames(
          "wim-tab-navigation__item",
          active && "wim-tab-navigation__item--active",
          disabled && "wim-tab-navigation__item--disabled",
          className,
        )}
        role="tab"
        aria-selected={active}
        aria-disabled={disabled}
        // roving tabindex: active タブのみ Tab フォーカス対象
        tabIndex={active && !disabled ? 0 : -1}
        {...props}
      >
        {icon && <span className="wim-tab-navigation__icon">{icon}</span>}
        {children}
      </a>
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
