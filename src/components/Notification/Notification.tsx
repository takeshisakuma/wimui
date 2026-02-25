import React, { ReactNode } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Icon } from "../Icon/Icon";
import "./notification.scss";

export type NotificationPlacement =
  | "topRight"
  | "topLeft"
  | "bottomRight"
  | "bottomLeft";

export type NotificationProps = {
  /**
   * The title of notification
   */
  title: ReactNode;
  /**
   * The description of notification
   */
  description?: ReactNode;
  /**
   * The icon of notification
   */
  icon?: ReactNode;
  /**
   * The type of notification
   */
  type?: "info" | "success" | "error" | "warning";
  /**
   * Callback when notification is closed
   */
  onClose?: () => void;
  /**
   * Whether to show close button
   */
  closable?: boolean;
  /**
   * Additional class name
   */
  className?: string;
};

export const Notification = ({
  title,
  description,
  icon,
  type,
  onClose,
  closable = true,
  className,
}: NotificationProps) => {
  const { t } = useTranslation();

  const renderIcon = () => {
    if (icon) return icon;
    if (!type) return null;

    switch (type) {
      case "success":
        return <Icon name="CheckIcon" color="positive" size="medium" />;
      case "error":
        return <Icon name="CircleIcon" color="destructive" size="medium" />;
      case "warning":
        return <Icon name="CircleIcon" color="caution" size="medium" />;
      case "info":
        return <Icon name="CircleIcon" color="informative" size="medium" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={classNames(
        "wim-notification",
        type && `wim-notification--${type}`,
        className,
      )}
      role="alert"
    >
      <div className="wim-notification-content">
        {renderIcon() && (
          <div className="wim-notification-icon">{renderIcon()}</div>
        )}
        <div className="wim-notification-message-container">
          <div className="wim-notification-title">
            {typeof title === "string" ? t(title) : title}
          </div>
          {description && (
            <div className="wim-notification-description">
              {typeof description === "string" ? t(description) : description}
            </div>
          )}
        </div>
        {closable && (
          <button
            type="button"
            onClick={onClose}
            className="wim-notification-close"
            aria-label="Close"
          >
            <Icon name="CloseIcon" size="small" />
          </button>
        )}
      </div>
    </div>
  );
};
