import React from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { FeedbackIcon } from "../_internal/FeedbackIcon";
import { FeedbackCloseButton } from "../_internal/FeedbackCloseButton";
import { FeedbackStatus } from "../../types/tokens";
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
   * バナーのステータス
   */
  status?: FeedbackStatus;
  /**
   * アイコンを表示するかどうか、またはカスタムアイコン
   */
  icon?: boolean | React.ReactNode;
  /**
   * アクションボタン要素（例：Buttonコンポーネント）
   */
  extra?: React.ReactNode;
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
  status = "info",
  icon = true,
  extra,
  onClose,
  className,
  children,
  ...props
}: BannerProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={classNames("wim-banner", `wim-banner--${status}`, className)}
      role="banner"
      {...props}
    >
      <div className="wim-banner__container">
        <div className="wim-banner__content">
          {icon !== false && (
            <div className="wim-banner__icon">
              <FeedbackIcon
                status={status}
                icon={typeof icon === "boolean" ? undefined : icon}
                size="sm"
              />
            </div>
          )}
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
          {extra && <div className="wim-banner__action">{extra}</div>}
          <FeedbackCloseButton
             onClose={onClose}
             className="wim-banner__close"
             size="sm"
          />
        </div>
      </div>
    </div>
  );
};
