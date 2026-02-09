import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon";
import "./pagination.scss";

export interface PaginationProps {
    /** Total number of items */
    total: number;
    /** Number of items per page */
    pageSize?: number;
    /** Current page number (1-indexed) */
    current?: number;
    /** Callback function when page changes */
    onChange?: (page: number) => void;
    /** Number of sibling pages to show around the current page */
    siblingCount?: number;
    /** Additional class names */
    className?: string;
    /** Whether to show a simplified version */
    simple?: boolean;
    /** Whether to hide the pagination if there is only one page */
    hideOnSinglePage?: boolean;
}

const ELLIPSIS = "...";

export const Pagination = ({
    total,
    pageSize = 10,
    current = 1,
    onChange,
    siblingCount = 1,
    className,
    hideOnSinglePage = false,
}: PaginationProps) => {
    const totalPages = Math.ceil(total / pageSize);

    const paginationRange = useMemo(() => {
        // totalPages + siblingCount + firstPage + lastPage + 2*ellipses
        const totalNumbers = siblingCount + 5;

        // Case 1: If the number of pages is less than the page numbers we want to show
        if (totalNumbers >= totalPages) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const leftSiblingIndex = Math.max(current - siblingCount, 1);
        const rightSiblingIndex = Math.min(current + siblingCount, totalPages);

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPages;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
            return [...leftRange, ELLIPSIS, totalPages];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = Array.from(
                { length: rightItemCount },
                (_, i) => totalPages - rightItemCount + i + 1
            );
            return [firstPageIndex, ELLIPSIS, ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = Array.from(
                { length: rightSiblingIndex - leftSiblingIndex + 1 },
                (_, i) => leftSiblingIndex + i
            );
            return [firstPageIndex, ELLIPSIS, ...middleRange, ELLIPSIS, lastPageIndex];
        }

        return [];
    }, [totalPages, siblingCount, current]);

    if (hideOnSinglePage && totalPages <= 1) return null;

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages || page === current) return;
        onChange?.(page);
    };

    return (
        <nav
            className={["wim-pagination", className].filter(Boolean).join(" ")}
            aria-label="Pagination Navigation"
        >
            <ul className="wim-pagination">
                {/* Previous Button */}
                <li
                    className={[
                        "wim-pagination__item",
                        current === 1 ? "wim-pagination__item--disabled" : "",
                    ]
                        .filter(Boolean)
                        .join(" ")}
                >
                    <button
                        className="wim-pagination__button"
                        onClick={() => handlePageChange(current - 1)}
                        disabled={current === 1}
                        aria-label="Go to previous page"
                    >
                        <Icon name="ChevronLeftIcon" size="small" />
                    </button>
                </li>

                {/* Page Numbers */}
                {paginationRange.map((pageNumber, index) => {
                    if (pageNumber === ELLIPSIS) {
                        return (
                            <li
                                key={`ellipsis-${index}`}
                                className="wim-pagination__item wim-pagination__item--ellipsis"
                                aria-hidden="true"
                            >
                                {ELLIPSIS}
                            </li>
                        );
                    }

                    return (
                        <li
                            key={pageNumber}
                            className={[
                                "wim-pagination__item",
                                pageNumber === current ? "wim-pagination__item--active" : "",
                            ]
                                .filter(Boolean)
                                .join(" ")}
                        >
                            <button
                                className="wim-pagination__button"
                                onClick={() => handlePageChange(pageNumber as number)}
                                aria-label={`Go to page ${pageNumber}`}
                                aria-current={pageNumber === current ? "page" : undefined}
                            >
                                {pageNumber}
                            </button>
                        </li>
                    );
                })}

                {/* Next Button */}
                <li
                    className={[
                        "wim-pagination__item",
                        current === totalPages ? "wim-pagination__item--disabled" : "",
                    ]
                        .filter(Boolean)
                        .join(" ")}
                >
                    <button
                        className="wim-pagination__button"
                        onClick={() => handlePageChange(current + 1)}
                        disabled={current === totalPages}
                        aria-label="Go to next page"
                    >
                        <Icon name="ChevronRightIcon" size="small" />
                    </button>
                </li>
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    total: PropTypes.number.isRequired,
    pageSize: PropTypes.number,
    current: PropTypes.number,
    onChange: PropTypes.func,
    siblingCount: PropTypes.number,
    className: PropTypes.string,
    hideOnSinglePage: PropTypes.bool,
};

export default Pagination;
