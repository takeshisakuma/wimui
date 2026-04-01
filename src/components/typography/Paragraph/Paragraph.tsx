import React from "react";
import classNames from "classnames";
import "./paragraph.scss";
import { WimColor, WimLineHeight, WimFontSize, WimFontWeight } from "../../../types/tokens";
import {
  getColorValue,
  getFontSizeValue,
  getLineHeightValue,
  getFontWeightValue,
} from "../../../utilities/style-utils";

type ParagraphProps = Omit<React.ComponentPropsWithoutRef<"p">, "content"> & {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: WimColor;
  weight?: "normal" | "bold" | "medium";
  lineHeight?: WimLineHeight;
  fontStyle?: "normal" | "italic";
  decoration?: "line-through" | "underline" | "highlight" | "none";
  content?: React.ReactNode;
};

export const Paragraph = ({
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
}: ParagraphProps) => {
  const finalContent = content ?? children;

  const innerContent =
    decoration !== "none" ? (
      <span className={`wim-paragraph--${decoration}`}>{finalContent}</span>
    ) : (
      finalContent
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

  return (
    <p
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
    </p>
  );
};
