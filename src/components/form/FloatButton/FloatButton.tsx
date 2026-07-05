import React, { useState, useEffect, useCallback } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import styles from "./float-button.module.scss";
import { Icon } from "../../media/Icon/Icon";
import { ComponentSizeBasic, ButtonIntent } from "../../../types/tokens";

export interface FloatButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * If true, the button will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /** Icon name from the library */
  iconName?:
    | "CircleIcon"
    | "SquareIcon"
    | "LoadingIcon"
    | "ExternalLinkIcon"
    | "ArrowUpIcon"
    | string;
  /** Variant of the button */
  variant?: "default" | "primary" | "glass";
  /** Intent of the button (semantic meaning) */
  intent?: ButtonIntent;
  /** Shape of the button */
  shape?: "circle" | "square";
  /** Size of the button */
  size?: ComponentSizeBasic;
  /** Label text for extended FAB */
  label?: React.ReactNode;
  /** Whether to shrink the extended FAB (hide label) */
  shrink?: boolean;
  /** Position of the button */
  position?:
    | "bottom-right"
    | "bottom-left"
    | "bottom-center"
    | "top-right"
    | "top-left"
    | "static";
  /** Description for tooltip */
  description?: React.ReactNode;
  /** Badge content (number or dot) */
  badge?: number | boolean;
  /** If true, the button will scroll to the top of the page when clicked */
  backTop?: boolean;
  /** Visibility threshold for backTop (in pixels) */
  visibilityHeight?: number;
  /** Additional class names */
  className?: string;
  /** Style attribute */
  style?: React.CSSProperties;
  /** Aria label for accessibility */
  "aria-label"?: string;
}

export const FloatButton = React.forwardRef<HTMLButtonElement, FloatButtonProps>(
  (
    {
      asChild = false,
      iconName = "CircleIcon",
      variant,
      intent = "default",
      shape = "circle",
      size = "md",
      label,
      shrink = false,
      position = "bottom-right",
      description,
      badge,
      backTop = false,
      visibilityHeight = 400,
      className,
      style,
      onClick,
      "aria-label": ariaLabel,
      children,
      ...props
    },
    ref,
  ) => {
    const [visible, setVisible] = useState(() => {
      if (!backTop) return true;
      if (typeof window !== "undefined") {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return scrollTop > visibilityHeight;
      }
      return false;
    });

    const handleScroll = useCallback(() => {
      if (backTop) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setVisible(scrollTop > visibilityHeight);
      }
    }, [backTop, visibilityHeight]);

    useEffect(() => {
      if (backTop) {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }
    }, [backTop, handleScroll]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (backTop) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      onClick?.(e);
    };

    if (!visible && backTop) return null;

    const Component = asChild ? Slot : "button";

    const positionClass =
      position === "bottom-right"
        ? styles.bottomRight
        : position === "bottom-left"
          ? styles.bottomLeft
          : position === "bottom-center"
            ? styles.bottomCenter
            : position === "top-right"
              ? styles.topRight
              : position === "top-left"
                ? styles.topLeft
                : styles.static;

    return (
      <Component
        ref={ref}
        type={asChild ? undefined : "button"}
        className={classNames(
          styles.root,
          !variant && styles[intent],
          variant === "default" && styles.variant_default,
          variant === "primary" && styles.primary,
          variant === "glass" && styles.glass,
          intent === "destructive" && styles.destructive,
          intent === "positive" && styles.positive,
          styles[shape],
          styles[size],
          positionClass,
          !!label && styles.extended,
          !!shrink && styles.shrink,
          backTop && !!label && styles.backtop,
          className,
        )}
        style={style}
        onClick={handleClick}
        title={typeof description === "string" ? description : undefined}
        aria-label={ariaLabel || (typeof label === "string" ? label : iconName)}
        {...props}
      >
        <Slottable>{children}</Slottable>
        <span className={styles.inner}>
          <Icon
            name={
              (backTop
                ? "ChevronUpIcon"
                : iconName) as React.ComponentProps<typeof Icon>["name"]
            }
            size={size}
            className={classNames(backTop && styles.iconBacktop)}
          />
          {label && (
            <span className={styles.labelWrapper}>
              <span className={styles.label}>{label}</span>
            </span>
          )}
          {badge && (
            <span
              className={classNames(
                styles.badge,
                badge === true && styles.dot,
              )}
            >
              {typeof badge === "number" ? badge : ""}
            </span>
          )}
        </span>
        {description && (
          <span className={styles.description}>{description}</span>
        )}
      </Component>
    );
  },
);

FloatButton.displayName = "FloatButton";

export default FloatButton;
