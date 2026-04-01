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
    dataSource: TransferItem[];
    targetKeys?: string[];
    onChange?: (targetKeys: string[], direction: "toLeft" | "toRight", moveKeys: string[]) => void;
    titles?: [React.ReactNode, React.ReactNode];
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    label?: React.ReactNode;
    error?: string;
    required?: boolean;
    layout?: "vertical" | "horizontal";
    labels?: TransferLabels;
};
/**
 * 2つのカラム間でアイテムを移動させて選択を行うためのコンポーネント。
 */
export declare const Transfer: ({ dataSource, targetKeys, onChange, titles, className, style, disabled, label, error, required, layout, labels, }: TransferProps) => import("react/jsx-runtime").JSX.Element;
