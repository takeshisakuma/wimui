import React from "react";
import classNames from "classnames";
import "./span.scss";
import { Icon } from "../../media/Icon/Icon";
import { WimColor, ComponentSize, WimFontWeight } from "../../../types/tokens";
import { getColorValue, getFontWeightValue } from "../../../utilities/style-utils";

type SpanProps = React.ComponentPropsWithoutRef<"span"> & {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: WimColor;
  weight?: "normal" | "bold" | "medium";
  fontStyle?: "normal" | "italic";
  decoration?: "line-through" | "underline" | "highlight" | "none"; // 追加
  content?: React.ReactNode;
  iconName?: React.ComponentProps<typeof Icon>["name"];
  iconPosition?: "left" | "right";
};

export const Span = ({
  size = "md",
  content,
  color,
  weight = "normal",
  fontStyle = "normal",
  iconName = undefined,
  iconPosition = "left",
  decoration = "none",
  className,
  style,
  children,
  ...props
}: SpanProps) => {
  const finalContent = content ?? children;

  // Icon の size プロパティは "sm" | "md" | "lg" のみ許容されているためマッピング
  const iconSizeMap: Record<string, ComponentSize> = {
    xs: "sm",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "lg",
  };
  const iconSize = iconSizeMap[size] || "md";

  const iconComponent = iconName ? (
    <Icon name={iconName} size={iconSize} />
  ) : null;

  const contentToRender = (
    <>
      {iconName && iconPosition === "left" && iconComponent}
      <span>{finalContent}</span>
      {iconName && iconPosition === "right" && iconComponent}
    </>
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

  return (
    <span
      className={classNames(
        "wim-span",
        `wim-span--${size}`,
        useClassNameForColor && `wim-span--${color}`,
        weight === "bold" && "wim-span--bold",
        fontStyle === "italic" && "wim-span--italic",
        decoration !== "none" && `wim-span--${decoration}`,
        className,
      )}
      style={{
        color: !useClassNameForColor ? getColorValue(color) : undefined,
        fontWeight: getFontWeightValue(weight as WimFontWeight),
        ...(style as React.CSSProperties),
      }}
      {...props}
    >
      {contentToRender}
    </span>
  );
};
