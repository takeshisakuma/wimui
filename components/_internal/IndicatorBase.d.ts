import { default as React } from '../../../node_modules/react';
import { ComponentSize, IndicatorIntent, IndicatorVariant } from '../../types/tokens';
/**
 * Props for the IndicatorBase component.
 */
export type IndicatorBaseProps<C extends React.ElementType = "span"> = {
    /**
     * If true, the indicator will be rendered as its child, merging its props onto that child.
     * @default false
     */
    asChild?: boolean;
    /**
     * Content to be rendered inside the indicator.
     */
    children?: React.ReactNode;
    /**
     * Content to be rendered inside the indicator (alternative to children).
     */
    content?: React.ReactNode;
    /**
     * Optional icon to display before the children.
     */
    icon?: React.ReactNode;
    /**
     * Semantic intent for color coding.
     * @default "primary"
     */
    intent?: IndicatorIntent;
    /**
     * Visual variant (solid, outline, subtle).
     * @default "solid"
     */
    variant?: IndicatorVariant;
    /**
     * Size of the indicator.
     * @default "md"
     */
    size?: ComponentSize;
    /**
     * Mapping of class names from a CSS module to apply theme-specific styling.
     */
    styles?: {
        [key: string]: string;
    };
    /**
     * Whether the indicator is interactive (shows hover/active states).
     * @default false
     */
    interactive?: boolean;
    /**
     * The element type to render.
     * @default "span"
     */
    as?: C;
    /**
     * Additional CSS class name.
     */
    className?: string;
} & React.ComponentPropsWithoutRef<C>;
/**
 * IndicatorBase is a foundational internal component used to build indicator-style
 * components such as Badge, Chip, and Tag.
 *
 * Composition Contract:
 * - Supports polymorphic rendering via `as` or `asChild`.
 * - Expects a `styles` object (usually from local CSS Modules) to map semantic states to classes.
 * - Automatically handles the root, intent, variant, and size classes from the provided `styles`.
 * - Provides a standardized layout for an optional icon and children.
 */
interface IndicatorBaseComponent {
    <C extends React.ElementType = "span">(props: IndicatorBaseProps<C> & {
        ref?: React.Ref<React.ComponentRef<C>>;
    }): React.ReactElement;
    displayName?: string;
}
export declare const IndicatorBase: IndicatorBaseComponent;
export {};
