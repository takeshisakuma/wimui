import React from "react";
import classNames from "classnames";
import "./span.scss";
import { useTranslation } from "react-i18next";
import { Icon } from "../Icon/Icon";

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
    | "info";
  weight?: "normal" | "bold";
  style?: "normal" | "italic";
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
  style = "normal",
  iconName = undefined,
  iconPosition = "left",
  decoration = "none",
  className,
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
  const iconSizeMap: Record<string, "small" | "medium" | "large"> = {
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

  return (
    <span
      className={classNames(
        "wim-span",
        `wim-span--${sizeMap[size]}`,
        `wim-span--${color}`,
        weight === "bold" && "wim-span--bold",
        style === "italic" && "wim-span--italic",
        decoration !== "none" && `wim-span--${decoration}`,
        className,
      )}
      {...props}
    >
      {contentToRender}
    </span>
  );
};
