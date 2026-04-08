import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import "./paragraph.scss";
import { WimColor, WimLineHeight, WimFontSize, WimFontWeight } from "../../../types/tokens";
import {
  getColorValue,
  getFontSizeValue,
  getLineHeightValue,
  getFontWeightValue,
} from "../../../utilities/style-utils";

export type ParagraphProps = Omit<React.ComponentPropsWithoutRef<"p">, "content"> & {
  /**
   * If true, the paragraph will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: WimColor;
  weight?: "normal" | "bold" | "medium";
  lineHeight?: WimLineHeight;
  fontStyle?: "normal" | "italic";
  decoration?: "line-through" | "underline" | "highlight" | "none";
  content?: React.ReactNode;
};

export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  (
    {
      asChild = false,
      size = "md",
      content,
      color,
      weight = "normal",
      lineHeight,
      fontStyle = "normal",
      decoration = "none",
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const finalContent = content ?? children;

    const innerContent =
      decoration !== "none" ? (
        <span className={`wim-paragraph--${decoration}`}>
          <Slottable>{finalContent}</Slottable>
        </span>
      ) : (
        <Slottable>{finalContent}</Slottable>
      );

    // For backward compatibility with CSS classes for certain colors
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

    const Component = asChild ? Slot : "p";

    return (
      <Component
        ref={ref}
        className={classNames(
          "wim-paragraph",
          `wim-paragraph--${size}`,
          weight === "bold" && "wim-paragraph--bold",
          fontStyle === "italic" && "wim-paragraph--italic",
          useClassNameForColor && `wim-paragraph--${color}`,
          className,
        )}
        style={{
          color: !useClassNameForColor ? getColorValue(color) : undefined,
          fontSize: getFontSizeValue(size as WimFontSize),
          lineHeight: getLineHeightValue(lineHeight),
          fontWeight: getFontWeightValue(weight as WimFontWeight),
          ...(style as React.CSSProperties),
        }}
        {...props}
      >
        {innerContent}
      </Component>
    );
  },
);

Paragraph.displayName = "Paragraph";
