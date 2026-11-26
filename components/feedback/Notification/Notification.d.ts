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
     * Callback when notification is closed. When the close button disappears while it has focus, focus moves to the focusable element just before the component. To send it somewhere else, move focus inside this callback.
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
    /** Shows a notification and returns its id, which `remove(id)` takes to close it. */
    show: (notification: Omit<NotificationItem, "id">) => string;
    remove: (id: string) => void;
};
export declare const NotificationProvider: ({ children, placement, }: {
    children: React.ReactNode;
    placement?: NotificationPlacement;
}) => React.JSX.Element;
/**
 * Show a notification card in a corner of the screen from anywhere under `NotificationProvider`.
 * Notifications stack, carry a title and a body, and suit events that happened elsewhere
 * (a finished export, a new comment) rather than the result of the user's last action.
 *
 * Throws when called outside `NotificationProvider`.
 *
 * @returns `show(notification)` — the `Notification` props without `onClose`, returning the notification id — and `remove(id)`.
 *
 * @example
 * const { show } = useNotification();
 * show({ title: "Export finished", description: "report.csv is ready." });
 */
export declare const useNotification: () => NotificationContextType;
export {};
