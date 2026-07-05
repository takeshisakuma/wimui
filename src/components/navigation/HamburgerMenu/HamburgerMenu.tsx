import React from "react";
import classNames from "classnames";
import { ComponentSizeBasic } from "../../../types/tokens";
import styles from "./hamburger-menu.module.scss";

export interface HamburgerMenuProps extends React.ComponentPropsWithoutRef<"button"> {
  /** Whether the menu is open */
  open?: boolean;
  /** Callback function when the menu is toggled */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Size of the hamburger menu */
  size?: ComponentSizeBasic;
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
      open = false,
      onClick,
      size = "md",
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
          styles.root,
          styles[size],
          open && styles.open,
          className,
        )}
        onClick={onClick}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        style={{
          ...style,
          ...(color
            ? ({ "--wim-hamburger-color": color } as React.CSSProperties)
            : {}),
        }}
        {...props}
      >
        <div className={styles.box}>
          <div className={styles.inner} />
        </div>
      </button>
    );
  },
);

HamburgerMenu.displayName = "HamburgerMenu";
