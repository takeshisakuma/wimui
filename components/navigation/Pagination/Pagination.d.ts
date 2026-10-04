import { default as React } from '../../../../node_modules/react';
export type PaginationPageProps = React.ComponentPropsWithoutRef<"button"> & {
    /**
     * If true, merge page button props onto the child.
     */
    asChild?: boolean;
    /** Page number this control represents */
    page?: number;
    /** Whether this page is the current page */
    isActive?: boolean;
};
/**
 * Page number control used by Pagination. Supports asChild for URL-based links.
 */
export declare const PaginationPage: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    /**
     * If true, merge page button props onto the child.
     */
    asChild?: boolean;
    /** Page number this control represents */
    page?: number;
    /** Whether this page is the current page */
    isActive?: boolean;
} & React.RefAttributes<HTMLButtonElement>>;
export type PaginationPageRenderProps = React.ComponentPropsWithoutRef<"button"> & {
    page: number;
    isActive: boolean;
};
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
    /**
     * If true, merge nav props onto the child element.
     */
    asChild?: boolean;
    /** Optional child used when asChild is true */
    children?: React.ReactNode;
    /**
     * Custom renderer for page number controls. Defaults to PaginationPage.
     * Useful for URL-based pagination (e.g. wrap with a Link via PaginationPage asChild).
     */
    renderPage?: (page: number, props: PaginationPageRenderProps) => React.ReactNode;
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
    /** Labels for internationalization */
    labels?: {
        prevPage?: string;
        nextPage?: string;
        pageAriaLabel?: (page: number) => string;
        itemsPerPage?: string;
        goTo?: string;
        go?: string;
        pageSizeAriaLabel?: string;
        jumpToPageAriaLabel?: string;
        navAriaLabel?: string;
        totalLabel?: string;
    };
}
export declare const Pagination: ({ total, pageSize, current, onChange, onPageSizeChange, siblingCount, className, asChild, children, renderPage, hideOnSinglePage, simple, showSizeChanger, pageSizeOptions, showTotal, showQuickJumper, labels, }: PaginationProps) => React.JSX.Element | null;
export default Pagination;
