import { default as React } from '../../../../node_modules/react';
export type TransferLabels = {
    noData?: React.ReactNode;
    moveToTarget?: string;
    moveToSource?: string;
    statusMovedToTarget?: (count: number) => string;
    statusMovedToSource?: (count: number) => string;
};
export type TransferItem = {
    key: string;
    title: React.ReactNode;
    description?: string;
    disabled?: boolean;
};
export type TransferProps = {
    /** All items shown across the two lists */
    dataSource: TransferItem[];
    /** Keys of the items in the target (right) list */
    targetKeys?: string[];
    /** Callback when items are moved between the lists */
    onChange?: (targetKeys: string[], direction: "toLeft" | "toRight", moveKeys: string[]) => void;
    /** Titles of the source and target lists */
    titles?: [React.ReactNode, React.ReactNode];
    /** Additional class names */
    className?: string;
    /** Inline styles */
    style?: React.CSSProperties;
    /** Whether the component is disabled */
    disabled?: boolean;
    /** Field label */
    label?: React.ReactNode;
    /** Error message */
    error?: string;
    /** Whether to show the required indicator */
    required?: boolean;
    /** Layout direction of label and field */
    layout?: "vertical" | "horizontal";
    /** Labels for internationalization */
    labels?: TransferLabels;
    /** Accessible name for the group of the two lists when no visible `label` is provided. */
    "aria-label"?: string;
    /** ID of the element that labels the group of the two lists when no visible `label` is provided. */
    "aria-labelledby"?: string;
    /** ID of the element that describes the group. Announced together with the error message. */
    "aria-describedby"?: string;
};
/**
 * 2つのカラム間でアイテムを移動させて選択を行うためのコンポーネント。
 */
export declare const Transfer: ({ dataSource, targetKeys, onChange, titles: titlesProp, className, style, disabled, label, error, required, layout, labels, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, }: TransferProps) => React.JSX.Element;
