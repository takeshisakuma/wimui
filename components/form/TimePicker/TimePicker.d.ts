import { default as React } from '../../../../node_modules/react';
import { InputProps } from '../../form/Input/Input';
import { FieldIntent, FieldVariant } from '../../../types/tokens';
export type TimePickerProps = Omit<InputProps, "type" | "rightIcon"> & {
    /** Semantic intent of the field (e.g. error state) */
    intent?: FieldIntent;
    /** Visual style variant of the field */
    variant?: FieldVariant;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
    /** Whether to show a clear button when value is present */
    allowClear?: boolean;
};
/**
 * Component for selecting a time.
 */
export declare const TimePicker: React.ForwardRefExoticComponent<Omit<InputProps, "type" | "rightIcon"> & {
    /** Semantic intent of the field (e.g. error state) */
    intent?: FieldIntent;
    /** Visual style variant of the field */
    variant?: FieldVariant;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
    /** Whether to show a clear button when value is present */
    allowClear?: boolean;
} & React.RefAttributes<HTMLInputElement>>;
