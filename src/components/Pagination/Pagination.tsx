import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
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

const ELLIPSIS = "...";

export const Pagination = ({
  total,
  pageSize = 10,
  current = 1,
  onChange,
  onPageSizeChange,
  siblingCount = 1,
  className,
  hideOnSinglePage = false,
  simple = false,
  showSizeChanger = false,
  pageSizeOptions = [10, 20, 50, 100],
  showTotal,
  showQuickJumper = false,
}: PaginationProps) => {
  const { t } = useTranslation();

  const [internalPageSize, setInternalPageSize] = useState(pageSize);
  const [jumpValue, setJumpValue] = useState("");

  const currentPageSize = internalPageSize;
  const totalPages = Math.ceil(total / currentPageSize);

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
        (_, i) => totalPages - rightItemCount + i + 1,
      );
      return [firstPageIndex, ELLIPSIS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => leftSiblingIndex + i,
      );
      return [
        firstPageIndex,
        ELLIPSIS,
        ...middleRange,
        ELLIPSIS,
        lastPageIndex,
      ];
    }

    return [];
  }, [totalPages, siblingCount, current]);

  if (hideOnSinglePage && totalPages <= 1) return null;

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === current) return;
    onChange?.(page, currentPageSize);
  };

  const handlePageSizeChange = (newSize: number) => {
    setInternalPageSize(newSize);
    onPageSizeChange?.(newSize);
    // Reset to page 1 when changing page size
    onChange?.(1, newSize);
  };

  const handleQuickJump = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const page = parseInt(jumpValue);
      if (!isNaN(page) && page >= 1 && page <= totalPages) {
        handlePageChange(page);
        setJumpValue("");
      }
    }
  };

  const startItem = (current - 1) * currentPageSize + 1;
  const endItem = Math.min(current * currentPageSize, total);

  // Simple mode rendering
  if (simple) {
    return (
      <nav
        className={classNames(
          "wim-pagination",
          "wim-pagination--simple",
          className,
        )}
        aria-label={t("a11y_pagination_nav")}
      >
        <ul className="wim-pagination">
          <li
            className={classNames(
              "wim-pagination__item",
              current === 1 && "wim-pagination__item--disabled",
            )}
          >
            <button
              className="wim-pagination__button"
              onClick={() => handlePageChange(current - 1)}
              disabled={current === 1}
              aria-label={t("a11y_go_to_prev_page")}
            >
              <Icon name="ChevronLeftIcon" size="small" />
            </button>
          </li>
          <li className="wim-pagination__item wim-pagination__simple-pager">
            <span>
              {current} / {totalPages}
            </span>
          </li>
          <li
            className={classNames(
              "wim-pagination__item",
              current === totalPages && "wim-pagination__item--disabled",
            )}
          >
            <button
              className="wim-pagination__button"
              onClick={() => handlePageChange(current + 1)}
              disabled={current === totalPages}
              aria-label={t("a11y_go_to_next_page")}
            >
              <Icon name="ChevronRightIcon" size="small" />
            </button>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <div className="wim-pagination-container">
    <div className={classNames("wim-pagination-wrapper", className)}>
      {showTotal && (
        <div className="wim-pagination__total">
          {showTotal(total, [startItem, endItem])}
        </div>
      )}
      <nav className="wim-pagination" aria-label={t("a11y_pagination_nav")}>
        <ul className="wim-pagination">
          {/* Previous Button */}
          <li
            className={classNames(
              "wim-pagination__item",
              current === 1 && "wim-pagination__item--disabled",
            )}
          >
            <button
              className="wim-pagination__button"
              onClick={() => handlePageChange(current - 1)}
              disabled={current === 1}
              aria-label={t("a11y_go_to_prev_page")}
            >
              <Icon name="ChevronLeftIcon" size="small" />
            </button>
          </li>

          {/* Mobile Page Indicator */}
          <li className="wim-pagination__item wim-pagination__mobile-indicator">
            <span>
              {current} / {totalPages}
            </span>
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
                className={classNames(
                  "wim-pagination__item",
                  "wim-pagination__item--number",
                  pageNumber === current && "wim-pagination__item--active",
                )}
              >
                <button
                  className="wim-pagination__button"
                  onClick={() => handlePageChange(pageNumber as number)}
                  aria-label={t("a11y_go_to_page", { page: pageNumber })}
                  aria-current={pageNumber === current ? "page" : undefined}
                >
                  {pageNumber}
                </button>
              </li>
            );
          })}

          {/* Next Button */}
          <li
            className={classNames(
              "wim-pagination__item",
              current === totalPages && "wim-pagination__item--disabled",
            )}
          >
            <button
              className="wim-pagination__button"
              onClick={() => handlePageChange(current + 1)}
              disabled={current === totalPages}
              aria-label={t("a11y_go_to_next_page")}
            >
              <Icon name="ChevronRightIcon" size="small" />
            </button>
          </li>
        </ul>
      </nav>

      {/* Page Size Changer */}
      {showSizeChanger && (
        <div className="wim-pagination__size-changer">
          <select
            value={currentPageSize}
            onChange={(e) => handlePageSizeChange(Number(e.target.value))}
            className="wim-pagination__size-select"
            aria-label={t("a11y_items_per_page")}
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size} {t("pagination_items_per_page")}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Quick Jumper */}
      {showQuickJumper && (
        <div className="wim-pagination__quick-jumper">
          <span>{t("pagination_go_to")}</span>
          <input
            type="number"
            min={1}
            max={totalPages}
            value={jumpValue}
            onChange={(e) => setJumpValue(e.target.value)}
            onKeyDown={handleQuickJump}
            className="wim-pagination__jump-input"
            aria-label={t("a11y_jump_to_page")}
          />
        </div>
      )}
    </div>
    </div>
  );
};

export default Pagination;
