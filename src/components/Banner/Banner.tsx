import React from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Icon } from "../Icon/Icon";
import "./banner.scss";

type BannerProps = {
  /**
   * バナーのタイトル
   */
  title?: string;
  /**
   * バナーの説明文
   */
  description?: string;
  /**
   * バナーのバリアント
   */
  variant?: "info" | "success" | "warning" | "error";
  /**
   * アイコンを表示するかどうか、またはカスタムアイコン
   */
  icon?: boolean | React.ReactNode;
  /**
   * アクションボタン要素（例：Buttonコンポーネント）
   */
  action?: React.ReactNode;
  /**
   * 閉じるボタンをクリックした時のコールバック。指定すると閉じるボタンが表示されます。
   */
  onClose?: () => void;
  /**
   * 追加のクラス名
   */
  className?: string;
  /**
   * 子要素
   */
  children?: React.ReactNode;
};

/**
 * 重要なメッセージやアクションをユーザーに提示するためのバナーコンポーネント。
 * 通常、ページの上部に表示されます。
 */
export const Banner = ({
  title,
  description,
  variant = "info",
  icon = true,
  action,
  onClose,
  className,
  children,
  ...props
}: BannerProps) => {
  const { t } = useTranslation();

  const renderIcon = () => {
    if (!icon) return null;
    if (React.isValidElement(icon)) return icon;

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
      className={classNames("wim-banner", `wim-banner--${variant}`, className)}
      role="banner"
      {...props}
    >
      <div className="wim-banner__container">
        <div className="wim-banner__content">
          {icon && <div className="wim-banner__icon">{renderIcon()}</div>}
          <div className="wim-banner__text">
            {title && <span className="wim-banner__title">{t(title)}</span>}
            {title && (description || children) && (
              <span className="wim-banner__separator"> - </span>
            )}
            {(description || children) && (
              <span className="wim-banner__description">
                {description ? t(description) : children}
              </span>
            )}
          </div>
        </div>
        <div className="wim-banner__actions">
          {action && <div className="wim-banner__action">{action}</div>}
          {onClose && (
            <button
              type="button"
              className="wim-banner__close"
              onClick={onClose}
              aria-label="Close"
            >
              <Icon name="CloseIcon" size="small" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
