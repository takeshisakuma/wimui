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
  /**
   * 見た目の強さ。既定（未指定）は intent の塗り。
   *
   * 以前は `"default" | "primary" | "glass"` だったが、3 つとも実態とずれていた（T114）:
   * `primary` は variant 未指定とまったく同じ規則に落ちる重複、
   * `default` は**既定の見た目ではなく枠線のある outline** で名前が逆、
   * SCSS には誰も付けない `.default_intent` が「temporary name」のまま残っていた。
   */
  variant?: "outline" | "glass";
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
    /* 浮かせず通常フローに置く。以前は `static` だったが、当てているのは
       `position: relative` で、**CSS のキーワードなのに CSS の static ではない**
       という二重のずれがあった（T114）。 */
    | "inline";
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
                : styles.inline;

    return (
      <Component
        ref={ref}
        type={asChild ? undefined : "button"}
        className={classNames("wim-float-button", 
          styles.root,
          !variant && styles[intent],
          variant === "outline" && styles.outline,
          variant === "glass" && styles.glass,
          intent === "danger" && styles.danger,
          intent === "success" && styles.success,
          styles[shape],
          styles[size],
          positionClass,
          !!label && styles.extended,
          !!shrink && styles.shrink,
          // back-to-top の見た目は `.iconBacktop`（アイコンを 180° 回す）が持つ（T58）。
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
