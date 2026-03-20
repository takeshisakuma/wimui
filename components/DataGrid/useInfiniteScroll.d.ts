import { DataGridProps } from './DataGrid';
export declare function useInfiniteScroll(loadMore: DataGridProps<Record<string, unknown>>["loadMore"]): {
    loaderRef: import('../../../node_modules/react').RefObject<HTMLDivElement | null>;
};
