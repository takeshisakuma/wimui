import { default as React } from '../../../../node_modules/react';
import { Icon } from '../../media/Icon/Icon';
import { ComponentSizeBasic } from '../../../types/tokens';
export type Option = {
    label?: string;
    value: string;
    iconName?: React.ComponentProps<typeof Icon>["name"];
    disabled?: boolean;
};
type ToggleGroupProps = {
    /** List of toggle options */
    options: Option[];
    /** Selected value(s) (controlled) */
    value?: string | string[];
    /** Initially selected value(s) (uncontrolled) */
    defaultValue?: string | string[];
    /** Callback when the selection changes */
    onChange?: (value: string | string[]) => void;
    /** Whether one or multiple options can be selected */
    selectionMode?: "single" | "multiple";
    /** Size of the toggle buttons */
    size?: ComponentSizeBasic;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
    /** Additional class names */
    className?: string;
    /** Whether the group is disabled */
    disabled?: boolean;
    /** Group label */
    label?: string;
    /** Error message */
    error?: string;
    /** Whether to show the required indicator */
    required?: boolean;
    /** Layout direction of label and field */
    layout?: "vertical" | "horizontal";
    /** Unique ID for the component */
    id?: string;
    /**
     * If true, merge group props onto the child element.
     */
    asChild?: boolean;
    /** Optional children used when asChild is true */
    children?: React.ReactNode;
    /** Accessible label when no visible label is provided */
    "aria-label"?: string;
    /** ID of the element that labels the group */
    "aria-labelledby"?: string;
};
/**
 * ToggleGroup component allows users to select one or multiple options from a set of buttons.
 */
export declare const ToggleGroup: React.ForwardRefExoticComponent<ToggleGroupProps & React.RefAttributes<HTMLDivElement>>;
export {};
