import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { ButtonProps } from "../../form/Button/Button";
import buttonStyles from "../../form/Button/button.module.scss";
import { Icon } from "../../media/Icon/Icon";
import { getColorValue } from "../../../utilities/style-utils";
import type { ComponentSizeBasic, ButtonVariant, ButtonIntent } from "../../../types/tokens";

export type LinkButtonProps = React.ComponentPropsWithoutRef<"a"> &
  Omit<ButtonProps, "onClick" | "type"> & {
    /** Position of the icon relative to the label */
    iconPosition?: "left" | "right";
    /** Size of the button */
    size?: ComponentSizeBasic;
    /** Visual style variant of the button */
    variant?: ButtonVariant;
    /** Design intent of the button (visual / semantic state). Unrelated to the ARIA role attribute. */
    intent?: ButtonIntent;
    /** Horizontal alignment of the button content */
    justify?: "start" | "center" | "end" | "between";
    /** Whether the button should take up the full width of its container */
    fullWidth?: boolean;
  };

/**
 * Anchor (link) component that looks like a button.
 */
export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      asChild = false,
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
    const Root = asChild ? Slot : "a";

    return (
      <Root
        ref={ref}
        className={classNames(
          "wim-link-button",
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
        {asChild && iconContent && iconPosition === "left" ? iconContent : null}
        {asChild ? (
          <Slottable>{children}</Slottable>
        ) : (
          <span className={buttonStyles.content}>
            {iconContent && iconPosition === "left" && iconContent}
            {children}
            {iconContent && iconPosition === "right" && iconContent}
          </span>
        )}
        {asChild && iconContent && iconPosition === "right" ? iconContent : null}
      </Root>
    );
  },
);

LinkButton.displayName = "LinkButton";
