import { default as React } from '../../../node_modules/react';
export type InfiniteScrollProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * 次のデータを読み込む際に呼び出されるコールバック関数。
     */
    onLoadMore: () => void;
    /**
     * 読み込み中かどうか。
     */
    loading?: boolean;
    /**
     * まだ読み込むデータがあるかどうか。
     */
    hasMore?: boolean;
    /**
     * 読み込み中に表示する要素。デフォルトは `Loader` コンポーネント。
     */
    loader?: React.ReactNode;
    /**
     * スクロールを検知する閾値。0から1までの値を指定。デフォルトは 0。
     */
    threshold?: number;
    /**
     * スクロールを検知する際のオフセット。root からの距離を指定。
     */
    rootMargin?: string;
};
/**
 * スクロールに応じて自動的に次のデータを読み込むためのコンポーネント。
 */
export declare const InfiniteScroll: ({ onLoadMore, loading, hasMore, loader, threshold, rootMargin, className, children, ...props }: InfiniteScrollProps) => import("react/jsx-runtime").JSX.Element;
