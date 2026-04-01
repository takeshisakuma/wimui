import React from "react";
import "./heading.scss";
import classNames from "classnames";
import { WimColor } from "../../../types/tokens";
import { getColorValue } from "../../../utilities/style-utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
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

export const Heading = ({
  tag = "h1",
  size = "xl",
  color,
  align = "left",
  decoration = "none",
  className,
  style,
  children,
  ...props
}: HeadingProps) => {
  const finalContent =
    decoration !== "none" ? (
      <span
        className={
          decoration === "highlight"
            ? "wim-heading__highlight"
            : `wim-heading--${decoration}`
        }
      >
        {children}
      </span>
    ) : (
      children
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

  return React.createElement(
    tag,
    {
      className: classNames(
        "wim-heading",
        `wim-heading--${size}`,
        useClassNameForColor && `wim-heading--${color}`,
        `wim-heading--${align}`,
        className,
      ),
      style: {
        color: !useClassNameForColor ? getColorValue(color) : undefined,
        ...(style as React.CSSProperties),
      },
      ...props,
    },
    finalContent,
  );
};
