import { default as React } from '../../../../node_modules/react';
import { InputProps } from '../../form/Input/Input';
import { FieldIntent, FieldVariant } from '../../../types/tokens';
export type ColorPickerProps = Omit<InputProps, "type"> & {
    /** Semantic intent of the field (e.g. error state) */
    intent?: FieldIntent;
    /** Visual style variant of the field */
    variant?: FieldVariant;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
};
/**
 * Component for selecting a color.
 */
export declare const ColorPicker: ({ intent, variant, fullWidth, className, disabled, ...props }: ColorPickerProps) => React.JSX.Element;
