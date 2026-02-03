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
  iconName?: React.ComponentProps<typeof Icon>["name"];
  iconPosition?: "left" | "right";
  loading?: boolean;
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
  loading = false,
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
  const loadingClass = loading ? "wim-button--loading" : "";
  const iconOnlyClass =
    !label && iconName ? "wim-button--icon-only" : "";


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
      type="button"
      style={backgroundColor ? { backgroundColor } : undefined}
      className={[
        `wim-button`,
        sizeClass,
        priorityClass,
        roleClass,
        loadingClass,
        iconOnlyClass,
      ]
        .filter(Boolean)
        .join(" ")}
      disabled={state === "disabled" || loading}
      aria-label={
        ariaLabel ||
        (!label && iconName ? iconName : undefined) ||
        (loading ? "LoadingIcon" : undefined)
      }
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
  iconName: PropTypes.oneOf([
    "CircleIcon",
    "SquareIcon",
    "LoadingIcon",
    "ExternalLinkIcon",
    "CloseIcon",
    "SearchIcon",
    "EyeIcon",
    "EyeOffIcon",
    "ChevronDownIcon",
  ]),
  iconPosition: PropTypes.oneOf(["left", "right"]),
  loading: PropTypes.bool,
  "aria-label": PropTypes.string,
};
