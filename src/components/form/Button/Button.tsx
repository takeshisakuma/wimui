import React from "react";
import classNames from "classnames";
import "./button.scss";
import { Icon } from "../../media/Icon/Icon";
import type { WimColor, ComponentSize } from "../../../types/tokens";
import { getColorValue } from "../../../utilities/style-utils";
import { useMergedRef } from "../../../hooks/useMergedRef";

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  /** ボタンの背景色をデザイントークンで上書きする。通常は `variant` prop で対応できるため、このpropは最終手段として使用してください。 */
  backgroundColor?: WimColor;
  size?: ComponentSize;
  /** @deprecated Use `children` instead. */
  label?: React.ReactNode;
  variant?: "filled" | "outlined" | "ghost";
  /** ボタンのデザイン上の意味（視覚・意味的状態）。ARIAの role 属性とは無関係。 */
  intent?: "default" | "destructive" | "positive";
  /** Icon name or custom icon element */
  icon?: React.ComponentProps<typeof Icon>["name"] | React.ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  justify?: "start" | "center" | "end" | "between";
  /** Whether to animate the width change when label changes */
  animateWidth?: boolean;
  /** Whether the button should take up the full width of its container */
  fullWidth?: boolean;
};

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { className?: string }
>(
  (
    {
      size = "md",
      label,
      variant = "outlined",
      intent = "default",
      icon,
      iconPosition = "left",
      loading = false,
      backgroundColor,
      justify = "center",
      animateWidth = false,
      fullWidth = false,
      "aria-label": ariaLabelProp,
      className,
      disabled,
      children,
      ...props
    },
    forwardedRef,
  ) => {
    const internalRef = React.useRef<HTMLButtonElement>(null);
    const mergedRef = useMergedRef<HTMLButtonElement>(internalRef, forwardedRef);
    const [animatedWidth, setAnimatedWidth] = React.useState<number | "auto">("auto");
    const isInitialMount = React.useRef(true);

    React.useLayoutEffect(() => {
      if (!animateWidth || !internalRef.current) return;

      if (isInitialMount.current) {
        isInitialMount.current = false;
        return;
      }

      const node = internalRef.current;
      
      // 1. 現在の幅をピクセルで固定する（autoだと遷移しないため）
      const currentWidth = node.getBoundingClientRect().width;
      setAnimatedWidth(currentWidth);

      // 2. 次のラベルでの「理想の幅」を計測する
      const originalWidth = node.style.width;
      const originalMinWidth = node.style.minWidth;
      
      node.style.width = "auto";
      node.style.minWidth = "0";
      // わずかな計算誤差と、アニメーション中の ellipsis 回避のためにバッファを追加
      const targetWidth = Math.ceil(node.getBoundingClientRect().width) + 2;
      
      // 元の状態に戻す
      node.style.width = originalWidth;
      node.style.minWidth = originalMinWidth;

      // 3. 次のフレームで目標の幅を適用して transition を発動させる
      const frame = requestAnimationFrame(() => {
        setAnimatedWidth(targetWidth);
      });

      return () => cancelAnimationFrame(frame);
    }, [label, children, animateWidth]);

    const isDisabled = disabled;

    // aria-label の決定ロジックを明示的に整理
    let resolvedAriaLabel: string | undefined;
    if (typeof ariaLabelProp === "string") {
      resolvedAriaLabel = ariaLabelProp;
    } else if (ariaLabelProp !== false) {
      // アイコンのみボタンはアイコン名をフォールバックとして使用
      if (!label && !children && typeof icon === "string") {
        resolvedAriaLabel = icon;
      } else if (loading) {
        resolvedAriaLabel = "Loading";
      }
    }

    const justifyStyle =
      justify === "start"
        ? "flex-start"
        : justify === "end"
          ? "flex-end"
          : justify === "between" ? "space-between" : justify;

    const renderIcon = () => {
      if (!icon) return null;
      if (typeof icon === "string") {
        return <Icon name={icon as React.ComponentProps<typeof Icon>["name"]} size={size} />;
      }
      return icon;
    };

    const iconContent = renderIcon();

    const content = (
      <>
        <span
          className="wim-button__inner"
          style={{
            ...(loading ? { visibility: "hidden" } : {}),
            justifyContent: justifyStyle,
            textAlign:
              justify === "start"
                ? "left"
                : justify === "end"
                  ? "right"
                  : "center",
          }}
        >
          {iconContent && iconPosition === "left" && iconContent}
          {(label || children) && (
            <span
              className="wim-button__label"
              style={{ textAlign: "inherit", width: "100%" }}
            >
              {label}
              {children}
            </span>
          )}
          {iconContent && iconPosition === "right" && iconContent}
        </span>
        {loading && (
          <span className="wim-button__loader">
            <Icon name="LoadingIcon" size={size} />
          </span>
        )}
      </>
    );

    return (
      <button
        ref={mergedRef}
        type="button"
        style={{
          ...props.style,
          ...(backgroundColor ? { backgroundColor: getColorValue(backgroundColor) } : {}),
          ...(animateWidth && animatedWidth !== "auto"
            ? {
                width: `${animatedWidth}px`,
                transitionProperty:
                  props.style?.transitionProperty ||
                  "width, background-color, border-color, box-shadow, transform",
                transitionDuration: props.style?.transitionDuration || "0.3s",
                transitionTimingFunction: props.style?.transitionTimingFunction || "ease",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "clip",
              }
            : {}),
        }}
        className={classNames(
          "wim-button",
          `wim-button--${size}`,
          `wim-button--${variant}`,
          `wim-button--${intent}`,
          loading && "wim-button--loading",
          animateWidth && "wim-button--animated-width",
          fullWidth && "wim-button--full-width",
          !label && !children && !!icon && "wim-button--icon-only",
          className,
        )}
        disabled={isDisabled || loading}
        aria-label={resolvedAriaLabel}
        aria-busy={loading || undefined}
        {...props}
      >
        {content}
      </button>
    );
  },
);

Button.displayName = "Button";
