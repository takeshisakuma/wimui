import { default as React } from '../../../../node_modules/react';
export interface InfiniteScrollProps {
    /** Content to display. */
    children: React.ReactNode;
    /** Whether there is more data to load. */
    hasMore?: boolean;
    /** Whether data is currently loading. */
    loading?: boolean;
    /** Callback to load the next batch of data. */
    onLoadMore: () => void;
    /** Element shown while loading. */
    loader?: React.ReactNode;
    /** Scroll threshold (px). onLoadMore is called when the scroll position gets this close to the bottom. */
    threshold?: number;
    /** Additional class names. */
    className?: string;
    /** Target whose scroll events are observed (defaults to window). */
    container?: React.RefObject<HTMLElement | null>;
}
/**
 * Infinite-scroll component that automatically loads content when the user
 * reaches the bottom of the page.
 */
export declare const InfiniteScroll: ({ children, hasMore, loading, onLoadMore, loader, threshold, className, container, }: InfiniteScrollProps) => React.JSX.Element;
