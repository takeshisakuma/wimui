import { default as React } from '../../../../node_modules/react';
type Option = {
    label: string;
    value: string;
    disabled?: boolean;
};
export interface SwitchGroupProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange" | "defaultValue"> {
    /** List of switch options */
    options: Option[];
    /** Selected values (controlled) */
    value?: string[];
    /** Initially selected values (uncontrolled) */
    defaultValue?: string[];
    /** Callback when the selected values change */
    onChange?: (value: string[]) => void;
    /** Layout direction of the switches */
    direction?: "vertical" | "horizontal";
    /** Name attribute shared by the switch inputs */
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
 * SwitchGroup component to manage multiple switches.
 */
export declare const SwitchGroup: React.ForwardRefExoticComponent<SwitchGroupProps & React.RefAttributes<HTMLDivElement>>;
export default SwitchGroup;
