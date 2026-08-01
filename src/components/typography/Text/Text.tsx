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
   * Clip the text after this many lines and end it with an ellipsis.
   *
   * `truncate` is the one-line case; this is the multi-line one. Use it when the
   * text simply has to stop — a card blurb, a table cell, a list subtitle. If the
   * reader needs a way to see the rest, use `Spoiler` instead: it always renders
   * a toggle, which is the point of that component and the reason it cannot be
   * used for "just stop at three lines".
   *
   * Ignored when `truncate` is set (one line wins; they cannot both apply).
   */
  lineClamp?: number;
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
      lineClamp,
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

    // 1 行と多行は同時に成立しない。`truncate` を優先し、`lineClamp` は無視する
    // （両方当てると `-webkit-box` と `white-space: nowrap` が食い合って、
    //  どちらの見た目にもならない）。
    const clampLines = !truncate && typeof lineClamp === "number" && lineClamp > 0
      ? Math.floor(lineClamp)
      : undefined;

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
          clampLines !== undefined && styles.lineClamp,
          className,
        )}
        style={{
          color: !useClassNameForColor ? getColorValue(color) : undefined,
          fontSize: getFontSizeValue(size as WimFontSize),
          lineHeight: getLineHeightValue(lineHeight),
          fontWeight: getFontWeightValue(weight as WimFontWeight),
          ...(clampLines !== undefined
            ? ({ "--wim-text-line-clamp": clampLines } as React.CSSProperties)
            : null),
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
