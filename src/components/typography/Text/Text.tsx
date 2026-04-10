import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import styles from "./text.module.scss";
import { WimColor, WimLineHeight, WimFontSize, WimFontWeight } from "../../../types/tokens";
import {
  getColorValue,
  getFontSizeValue,
  getLineHeightValue,
  getFontWeightValue,
} from "../../../utilities/style-utils";

export type TextProps = Omit<React.ComponentPropsWithoutRef<"p">, "content"> & {
  /**
   * If true, the text будет rendered as its child, merging its props onto that child.
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

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
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
        <span className={styles[decoration]}>
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
          styles.root,
          styles[size],
          weight === "bold" && styles.bold,
          fontStyle === "italic" && styles.italic,
          useClassNameForColor && styles[color as keyof typeof styles],
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

Text.displayName = "Text";
