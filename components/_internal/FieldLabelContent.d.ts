import { default as React } from '../../../node_modules/react';
/**
 * Props for the FieldLabelContent component.
 */
export type FieldLabelContentProps = {
    /**
     * The main label text or element.
     */
    label: React.ReactNode;
    /**
     * Whether the field is mandatory. If true, displays a required badge.
     */
    required?: boolean;
    /**
     * Custom text or element for the required badge.
     * Defaults to the localized `form.required` string.
     */
    requiredLabel?: React.ReactNode;
    /**
     * Whether to display an optional badge when `required` is false.
     * @default false
     */
    showOptional?: boolean;
    /**
     * Custom text or element for the optional badge.
     * Defaults to the localized `form.optional` string.
     */
    optionalLabel?: React.ReactNode;
    /**
     * Additional CSS class name for the container.
     */
    className?: string;
};
/**
 * FieldLabelContent is an internal component that standardizes the presentation
 * of form field labels, including required/optional badges.
 *
 * Composition Contract:
 * - Displays the primary label text.
 * - Conditionally appends a `Badge` to indicate field requirement status.
 * - Used internally by components like `Input`, `Select`, and `Textarea`.
 */
export declare const FieldLabelContent: ({ label, required, requiredLabel, showOptional, optionalLabel, className, }: FieldLabelContentProps) => React.JSX.Element;
