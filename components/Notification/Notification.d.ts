import { ReactNode } from '../../../node_modules/react';
export type NotificationPlacement = "topRight" | "topLeft" | "bottomRight" | "bottomLeft";
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
export declare const Notification: ({ title, description, icon, type, onClose, closable, className, }: NotificationProps) => import("react/jsx-runtime").JSX.Element;
