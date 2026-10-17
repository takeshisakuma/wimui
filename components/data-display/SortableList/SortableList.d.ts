import { default as React } from '../../../../node_modules/react';
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
declare const SortableListRoot: React.ForwardRefExoticComponent<SortableListProps & React.RefAttributes<HTMLUListElement>>;
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
export declare const SortableListItem: React.ForwardRefExoticComponent<SortableListItemProps & React.RefAttributes<HTMLLIElement>>;
export interface SortableListDragHandleProps extends React.ComponentPropsWithoutRef<"div"> {
    asChild?: boolean;
}
export declare const SortableListDragHandle: React.ForwardRefExoticComponent<SortableListDragHandleProps & React.RefAttributes<HTMLDivElement>>;
export declare const SortableList: typeof SortableListRoot & {
    Item: typeof SortableListItem;
    DragHandle: typeof SortableListDragHandle;
};
export default SortableList;
