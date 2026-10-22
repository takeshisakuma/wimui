import React, { useState, useEffect, useCallback } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import styles from "./float-button.module.scss";
import { Icon } from "../../media/Icon/Icon";
import { ComponentSizeBasic, ButtonIntent } from "../../../types/tokens";
import { isDev } from "@/utilities/dev-utils";

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
  /** Badge content (number or dot). A count of `0` (or less) hides the badge. */
  badge?: number | boolean;
  /** If true, the button will scroll to the top of the page when clicked */
  backTop?: boolean;
  /** Visibility threshold for backTop (in pixels) */
  visibilityHeight?: number;
  /** Additional class names */
  className?: string;
  /** Style attribute */
  style?: React.CSSProperties;
  /**
   * Accessible name. Required when there is no string `label`: an icon-only button has no
   * text to take a name from, and the icon name is not used as one.
   */
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

    // 名前が無いときに、アイコン名（「PlusIcon」など）を名前にしない（T319）。空ではないので
    // axe は通るが、利用者には何のボタンか伝わらない。名前を付けずに、検査に落とさせる。
    const baseName = ariaLabel || (typeof label === "string" ? label : undefined);
    // バッジの数は見えている文字なので、名前の後ろにも足す。足さないと、見えている数で音声操作できない
    // （WCAG 2.5.3 / axe: label-content-name-mismatch）。
    // 0 件のバッジは出さない。以前は `{badge && …}` で、0 のときに React が素の「0」を描き、名前も
    // 「Notifications 0」になっていた（#1023 の作業中に気づいた）。
    const badgeCount = typeof badge === "number" && badge > 0 ? badge : undefined;
    const showBadge = badge === true || badgeCount !== undefined;
    const accessibleName = baseName && badgeCount !== undefined ? `${baseName} ${badgeCount}` : baseName;
    const hasName =
      !!accessibleName ||
      !!label ||
      !!children ||
      !!props["aria-labelledby"] ||
      typeof description === "string";
    useEffect(() => {
      if (isDev && !hasName) {
        console.warn(
          "[wimui] FloatButton has no accessible name. Pass `aria-label` (or a string `label`) that describes the action.",
        );
      }
    }, [hasName]);

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
        aria-label={accessibleName}
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
          {/* 見た目には出ない空白。axe は子要素の文字を空白なしでつなぐので、無いとラベルと数が 1 語になる */}
          {badgeCount !== undefined && " "}
          {showBadge && (
            <span
              className={classNames(
                styles.badge,
                badge === true && styles.dot,
              )}
            >
              {badgeCount ?? ""}
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
