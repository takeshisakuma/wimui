import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import styles from "./title.module.scss";
import { WimColor } from "../../../types/tokens";
import { getColorValue } from "../../../utilities/style-utils";

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * If true, the heading will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /**
   * The semantic HTML tag to use.
   */
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /**
   * The visual size of the title.
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
  decoration?: "underline" | "highlight" | "none";
  children: React.ReactNode;
}

export const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
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
    const sizeClass = size ? size.replace(/^(\d+)/, (match, p1) => `xl${p1}`) : size;

    const finalContent =
      !asChild && decoration !== "none" ? (
        <span
          className={
            decoration === "highlight"
              ? styles.highlight
              : styles[decoration]
          }
        >
          <Slottable>{children}</Slottable>
        </span>
      ) : (
        <Slottable>{children}</Slottable>
      );

    const mappedColors = [
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
          styles.root,
          styles[sizeClass as keyof typeof styles],
          useClassNameForColor && styles[color as keyof typeof styles],
          styles[align],
          asChild && decoration !== "none" && (decoration === "highlight" ? styles.highlight : styles[decoration]),
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

Title.displayName = "Title";
