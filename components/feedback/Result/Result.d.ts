import { default as React, ReactNode } from '../../../../node_modules/react';
import { WimIntent } from '../../../types/tokens';
export type ResultIntent = Extract<WimIntent, "default" | "success" | "danger" | "info" | "warning">;
export type ResultHttpStatus = "404" | "403" | "500";
export type ResultProps = {
    /**
     * Semantic intent — determines the icon and color.
     * @default "default"
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
     * Sit the icon on a tinted circle in the intent's colour, instead of drawing it bare.
     *
     * Off by default so existing pages keep their look. Turn it on when the icon is
     * the page's main visual — a maintenance or error page, where a bare glyph reads
     * as an afterthought. The tint comes from `--wim-color-<intent>-subtle`, so it
     * follows the theme and never needs a hand-mixed colour.
     * @default false
     */
    iconSurface?: boolean;
    /**
     * Custom class name
     */
    className?: string;
    /**
     * The children
     */
    children?: ReactNode;
};
export declare const Result: ({ intent, status, title, description, extra, icon, iconSurface, className, children, }: ResultProps) => React.JSX.Element;
