import React from "react";
import { Icon } from "../media/Icon/Icon";
import { ComponentSize, WimIntent } from "../../types/tokens";
import { AlertCircleIcon, AlertTriangleIcon, CheckIcon, CircleIcon, InfoCircleIcon } from "@/icon";

/**
 * Props for the FeedbackIcon component.
 */
export interface FeedbackIconProps {
  /**
   * Semantic intent of the feedback.
   * @default "info"
   */
  intent?: WimIntent;
  /**
   * Custom icon node. If false, no icon will be rendered.
   */
  icon?: React.ReactNode;
  /**
   * Size of the icon.
   * @default "sm"
   */
  size?: ComponentSize;
  /**
   * Additional CSS class name.
   */
  className?: string;
  /**
   * Explicit color for the icon.
   */
  color?: "danger" | "success" | "warning" | "info";
}

/**
 * FeedbackIcon is an internal component that resolves and displays the appropriate 
 * icon based on component intent or a custom icon prop.
 * 
 * Composition Contract:
 * - Prioritizes the `icon` prop if it is a valid React element.
 * - Returns null if `icon` is explicitly `false`.
 * - Maps `intent` to default system icons (e.g., success -> CheckIcon).
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
  // 指定がない場合はインテントに基づいてデフォルトアイコンを返す。
  // warning は danger と同じグリフ（三角のアイコンが無いため）で、区別は色が担う。
  return (
    <Icon
      component={INTENT_ICON[intent] ?? CircleIcon}
      size={size}
      className={className}
      color={color}
    />
  );
};

// **warning と danger は別のグリフにする。** 以前はどちらも `AlertCircleIcon` で、
// **色でしか区別できなかった**（T78）。色だけに意味を載せると、色覚特性のある人・
// モノクロ印刷・グレースケール表示で 2 つの intent が同じものになる。三角は
// 「注意」、丸に ! は「エラー」という一般的な使い分けに合わせる。
const INTENT_ICON: Partial<Record<WimIntent, typeof CircleIcon>> = {
  success: CheckIcon,
  danger: AlertCircleIcon,
  warning: AlertTriangleIcon,
  info: InfoCircleIcon,
};
