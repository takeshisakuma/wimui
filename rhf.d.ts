/**
 * Optional react-hook-form + zod adapters for WIM form components.
 *
 * Install peers when using this entry:
 *   npm i react-hook-form @hookform/resolvers zod
 *
 * @example
 * ```tsx
 * import { FormField, zodResolver, valueFieldProps, checkedFieldProps } from "wimui/rhf";
 * ```
 */
export { FormField, type FormFieldProps, type FormFieldRenderProps } from './rhf/FormField';
export { getFieldErrorFlag, getFieldErrorMessage } from './rhf/fieldError';
export { checkedFieldProps, valueFieldProps } from './rhf/fieldProps';
export { zodResolver } from './rhf/zod';
