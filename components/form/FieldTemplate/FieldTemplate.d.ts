import { default as React } from '../../../../node_modules/react';
export interface FieldTemplateProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Whether to render as a child element. */
    asChild?: boolean;
    /** Label text of the field */
    label?: React.ReactNode;
    /** Error message */
    error?: string;
    /** Main content of the field */
    children: React.ReactNode;
    /** Whether to show the required indicator */
    required?: boolean;
    /**
     * Layout direction of label and field
     * @default "vertical"
     */
    layout?: "vertical" | "horizontal";
    /** ID of the label element for accessibility */
    labelId?: string;
    /** ID of the element the label points to */
    htmlFor?: string;
    /** ID of the error message element */
    errorId?: string;
    /**
     * Custom styles for internal parts
     */
    styles?: {
        root?: string;
        labelWrapper?: string;
        label?: string;
        content?: string;
        error?: string;
    };
}
/**
 * Internal component managing the common layout of form components (label, error display, placement).
 */
export declare const FieldTemplate: React.ForwardRefExoticComponent<FieldTemplateProps & React.RefAttributes<HTMLDivElement>>;
