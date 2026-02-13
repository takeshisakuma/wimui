import { default as React } from '../../../node_modules/react';
export interface PaginationProps {
    /** Total number of items */
    total: number;
    /** Number of items per page */
    pageSize?: number;
    /** Current page number (1-indexed) */
    current?: number;
    /** Callback function when page changes */
    onChange?: (page: number, pageSize: number) => void;
    /** Callback function when page size changes */
    onPageSizeChange?: (pageSize: number) => void;
    /** Number of sibling pages to show around the current page */
    siblingCount?: number;
    /** Additional class names */
    className?: string;
    /** Whether to show a simplified version */
    simple?: boolean;
    /** Whether to hide the pagination if there is only one page */
    hideOnSinglePage?: boolean;
    /** Whether to show the page size changer */
    showSizeChanger?: boolean;
    /** Page size options for the page size changer */
    pageSizeOptions?: number[];
    /** Function to display the total count */
    showTotal?: (total: number, range: [number, number]) => React.ReactNode;
    /** Whether to show quick jumper */
    showQuickJumper?: boolean;
}
export declare const Pagination: ({ total, pageSize, current, onChange, onPageSizeChange, siblingCount, className, hideOnSinglePage, simple, showSizeChanger, pageSizeOptions, showTotal, showQuickJumper, }: PaginationProps) => import("react/jsx-runtime").JSX.Element | null;
export default Pagination;
