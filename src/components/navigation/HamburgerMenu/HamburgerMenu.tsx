import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { ComponentSizeBasic } from "../../../types/tokens";
import styles from "./hamburger-menu.module.scss";

export type HamburgerMenuVisibleBelow = "xs" | "sm" | "md" | "lg" | "xl";

export interface HamburgerMenuProps extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * If true, merge button props onto the child element.
   */
  asChild?: boolean;
  /** Whether the menu is open */
  open?: boolean;
  /** Callback function when the menu is toggled */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Size of the hamburger menu */
  size?: ComponentSizeBasic;
  /** Color of the bars */
  color?: string;
  /** Show only below the given breakpoint (e.g. "md" matches Sidebar's mobile drawer range) */
  visibleBelow?: HamburgerMenuVisibleBelow;
  /** Custom class name */
  className?: string;
}

export const HamburgerMenu = React.forwardRef<
  HTMLButtonElement,
  HamburgerMenuProps
>(
  (
    {
      asChild = false,
      open = false,
      onClick,
      size = "md",
      color,
      visibleBelow,
      className,
      style,
      children,
      "aria-label": ariaLabel,
      ...props
    },
    ref,
  ) => {
    const { t } = useWimTranslation("common");
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : "button"}
        className={classNames("wim-hamburger-menu", 
          styles.root,
          styles[size],
          open && styles.open,
          visibleBelow &&
            styles[
              `visibleBelow${visibleBelow.charAt(0).toUpperCase()}${visibleBelow.slice(1)}`
            ],
          className,
        )}
        onClick={onClick}
        aria-expanded={open}
        aria-label={ariaLabel ?? (open ? t("a11y.close_menu") : t("a11y.open_menu"))}
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
        {asChild ? <Slottable>{children}</Slottable> : null}
      </Comp>
    );
  },
);

HamburgerMenu.displayName = "HamburgerMenu";
