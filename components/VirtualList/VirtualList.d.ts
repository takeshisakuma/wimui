import { default as React } from '../../../node_modules/react';
export type VirtualListProps<T = unknown> = Omit<React.ComponentPropsWithoutRef<"div">, "children"> & {
    /**
     * レンダリング対象のアイテム配列。
     */
    items: T[];
    /**
     * 各アイテムの高さ（px）。
     */
    itemHeight: number;
    /**
     * リストコンテナの表示高さ（px）。
     */
    height: number;
    /**
     * 各アイテムをレンダリングする関数。
     */
    renderItem: (item: T, index: number) => React.ReactNode;
    /**
     * 表示領域の外側に追加レンダリングするアイテム数。デフォルトは 3。
     */
    overscan?: number;
    /**
     * 各アイテムラッパーの role 属性。デフォルトは "listitem"。
     * listbox など別の親ロールと組み合わせる場合は "none" を指定してください。
     */
    itemRole?: string;
    /**
     * スクロールコンテナの DOM ref。外部からプログラム的にスクロール位置を制御する場合に使用します。
     */
    containerRef?: React.RefObject<HTMLDivElement | null>;
};
/**
 * 大量のデータを効率よく表示するための仮想化リストコンポーネント。
 * 表示領域内のアイテムのみをレンダリングすることで、パフォーマンスを最適化します。
 */
export declare function VirtualList<T = unknown>({ items, itemHeight, height, renderItem, overscan, itemRole, containerRef, className, style, ...props }: VirtualListProps<T>): import("react/jsx-runtime").JSX.Element;
