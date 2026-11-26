import { default as React, ReactNode } from '../../../../node_modules/react';
import { Placement } from '@floating-ui/react';
import { ComponentSizeBasic } from '../../../types/tokens';
export type AILabelProps = Omit<React.ComponentPropsWithoutRef<"button">, "children" | "title" | "type"> & {
    /**
     * What the AI did, shown when the label is pressed — for example which model
     * produced the value, from what, and how to check or replace it.
     */
    children: ReactNode;
    /**
     * Heading of the explanation. Defaults to the localized "AI-generated".
     */
    title?: ReactNode;
    /**
     * Size of the mark. `sm` fits inside a field or a table cell; `md` sits next
     * to a heading or in the corner of a card.
     * @default "md"
     */
    size?: ComponentSizeBasic;
    /**
     * Preferred placement of the explanation.
     * @default "bottom-start"
     */
    placement?: Placement;
    /** Opens the explanation on the first render (uncontrolled). */
    defaultOpen?: boolean;
    /** Controls whether the explanation is open. */
    open?: boolean;
    /** Called when the explanation opens or closes. */
    onOpenChange?: (open: boolean) => void;
};
/**
 * AILabel marks a value or a block as produced by AI. It is a small button
 * that reads "AI"; pressing it opens an explanation the app provides.
 *
 * Composition Contract:
 * - Managed by: App consumption (the explanation is the app's content)
 * - Portal: The explanation renders through Popover (FloatingPortal)
 * - Scroll lock: No
 */
export declare const AILabel: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref">, "type" | "children" | "title"> & {
    /**
     * What the AI did, shown when the label is pressed — for example which model
     * produced the value, from what, and how to check or replace it.
     */
    children: ReactNode;
    /**
     * Heading of the explanation. Defaults to the localized "AI-generated".
     */
    title?: ReactNode;
    /**
     * Size of the mark. `sm` fits inside a field or a table cell; `md` sits next
     * to a heading or in the corner of a card.
     * @default "md"
     */
    size?: ComponentSizeBasic;
    /**
     * Preferred placement of the explanation.
     * @default "bottom-start"
     */
    placement?: Placement;
    /** Opens the explanation on the first render (uncontrolled). */
    defaultOpen?: boolean;
    /** Controls whether the explanation is open. */
    open?: boolean;
    /** Called when the explanation opens or closes. */
    onOpenChange?: (open: boolean) => void;
} & React.RefAttributes<HTMLButtonElement>>;
