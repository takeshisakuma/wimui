import React from "react";
import {
  Controller,
  type ControllerFieldState,
  type ControllerProps,
  type ControllerRenderProps,
  type FieldPath,
  type FieldValues,
  type UseFormStateReturn,
} from "react-hook-form";
import { getFieldErrorFlag, getFieldErrorMessage } from "./fieldError";

export type FormFieldRenderProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  field: ControllerRenderProps<TFieldValues, TName>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<TFieldValues>;
  /** Flattened `fieldState.error` for WIM `error?: string` props. */
  error: string | undefined;
  /** Whether the field currently has a validation error. */
  invalid: boolean;
};

export type FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<ControllerProps<TFieldValues, TName>, "render"> & {
  render: (props: FormFieldRenderProps<TFieldValues, TName>) => React.ReactElement;
};

/**
 * Thin `Controller` wrapper that exposes WIM-friendly `error` / `invalid` alongside RHF field props.
 *
 * @example
 * ```tsx
 * <FormField
 *   control={control}
 *   name="email"
 *   render={({ field, error }) => <Input {...field} label="Email" error={error} />}
 * />
 * ```
 */
export function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ render, ...controllerProps }: FormFieldProps<TFieldValues, TName>) {
  return (
    <Controller
      {...controllerProps}
      render={(controllerRenderProps) =>
        render({
          ...controllerRenderProps,
          error: getFieldErrorMessage(controllerRenderProps.fieldState.error),
          invalid: getFieldErrorFlag(controllerRenderProps.fieldState.error),
        })
      }
    />
  );
}

FormField.displayName = "FormField";
