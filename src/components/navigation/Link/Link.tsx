import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import localStyles from "./link.module.scss";
import { Icon } from "../../media/Icon/Icon";
import { ComponentSizeBasic } from "../../../types/tokens";
import { ExternalLinkIcon } from "@/icon";

export type LinkProps = React.ComponentPropsWithoutRef<"a"> & {
  /**
   * If true, the link will be rendered as its child, merging its props onto that child.
   * Useful for using the link styles with Link components from React Router or Next.js.
   */
  asChild?: boolean;
  label?: React.ReactNode;
  size?: ComponentSizeBasic;
  priority?: "primary" | "secondary" | "tertiary";
  iconName?: React.ComponentProps<typeof Icon>["name"];
  iconPosition?: "left" | "right";
  external?: boolean;
  /** Custom styles for internal parts */
  styles?: {
    root?: string;
    label?: string;
    inner?: string;
    externalIcon?: string;
  };
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      asChild = false,
      label,
      size = "md",
      priority = "primary",
      iconName,
      iconPosition = "left",
      external = false,
      styles: stylesProp,
      className,
      children,
      target,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : "a";
    const resolvedTarget = external ? "_blank" : target;

    return (
      <Component
        ref={ref}
        className={classNames(
          localStyles.root,
          localStyles[size],
          localStyles[priority],
          external && localStyles.external,
          className,
          stylesProp?.root,
        )}
        target={resolvedTarget}
        {...props}
      >
        <span className={classNames(localStyles.inner, stylesProp?.inner)}>
          {iconName && iconPosition === "left" && (
            <Icon name={iconName} size={size} />
          )}
          <span className={classNames(localStyles.label, stylesProp?.label)}>
            <Slottable>{label ?? children}</Slottable>
          </span>
          {iconName && iconPosition === "right" && (
            <Icon name={iconName} size={size} />
          )}
          {external && (
            <Icon
              component={ExternalLinkIcon}
              size={size}
              className={classNames(localStyles.externalIcon, stylesProp?.externalIcon)}
            />
          )}
        </span>
      </Component>
    );
  },
);

Link.displayName = "Link";
