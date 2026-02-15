type Option = {
    label: string;
    value: string;
    disabled?: boolean;
};
type SwitchGroupProps = {
    options: Option[];
    value?: string[];
    defaultValue?: string[];
    onChange?: (value: string[]) => void;
    direction?: "vertical" | "horizontal";
    name?: string;
    className?: string;
    /**
     * グループのラベル
     */
    label?: string;
};
/**
 * SwitchGroup component to manage multiple switches.
 */
export declare const SwitchGroup: ({ options, value, defaultValue, onChange, direction, name, className, label, }: SwitchGroupProps) => import("react/jsx-runtime").JSX.Element;
export {};
