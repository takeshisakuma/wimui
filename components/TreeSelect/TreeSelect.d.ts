import { default as React } from '../../../node_modules/react';
export type TreeSelectNode = {
    label: string;
    value: string;
    children?: TreeSelectNode[];
    disabled?: boolean;
    icon?: React.ReactNode;
};
export type TreeSelectProps = {
    treeData: TreeSelectNode[];
    value?: string | string[];
    onChange?: (value: any) => void;
    placeholder?: string;
    label?: string;
    className?: string;
    disabled?: boolean;
    multiple?: boolean;
    searchable?: boolean;
    defaultExpandedKeys?: string[];
    id?: string;
};
/**
 * ツリー形式の選択肢から1つまたは複数を選択するためのコンポーネント。
 */
export declare const TreeSelect: ({ treeData, value, onChange, placeholder, label, className, disabled, multiple, searchable, defaultExpandedKeys, id: customId, ...props }: TreeSelectProps) => import("react/jsx-runtime").JSX.Element;
