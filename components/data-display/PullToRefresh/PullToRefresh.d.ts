import { default as React } from '../../../../node_modules/react';
export interface PullToRefreshProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Callback when refresh is triggered. Should return a promise. */
    onRefresh: () => Promise<void> | void;
    /** Whether the refreshing is currently in progress (controlled) */
    refreshing?: boolean;
    /** Distance in pixels to pull before triggering refresh */
    threshold?: number;
    /** Maximum distance in pixels the container can be pulled */
    maxDistance?: number;
    /** The content to be wrapped and pulled */
    children: React.ReactNode;
    /** If true, the content div will be rendered as its child */
    asChild?: boolean;
}
/**
 * PullToRefresh component allows users to pull down a list to trigger a data refresh.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No (handles pull-to-refresh at the top of the scroll container)
 */
export declare const PullToRefresh: React.ForwardRefExoticComponent<PullToRefreshProps & React.RefAttributes<HTMLDivElement>>;
