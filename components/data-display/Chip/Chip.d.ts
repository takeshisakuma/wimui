import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic, IndicatorIntent, IndicatorVariant } from '../../../types/tokens';
export type ChipProps = React.HTMLAttributes<HTMLElement> & {
    /**
     * If true, the chip will be rendered as its child, merging its props onto that child.
     * Cannot be combined with `onDelete` (T99).
     */
    asChild?: boolean;
    /** Content to display */
    children?: React.ReactNode;
    /** Content to display (alternative to children) */
    content?: React.ReactNode;
    /** Click event. When provided, the chip behaves as a button. */
    onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLSpanElement>) => void;
    /** Delete event. When provided, a × button is shown. */
    onDelete?: (e: React.SyntheticEvent) => void;
    /** Avatar (e.g. an image or initials) */
    avatar?: React.ReactNode;
    /** Icon */
    icon?: React.ReactNode;
    /** Whether the chip is selected */
    selected?: boolean;
    /** Whether the chip is disabled */
    disabled?: boolean;
    /** Intent (semantic state) */
    intent?: IndicatorIntent;
    /** Visual style variant */
    variant?: IndicatorVariant;
    /** Size */
    size?: ComponentSizeBasic;
    /** Accessible label for the delete button */
    deleteAriaLabel?: string;
    /** Additional class names */
    className?: string;
};
/**
 * Interactive token used for selection, filtering, or input.
 */
export declare const Chip: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLElement> & {
    /**
     * If true, the chip will be rendered as its child, merging its props onto that child.
     * Cannot be combined with `onDelete` (T99).
     */
    asChild?: boolean;
    /** Content to display */
    children?: React.ReactNode;
    /** Content to display (alternative to children) */
    content?: React.ReactNode;
    /** Click event. When provided, the chip behaves as a button. */
    onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLSpanElement>) => void;
    /** Delete event. When provided, a × button is shown. */
    onDelete?: (e: React.SyntheticEvent) => void;
    /** Avatar (e.g. an image or initials) */
    avatar?: React.ReactNode;
    /** Icon */
    icon?: React.ReactNode;
    /** Whether the chip is selected */
    selected?: boolean;
    /** Whether the chip is disabled */
    disabled?: boolean;
    /** Intent (semantic state) */
    intent?: IndicatorIntent;
    /** Visual style variant */
    variant?: IndicatorVariant;
    /** Size */
    size?: ComponentSizeBasic;
    /** Accessible label for the delete button */
    deleteAriaLabel?: string;
    /** Additional class names */
    className?: string;
} & React.RefAttributes<HTMLElement>>;
