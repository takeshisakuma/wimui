import { FieldError, FieldErrors, FieldValues, Merge } from 'react-hook-form';
type AnyFieldError = FieldError | Merge<FieldError, FieldErrors<FieldValues>> | undefined;
/**
 * Flatten a react-hook-form `FieldError` into a string for WIM `error?: string` props.
 * Nested/root messages (e.g. zod array/object refine) fall back to the first string message found.
 */
export declare function getFieldErrorMessage(error: AnyFieldError): string | undefined;
/** Boolean flag for WIM components that take `error?: boolean` (Checkbox, Switch, Radio). */
export declare function getFieldErrorFlag(error: AnyFieldError): boolean;
export {};
