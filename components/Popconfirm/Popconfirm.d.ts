import { ReactNode } from '../../../node_modules/react';
export type PopconfirmProps = {
    /**
     * The title of the confirmation box
     */
    title: ReactNode;
    /**
     * The description of the confirmation box
     */
    description?: ReactNode;
    /**
     * Callback when the user clicks the confirm button
     */
    onConfirm?: () => void;
    /**
     * Callback when the user clicks the cancel button
     */
    onCancel?: () => void;
    /**
     * Text of the confirm button
     */
    okText?: string;
    /**
     * Text of the cancel button
     */
    cancelText?: string;
    /**
     * Color role of the confirm button
     */
    okType?: "default" | "destructive" | "positive";
    /**
     * The target element which the Popconfirm will be attached to
     */
    children: ReactNode;
    /**
     * Customize the icon
     */
    icon?: ReactNode;
    /**
     * Whether to show the popconfirm
     */
    disabled?: boolean;
};
export declare const Popconfirm: ({ title, description, onConfirm, onCancel, okText, cancelText, okType, children, icon, disabled, }: PopconfirmProps) => import("react/jsx-runtime").JSX.Element;
