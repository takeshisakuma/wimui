import React from "react";
import PropTypes from "prop-types";
import "./button.scss";
import { useTranslation } from 'react-i18next';
import Icon from "../Icon/Icon";//アイコン用

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  backgroundColor?: string | null;
  size?: "small" | "medium" | "large";
  label?: string;//アイコンのみのボタンが作れるように任意にしている
  weight?: "bold" | "normal";
  role?: "primary" | "secondary" | "danger";
  color?: "white" | "black";
  state?: "abled" | "disabled";
  //以下アイコン用
  iconName?: "CircleIcon" | "SquareIcon";//Icon.tsxのnameプロパティに対応
  iconPosition?: "left" | "right";//ボタンのラベルの左か右にアイコンを配置
};

export const Button = ({
  size = "medium",
  label,
  weight = "bold",
  color = "black",
  role = "secondary",
  state = "abled",
  //以下アイコン関連のプロパティを分割代入
  iconName = undefined,//デフォルトはアイコンなし
  iconPosition = "left",
  backgroundColor,
  ...props
}: ButtonProps) => {


  // アイコンの色をボタンの役割(role)に応じて設定
  const iconColor = role === 'primary' || role === 'danger' ? 'semantic-secondary' : 'semantic-primary';

  // アイコンのコンポーネントを準備
  const iconComponent = iconName ? <Icon name={iconName} size={size} color={iconColor} /> : null;


  const { t } = useTranslation();




  // テキストのみ、アイコンのみ、テキストとアイコン両方のレンダリングを条件分岐
  const content = (() => {
    if (label && iconName) {
      return iconPosition === 'left' ? (
        <>
          {iconComponent}
          <span className="button-label">{t(label)}</span>
        </>
      ) : (
        <>
          <span className="button-label">{t(label)}</span>
          {iconComponent}
        </>
      );
    } else if (label) {
      return <span className="button-label">{t(label)}</span>;
    } else if (iconName) {
      return iconComponent;
    }
    return null;
  })();



  return (
    <button
      type="button"
      style={backgroundColor ? { backgroundColor } : undefined}
      className={[
        `wim-button`,
        `font-size-${size}`,
        `font-weight-${weight}`,
        `button-role-${role}`,
        !label && iconName ? `icon-only` : '',//アイコンのみのボタンの場合のクラス
      ].join(" ")}
      disabled={state === 'disabled'}
      {...props}
    >
      {content}
    </button>

  );
};

Button.propTypes = {
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** How large should the button be? */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /** Button contents */
  label: PropTypes.string,
  /** Optional click handler */
  onClick: PropTypes.func,
  weight: PropTypes.oneOf(["normal", "bold"]),
  color: PropTypes.oneOf(["black", "deepgray", "gray", "lightgray", "white", "error"]),
  role: PropTypes.oneOf(["primary", "secondary", "danger"]),
  state: PropTypes.oneOf(["abled", "disabled"]),
  iconName: PropTypes.oneOf(["CircleIcon", "SquareIcon"]),
  iconPosition: PropTypes.oneOf(["left", "right"]),
}
