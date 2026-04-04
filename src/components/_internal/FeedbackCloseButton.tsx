import React from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "../media/Icon/Icon";
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
   * aria-label
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
  ariaLabel,
  size = "sm",
}: FeedbackCloseButtonProps) => {
  const { t } = useTranslation("common");
  const resolvedAriaLabel = ariaLabel ?? t("a11y.close");

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
      aria-label={resolvedAriaLabel}
    >
      <Icon name="CloseIcon" size={size} />
    </button>
  );
};
