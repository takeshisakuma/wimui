import { ReactNode } from '../../../../node_modules/react';
import { WimIntent } from '../../../types/tokens';
export type ResultIntent = Extract<WimIntent, "success" | "error" | "info" | "warning">;
export type ResultHttpStatus = "404" | "403" | "500";
export type ResultProps = {
    /**
     * Semantic intent — determines the icon and color.
     */
    intent?: ResultIntent;
    /**
     * HTTP error status — adds a status-specific CSS class and shows a neutral icon.
     * Use for error pages (404, 403, 500).
     */
    status?: ResultHttpStatus;
    /**
     * The title
     */
    title?: ReactNode;
    /**
     * The description
     */
    description?: ReactNode;
    /**
     * Operating area
     */
    extra?: ReactNode;
    /**
     * Custom icon
     */
    icon?: ReactNode;
    /**
     * Custom class name
     */
    className?: string;
    /**
     * The children
     */
    children?: ReactNode;
};
export declare const Result: ({ intent, status, title, description, extra, icon, className, children, }: ResultProps) => import("react/jsx-runtime").JSX.Element;
