import React from "react";
import classNames from "classnames";
import "./button.scss";
import { useTranslation } from "react-i18next";
import { Icon } from "../Icon/Icon";

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  backgroundColor?: string | null;
  size?: "small" | "medium" | "large";
  label?: string;
  priority?: "primary" | "secondary" | "tertiary";
  /** @deprecated Use the standard HTML `disabled` prop instead. */
  role?: "default" | "destructive" | "positive";
  /** @deprecated Use the standard HTML `disabled` prop instead. */
  state?: "abled" | "disabled";
  /** Icon name or custom icon element */
  icon?: React.ComponentProps<typeof Icon>["name"] | React.ReactNode;
  /** @deprecated Use icon instead */
  iconName?: React.ComponentProps<typeof Icon>["name"];
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
      size = "medium",
      label,
      priority = "secondary",
      role = "default",
      state,
      icon,
      iconName,
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
    const { t } = useTranslation();
    const internalRef = React.useRef<HTMLButtonElement>(null);
    const buttonRef = (forwardedRef as React.RefObject<HTMLButtonElement>) || internalRef;
    const [animatedWidth, setAnimatedWidth] = React.useState<number | "auto">("auto");
    const isInitialMount = React.useRef(true);

    // Initial label for tracking changes
    const memoizedLabel = React.useMemo(() => (label ? t(label) : ""), [label, t]);

    React.useLayoutEffect(() => {
      if (!animateWidth || !buttonRef.current) return;

      if (isInitialMount.current) {
        isInitialMount.current = false;
        return;
      }

      const node = buttonRef.current;
      
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
    }, [memoizedLabel, animateWidth, buttonRef]);

    // `state="disabled"` は後方互換のために残すが、標準の `disabled` を優先
    const isDisabled = disabled || state === "disabled";

    // aria-label の決定ロジックを明示的に整理
    let resolvedAriaLabel: string | undefined;
    if (typeof ariaLabelProp === "string") {
      resolvedAriaLabel = t(ariaLabelProp);
    } else if (ariaLabelProp !== false) {
      // アイコンのみボタンはアイコン名をフォールバックとして使用
      if (!label && !children && iconName) {
        resolvedAriaLabel = t(`icon_${iconName}`, { defaultValue: iconName });
      } else if (loading) {
        resolvedAriaLabel = t("a11y_loading");
      }
    }

    const justifyStyle =
      justify === "start"
        ? "flex-start"
        : justify === "end"
          ? "flex-end"
          : justify === "between"
            ? "space-between"
            : justify;

    const renderIcon = () => {
      const effectiveIcon = icon || iconName;
      if (!effectiveIcon) return null;
      if (typeof effectiveIcon === "string") {
        return <Icon name={effectiveIcon as any} size={size} />;
      }
      return effectiveIcon;
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
          {label && (
            <span
              className="wim-button__label"
              style={{ textAlign: "inherit", width: "100%" }}
            >
              {t(label)}
            </span>
          )}
          {children}
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
        ref={forwardedRef || internalRef}
        type="button"
        style={{
          ...props.style,
          ...(backgroundColor ? { backgroundColor } : {}),
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
          `wim-button--${size === "small" ? "sm" : size === "large" ? "lg" : "md"}`,
          `wim-button--${priority}`,
          `wim-button--${role}`,
          loading && "wim-button--loading",
          animateWidth && "wim-button--animated-width",
          fullWidth && "wim-button--full-width",
          !label && !children && !!(icon || iconName) && "wim-button--icon-only",
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
