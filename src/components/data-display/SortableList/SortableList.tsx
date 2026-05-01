import React, { useState, useRef, createContext, useContext, useCallback } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { useTranslation } from "react-i18next";
import { Icon } from "../../media/Icon/Icon";
import { mergeRefs } from "../../_internal/mergeRefs";
import styles from "./sortable-list.module.scss";

// --- Context ---
interface SortableListContextType {
  draggingIndex: number | null;
  overIndex: number | null;
  setDraggingIndex: (index: number | null) => void;
  setOverIndex: (index: number | null) => void;
  onMove: (from: number, to: number) => void;
  disabled?: boolean;
}

const SortableListContext = createContext<SortableListContextType | null>(null);

const useSortableList = () => {
  const context = useContext(SortableListContext);
  if (!context) {
    throw new Error("SortableList compound components must be used within SortableList");
  }
  return context;
};

// --- Main Component ---
export interface SortableListProps extends Omit<React.ComponentPropsWithoutRef<"ul">, "onDragStart" | "onDragOver" | "onDrop"> {
  /**
   * If true, the component will be rendered as its child.
   */
  asChild?: boolean;
  /**
   * Callback called when reordering is completed.
   */
  onSortEnd?: (oldIndex: number, newIndex: number) => void;
  /**
   * Whether the entire list is disabled.
   */
  disabled?: boolean;
}

/**
 * SortableList component enables reordering of list items through drag and drop.
 */
const SortableListRoot = React.forwardRef<HTMLUListElement, SortableListProps>(
  ({ asChild = false, className, children, onSortEnd, disabled = false, ...props }, ref) => {
    const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
    const [overIndex, setOverIndex] = useState<number | null>(null);

    const handleMove = useCallback(
      (from: number, to: number) => {
        if (from === to) return;
        onSortEnd?.(from, to);
      },
      [onSortEnd]
    );

    const Root = asChild ? Slot : "ul";

    return (
      <SortableListContext.Provider
        value={{
          draggingIndex,
          overIndex,
          setDraggingIndex,
          setOverIndex,
          onMove: handleMove,
          disabled,
        }}
      >
        <Root
          ref={ref}
          className={classNames(styles.root, className)}
          {...props}
        >
          <Slottable>{children}</Slottable>
        </Root>
      </SortableListContext.Provider>
    );
  }
);

SortableListRoot.displayName = "SortableList";

// --- Sortable Item ---
export interface SortableListItemProps extends React.ComponentPropsWithoutRef<"li"> {
  asChild?: boolean;
  /**
   * The index of the item in the list.
   */
  index: number;
  /**
   * Whether this specific item is disabled for dragging.
   */
  disabled?: boolean;
}

export const SortableListItem = React.forwardRef<HTMLLIElement, SortableListItemProps>(
  ({ asChild = false, index, disabled: itemDisabled = false, className, children, ...props }, ref) => {
    const {
      draggingIndex,
      overIndex,
      setDraggingIndex,
      setOverIndex,
      onMove,
      disabled: listDisabled,
    } = useSortableList();
    const itemRef = useRef<HTMLLIElement>(null);
    const { t } = useTranslation("components");

    const disabled = listDisabled || itemDisabled;
    const isDragging = draggingIndex === index;
    const isOver = overIndex === index;

    const handleDragStart = (e: React.DragEvent) => {
      if (disabled) return;
      setDraggingIndex(index);
      e.dataTransfer.effectAllowed = "move";
      // Set a ghost image or just let browser handle it
      if (itemRef.current) {
        e.dataTransfer.setDragImage(itemRef.current, 20, 20);
      }
    };

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      if (disabled || draggingIndex === null || draggingIndex === index) return;
      setOverIndex(index);
    };

    const handleDragEnd = () => {
      setDraggingIndex(null);
      setOverIndex(null);
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      if (draggingIndex !== null && draggingIndex !== index) {
        onMove(draggingIndex, index);
      }
      setDraggingIndex(null);
      setOverIndex(null);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;

      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (index > 0) onMove(index, index - 1);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        onMove(index, index + 1); // Boundary check should be handled by consumer or based on children count if we had it
      }
    };

    const ItemRoot = asChild ? Slot : "li";

    return (
      <ItemRoot
        ref={mergeRefs(ref, itemRef)}
        className={classNames(
          styles.item,
          isDragging && styles.dragging,
          isOver && styles.over,
          disabled && styles.disabled,
          className
        )}
        draggable={!disabled}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        onDrop={handleDrop}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="listitem"
        aria-label={t("sortable_list.drag_handle_label")}
        {...props}
      >
        <Slottable>{children}</Slottable>
      </ItemRoot>
    );
  }
);

// --- Drag Handle ---
export interface SortableListDragHandleProps extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

export const SortableListDragHandle = React.forwardRef<HTMLDivElement, SortableListDragHandleProps>(
  ({ asChild = false, className, ...props }, ref) => {
    const Component = asChild ? Slot : "div";
    return (
      <Component
        ref={ref}
        className={classNames(styles.dragHandle, className)}
        {...props}
      >
        <Icon name="GripVerticalIcon" size="sm" />
      </Component>
    );
  }
);

export const SortableList = SortableListRoot as typeof SortableListRoot & {
  Item: typeof SortableListItem;
  DragHandle: typeof SortableListDragHandle;
};

SortableList.Item = SortableListItem;
SortableList.DragHandle = SortableListDragHandle;

SortableList.displayName = "SortableList";
SortableListItem.displayName = "SortableList.Item";
SortableListDragHandle.displayName = "SortableList.DragHandle";

export default SortableList;
