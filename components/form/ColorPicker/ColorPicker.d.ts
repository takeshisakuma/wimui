import { default as React } from '../../../../node_modules/react';
import { InputProps } from '../../form/Input/Input';
import { FieldIntent, FieldVariant } from '../../../types/tokens';
export type ColorPickerSwatch = string | {
    /** Color in `#rrggbb` (or `#rgb`) form */
    value: string;
    /** Name read out by assistive technology. Falls back to `value` */
    label?: string;
};
export type ColorPickerProps = Omit<InputProps, "type"> & {
    /** Semantic intent of the field (e.g. error state) */
    intent?: FieldIntent;
    /** Visual style variant of the field */
    variant?: FieldVariant;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
    /**
     * Preset colors shown next to the field. Choosing one sets it as the value
     * and fires `onChange` like the native picker does. Use `#rrggbb` (or `#rgb`).
     * Name the field with the `label` prop rather than wrapping it in a `<label>`:
     * the swatch buttons inside a `<label>` would be read as part of the field's name.
     * With react-hook-form, use `Controller` rather than `register` if the form is
     * reset: `reset()` writes the input without an event, so the selected swatch
     * would not follow until the next change.
     */
    swatches?: ColorPickerSwatch[];
    /** Accessible name of the swatch group */
    swatchesLabel?: string;
};
/**
 * Component for selecting a color.
 */
export declare const ColorPicker: React.ForwardRefExoticComponent<Omit<InputProps, "type"> & {
    /** Semantic intent of the field (e.g. error state) */
    intent?: FieldIntent;
    /** Visual style variant of the field */
    variant?: FieldVariant;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
    /**
     * Preset colors shown next to the field. Choosing one sets it as the value
     * and fires `onChange` like the native picker does. Use `#rrggbb` (or `#rgb`).
     * Name the field with the `label` prop rather than wrapping it in a `<label>`:
     * the swatch buttons inside a `<label>` would be read as part of the field's name.
     * With react-hook-form, use `Controller` rather than `register` if the form is
     * reset: `reset()` writes the input without an event, so the selected swatch
     * would not follow until the next change.
     */
    swatches?: ColorPickerSwatch[];
    /** Accessible name of the swatch group */
    swatchesLabel?: string;
} & React.RefAttributes<HTMLInputElement>>;
