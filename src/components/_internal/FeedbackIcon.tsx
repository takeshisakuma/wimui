import React from "react";
import { Icon } from "../media/Icon/Icon";
import { ComponentSize, WimIntent } from "../../types/tokens";

export interface FeedbackIconProps {
  /**
   * フィードバックのインテント
   */
  intent?: WimIntent | "default";
  /**
   * カスタムアイコン
   */
  icon?: React.ReactNode;
  /**
   * アイコンのサイズ
   */
  size?: ComponentSize;
  /**
   * 追加のクラス名
   */
  className?: string;
  /**
   * アイコンの色（Iconコンポーネントに渡されます）
   */
  color?: "destructive" | "positive" | "caution" | "informative";
}

/**
 * 通知系コンポーネントで共通して使用されるアイコン表示用コンポーネント（内部用）
 */
export const FeedbackIcon = ({
  intent = "info",
  icon,
  size = "sm",
  className,
  color,
}: FeedbackIconProps) => {
  if (icon && React.isValidElement(icon)) return <>{icon}</>;
  if (icon === false) return null;

  // Notification.tsx などで明示的に指定されている色を優先、
  // 指定がない場合はインテントに基づいてデフォルトアイコンを返す
  switch (intent) {
    case "success":
      return (
        <Icon
          name="CheckIcon"
          size={size}
          className={className}
          color={color}
        />
      );
    default:
      return (
        <Icon
          name="CircleIcon"
          size={size}
          className={className}
          color={color}
        />
      );
  }
};
