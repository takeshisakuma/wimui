import { default as React, ReactNode } from '../../../../node_modules/react';
import { FeedbackStatus } from '../../../types/tokens';
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
     * The status of notification
     */
    status?: FeedbackStatus;
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
export declare const Notification: ({ id, title, description, icon, status, onClose, closable, className, }: NotificationProps) => import("react/jsx-runtime").JSX.Element | null;
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
}) => import("react/jsx-runtime").JSX.Element;
export declare const useNotification: () => NotificationContextType;
export {};
