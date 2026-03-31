import { default as React } from '../../../../node_modules/react';
export type TransferItem = {
    key: string;
    title: string;
    description?: string;
    disabled?: boolean;
};
export type TransferProps = {
    dataSource: TransferItem[];
    targetKeys?: string[];
    onChange?: (targetKeys: string[], direction: "toLeft" | "toRight", moveKeys: string[]) => void;
    titles?: [string, string];
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    label?: string;
    error?: string;
    required?: boolean;
    layout?: "vertical" | "horizontal";
};
/**
 * 2つのカラム間でアイテムを移動させて選択を行うためのコンポーネント。
 */
export declare const Transfer: ({ dataSource, targetKeys, onChange, titles, className, style, disabled, label, error, required, layout, }: TransferProps) => import("react/jsx-runtime").JSX.Element;
