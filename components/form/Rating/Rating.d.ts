import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic } from '../../../types/tokens';
export type RatingLabels = {
    star?: (count: number) => string;
    readonly?: (value: number, max: number) => string;
};
type RatingProps = Omit<React.ComponentPropsWithoutRef<"div">, "onChange" | "defaultValue"> & {
    /** Current value (controlled) */
    value?: number;
    /** Default value (uncontrolled) */
    defaultValue?: number;
    /** Total number of stars */
    count?: number;
    /** Whether to allow half stars */
    allowHalf?: boolean;
    /** Whether the rating is disabled */
    disabled?: boolean;
    /** Read-only flag (display only; unlike disabled it is not grayed out) */
    readOnly?: boolean;
    /** Size of the stars */
    size?: ComponentSizeBasic;
    /** Callback when the value changes */
    onChange?: (value: number) => void;
    /** Additional class names */
    className?: string;
    /** Accessible label */
    label?: React.ReactNode;
    /** Error message */
    error?: string;
    /** Whether to show the required indicator */
    required?: boolean;
    /** Layout direction of label and field */
    layout?: "vertical" | "horizontal";
    /** Labels for internationalization */
    labels?: RatingLabels;
    /** Whether to render as a child element. */
    asChild?: boolean;
};
/**
 * Rating component for users to give a score.
 */
export declare const Rating: ({ value, defaultValue, count, allowHalf, disabled, readOnly, size, onChange, className, label, error, required, layout, labels, asChild, children, ...props }: RatingProps) => React.JSX.Element;
export {};
