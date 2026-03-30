import React from "react";
import { useTranslation } from "react-i18next";
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
  size = "md",
  variant = "outlined",
  intent = "default",
  backgroundColor,
  label,
  icon,
  iconPosition = "left",
  "aria-label": ariaLabel,
  ...props
}: LinkButtonProps) => {
  const { t } = useTranslation();
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
        !label && !!icon && "wim-button--icon-only",
        className,
      )}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
      aria-label={ariaLabel ? t(ariaLabel) : undefined}
    >
      <span className="wim-button__inner">
        {iconName && iconPosition === "left" && (
          <Icon name={iconName} size={size} />
        )}
        {label && <span className="wim-button__label">{t(label)}</span>}
        {iconName && iconPosition === "right" && (
          <Icon name={iconName} size={size} />
        )}
      </span>
    </a>
  );
};
