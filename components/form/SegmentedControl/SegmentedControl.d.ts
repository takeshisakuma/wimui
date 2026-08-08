import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic } from '../../../types/tokens';
type Option = {
    label?: string;
    value: string;
    iconName?: "CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon";
};
type SegmentedControlProps = {
    /** List of segment options */
    options: Option[];
    /** Selected value */
    value: string;
    /** Callback when the selected value changes */
    onChange: (value: string) => void;
    /** Size of the control */
    size?: ComponentSizeBasic;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
    /** Additional class names */
    className?: string;
    /** Accessible label */
    label?: string;
    /** Error message */
    error?: string;
    /** Whether to show the required indicator */
    required?: boolean;
    /** Layout direction of label and field */
    layout?: "vertical" | "horizontal";
    /** Whether the control is disabled */
    disabled?: boolean;
    /**
     * If true, merge radiogroup props onto the child element.
     */
    asChild?: boolean;
    /** Optional children used when asChild is true */
    children?: React.ReactNode;
    /**
     * Unique ID for the component
     */
    id?: string;
    /**
     * Custom styles for internal parts
     */
    styles?: {
        root?: string;
        item?: string;
        slider?: string;
        label?: string;
    };
};
export declare const SegmentedControl: React.ForwardRefExoticComponent<SegmentedControlProps & React.RefAttributes<HTMLDivElement>>;
export {};
