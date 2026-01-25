import React from "react";
import PropTypes from "prop-types";
import "./span.scss";
import { useTranslation } from 'react-i18next';
import { Icon } from "../Icon/Icon";

type SpanProps = React.ComponentPropsWithoutRef<'span'> & {
  size?: "ex-small" | "small" | "medium" | "large" | "ex-large";
  color?: "black" | "deepgray" | "gray" | "lightgray" | "white" | "error";
  weight?: "normal" | "bold";
  style?: "normal" | "italic";
  content: string;
  iconName?: "CircleIcon" | "SquareIcon";
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
  ...props
}: SpanProps) => {
  const { t } = useTranslation();

  const sizeMap = {
    "ex-small": "xs",
    "small": "sm",
    "medium": "md",
    "large": "lg",
    "ex-large": "xl"
  };
  const sizeClass = `wim-span--${sizeMap[size]}`;
  const colorClass = `wim-span--${color}`;
  const weightClass = `wim-weight-${weight}`;
  const styleClass = `wim-style-${style}`;

  // Icon の size プロパティは "small" | "medium" | "large" のみ許容されているためマッピング
  const iconSizeMap: Record<string, "small" | "medium" | "large"> = {
    "ex-small": "small",
    "small": "small",
    "medium": "medium",
    "large": "large",
    "ex-large": "large"
  };
  const iconSize = iconSizeMap[size] || "medium";

  const iconComponent = iconName ? <Icon name={iconName} size={iconSize} /> : null;

  const contentToRender = (
    <>
      {iconName && iconPosition === 'left' && iconComponent}
      <span>{t(content)}</span>
      {iconName && iconPosition === 'right' && iconComponent}
    </>
  );

  return (
    <span
      className={[`wim-span`, sizeClass, colorClass, weightClass, styleClass].filter(Boolean).join(" ")}
      {...props}
    >
      {contentToRender}
    </span>
  );
};

Span.propTypes = {
  size: PropTypes.oneOf(["ex-small", "small", "medium", "large", "ex-large"]),
  color: PropTypes.oneOf(["black", "deepgray", "gray", "lightgray", "white", "error"]),
  weight: PropTypes.oneOf(["normal", "bold"]),
  style: PropTypes.oneOf(["normal", "italic"]),
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  iconName: PropTypes.oneOf(["CircleIcon", "SquareIcon"]),
  iconPosition: PropTypes.oneOf(["left", "right"]),
};