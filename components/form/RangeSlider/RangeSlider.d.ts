import { default as React } from '../../../../node_modules/react';
type RangeSliderProps = Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> & {
    /** Current value [min, max] (controlled) */
    value?: [number, number];
    /** Default value [min, max] (uncontrolled) */
    defaultValue?: [number, number];
    /** Minimum value */
    min?: number;
    /** Maximum value */
    max?: number;
    /** Step value */
    step?: number;
    /** Whether both handles may hold the same value (they never cross) */
    allowCross?: boolean;
    /** Whether the slider is disabled */
    disabled?: boolean;
    /** Callback when the value changes */
    onChange?: (value: [number, number]) => void;
    /** Callback when dragging ends */
    onAfterChange?: (value: [number, number]) => void;
    /** Additional class names */
    className?: string;
    /** Name attribute */
    name?: string;
    /** Accessible label */
    label?: string;
    /** Error message */
    error?: string;
    /** Whether to show the required indicator */
    required?: boolean;
    /** Layout direction of label and field */
    layout?: "vertical" | "horizontal";
    /** Custom ID */
    id?: string;
    /** Accessible label when no visible label is provided */
    "aria-label"?: string;
    /** ID of the element that labels the slider */
    "aria-labelledby"?: string;
    /** Whether to render as a child element. */
    asChild?: boolean;
};
/**
 * Slider component for selecting a range (start and end).
 */
export declare const RangeSlider: {
    ({ value, defaultValue, min, max, step, allowCross, disabled, onChange, onAfterChange, className, name, label, error, required, layout, id: customId, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, asChild, children, ...props }: RangeSliderProps): React.JSX.Element;
    displayName: string;
};
export {};
