import type { FieldError, FieldErrors, FieldValues, Merge } from "react-hook-form";

type AnyFieldError =
  | FieldError
  | Merge<FieldError, FieldErrors<FieldValues>>
  | undefined;

/**
 * Flatten a react-hook-form `FieldError` into a string for WIM `error?: string` props.
 * Nested/root messages (e.g. zod array/object refine) fall back to the first string message found.
 */
export function getFieldErrorMessage(error: AnyFieldError): string | undefined {
  if (!error) return undefined;
  if (typeof error.message === "string" && error.message.length > 0) {
    return error.message;
  }
  // Nested FieldErrors (e.g. object/array fields without a root message)
  for (const value of Object.values(error)) {
    if (!value || typeof value !== "object") continue;
    const nested = getFieldErrorMessage(value as AnyFieldError);
    if (nested) return nested;
  }
  return undefined;
}

/** Boolean flag for WIM components that take `error?: boolean` (Checkbox, Switch, Radio). */
export function getFieldErrorFlag(error: AnyFieldError): boolean {
  return getFieldErrorMessage(error) !== undefined || Boolean(error);
}
