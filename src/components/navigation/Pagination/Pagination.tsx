import React, { useMemo, useState } from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { Selectbox } from "../../form/Selectbox/Selectbox";
import { Input } from "../../form/Input/Input";
import { Button } from "../../form/Button/Button";
import styles from "./pagination.module.scss";
import { ChevronLeftIcon, ChevronRightIcon } from "@/icon";

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
  labels = {},
}: PaginationProps) => {
  const { t } = useWimTranslation("common");
  const {
    prevPage = t("a11y.go_to_prev_page"),
    nextPage = t("a11y.go_to_next_page"),
    pageAriaLabel = (page: number) => t("a11y.go_to_page", { page: String(page) }),
    itemsPerPage = t("pagination.items_per_page"),
    goTo = t("pagination.go_to"),
    go = t("pagination.go"),
    pageSizeAriaLabel = t("a11y.items_per_page"),
    jumpToPageAriaLabel = t("a11y.jump_to_page"),
    navAriaLabel = t("a11y.pagination_nav"),
  } = labels;

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

  const executeJump = () => {
    const page = parseInt(jumpValue);
    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      handlePageChange(page);
      setJumpValue("");
    }
  };

  const handleQuickJump = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeJump();
    }
  };

  const startItem = (current - 1) * currentPageSize + 1;
  const endItem = Math.min(current * currentPageSize, total);

  // Simple mode rendering
  if (simple) {
    return (
      <nav
        className={classNames(
          styles.root,
          styles.simple,
          className,
        )}
        aria-label={navAriaLabel}
      >
        <ul className={styles.root}>
          <li
            className={classNames(
              styles.item,
              current === 1 && styles.disabled,
            )}
          >
            <button
              className={styles.button}
              onClick={() => handlePageChange(current - 1)}
              disabled={current === 1}
              aria-label={prevPage}
            >
              <Icon component={ChevronLeftIcon} size="sm" />
            </button>
          </li>
          <li className={classNames(styles.item, styles.simplePager)}>
            <span>
              {current} / {totalPages}
            </span>
          </li>
          <li
            className={classNames(
              styles.item,
              current === totalPages && styles.disabled,
            )}
          >
            <button
              className={styles.button}
              onClick={() => handlePageChange(current + 1)}
              disabled={current === totalPages}
              aria-label={nextPage}
            >
              <Icon component={ChevronRightIcon} size="sm" />
            </button>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <div className={styles.container}>
      <div className={classNames(styles.wrapper, className)}>
        {showTotal && (
          <div className={styles.total}>
            {showTotal(total, [startItem, endItem])}
          </div>
        )}
        <nav className={styles.root} aria-label={navAriaLabel}>
          <ul className={styles.root}>
            {/* Previous Button */}
            <li
              className={classNames(
                styles.item,
                current === 1 && styles.disabled,
              )}
            >
              <button
                className={styles.button}
                onClick={() => handlePageChange(current - 1)}
                disabled={current === 1}
                aria-label={prevPage}
              >
                <Icon component={ChevronLeftIcon} size="sm" />
              </button>
            </li>

            {/* Mobile Page Indicator */}
            <li className={classNames(styles.item, styles.mobileIndicator)}>
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
                    className={classNames(styles.item, styles.ellipsis)}
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
                    styles.item,
                    styles.number,
                    pageNumber === current && styles.active,
                  )}
                >
                  <button
                    className={styles.button}
                    onClick={() => handlePageChange(pageNumber as number)}
                    aria-label={pageAriaLabel(pageNumber as number)}
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
                styles.item,
                current === totalPages && styles.disabled,
              )}
            >
              <button
                className={styles.button}
                onClick={() => handlePageChange(current + 1)}
                disabled={current === totalPages}
                aria-label={nextPage}
              >
                <Icon component={ChevronRightIcon} size="sm" />
              </button>
            </li>
          </ul>
        </nav>

        {/* Page Size Changer */}
        {showSizeChanger && (
          <div className={styles.sizeChanger}>
            <Selectbox
              value={String(currentPageSize)}
              onChange={(val) => handlePageSizeChange(Number(val))}
              options={pageSizeOptions.map((size) => ({
                label: `${size} ${itemsPerPage}`,
                value: String(size),
              }))}
              width="auto"
              aria-label={pageSizeAriaLabel}
            />
          </div>
        )}

        {/* Quick Jumper */}
        {showQuickJumper && (
          <div className={styles.quickJumper}>
            <span>{goTo}</span>
            <Input
              type="number"
              min={1}
              max={totalPages}
              value={jumpValue}
              onChange={(e) => setJumpValue(e.target.value)}
              onKeyDown={handleQuickJump}
              width="60px"
              aria-label={jumpToPageAriaLabel}
            />
            <Button
              size="sm"
              variant="outline"
              onClick={executeJump}
              disabled={!jumpValue}
            >
              {go}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
