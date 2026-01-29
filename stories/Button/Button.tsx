import React from "react";
import PropTypes from "prop-types";
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
  iconName?: "CircleIcon" | "SquareIcon";
  iconPosition?: "left" | "right";
  "aria-label"?: string;
};

export const Button = ({
  size = "medium",
  label,
  priority = "secondary",
  role = "default",
  state = "abled",
  iconName = undefined,
  iconPosition = "left",
  backgroundColor,
  "aria-label": ariaLabel,
  ...props
}: ButtonProps) => {
  const { t } = useTranslation();

  const sizeMap: Record<"small" | "medium" | "large", string> = {
    small: "sm",
    medium: "md",
    large: "lg",
  };
  const sizeClass = `wim-button--${sizeMap[size]}`;
  const priorityClass = `wim-button--${priority}`;
  const roleClass = `wim-button--${role}`;
  const iconOnlyClass = !label && iconName ? "wim-button--icon-only" : "";

  const iconComponent = iconName ? <Icon name={iconName} size={size} /> : null;

  const content = (
    <>
      {iconName && iconPosition === "left" && iconComponent}
      {label && <span className="wim-button__label">{t(label)}</span>}
      {iconName && iconPosition === "right" && iconComponent}
    </>
  );

  return (
    <button
      type="button"
      style={backgroundColor ? { backgroundColor } : undefined}
      className={[
        `wim-button`,
        sizeClass,
        priorityClass,
        roleClass,
        iconOnlyClass,
      ]
        .filter(Boolean)
        .join(" ")}
      disabled={state === "disabled"}
      aria-label={ariaLabel || (!label && iconName ? iconName : undefined)}
      {...props}
    >
      {content}
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string,
  onClick: PropTypes.func,
  priority: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  role: PropTypes.oneOf(["default", "destructive", "positive"]),
  state: PropTypes.oneOf(["abled", "disabled"]),
  iconName: PropTypes.oneOf(["CircleIcon", "SquareIcon"]),
  iconPosition: PropTypes.oneOf(["left", "right"]),
  "aria-label": PropTypes.string,
};
