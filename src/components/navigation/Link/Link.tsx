import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import styles from "./link.module.scss";
import { Icon } from "../../media/Icon/Icon";
import { ComponentSize } from "../../../types/tokens";

export type LinkProps = React.ComponentPropsWithoutRef<"a"> & {
  /**
   * If true, the link will be rendered as its child, merging its props onto that child.
   * Useful for using the link styles with Link components from React Router or Next.js.
   */
  asChild?: boolean;
  label?: React.ReactNode;
  size?: ComponentSize;
  priority?: "primary" | "secondary" | "tertiary";
  iconName?: React.ComponentProps<typeof Icon>["name"];
  iconPosition?: "left" | "right";
  external?: boolean;
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
          styles.root,
          styles[size],
          styles[priority],
          external && styles.external,
          className,
        )}
        target={resolvedTarget}
        {...props}
      >
        <span className={styles.inner}>
          {iconName && iconPosition === "left" && (
            <Icon name={iconName} size={size} />
          )}
          <span className={styles.label}>
            <Slottable>{label ?? children}</Slottable>
          </span>
          {iconName && iconPosition === "right" && (
            <Icon name={iconName} size={size} />
          )}
          {external && (
            <Icon
              name="ExternalLinkIcon"
              size={size}
              className={styles.externalIcon}
            />
          )}
        </span>
      </Component>
    );
  },
);

Link.displayName = "Link";
