import React, {
  ReactNode,
  useState,
  useCallback,
  createContext,
  useContext,
} from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { FeedbackIcon } from "../_internal/FeedbackIcon";
import { FeedbackCloseButton } from "../_internal/FeedbackCloseButton";
import "./notification.scss";

export type NotificationPlacement =
  | "topRight"
  | "topLeft"
  | "bottomRight"
  | "bottomLeft";

export type NotificationProps = {
  /**
   * The unique identifier of notification
   */
  id?: string;
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
  onClose?: (id?: string) => void;
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
  id,
  title,
  description,
  icon,
  type,
  onClose,
  closable = true,
  className,
}: NotificationProps) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose(id);
  };

  const typeToColorMap: Record<string, any> = {
    success: "positive",
    error: "destructive",
    warning: "caution",
    info: "informative",
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
        {(icon || type) && (
          <div className="wim-notification-icon">
            <FeedbackIcon
              variant={type as any}
              icon={icon}
              size="medium"
              color={type ? typeToColorMap[type] : undefined}
            />
          </div>
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
        <FeedbackCloseButton
          onClose={closable ? handleClose : undefined}
          className="wim-notification-close"
          size="small"
        />
      </div>
    </div>
  );
};

// --- Notification System (Provider & Hook) ---

type NotificationItem = Omit<NotificationProps, "onClose"> & {
  id: string;
};

type NotificationContextType = {
  show: (notification: Omit<NotificationItem, "id">) => void;
  remove: (id: string) => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined,
);

export const NotificationProvider = ({
  children,
  placement = "topRight",
}: {
  children: React.ReactNode;
  placement?: NotificationPlacement;
}) => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  const show = useCallback((notification: Omit<NotificationItem, "id">) => {
    const id = Math.random().toString(36).substr(2, 9);
    setNotifications((prev) => [...prev, { ...notification, id }]);
  }, []);

  const remove = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return (
    <NotificationContext.Provider value={{ show, remove }}>
      {children}
      <div
        className={classNames(
          "wim-notification-container",
          `wim-notification-container--${placement}`,
        )}
      >
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            {...notification}
            onClose={() => remove(notification.id)}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider",
    );
  }
  return context;
};
