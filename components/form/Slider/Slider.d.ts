import { default as React } from '../../../../node_modules/react';
import { FieldTemplate } from '../FieldTemplate';
export interface SliderProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange" | "defaultValue"> {
    /** Current value (controlled) */
    value?: number;
    /** Default value (uncontrolled) */
    defaultValue?: number;
    /** Minimum value */
    min?: number;
    /** Maximum value */
    max?: number;
    /** Step value */
    step?: number;
    /** Whether the slider is disabled */
    disabled?: boolean;
    /** Callback when the value changes */
    onChange?: (value: number) => void;
    /** Callback when dragging ends */
    onAfterChange?: (value: number) => void;
    /** Name attribute */
    name?: string;
    /** Accessible label */
    label?: React.ReactNode;
    /** Error message */
    error?: string;
    /** Whether to show the required indicator */
    required?: boolean;
    /** Layout direction of label and field */
    layout?: "vertical" | "horizontal";
    /** Custom ID */
    id?: string;
    /** Whether to render as a child element. */
    asChild?: boolean;
    /** Custom styles for internal parts */
    styles?: React.ComponentPropsWithoutRef<typeof FieldTemplate>["styles"];
}
/**
 * Slider component for selecting a single value from a range.
 */
export declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLDivElement>>;
export default Slider;
