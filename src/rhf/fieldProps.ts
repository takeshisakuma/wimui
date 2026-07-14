import type { ChangeEvent } from "react";
import type { ControllerRenderProps, FieldPath, FieldValues } from "react-hook-form";

/**
 * Props for WIM value-based controls (`Select`, `RadioGroup`, `CheckboxGroup`,
 * `Slider`, …) where `onChange` receives the value directly (not a DOM event).
 *
 * `ref` stays as RHF's `RefCallBack` so it assigns cleanly to Input / Div / etc. refs.
 */
export function valueFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
  TValue = TFieldValues[TName],
>(field: ControllerRenderProps<TFieldValues, TName>) {
  return {
    name: field.name,
    value: field.value as TValue,
    onChange: field.onChange as (value: TValue) => void,
    onBlur: field.onBlur,
    ref: field.ref,
  };
}

/**
 * Props for boolean toggles (`Checkbox`, `Switch`) that use native `checked` + change events.
 */
export function checkedFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>(field: ControllerRenderProps<TFieldValues, TName>) {
  return {
    name: field.name,
    checked: Boolean(field.value),
    onChange: (event: ChangeEvent<HTMLInputElement>) => {
      field.onChange(event.target.checked);
    },
    onBlur: field.onBlur,
    ref: field.ref,
  };
}
