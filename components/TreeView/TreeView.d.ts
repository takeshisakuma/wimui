import { default as React } from '../../../node_modules/react';
type TreeViewProps = {
    children: React.ReactNode;
    className?: string;
    multiSelect?: boolean;
    checkable?: boolean;
    searchable?: boolean;
    defaultExpandedValues?: string[];
    defaultSelectedValues?: string[];
    defaultCheckedValues?: string[];
    onCheckedChange?: (checked: string[]) => void;
    onSelectedChange?: (selected: string[]) => void;
    width?: string | number;
};
declare const TreeView: ({ children, className, multiSelect, checkable, searchable, defaultExpandedValues, defaultSelectedValues, defaultCheckedValues, onCheckedChange, onSelectedChange, width, }: TreeViewProps) => import("react/jsx-runtime").JSX.Element;
type TreeViewItemProps = {
    value: string;
    label: React.ReactNode;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
};
export declare const TreeViewItem: ({ value, label, icon, children, className, disabled, }: TreeViewItemProps) => import("react/jsx-runtime").JSX.Element | null;
declare const TreeViewComponent: typeof TreeView & {
    Item: typeof TreeViewItem;
};
export { TreeViewComponent as TreeView };
export default TreeViewComponent;
