export type SortDirection = "asc" | "desc" | "none";
/**
 * Utility to get the next sort direction in the sequence: none -> asc -> desc -> none
 */
export declare function getNextSortDirection(currentDirection: SortDirection, isSameKey: boolean): SortDirection;
export interface SortConfig<T = unknown> {
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
export declare function useTableSort<T extends Record<string, unknown>>(data: T[], options?: UseTableSortOptions<T>): UseTableSortReturn<T>;
