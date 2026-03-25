import { default as React } from '../../../node_modules/react';
/**
 * データ駆動モードで使用するノード型。
 * TreeSelectNode と互換性があります。
 */
export type TreeViewNode = {
    value: string;
    label: string;
    children?: TreeViewNode[];
    disabled?: boolean;
    icon?: React.ReactNode;
};
type TreeViewProps = {
    /** JSX ベースのアイテム（children API）。nodes を使わない場合に指定します。 */
    children?: React.ReactNode;
    /**
     * データ駆動モードのノード配列。
     * 指定した場合は children より優先され、大量データで自動的に仮想化されます。
     */
    nodes?: TreeViewNode[];
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
    /**
     * データ駆動モードで仮想化を開始するノード数のしきい値。
     * デフォルトは 100。
     */
    virtualThreshold?: number;
};
declare const TreeView: ({ children, nodes, className, multiSelect, checkable, searchable, defaultExpandedValues, defaultSelectedValues, defaultCheckedValues, onCheckedChange, onSelectedChange, width, virtualThreshold, }: TreeViewProps) => import("react/jsx-runtime").JSX.Element;
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
