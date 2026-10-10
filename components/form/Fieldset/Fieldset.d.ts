import { default as React } from '../../../../node_modules/react';
type FieldsetProps = React.ComponentPropsWithoutRef<"fieldset"> & {
    /** Form elements to group */
    children: React.ReactNode;
    /** Whether all contained form elements are disabled */
    disabled?: boolean;
    /**
     * Visual variant of the fieldset.
     *
     * `plain` drops the frame and padding and keeps only the grouping — use it
     * inside a `Card` or any surface that already draws a border, where a framed
     * fieldset would put a box inside a box. The `<fieldset>` and its `<legend>`
     * still do their job for assistive technology.
     */
    variant?: "default" | "full-width" | "plain";
    /** Additional class names */
    className?: string;
};
/**
 * Component for grouping related form elements.
 */
export declare const Fieldset: ({ children, disabled, variant, className, ...props }: FieldsetProps) => React.JSX.Element;
export {};
