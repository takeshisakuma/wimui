export type SortDirection = "asc" | "desc" | "none";
export interface SortConfig<T = any> {
    key: keyof T | null;
    direction: SortDirection;
}
export interface UseTableSortOptions<T> {
    initialSort?: SortConfig<T>;
    onSortChange?: (config: SortConfig<T>) => void;
}
export interface UseTableSortReturn<T> {
    sortedData: T[];
    sortConfig: SortConfig<T>;
    handleSort: (key: keyof T) => void;
    getSortDirection: (key: keyof T) => SortDirection;
}
/**
 * Hook for managing table sorting logic
 * @param data - The data array to sort
 * @param options - Optional configuration
 * @returns Sorted data and sorting utilities
 */
export declare function useTableSort<T extends Record<string, any>>(data: T[], options?: UseTableSortOptions<T>): UseTableSortReturn<T>;
