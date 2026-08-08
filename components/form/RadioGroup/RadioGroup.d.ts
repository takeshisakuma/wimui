import { default as React } from '../../../../node_modules/react';
type Option = {
    label: string;
    value: string;
    disabled?: boolean;
};
export interface RadioGroupProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange" | "defaultValue"> {
    /** List of radio options */
    options: Option[];
    /** Selected value (controlled) */
    value?: string;
    /** Initially selected value (uncontrolled) */
    defaultValue?: string;
    /** Callback when the selected value changes */
    onChange?: (value: string) => void;
    /** Layout direction of the radio buttons */
    direction?: "vertical" | "horizontal";
    /** Name attribute shared by the radio inputs */
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
 * RadioGroup component to manage multiple radio buttons.
 */
export declare const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLDivElement>>;
export default RadioGroup;
