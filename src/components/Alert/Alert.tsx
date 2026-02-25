import React from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Icon } from "../Icon/Icon";
import "./alert.scss";

type AlertProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * アラートのタイトル
   */
  title?: string;
  /**
   * アラートの説明文
   */
  description?: string;
  /**
   * アラートのバリアント
   */
  variant?: "info" | "success" | "warning" | "error";
  /**
   * カスタムアイコン。指定しない場合はバリアントに応じたデフォルトアイコンが表示されます。
   */
  icon?: React.ReactNode;
  /**
   * 閉じるボタンをクリックした時のコールバック。指定すると閉じるボタンが表示されます。
   */
  onClose?: () => void;
  /**
   * 追加のクラス名
   */
  className?: string;
  /**
   * 子要素（説明文として扱われます）
   */
  children?: React.ReactNode;
};

/**
 * ユーザーに重要な情報を伝えるためのアラートコンポーネント。
 */
export const Alert = ({
  title,
  description,
  variant = "info",
  icon,
  onClose,
  className,
  children,
  ...props
}: AlertProps) => {
  const { t } = useTranslation();

  const renderIcon = () => {
    if (icon) return icon;

    // デフォルトアイコンのマッピング（Iconコンポーネントに適切なものが増えたら更新）
    switch (variant) {
      case "success":
        return <Icon name="CheckIcon" size="small" />;
      case "error":
      case "warning":
      case "info":
      default:
        return <Icon name="CircleIcon" size="small" />;
    }
  };

  return (
    <div
      className={classNames("wim-alert", `wim-alert--${variant}`, className)}
      role="alert"
      {...props}
    >
      <div className="wim-alert__icon">{renderIcon()}</div>
      <div className="wim-alert__content">
        {title && <h4 className="wim-alert__title">{t(title)}</h4>}
        {(description || children) && (
          <div className="wim-alert__description">
            {description ? t(description) : children}
          </div>
        )}
      </div>
      {onClose && (
        <button
          type="button"
          className="wim-alert__close"
          onClick={onClose}
          aria-label="Close"
        >
          <Icon name="CloseIcon" size="small" />
        </button>
      )}
    </div>
  );
};
