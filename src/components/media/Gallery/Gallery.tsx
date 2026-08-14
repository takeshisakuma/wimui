import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { CloseIcon } from "@/icon";
import { Icon } from "../Icon/Icon";
import { Checkbox } from "../../form/Checkbox/Checkbox";
import { Button } from "../../form/Button/Button";
import styles from "./gallery.module.scss";

export interface GalleryItem {
  id: string;
  src: string;
  alt?: string;
  title?: string;
  caption?: string;
}

interface GalleryContextType {
  selectable: boolean;
  selectedIds: Set<string>;
  lastClickedIndex: React.MutableRefObject<number | null>;
  items: GalleryItem[];
  toggleSelect: (id: string, index: number, shiftKey: boolean) => void;
  focusedIndex: number;
  setFocusedIndex: (index: number) => void;
  selectAll: () => void;
  clearSelection: () => void;
  onItemClick?: (item: GalleryItem, index: number) => void;
}

const GalleryContext = createContext<GalleryContextType | null>(null);

const useGalleryContext = () => {
  const ctx = useContext(GalleryContext);
  if (!ctx) throw new Error("Gallery subcomponents must be used within Gallery");
  return ctx;
};

export interface GalleryProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "onSelect"> {
  /** Images to display in the gallery */
  items: GalleryItem[];
  /** Number of grid columns. Default: 3. */
  columns?: number;
  /** Gap between items. Default: "md". */
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Aspect ratio for each image. Default: "square". */
  aspect?: "square" | "landscape" | "portrait" | "auto";
  /** Enable multi-select with checkboxes. The photo click is `onItemClick`, not select. */
  selectable?: boolean;
  /** Controlled selected IDs. */
  selected?: string[];
  /** Uncontrolled initial selected IDs. */
  defaultSelected?: string[];
  /** Called when selection changes. */
  onSelectionChange?: (ids: string[]) => void;
  /** Called when the item (not the checkbox) is clicked. Fires even when `selectable`. */
  onItemClick?: (item: GalleryItem, index: number) => void;
  /** Render bulk-action toolbar when items are selected. */
  renderActions?: (params: {
    selectedIds: string[];
    clearSelection: () => void;
  }) => React.ReactNode;
}

export const Gallery = React.forwardRef<HTMLDivElement, GalleryProps>(
  (
    {
      items,
      columns = 3,
      gap = "md",
      aspect = "square",
      selectable = false,
      selected: controlledSelected,
      defaultSelected = [],
      onSelectionChange,
      onItemClick,
      renderActions,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const { t } = useWimTranslation("components");
    const isControlled = controlledSelected !== undefined;

    const [uncontrolledSelected, setUncontrolledSelected] = useState<
      Set<string>
    >(() => new Set(defaultSelected));
    const [focusedIndex, setFocusedIndex] = useState(0);
    const lastClickedIndex = useRef<number | null>(null);

    const internalRef = useRef<HTMLDivElement>(null);
    const [actualColumns, setActualColumns] = useState(columns);

    const mergedRef = useCallback(
      (el: HTMLDivElement | null) => {
        internalRef.current = el;
        if (typeof ref === "function") {
          ref(el);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
        }
      },
      [ref],
    );

    useEffect(() => {
      const el = internalRef.current;
      if (!el) return;

      const observer = new ResizeObserver((entries) => {
        const width = entries[0].contentRect.width;
        if (width < 480) {
          setActualColumns(1);
        } else if (width < 576) {
          setActualColumns(2);
        } else {
          setActualColumns(columns);
        }
      });

      observer.observe(el);
      return () => observer.disconnect();
    }, [columns]);

    const selectedIds = useMemo(
      () => (isControlled ? new Set(controlledSelected) : uncontrolledSelected),
      [isControlled, controlledSelected, uncontrolledSelected],
    );

    const commitSelection = useCallback(
      (next: Set<string>) => {
        if (!isControlled) {
          setUncontrolledSelected(next);
        }
        onSelectionChange?.(Array.from(next));
      },
      [isControlled, onSelectionChange],
    );

    const toggleSelect = useCallback(
      (id: string, index: number, shiftKey: boolean) => {
        const next = new Set(selectedIds);
        if (shiftKey && lastClickedIndex.current !== null) {
          const from = Math.min(lastClickedIndex.current, index);
          const to = Math.max(lastClickedIndex.current, index);
          const adding = !selectedIds.has(id);
          for (let i = from; i <= to; i++) {
            if (adding) {
              next.add(items[i].id);
            } else {
              next.delete(items[i].id);
            }
          }
        } else {
          if (next.has(id)) {
            next.delete(id);
          } else {
            next.add(id);
          }
          lastClickedIndex.current = index;
        }
        commitSelection(next);
      },
      [selectedIds, items, commitSelection],
    );

    const selectAll = useCallback(() => {
      commitSelection(new Set(items.map((item) => item.id)));
    }, [items, commitSelection]);

    const clearSelection = useCallback(() => {
      commitSelection(new Set());
    }, [commitSelection]);

    // Group items into rows for ARIA grid hierarchy (grid > row > gridcell)
    const rows = useMemo(() => {
      const result: Array<{ rowItems: GalleryItem[]; startIndex: number }> = [];
      for (let i = 0; i < items.length; i += actualColumns) {
        result.push({ rowItems: items.slice(i, i + actualColumns), startIndex: i });
      }
      return result;
    }, [items, actualColumns]);

    const selectedArray = Array.from(selectedIds);
    const hasSelection = selectedArray.length > 0;

    const gridStyle: React.CSSProperties = {
      "--gallery-columns": actualColumns,
      ...style,
    } as React.CSSProperties;

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      const cols = actualColumns;
      const total = items.length;
      let next = focusedIndex;

      switch (e.key) {
        case "ArrowRight":
          e.preventDefault();
          next = Math.min(focusedIndex + 1, total - 1);
          break;
        case "ArrowLeft":
          e.preventDefault();
          next = Math.max(focusedIndex - 1, 0);
          break;
        case "ArrowDown":
          e.preventDefault();
          next = Math.min(focusedIndex + cols, total - 1);
          break;
        case "ArrowUp":
          e.preventDefault();
          next = Math.max(focusedIndex - cols, 0);
          break;
        case "Home":
          e.preventDefault();
          next = 0;
          break;
        case "End":
          e.preventDefault();
          next = total - 1;
          break;
        case "Escape":
          if (selectable) {
            e.preventDefault();
            clearSelection();
          }
          break;
        case "a":
        case "A":
          if (selectable && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            selectAll();
          }
          break;
        default:
          return;
      }

      if (next !== focusedIndex) {
        setFocusedIndex(next);
        const gridEl = e.currentTarget;
        const itemEl = gridEl.querySelectorAll<HTMLElement>("[data-gallery-item]")[next];
        itemEl?.focus();
      }
    };

    return (
      <GalleryContext.Provider
        value={{
          selectable,
          selectedIds,
          lastClickedIndex,
          items,
          toggleSelect,
          focusedIndex,
          setFocusedIndex,
          selectAll,
          clearSelection,
          onItemClick,
        }}
      >
        <div
          ref={mergedRef}
          className={classNames("wim-gallery", styles.root, className)}
          {...props}
        >
          {selectable && hasSelection && (
            <div
              className={styles.toolbar}
              role="toolbar"
              aria-label={t("gallery.toolbar_label")}
            >
              <span className={styles.toolbarCount}>
                {t("gallery.selected_count", { count: selectedArray.length })}
              </span>
              <div className={styles.toolbarActions}>
                {renderActions?.({ selectedIds: selectedArray, clearSelection })}
                <Button
                  size="sm"
                  variant="ghost"
                  className={styles.toolbarClear}
                  onClick={clearSelection}
                  aria-label={t("gallery.clear_selection")}
                  icon={<Icon component={CloseIcon} size="sm" />}
                />
              </div>
            </div>
          )}
          <div
            className={classNames(styles.grid, styles[`gap-${gap}`], styles[`aspect-${aspect}`])}
            style={gridStyle}
            role="grid"
            aria-multiselectable={selectable || undefined}
            aria-label={t("gallery.grid_label")}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {rows.map(({ rowItems, startIndex }, rowIndex) => (
              <div key={rowIndex} role="row" style={{ display: "contents" }}>
                {rowItems.map((item, colIndex) => (
                  <GalleryItemInternal
                    key={item.id}
                    item={item}
                    index={startIndex + colIndex}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </GalleryContext.Provider>
    );
  },
);

Gallery.displayName = "Gallery";

interface GalleryItemInternalProps {
  item: GalleryItem;
  index: number;
}

const GalleryItemInternal = ({ item, index }: GalleryItemInternalProps) => {
  const {
    selectable,
    selectedIds,
    toggleSelect,
    focusedIndex,
    setFocusedIndex,
    onItemClick,
  } = useGalleryContext();
  const { t } = useWimTranslation("components");
  const isSelected = selectedIds.has(item.id);
  const isFocused = focusedIndex === index;

  const handleClick = () => {
    onItemClick?.(item, index);
    setFocusedIndex(index);
  };

  const handleCheckboxClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleSelect(item.id, index, e.shiftKey);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      // Space はチェックのキーボード相当（チェックは tabIndex -1）。Enter は写真クリック。
      if (selectable && e.key === " ") {
        toggleSelect(item.id, index, e.shiftKey);
      } else {
        onItemClick?.(item, index);
      }
    }
  };

  return (
    <div
      className={classNames(styles.item, {
        [styles.selected]: isSelected,
      })}
      role="gridcell"
      aria-selected={selectable ? isSelected : undefined}
      tabIndex={isFocused ? 0 : -1}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onFocus={() => setFocusedIndex(index)}
      data-gallery-item
    >
      <div className={styles.imageWrapper}>
        <img
          src={item.src}
          alt={item.alt ?? item.title ?? ""}
          className={styles.image}
          draggable={false}
        />
        {selectable && (
          <div className={styles.checkboxOverlay}>
            <Checkbox
              checked={isSelected}
              onChange={() => {}}
              onClick={handleCheckboxClick}
              aria-label={
                isSelected
                  ? t("gallery.deselect_item", { title: item.title ?? item.alt ?? String(index + 1) })
                  : t("gallery.select_item", { title: item.title ?? item.alt ?? String(index + 1) })
              }
              tabIndex={-1}
              className={styles.checkbox}
            />
          </div>
        )}
        {isSelected && <div className={styles.selectedRing} aria-hidden />}
      </div>
      {(item.title || item.caption) && (
        <div className={styles.caption}>
          {item.title && <span className={styles.captionTitle}>{item.title}</span>}
          {item.caption && <span className={styles.captionText}>{item.caption}</span>}
        </div>
      )}
    </div>
  );
};
