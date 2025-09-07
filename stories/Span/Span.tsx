import React from "react";
import PropTypes from "prop-types";
import "./span.scss";
import { useTranslation } from 'react-i18next';
import Icon from "../Icon/Icon"; // Iconコンポーネントをインポート

type SpanProps = React.ComponentPropsWithoutRef<'span'> & {
  size?: "ex-small" | "small" | "medium" | "large" | "ex-large";
  color?: "black" | "deepgray" | "gray" | "lightgray" | "white" | "error";
  weight?: "normal" | "bold";
  style?: "normal" | "italic";
  content: string;
  iconName?: "CircleIcon" | "SquareIcon"; // アイコン名を追加
  iconPosition?: "left" | "right"; // アイコン位置を追加
};

export const Span = ({
  size = "medium",
  content = "span",
  color = "black",
  weight = "normal",
  style = "normal",
  iconName = undefined, // デフォルト値を設定
  iconPosition = "left", // デフォルト値を設定
  ...props
}: SpanProps) => {

  const { t } = useTranslation();
  
  // アイコンの色を設定
  const iconColor = color === 'white' ? 'semantic-secondary' : 'semantic-primary';

  // アイコンコンポーネントを生成
  const iconComponent = iconName ? <Icon name={iconName} size={size} color={iconColor} /> : null;

  // コンテンツのレンダリングを条件分岐
  const contentToRender = (() => {
    if (content && iconName) {
      return iconPosition === 'left' ? (
        <>
          {iconComponent}
          <span>{t(content)}</span>
        </>
      ) : (
        <>
          <span>{t(content)}</span>
          {iconComponent}
        </>
      );
    } else if (content) {
      return <span>{t(content)}</span>;
    } else if (iconName) {
      return iconComponent;
    }
    return null;
  })();

  return (
    <span
      className={[
        `wim-span`,
        `font-color-${color}`,
        `font-size-${size}`,
        `font-weight-${weight}`,
        `font-style-${style}`,
      ].join(" ")}
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