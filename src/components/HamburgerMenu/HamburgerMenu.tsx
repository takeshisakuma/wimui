import React from "react";
import classNames from "classnames";
import "./hamburger-menu.scss";

export interface HamburgerMenuProps extends React.ComponentPropsWithoutRef<"button"> {
  /** Check if the menu is open */
  isOpen?: boolean;
  /** Callback function when the menu is toggled */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Size of the hamburger menu */
  size?: "small" | "medium" | "large";
  /** Color of the bars */
  color?: string;
  /** Custom class name */
  className?: string;
}

export const HamburgerMenu = React.forwardRef<
  HTMLButtonElement,
  HamburgerMenuProps
>(
  (
    {
      isOpen = false,
      onClick,
      size = "medium",
      color,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        className={classNames(
          "wim-hamburger-menu",
          `wim-hamburger-menu--${size === "small" ? "sm" : size === "large" ? "lg" : "md"}`,
          isOpen && "wim-hamburger-menu--open",
          className,
        )}
        onClick={onClick}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        style={{
          ...style,
          ...(color
            ? ({ "--wim-hamburger-color": color } as React.CSSProperties)
            : {}),
        }}
        {...props}
      >
        <div className="wim-hamburger-menu__box">
          <div className="wim-hamburger-menu__inner" />
        </div>
      </button>
    );
  },
);

HamburgerMenu.displayName = "HamburgerMenu";
