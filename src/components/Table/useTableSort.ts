import { useState, useCallback, useMemo } from "react";

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
export function useTableSort<T extends Record<string, any>>(
  data: T[],
  options: UseTableSortOptions<T> = {},
): UseTableSortReturn<T> {
  const { initialSort, onSortChange } = options;

  const [sortConfig, setSortConfig] = useState<SortConfig<T>>(
    initialSort || { key: null, direction: "none" },
  );

  const handleSort = useCallback(
    (key: keyof T) => {
      let direction: SortDirection = "asc";

      if (sortConfig.key === key) {
        if (sortConfig.direction === "asc") {
          direction = "desc";
        } else if (sortConfig.direction === "desc") {
          direction = "none";
        }
      }

      const newConfig = { key, direction };
      setSortConfig(newConfig);
      onSortChange?.(newConfig);
    },
    [sortConfig, onSortChange],
  );

  const sortedData = useMemo(() => {
    if (!sortConfig.key || sortConfig.direction === "none") {
      return data;
    }

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key!];
      const bValue = b[sortConfig.key!];

      // Handle null/undefined values
      if (aValue == null && bValue == null) return 0;
      if (aValue == null) return 1;
      if (bValue == null) return -1;

      // Handle different types
      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortConfig.direction === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortConfig.direction === "asc"
          ? aValue - bValue
          : bValue - aValue;
      }

      // Default comparison
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  const getSortDirection = useCallback(
    (key: keyof T): SortDirection => {
      return sortConfig.key === key ? sortConfig.direction : "none";
    },
    [sortConfig],
  );

  return {
    sortedData,
    sortConfig,
    handleSort,
    getSortDirection,
  };
}
