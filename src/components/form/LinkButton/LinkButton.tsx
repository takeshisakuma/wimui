import React from "react";
import classNames from "classnames";
import { Button } from "../../form/Button/Button";
import { Icon } from "../../media/Icon/Icon";

type LinkButtonProps = React.ComponentPropsWithoutRef<"a"> &
  Omit<React.ComponentPropsWithoutRef<typeof Button>, "onClick" | "type">;

/**
 * ボタンの見た目をしたアンカー（リンク）コンポーネント。
 */
export const LinkButton = ({
  className,
  size = "md",
  variant = "outline",
  intent = "default",
  backgroundColor,
  children,
  icon,
  iconPosition = "left",
  "aria-label": ariaLabel,
  ...props
}: LinkButtonProps) => {
  const iconName = typeof icon === "string"
    ? (icon as React.ComponentProps<typeof Icon>["name"])
    : undefined;
  return (
    <a
      className={classNames(
        "wim-button",
        `wim-button--${size}`,
        `wim-button--${variant}`,
        `wim-button--${intent}`,
        !children && !!icon && "wim-button--icon-only",
        className,
      )}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
      aria-label={ariaLabel}
    >
      <span className="wim-button__inner">
        {iconName && iconPosition === "left" && (
          <Icon name={iconName} size={size} />
        )}
        {children && <span className="wim-button__label">{children}</span>}
        {iconName && iconPosition === "right" && (
          <Icon name={iconName} size={size} />
        )}
      </span>
    </a>
  );
};
