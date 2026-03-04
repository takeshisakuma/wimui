import React from "react";
import "./heading.scss";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { WimColor } from "../../types/tokens";

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
  color = "black",
  align = "left",
  decoration = "none",
  className,
  style,
  children,
  ...props
}: HeadingProps) => {
  const { t } = useTranslation();
  const content = typeof children === "string" ? t(children) : children;

  const finalContent =
    decoration !== "none" ? (
      <span
        className={
          decoration === "highlight"
            ? "wim-heading__highlight"
            : `wim-heading--${decoration}`
        }
      >
        {content}
      </span>
    ) : (
      content
    );

  const isCustomColor = color && (color.startsWith("var(") || color.includes("#") || color.includes("rgb"));

  return React.createElement(
    tag,
    {
      className: classNames(
        "wim-heading",
        `wim-heading--${size}`,
        !isCustomColor && `wim-heading--${color}`,
        `wim-heading--${align}`,
        className,
      ),
      style: {
        color: isCustomColor ? (color as string) : undefined,
        ...(style as React.CSSProperties),
      },
      ...props,
    },
    finalContent,
  );
};
