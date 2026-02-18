export type CascaderOption = {
    label: string;
    value: string;
    children?: CascaderOption[];
    disabled?: boolean;
};
export type CascaderProps = {
    options: CascaderOption[];
    value?: string[];
    onChange?: (value: string[], selectedOptions: CascaderOption[]) => void;
    placeholder?: string;
    label?: string;
    className?: string;
    disabled?: boolean;
    defaultValue?: string[];
    id?: string;
    /** Expand trigger mode */
    expandTrigger?: "click" | "hover";
    /** Custom separator for the display value */
    separator?: string;
};
/**
 * 階層構造を持つデータから選択肢を辿って1つを選択するためのコンポーネント。
 */
export declare const Cascader: ({ options, value, onChange, placeholder, label, className, disabled, defaultValue, id: customId, expandTrigger, separator, ...props }: CascaderProps) => import("react/jsx-runtime").JSX.Element;
