import React from "react";
import PropTypes from "prop-types";
import "./button.scss";
import { useTranslation } from 'react-i18next';
import { Icon } from "../Icon/Icon";

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  backgroundColor?: string | null;
  size?: "small" | "medium" | "large";
  label?: string;
  weight?: "bold" | "normal";
  role?: "primary" | "secondary" | "danger";
  color?: "white" | "black";
  state?: "abled" | "disabled";
  iconName?: "CircleIcon" | "SquareIcon";
  iconPosition?: "left" | "right";
};

export const Button = ({
  size = "medium",
  label,
  weight = "bold",
  color = "black",
  role = "secondary",
  state = "abled",
  iconName = undefined,
  iconPosition = "left",
  backgroundColor,
  ...props
}: ButtonProps) => {
  const { t } = useTranslation();

  const sizeMap = { small: 'sm', medium: 'md', large: 'lg' };
  const sizeClass = `wim-button--${sizeMap[size]}`;
  const roleClass = `wim-button--${role}`;
  const iconOnlyClass = !label && iconName ? 'wim-button--icon-only' : '';

  const iconComponent = iconName ? <Icon name={iconName} size={size} /> : null;

  const content = (
    <>
      {iconName && iconPosition === 'left' && iconComponent}
      {label && <span className="wim-button__label">{t(label)}</span>}
      {iconName && iconPosition === 'right' && iconComponent}
    </>
  );

  return (
    <button
      type="button"
      style={backgroundColor ? { backgroundColor } : undefined}
      className={[`wim-button`, sizeClass, roleClass, iconOnlyClass, `wim-weight-${weight}`].filter(Boolean).join(" ")}
      disabled={state === 'disabled'}
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
  weight: PropTypes.oneOf(["normal", "bold"]),
  color: PropTypes.oneOf(["black", "white"]),
  role: PropTypes.oneOf(["primary", "secondary", "danger"]),
  state: PropTypes.oneOf(["abled", "disabled"]),
  iconName: PropTypes.oneOf(["CircleIcon", "SquareIcon"]),
  iconPosition: PropTypes.oneOf(["left", "right"]),
}
