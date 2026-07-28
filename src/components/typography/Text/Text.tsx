import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import styles from "./text.module.scss";
import { WimColor, WimLineHeight, WimFontSize, WimFontWeight, WimFontWeightKey, ComponentSizeText } from "../../../types/tokens";
import {
  getColorValue,
  getFontSizeValue,
  getLineHeightValue,
  getFontWeightValue,
} from "../../../utilities/style-utils";

export type TextProps = Omit<React.ComponentPropsWithoutRef<"p">, "content"> & {
  /**
   * If true, the text will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /**
   * Font size of the text.
   * @default "md"
   */
  size?: ComponentSizeText;
  /**
   * Text color. Accepts a design token color name or any CSS color value.
   */
  color?: WimColor;
  /**
   * Font weight.
   * @default "normal"
   */
  weight?: WimFontWeightKey;
  /**
   * Line height. Accepts a design token name or any CSS line-height value.
   */
  lineHeight?: WimLineHeight;
  /**
   * Font style.
   * @default "normal"
   */
  fontStyle?: "normal" | "italic";
  /**
   * Visual decoration applied to the text.
   * @default "none"
   */
  decoration?: "line-through" | "underline" | "highlight" | "none";
  /**
   * Keep the text on one line instead of wrapping. Overflow is left visible —
   * use `truncate` to clip it with an ellipsis.
   * @default false
   */
  nowrap?: boolean;
  /**
   * Keep the text on one line and clip the overflow with an ellipsis.
   * Implies `nowrap`.
   * @default false
   */
  truncate?: boolean;
  /**
   * Content of the text. Alternative to children (children take precedence only with asChild).
   */
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
      nowrap = false,
      truncate = false,
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const finalContent = asChild ? children : (content ?? children);

    const innerContent =
      !asChild && decoration !== "none" ? (
        <span className={styles[decoration]}>
          <Slottable>{finalContent}</Slottable>
        </span>
      ) : (
        <Slottable>{finalContent}</Slottable>
      );

    // For backward compatibility with CSS classes for certain colors
    // "secondary" は塗り用トークン --wim-color-secondary (gy7-5) ではなく
    // テキスト用 --wim-color-text-secondary に解決する（axe: color-contrast）
    const mappedColors = [
      "danger",
      "primary",
      "success",
      "warning",
      "info",
      "secondary",
    ];
    const useClassNameForColor = typeof color === "string" && mappedColors.includes(color);

    const Component = asChild ? Slot : "p";

    return (
      <Component
        ref={ref}
        className={classNames("wim-text", 
          styles.root,
          styles[size],
          weight === "bold" && styles.bold,
          fontStyle === "italic" && styles.italic,
          useClassNameForColor && styles[color as keyof typeof styles],
          asChild && decoration !== "none" && styles[decoration],
          (nowrap || truncate) && styles.nowrap,
          truncate && styles.truncate,
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
