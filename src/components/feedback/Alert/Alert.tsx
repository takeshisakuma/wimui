import React from "react";
import classNames from "classnames";
import { FeedbackIcon } from "../../_internal/FeedbackIcon";
import { FeedbackCloseButton } from "../../_internal/FeedbackCloseButton";
import { WimIntent } from "../../../types/tokens";
import "./alert.scss";

type AlertProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * アラートのタイトル
   */
  title?: React.ReactNode;
  /**
   * アラートの説明文
   */
  description?: React.ReactNode;
  /**
   * アラートのインテント
   */
  intent?: WimIntent;
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
  intent = "info",
  icon,
  onClose,
  className,
  children,
  ...props
}: AlertProps) => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  return (
    <div
      className={classNames("wim-alert", `wim-alert--${intent}`, className)}
      role="alert"
      {...props}
    >
      <div className="wim-alert__icon">
        <FeedbackIcon intent={intent} icon={icon} size="sm" />
      </div>
      <div className="wim-alert__content">
        {title && <h4 className="wim-alert__title">{title}</h4>}
        {(description || children) && (
          <div className="wim-alert__description">
            {description ? description : children}
          </div>
        )}
      </div>
      <FeedbackCloseButton
        onClose={onClose ? handleClose : undefined}
        className="wim-alert__close"
        size="sm"
      />
    </div>
  );
};
