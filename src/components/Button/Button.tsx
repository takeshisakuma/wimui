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
  iconName?: React.ComponentProps<typeof Icon>["name"];
  iconPosition?: "left" | "right";
  loading?: boolean;
  justify?: "start" | "center" | "end" | "between";
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
      iconName = undefined,
      iconPosition = "left",
      loading = false,
      backgroundColor,
      justify = "center",
      "aria-label": ariaLabelProp,
      className,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const { t } = useTranslation();

    // `state="disabled"` は後方互換のために残すが、標準の `disabled` を優先
    const isDisabled = disabled || state === "disabled";

    // aria-label の決定ロジックを明示的に整理
    let resolvedAriaLabel: string | undefined;
    if (typeof ariaLabelProp === "string") {
      resolvedAriaLabel = ariaLabelProp;
    } else if (ariaLabelProp !== false) {
      // アイコンのみボタンはアイコン名をフォールバックとして使用
      if (!label && !children && iconName) {
        resolvedAriaLabel = iconName;
      } else if (loading) {
        resolvedAriaLabel = "Loading";
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
          {iconName && iconPosition === "left" && (
            <Icon name={iconName} size={size} />
          )}
          {label && (
            <span
              className="wim-button__label"
              style={{ textAlign: "inherit", width: "100%" }}
            >
              {t(label)}
            </span>
          )}
          {children}
          {iconName && iconPosition === "right" && (
            <Icon name={iconName} size={size} />
          )}
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
        ref={ref}
        type="button"
        style={{
          ...props.style,
          ...(backgroundColor ? { backgroundColor } : {}),
        }}
        className={classNames(
          "wim-button",
          `wim-button--${size === "small" ? "sm" : size === "large" ? "lg" : "md"}`,
          `wim-button--${priority}`,
          `wim-button--${role}`,
          loading && "wim-button--loading",
          !label && !children && iconName && "wim-button--icon-only",
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
