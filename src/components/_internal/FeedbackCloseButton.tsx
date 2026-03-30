import React from "react";
import { Icon } from "../Icon/Icon";
import { useTranslation } from "react-i18next";
import { ComponentSize } from "../../types/tokens";

export interface FeedbackCloseButtonProps {
  /**
   * 閉じるボタンをクリックした時のコールバック。指定するとボタンが表示されます。
   */
  onClose?: (id?: string) => void;
  /**
   * ターゲットID（Toastなどで使用）
   */
  id?: string;
  /**
   * 追加のクラス名
   */
  className?: string;
  /**
   * aria-labelの翻訳キー
   */
  ariaLabel?: string;
  /**
   * アイコンのサイズ
   */
  size?: ComponentSize;
}

/**
 * 通知系コンポーネントで共通して使用される閉じるボタン（内部用）
 */
export const FeedbackCloseButton = ({
  onClose,
  id,
  className,
  ariaLabel = "a11y.close",
  size = "sm",
}: FeedbackCloseButtonProps) => {
  const { t } = useTranslation();

  if (!onClose) return null;

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose(id);
  };

  return (
    <button
      type="button"
      className={className}
      onClick={handleClose}
      aria-label={t(ariaLabel)}
    >
      <Icon name="CloseIcon" size={size} />
    </button>
  );
};
