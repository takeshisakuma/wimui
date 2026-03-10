import React from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { FeedbackIcon } from "../_internal/FeedbackIcon";
import { FeedbackCloseButton } from "../_internal/FeedbackCloseButton";
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
   * アラートのステータス
   */
  status?: "info" | "success" | "warning" | "error";
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
  status = "info",
  icon,
  onClose,
  className,
  children,
  ...props
}: AlertProps) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  return (
    <div
      className={classNames("wim-alert", `wim-alert--${status}`, className)}
      role="alert"
      {...props}
    >
      <div className="wim-alert__icon">
        <FeedbackIcon status={status as any} icon={icon} size="small" />
      </div>
      <div className="wim-alert__content">
        {title && <h4 className="wim-alert__title">{t(title)}</h4>}
        {(description || children) && (
          <div className="wim-alert__description">
            {description ? t(description) : children}
          </div>
        )}
      </div>
      <FeedbackCloseButton
        onClose={onClose ? handleClose : undefined}
        className="wim-alert__close"
        size="small"
      />
    </div>
  );
};
