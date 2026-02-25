import React from "react";
import classNames from "classnames";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

type LinkButtonProps = React.ComponentPropsWithoutRef<"a"> &
  Omit<React.ComponentPropsWithoutRef<typeof Button>, "onClick" | "type">;

/**
 * ボタンの見た目をしたアンカー（リンク）コンポーネント。
 */
export const LinkButton = ({
  className,
  size = "medium",
  priority = "secondary",
  role = "default",
  backgroundColor,
  label,
  iconName,
  iconPosition = "left",
  ...props
}: LinkButtonProps) => {
  return (
    <a
      className={classNames(
        "wim-button",
        `wim-button--${size === "small" ? "sm" : size === "large" ? "lg" : "md"}`,
        `wim-button--${priority}`,
        `wim-button--${role}`,
        !label && iconName && "wim-button--icon-only",
        className,
      )}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      <span className="wim-button__inner">
        {iconName && iconPosition === "left" && (
          <Icon name={iconName} size={size} />
        )}
        {label && <span className="wim-button__label">{label}</span>}
        {iconName && iconPosition === "right" && (
          <Icon name={iconName} size={size} />
        )}
      </span>
    </a>
  );
};
