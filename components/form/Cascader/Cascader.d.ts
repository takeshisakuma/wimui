import { default as React } from '../../../../node_modules/react';
import { FieldWidth } from '../../../types/tokens';
export type CascaderOption = {
    label: React.ReactNode;
    value: string;
    children?: CascaderOption[];
    disabled?: boolean;
};
export type CascaderProps = Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> & {
    /** Hierarchical options to select from */
    options: CascaderOption[];
    /** Selected value path (controlled) */
    value?: string[];
    /** Callback when the selection changes */
    onChange?: (value: string[], selectedOptions: CascaderOption[]) => void;
    /** Placeholder shown when nothing is selected */
    placeholder?: React.ReactNode;
    /** Field label */
    label?: React.ReactNode;
    /** Error message */
    error?: string;
    /** Whether to show the required indicator */
    required?: boolean;
    /** Layout direction of label and field */
    layout?: "vertical" | "horizontal";
    /** Additional class names */
    className?: string;
    /** Whether the field is disabled */
    disabled?: boolean;
    /** Initially selected value path (uncontrolled) */
    defaultValue?: string[];
    /** Unique ID for the component */
    id?: string;
    /** Expand trigger mode */
    expandTrigger?: "click" | "hover";
    /** Custom separator for the display value */
    separator?: string;
    /** Whether to show a clear button when a value is selected */
    allowClear?: boolean;
    /** Accessible label for the trigger when no visible label is provided */
    "aria-label"?: string;
    /** Fixed width of the field (width token, CSS value, or number in px) */
    width?: FieldWidth | string | number;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
};
/**
 * Component for selecting a single option by walking through hierarchical data.
 */
export declare const Cascader: {
    ({ options, value, onChange, placeholder, label, error, required, layout, className, disabled, defaultValue, id: customId, expandTrigger, separator, allowClear, "aria-label": ariaLabel, width, fullWidth, ...props }: CascaderProps): React.JSX.Element;
    displayName: string;
};
