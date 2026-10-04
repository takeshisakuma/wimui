import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic, IndicatorIntent, IndicatorVariant } from '../../../types/tokens';
export type TagProps = React.ComponentPropsWithoutRef<"span"> & {
    /**
     * If true, the tag will be rendered as its child, merging its props onto that child.
     * Cannot be combined with `onDelete` — the delete control is a second element, and
     * `asChild` requires a single React element child (T99).
     */
    asChild?: boolean;
    /** Content to display */
    children?: React.ReactNode;
    /** Content to display (alternative to children) */
    content?: React.ReactNode;
    /** Intent (semantic state) */
    intent?: IndicatorIntent;
    /** Visual style variant */
    variant?: IndicatorVariant;
    /** Size */
    size?: ComponentSizeBasic;
    /** Icon */
    icon?: React.ReactNode;
    /** Delete event. When provided, a × button is shown. Incompatible with `asChild`. */
    onDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    /** Whether the tag is disabled */
    disabled?: boolean;
    /** Whether to enable the interactive state */
    interactive?: boolean;
};
/**
 * Component used as a label for categorization or attributes.
 * Providing onDelete makes it a removable tag.
 */
export declare const Tag: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & {
    /**
     * If true, the tag will be rendered as its child, merging its props onto that child.
     * Cannot be combined with `onDelete` — the delete control is a second element, and
     * `asChild` requires a single React element child (T99).
     */
    asChild?: boolean;
    /** Content to display */
    children?: React.ReactNode;
    /** Content to display (alternative to children) */
    content?: React.ReactNode;
    /** Intent (semantic state) */
    intent?: IndicatorIntent;
    /** Visual style variant */
    variant?: IndicatorVariant;
    /** Size */
    size?: ComponentSizeBasic;
    /** Icon */
    icon?: React.ReactNode;
    /** Delete event. When provided, a × button is shown. Incompatible with `asChild`. */
    onDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    /** Whether the tag is disabled */
    disabled?: boolean;
    /** Whether to enable the interactive state */
    interactive?: boolean;
} & React.RefAttributes<HTMLSpanElement>>;
