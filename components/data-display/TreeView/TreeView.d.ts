import { default as React } from '../../../../node_modules/react';
/**
 * データ駆動モードで使用するノード型。
 */
export type TreeViewNode = {
    value: string;
    label: React.ReactNode;
    children?: TreeViewNode[];
    disabled?: boolean;
    icon?: React.ReactNode;
};
export type TreeViewLabels = {
    searchPlaceholder?: string;
    searchAriaLabel?: string;
    expandLabel?: (label: string) => string;
    collapseLabel?: (label: string) => string;
    treeAriaLabel?: string;
};
export type TreeViewProps = {
    /** JSX-based items (children API). Use this when not using `nodes`. */
    children?: React.ReactNode;
    /** Node array for data-driven mode. */
    nodes?: TreeViewNode[];
    /** Additional class names */
    className?: string;
    /** Whether multiple nodes can be selected */
    multiSelect?: boolean;
    /** Whether nodes show checkboxes */
    checkable?: boolean;
    /**
     * Check selection behavior.
     * - cascade: checking a parent selects all children; partially checked children make the parent indeterminate
     * - exclusive: parent and children are mutually exclusive
     */
    checkStrategy?: "cascade" | "exclusive";
    /** Whether to show a search input for filtering nodes */
    searchable?: boolean;
    /** Values of the nodes expanded initially */
    defaultExpandedValues?: string[];
    /** Values of the nodes selected initially */
    defaultSelectedValues?: string[];
    /** Values of the nodes checked initially */
    defaultCheckedValues?: string[];
    /** Callback when the checked values change */
    onCheckedChange?: (checked: string[]) => void;
    /** Callback when the selected values change */
    onSelectedChange?: (selected: string[]) => void;
    /** Width of the tree (CSS value or number in px) */
    width?: string | number;
    /** Node count threshold at which virtualization kicks in. */
    virtualThreshold?: number;
    /** Labels for internationalization */
    labels?: TreeViewLabels;
    /** Accessibility label ID */
    labelId?: string;
    /** Custom styles for internal parts */
    styles?: {
        root?: string;
        item?: string;
        search?: string;
        searchInput?: string;
        labelContainer?: string;
        iconWrapper?: string;
        expandBtn?: string;
        checkbox?: string;
        icon?: string;
    };
};
declare const TreeView: {
    ({ children, nodes, className, multiSelect, checkable, checkStrategy, searchable, defaultExpandedValues, defaultSelectedValues, defaultCheckedValues, onCheckedChange, onSelectedChange, width, virtualThreshold, labels, labelId, styles: stylesProp, }: TreeViewProps): React.JSX.Element;
    displayName: string;
};
type TreeViewItemProps = {
    /** Unique value identifying the node */
    value: string;
    /** Label content of the node */
    label: React.ReactNode;
    /** Icon displayed next to the label */
    icon?: React.ReactNode;
    /** Child nodes */
    children?: React.ReactNode;
    /** Additional class names */
    className?: string;
    /** Whether the node is disabled */
    disabled?: boolean;
};
export declare const TreeViewItem: {
    ({ value, label, icon, children, className, disabled, }: TreeViewItemProps): React.JSX.Element | null;
    displayName: string;
};
declare const TreeViewComponent: typeof TreeView & {
    Item: typeof TreeViewItem;
};
export { TreeViewComponent as TreeView };
export default TreeViewComponent;
