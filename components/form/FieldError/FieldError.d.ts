import { default as React } from '../../../../node_modules/react';
type FieldErrorProps = {
    /** Error message text */
    content: string;
    /** Additional class names */
    className?: string;
    /** ID of the error message element */
    id?: string;
};
/**
 * Component for the validation error message shown below an input field.
 */
export declare const FieldError: ({ content, className, id, }: FieldErrorProps) => React.JSX.Element;
export {};
