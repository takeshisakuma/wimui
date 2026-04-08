import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import "./heading.scss";
import { WimColor } from "../../../types/tokens";
import { getColorValue } from "../../../utilities/style-utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * If true, the heading will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /**
   * The semantic HTML tag to use.
   */
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /**
   * The visual size of the heading.
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  /**
   * Text color.
   */
  color?: WimColor;
  /**
   * Text alignment.
   */
  align?: "left" | "center" | "right";
  decoration?: "underline" | "highlight" | "none"; // line-throughは除外
  children: React.ReactNode;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      asChild = false,
      tag = "h1",
      size = "xl",
      color,
      align = "left",
      decoration = "none",
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const finalContent =
      decoration !== "none" ? (
        <span
          className={
            decoration === "highlight"
              ? "wim-heading__highlight"
              : `wim-heading--${decoration}`
          }
        >
          <Slottable>{children}</Slottable>
        </span>
      ) : (
        <Slottable>{children}</Slottable>
      );

    const mappedColors = [
      "black",
      "deepgray",
      "gray",
      "lightgray",
      "white",
      "error",
      "primary",
      "success",
      "warning",
      "info",
    ];
    const useClassNameForColor = typeof color === "string" && mappedColors.includes(color);

    const Component = asChild ? Slot : tag;

    return (
      <Component
        ref={ref}
        className={classNames(
          "wim-heading",
          `wim-heading--${size}`,
          useClassNameForColor && `wim-heading--${color}`,
          `wim-heading--${align}`,
          className,
        )}
        style={{
          color: !useClassNameForColor ? getColorValue(color) : undefined,
          ...(style as React.CSSProperties),
        }}
        {...props}
      >
        {finalContent}
      </Component>
    );
  },
);

Heading.displayName = "Heading";
