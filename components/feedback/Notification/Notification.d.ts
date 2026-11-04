import { default as React, ReactNode } from '../../../../node_modules/react';
import { FeedbackIntent } from '../../../types/tokens';
export type NotificationPlacement = "topRight" | "topLeft" | "bottomRight" | "bottomLeft";
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
     * The intent of notification
     * @default "default"
     */
    intent?: FeedbackIntent;
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
    /** Accessible name for the notification. */
    "aria-label"?: string;
    /** ID of the element that labels the notification. Takes precedence over `aria-label`. */
    "aria-labelledby"?: string;
};
export declare const Notification: ({ id, title, description, icon, intent, onClose, closable, className, "aria-label": ariaLabelAttr, "aria-labelledby": ariaLabelledBy, }: NotificationProps) => React.JSX.Element | null;
type NotificationItem = Omit<NotificationProps, "onClose"> & {
    id: string;
};
type NotificationContextType = {
    show: (notification: Omit<NotificationItem, "id">) => void;
    remove: (id: string) => void;
};
export declare const NotificationProvider: ({ children, placement, }: {
    children: React.ReactNode;
    placement?: NotificationPlacement;
}) => React.JSX.Element;
export declare const useNotification: () => NotificationContextType;
export {};
