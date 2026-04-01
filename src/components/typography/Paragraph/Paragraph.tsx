import React from "react";
import classNames from "classnames";
import "./paragraph.scss";
import { WimColor, WimLineHeight } from "../../../types/tokens";

type ParagraphProps = Omit<React.ComponentPropsWithoutRef<"p">, "content"> & {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?:
  | "black"
  | "deepgray"
  | "gray"
  | "lightgray"
  | "white"
  | "error"
  | "primary"
  | "success"
  | "warning"
  | "info"
  | WimColor;
  weight?: "normal" | "bold";
  lineHeight?:
  | "normal-jpan"
  | "tight-jpan"
  | "loose-jpan"
  | "normal-latn"
  | "tight-latn"
  | "loose-latn"
  | WimLineHeight;
  fontStyle?: "normal" | "italic";
  decoration?: "line-through" | "underline" | "highlight" | "none"; // 追加
  content?: React.ReactNode;
};

export const Paragraph = ({
  size = "md",
  content,
  color = "black",
  weight = "normal",
  lineHeight = "normal-latn",
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

  const isCustomColor = color && (color.startsWith("var(") || color.includes("#") || color.includes("rgb"));
  const isCustomLineHeight = lineHeight && lineHeight.startsWith("var(");

  return (
    <p
      className={classNames(
        "wim-paragraph",
        `wim-paragraph--${size}`,
        !isCustomLineHeight && `wim-paragraph--${lineHeight}`,
        weight === "bold" && "wim-paragraph--bold",
        fontStyle === "italic" && "wim-paragraph--italic",
        !isCustomColor && `wim-paragraph--${color}`,
        className,
      )}
      style={{
        color: isCustomColor ? color : undefined,
        lineHeight: isCustomLineHeight ? lineHeight : undefined,
        ...(style as React.CSSProperties),
      }}
      {...props}
    >
      {innerContent}
    </p>
  );
};
