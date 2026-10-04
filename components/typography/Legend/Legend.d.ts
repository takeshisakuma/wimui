import { default as React } from '../../../../node_modules/react';
export interface LegendProps extends React.HTMLAttributes<HTMLLegendElement> {
    /**
     * The group name. Optional — a Legend can also be written with children only
     * (`<Legend>Group title</Legend>`), which is what you want when the group name
     * is a heading: `<legend>` may contain heading content directly, while the
     * `label` slot wraps its value in a `<span>` (phrasing content, so a heading
     * inside it is invalid).
     */
    label?: React.ReactNode;
    /**
     * Whether the group is mandatory. If true, displays a required badge.
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
    /**
     * If true, the Legend will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
}
export declare const Legend: React.ForwardRefExoticComponent<LegendProps & React.RefAttributes<HTMLLegendElement>>;
