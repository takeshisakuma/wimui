import { default as React, ReactNode } from '../../../../node_modules/react';
import { ComponentSizeBasic } from '../../../types/tokens';
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
    size?: ComponentSizeBasic;
    /**
     * Horizontal alignment of the icon, text and actions. Centred content only reads
     * as deliberate when the area is the one thing in its region — a drop target or a
     * whole result page. Inside a card, a table or a column of prose, use `"start"`
     * so the block lines up with the text around it.
     * @default "center"
     */
    align?: "start" | "center";
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
    /**
     * Custom styles for internal parts
     */
    styles?: {
        inner?: string;
        icon?: string;
        title?: string;
        description?: string;
        content?: string;
        actions?: string;
    };
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
    size?: ComponentSizeBasic;
    /**
     * Horizontal alignment of the icon, text and actions. Centred content only reads
     * as deliberate when the area is the one thing in its region — a drop target or a
     * whole result page. Inside a card, a table or a column of prose, use `"start"`
     * so the block lines up with the text around it.
     * @default "center"
     */
    align?: "start" | "center";
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
    /**
     * Custom styles for internal parts
     */
    styles?: {
        inner?: string;
        icon?: string;
        title?: string;
        description?: string;
        content?: string;
        actions?: string;
    };
} & React.RefAttributes<HTMLDivElement>>;
