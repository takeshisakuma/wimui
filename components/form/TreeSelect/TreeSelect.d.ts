import { default as React } from '../../../../node_modules/react';
import { FieldWidth } from '../../../types/tokens';
export type TreeSelectNode = {
    label: React.ReactNode;
    value: string;
    children?: TreeSelectNode[];
    disabled?: boolean;
    icon?: React.ReactNode;
};
export type TreeSelectProps = {
    /** Tree nodes to select from */
    treeData: TreeSelectNode[];
    /** Selected value(s) (controlled) */
    value?: string | string[];
    /** Callback when the selection changes */
    onChange?: (value: string | string[]) => void;
    /** Placeholder shown when nothing is selected */
    placeholder?: React.ReactNode;
    /** Field label */
    label?: React.ReactNode;
    /** Error message */
    error?: string;
    /** Whether to show the required indicator */
    required?: boolean;
    /** Layout direction of label and field */
    layout?: "vertical" | "horizontal";
    /** Additional class names */
    className?: string;
    /** Whether the field is disabled */
    disabled?: boolean;
    /** Whether multiple nodes can be selected */
    multiple?: boolean;
    /** Whether to show a search input for filtering nodes */
    searchable?: boolean;
    /** Keys of the nodes expanded initially */
    defaultExpandedKeys?: string[];
    /** Whether to show a clear button when a value is selected */
    allowClear?: boolean;
    /**
     * Check selection behavior (effective when multiple).
     * - cascade: checking a parent selects all children; partially checked children make the parent indeterminate (default)
     * - exclusive: parent and children are mutually exclusive (selecting a parent deselects children and vice versa)
     */
    checkStrategy?: "cascade" | "exclusive";
    /** Unique ID for the component */
    id?: string;
    /**
     * If true, merge root props onto the child element.
     */
    asChild?: boolean;
    /** Optional children used when asChild is true */
    children?: React.ReactNode;
    /** Accessible label for the trigger when no visible label is provided */
    "aria-label"?: string;
    /** ID of the element that labels the field */
    "aria-labelledby"?: string;
    /** ID of the element that describes the field */
    "aria-describedby"?: string;
    /** Fixed width of the field (width token, CSS value, or number in px) */
    width?: FieldWidth | string | number;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
};
/**
 * Component for selecting one or more options from a tree structure.
 */
export declare const TreeSelect: React.ForwardRefExoticComponent<TreeSelectProps & React.RefAttributes<HTMLDivElement>>;
