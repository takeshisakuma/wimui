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
  /**
   * Link text or element. Alternative to children.
   */
  label?: React.ReactNode;
  /**
   * Font size of the link.
   * @default "md"
   */
  size?: ComponentSizeBasic;
  /**
   * Visual emphasis of the link.
   * @default "primary"
   */
  priority?: "primary" | "secondary" | "tertiary";
  /**
   * Name of the icon displayed alongside the label.
   */
  iconName?: React.ComponentProps<typeof Icon>["name"];
  /**
   * Position of the icon relative to the label.
   * @default "left"
   */
  iconPosition?: "left" | "right";
  /**
   * If true, opens the link in a new tab and shows an external-link icon.
   * @default false
   */
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

    const renderInner = (content: React.ReactNode) => (
      <span className={classNames(localStyles.inner, stylesProp?.inner)}>
        {iconName && iconPosition === "left" && (
          <Icon name={iconName} size={size} />
        )}
        <span className={classNames(localStyles.label, stylesProp?.label)}>
          {content}
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
    );

    return (
      <Component
        ref={ref}
        className={classNames("wim-link", 
          localStyles.root,
          localStyles[size],
          localStyles[priority],
          className,
          stylesProp?.root,
        )}
        target={resolvedTarget}
        {...props}
      >
        {asChild ? (
          // Slot は直下の Slottable しか探さない。Slottable を内側の span の中に置くと、子ではなく
          // その span が根になり、href もクラスも span に付く（T323）。`child` で子を名指しして、
          // 子の中身を内側の span で包み直す ── asChild でも、中の作りは同じになる
          <Slottable child={children}>{(slotted) => renderInner(label ?? slotted)}</Slottable>
        ) : (
          renderInner(label ?? children)
        )}
      </Component>
    );
  },
);

Link.displayName = "Link";
