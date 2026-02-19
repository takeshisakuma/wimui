import React from "react";
import classNames from "classnames";
import "./paragraph.scss";
import { useTranslation } from "react-i18next";

type ParagraphProps = React.ComponentPropsWithoutRef<"p"> & {
  size?: "ex-small" | "small" | "medium" | "large" | "ex-large";
  color?: "black" | "deepgray" | "gray" | "lightgray" | "white" | "error" | "primary" | "success" | "warning" | "info";
  weight?: "normal" | "bold";
  lineHeight?:
  | "normal-jpan"
  | "tight-jpan"
  | "loose-jpan"
  | "normal-latn"
  | "tight-latn"
  | "loose-latn";
  fontStyle?: "normal" | "italic";
  decoration?: "line-through" | "underline" | "highlight" | "none"; // 追加
  content: string;
};

export const Paragraph = ({
  size = "medium",
  content = "text",
  color = "black",
  weight = "normal",
  lineHeight = "normal-latn",
  fontStyle = "normal",
  decoration = "none",
  className,
  ...props
}: ParagraphProps) => {
  const { t } = useTranslation();

  const innerContent = decoration !== "none" ? (
    <span className={`wim-paragraph--${decoration}`}>{t(content)}</span>
  ) : (
    t(content)
  );

  return (
    <p
      className={classNames(
        "wim-paragraph",
        `wim-paragraph--${size === "ex-small" ? "xs" : size === "small" ? "sm" : size === "large" ? "lg" : size === "ex-large" ? "xl" : "md"}`,
        `wim-paragraph--${lineHeight}`,
        weight === "bold" && "wim-paragraph--bold",
        fontStyle === "italic" && "wim-paragraph--italic",
        `wim-paragraph--${color}`,
        className
      )}
      {...props}
    >
      {innerContent}
    </p>
  );
};
