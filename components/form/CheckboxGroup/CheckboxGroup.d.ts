import { default as React } from '../../../../node_modules/react';
type Option = {
    label: string;
    value: string;
    disabled?: boolean;
};
export interface CheckboxGroupProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange" | "defaultValue"> {
    /** List of checkbox options */
    options: Option[];
    /** Selected values (controlled) */
    value?: string[];
    /** Initially selected values (uncontrolled) */
    defaultValue?: string[];
    /** Callback when the selected values change */
    onChange?: (value: string[]) => void;
    /** Layout direction of the checkboxes */
    direction?: "vertical" | "horizontal";
    /** Name attribute shared by the checkbox inputs */
    name?: string;
    /** Whether to render as a child element. */
    asChild?: boolean;
    /** Group label */
    label?: string;
    /** Error message */
    error?: string;
    /** Whether to show the required indicator */
    required?: boolean;
    /** Whether the whole group is disabled */
    disabled?: boolean;
}
/**
 * CheckboxGroup component to manage multiple checkboxes.
 */
export declare const CheckboxGroup: React.ForwardRefExoticComponent<CheckboxGroupProps & React.RefAttributes<HTMLDivElement>>;
export default CheckboxGroup;
