import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { useMergedRef } from "@/hooks/useMergedRef";
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
  /**
   * Called with the next open state: the opposite of `open` when the button is pressed, and
   * false when Escape is pressed while the menu is open. Escape also moves focus back to the
   * button. Without this callback the button cannot close on Escape, because `open` is controlled.
   */
  onOpenChange?: (open: boolean) => void;
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
      onOpenChange,
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

    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const setRefs = useMergedRef(ref, buttonRef);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
      if (!event.defaultPrevented) onOpenChange?.(!open);
    };

    // 開いているあいだは、Escape で閉じる（T305。Dropdown・Menubar と同じ形）。開く面は利用者が置くので、
    // フォーカスがその中にあっても届くように document で聞く。面が消えるとフォーカスの置き場が無くなる
    // ので、閉じる前に開閉のボタンへ戻す。中の Dialog などが先に Escape を処理したときは何もしない。
    useEffect(() => {
      if (!open || !onOpenChange) return;
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key !== "Escape" || event.defaultPrevented) return;
        buttonRef.current?.focus({ preventScroll: true });
        onOpenChange(false);
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open, onOpenChange]);

    return (
      <Comp
        ref={setRefs}
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
        onClick={handleClick}
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
