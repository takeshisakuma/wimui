import React from "react";
import { Icon } from "../media/Icon/Icon";
import { ComponentSize, WimIntent } from "../../types/tokens";

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
  color?: "destructive" | "positive" | "caution" | "informative";
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
