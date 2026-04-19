import React from "react";
import classNames from "classnames";
import { ButtonProps } from "../../form/Button/Button";
import buttonStyles from "../../form/Button/button.module.scss";
import { Icon } from "../../media/Icon/Icon";
import { getColorValue } from "../../../utilities/style-utils";

export type LinkButtonProps = React.ComponentPropsWithoutRef<"a"> &
  Omit<ButtonProps, "onClick" | "type">;

/**
 * ボタンの見た目をしたアンカー（リンク）コンポーネント。
 */
export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      children,
      icon,
      iconPosition = "left",
      size = "md",
      variant = "outline",
      intent = "default",
      backgroundColor,
      justify = "center",
      fullWidth = false,
      className,
      style,
      "aria-label": ariaLabelProp,
      ...props
    },
    ref,
  ) => {
    const justifyStyle =
      justify === "start"
        ? "flex-start"
        : justify === "end"
          ? "flex-end"
          : justify === "between"
            ? "space-between"
            : justify;

    const iconContent = icon
      ? typeof icon === "string"
        ? <Icon name={icon as React.ComponentProps<typeof Icon>["name"]} size={size} />
        : icon
      : null;

    const bgStyle = backgroundColor ? { backgroundColor: getColorValue(backgroundColor) } : {};

    return (
      <a
        ref={ref}
        className={classNames(
          buttonStyles.root,
          buttonStyles[size],
          buttonStyles[variant],
          buttonStyles[intent],
          !children && !!icon && buttonStyles.iconOnly,
          fullWidth && buttonStyles.fullWidth,
          className,
        )}
        style={{ justifyContent: justifyStyle, ...bgStyle, ...style }}
        aria-label={ariaLabelProp}
        {...props}
      >
        <span className={buttonStyles.content}>
          {iconContent && iconPosition === "left" && iconContent}
          {children}
          {iconContent && iconPosition === "right" && iconContent}
        </span>
      </a>
    );
  },
);

LinkButton.displayName = "LinkButton";
