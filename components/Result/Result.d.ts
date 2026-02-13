import { ReactNode } from '../../../node_modules/react';
export type ResultStatus = "success" | "error" | "info" | "warning" | "404" | "403" | "500";
export type ResultProps = {
    /**
     * result status, decide icons and colors
     */
    status?: ResultStatus;
    /**
     * The title
     */
    title?: ReactNode;
    /**
     * The subTitle
     */
    subTitle?: ReactNode;
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
export declare const Result: ({ status, title, subTitle, extra, icon, className, children, }: ResultProps) => import("react/jsx-runtime").JSX.Element;
