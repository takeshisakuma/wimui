import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic, IndicatorIntent, IndicatorVariant } from '../../../types/tokens';
export type BadgeProps = React.ComponentPropsWithoutRef<"span"> & {
    /**
     * If true, the badge will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
    /** Content to display */
    children?: React.ReactNode;
    /** Content to display (alternative to children) */
    content?: React.ReactNode;
    /** Icon */
    icon?: React.ReactNode;
    /** Intent (semantic state) */
    intent?: IndicatorIntent;
    /** Visual style variant */
    variant?: IndicatorVariant;
    /** Size */
    size?: ComponentSizeBasic;
    /** Whether to enable the interactive state */
    interactive?: boolean;
};
/**
 * Badge component for displaying status, counts, and similar indicators.
 */
export declare const Badge: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & {
    /**
     * If true, the badge will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
    /** Content to display */
    children?: React.ReactNode;
    /** Content to display (alternative to children) */
    content?: React.ReactNode;
    /** Icon */
    icon?: React.ReactNode;
    /** Intent (semantic state) */
    intent?: IndicatorIntent;
    /** Visual style variant */
    variant?: IndicatorVariant;
    /** Size */
    size?: ComponentSizeBasic;
    /** Whether to enable the interactive state */
    interactive?: boolean;
} & React.RefAttributes<HTMLSpanElement>>;
