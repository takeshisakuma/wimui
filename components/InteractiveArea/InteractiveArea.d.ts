import { default as React, ReactNode } from '../../../node_modules/react';
export type InteractiveAreaProps = Omit<React.ComponentPropsWithoutRef<"div">, "title" | "description"> & {
    /**
     * Area title
     */
    title?: ReactNode;
    /**
     * Area description
     */
    description?: ReactNode;
    /**
     * Icon to display
     */
    icon?: ReactNode;
    /**
     * Action elements (buttons, etc.)
     */
    actions?: ReactNode;
    /**
     * Border variant
     */
    variant?: "dashed" | "solid" | "none";
    /**
     * Background variant
     */
    bgVariant?: "default" | "transparent" | "muted";
    /**
     * Size variation
     */
    size?: "small" | "medium" | "large";
    /**
     * Whether the area is currently in a dragging state (for dropzone)
     */
    isDragging?: boolean;
    /**
     * Whether the area is clickable
     */
    isClickable?: boolean;
    /**
     * Whether the area is disabled
     */
    disabled?: boolean;
};
/**
 * A base component for creating interactive surfaces like Dropzones, EmptyStates, etc.
 */
export declare const InteractiveArea: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "title" | "description"> & {
    /**
     * Area title
     */
    title?: ReactNode;
    /**
     * Area description
     */
    description?: ReactNode;
    /**
     * Icon to display
     */
    icon?: ReactNode;
    /**
     * Action elements (buttons, etc.)
     */
    actions?: ReactNode;
    /**
     * Border variant
     */
    variant?: "dashed" | "solid" | "none";
    /**
     * Background variant
     */
    bgVariant?: "default" | "transparent" | "muted";
    /**
     * Size variation
     */
    size?: "small" | "medium" | "large";
    /**
     * Whether the area is currently in a dragging state (for dropzone)
     */
    isDragging?: boolean;
    /**
     * Whether the area is clickable
     */
    isClickable?: boolean;
    /**
     * Whether the area is disabled
     */
    disabled?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
