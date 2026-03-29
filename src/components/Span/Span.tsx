import React from "react";
import classNames from "classnames";
import "./span.scss";
import { useTranslation } from "react-i18next";
import { Icon } from "../Icon/Icon";
import { WimColor, ComponentSize } from "../../types/tokens";

type SpanProps = React.ComponentPropsWithoutRef<"span"> & {
  size?: "ex-small" | "small" | "medium" | "large" | "ex-large";
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
  fontStyle?: "normal" | "italic";
  decoration?: "line-through" | "underline" | "highlight" | "none"; // 追加
  content: string;
  iconName?: React.ComponentProps<typeof Icon>["name"];
  iconPosition?: "left" | "right";
};

export const Span = ({
  size = "medium",
  content = "span",
  color = "black",
  weight = "normal",
  fontStyle = "normal",
  iconName = undefined,
  iconPosition = "left",
  decoration = "none",
  className,
  style,
  ...props
}: SpanProps) => {
  const { t } = useTranslation();

  const sizeMap = {
    "ex-small": "xs",
    small: "sm",
    medium: "md",
    large: "lg",
    "ex-large": "xl",
  };

  // Icon の size プロパティは "small" | "medium" | "large" のみ許容されているためマッピング
  const iconSizeMap: Record<string, ComponentSize> = {
    "ex-small": "small",
    small: "small",
    medium: "medium",
    large: "large",
    "ex-large": "large",
  };
  const iconSize = iconSizeMap[size] || "medium";

  const iconComponent = iconName ? (
    <Icon name={iconName} size={iconSize} />
  ) : null;

  const contentToRender = (
    <>
      {iconName && iconPosition === "left" && iconComponent}
      <span>{t(content)}</span>
      {iconName && iconPosition === "right" && iconComponent}
    </>
  );

  const isCustomColor = color && (color.startsWith("var(") || color.includes("#") || color.includes("rgb"));

  return (
    <span
      className={classNames(
        "wim-span",
        `wim-span--${sizeMap[size]}`,
        !isCustomColor && `wim-span--${color}`,
        weight === "bold" && "wim-span--bold",
        fontStyle === "italic" && "wim-span--italic",
        decoration !== "none" && `wim-span--${decoration}`,
        className,
      )}
      style={{
        color: isCustomColor ? (color as string) : undefined,
        ...(style as React.CSSProperties),
      }}
      {...props}
    >
      {contentToRender}
    </span>
  );
};
