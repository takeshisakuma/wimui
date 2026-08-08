import { default as React } from '../../../../node_modules/react';
import { InputBase } from '../InputBase';
import { FieldIntent, FieldWidth } from '../../../types/tokens';
export type SelectOption = {
    label?: React.ReactNode;
    value?: string;
    disabled?: boolean;
    group?: string;
    type?: "option" | "separator";
};
export type SelectOptionGroup = {
    label: React.ReactNode;
    options: SelectOption[];
};
export interface SelectProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange" | "defaultValue"> {
    /** List of options (flat or grouped) */
    options: SelectOption[] | SelectOptionGroup[];
    /** Selected value (controlled) */
    value?: string;
    /** Callback when the selected value changes */
    onChange?: (value: string) => void;
    /** Placeholder shown when nothing is selected */
    placeholder?: React.ReactNode;
    /** Field label */
    label?: string;
    /** Whether the field is disabled */
    disabled?: boolean;
    /** Initially selected value (uncontrolled) */
    defaultValue?: string;
    /** Enable search/filtering functionality */
    searchable?: boolean;
    /** Placeholder text for search input */
    searchPlaceholder?: string;
    /** Custom filter function */
    filterOption?: (option: SelectOption, searchValue: string) => boolean;
    /** Whether options are grouped */
    grouped?: boolean;
    /** Whether to show a clear button when a value is selected */
    allowClear?: boolean;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
    /** Unique ID for the component */
    id?: string;
    /** Semantic intent of the field (e.g. error state) */
    intent?: FieldIntent;
    /** Error message */
    error?: string;
    /** Whether to show the required indicator */
    required?: boolean;
    /** Layout direction of label and field */
    layout?: "vertical" | "horizontal";
    /** Label shown when no options match the search */
    noOptionsFoundLabel?: string;
    /** Fixed width of the field (width token, CSS value, or number in px) */
    width?: FieldWidth | string | number;
    /** Whether to render as a child element. */
    asChild?: boolean;
    /** Custom styles for internal parts */
    styles?: {
        root?: string;
        trigger?: string;
        value?: string;
        dropdown?: string;
        list?: string;
        option?: string;
        search?: string;
        searchInput?: string;
        groupLabel?: string;
        separator?: string;
        empty?: string;
        inputBase?: React.ComponentProps<typeof InputBase>["styles"];
    };
}
/**
 * Pull-down menu for selecting a single option from a predefined list.
 */
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLDivElement>>;
export default Select;
