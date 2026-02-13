import React from "react";
import classNames from "classnames";
import "./button.scss";
import { useTranslation } from "react-i18next";
import { Icon } from "../Icon/Icon";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  backgroundColor?: string | null;
  size?: "small" | "medium" | "large";
  label?: string;
  priority?: "primary" | "secondary" | "tertiary";
  role?: "default" | "destructive" | "positive";
  state?: "abled" | "disabled";
  iconName?: React.ComponentProps<typeof Icon>["name"];
  iconPosition?: "left" | "right";
  loading?: boolean;
  "aria-label"?: string | boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps & { className?: string }>(
  (
    {
      size = "medium",
      label,
      priority = "secondary",
      role = "default",
      state = "abled",
      iconName = undefined,
      iconPosition = "left",
      loading = false,
      backgroundColor,
      "aria-label": ariaLabel,
      className,
      ...props
    },
    ref
  ) => {
    const { t } = useTranslation();




    const content = (
      <>
        <span
          className="wim-button__inner"
          style={loading ? { visibility: "hidden" } : undefined}
        >
          {iconName && iconPosition === "left" && (
            <Icon name={iconName} size={size} />
          )}
          {label && <span className="wim-button__label">{t(label)}</span>}
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
        style={{ ...props.style, ...(backgroundColor ? { backgroundColor } : {}) }}
        className={classNames(
          "wim-button",
          `wim-button--${size === "small" ? "sm" : size === "large" ? "lg" : "md"}`,
          `wim-button--${priority}`,
          `wim-button--${role}`,
          loading && "wim-button--loading",
          !label && iconName && "wim-button--icon-only",
          className
        )}
        disabled={state === "disabled" || loading}
        aria-label={
          typeof ariaLabel === "string" ? ariaLabel :
            (ariaLabel === false ? undefined :
              ((!label && iconName ? iconName : undefined) ||
                (loading ? "LoadingIcon" : undefined)))
        }
        {...Object.fromEntries(Object.entries(props).filter(([key]) => key !== "aria-label"))}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";


