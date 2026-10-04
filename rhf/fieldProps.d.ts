import { ChangeEvent } from '../../node_modules/react';
import { ControllerRenderProps, FieldPath, FieldValues } from 'react-hook-form';
/**
 * Props for WIM value-based controls (`Select`, `RadioGroup`, `CheckboxGroup`,
 * `Slider`, …) where `onChange` receives the value directly (not a DOM event).
 *
 * `ref` stays as RHF's `RefCallBack` so it assigns cleanly to Input / Div / etc. refs.
 */
export declare function valueFieldProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>, TValue = TFieldValues[TName]>(field: ControllerRenderProps<TFieldValues, TName>): {
    name: TName;
    value: TValue;
    onChange: (value: TValue) => void;
    onBlur: import('react-hook-form').Noop;
    ref: import('react-hook-form').RefCallBack;
};
/**
 * Props for boolean toggles (`Checkbox`, `Switch`) that use native `checked` + change events.
 */
export declare function checkedFieldProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>(field: ControllerRenderProps<TFieldValues, TName>): {
    name: TName;
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur: import('react-hook-form').Noop;
    ref: import('react-hook-form').RefCallBack;
};
