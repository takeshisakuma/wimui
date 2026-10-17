import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic } from '../../../types/tokens';
export type PresenceStatus = "online" | "away" | "busy" | "offline";
export type PresenceProps = Omit<React.ComponentPropsWithoutRef<"span">, "children"> & {
    /**
     * Availability of the person or resource.
     */
    status: PresenceStatus;
    /**
     * Text for the status. Defaults to the localized name of `status`.
     */
    label?: string;
    /**
     * Whether the label is shown next to the dot. The label is always exposed to
     * assistive technology; this only controls whether it is also visible.
     * @default false
     */
    showLabel?: boolean;
    /**
     * Size of the dot.
     * @default "md"
     */
    size?: ComponentSizeBasic;
    /**
     * Corner the dot is placed at. Only applies when `children` is given.
     * @default "bottom-right"
     */
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    /**
     * Element the dot is attached to, typically an `Avatar`. Without it the dot
     * renders inline, next to whatever follows it.
     */
    children?: React.ReactNode;
};
/**
 * Shows whether a person is online, away, busy, or offline.
 *
 * The dot is the same one `Indicator` draws; what this component adds is the
 * vocabulary (which state maps to which color) and a name for that state —
 * a colored dot on its own carries meaning by color alone, so the name is
 * always exposed to assistive technology even when `showLabel` is false.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const Presence: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref">, "children"> & {
    /**
     * Availability of the person or resource.
     */
    status: PresenceStatus;
    /**
     * Text for the status. Defaults to the localized name of `status`.
     */
    label?: string;
    /**
     * Whether the label is shown next to the dot. The label is always exposed to
     * assistive technology; this only controls whether it is also visible.
     * @default false
     */
    showLabel?: boolean;
    /**
     * Size of the dot.
     * @default "md"
     */
    size?: ComponentSizeBasic;
    /**
     * Corner the dot is placed at. Only applies when `children` is given.
     * @default "bottom-right"
     */
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    /**
     * Element the dot is attached to, typically an `Avatar`. Without it the dot
     * renders inline, next to whatever follows it.
     */
    children?: React.ReactNode;
} & React.RefAttributes<HTMLSpanElement>>;
