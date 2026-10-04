import { default as React } from '../../../../node_modules/react';
import { IconName } from '../../../icon';
export interface SpeedDialAction {
    icon: IconName;
    label: string;
    onClick?: () => void;
    className?: string;
    intent?: "default" | "danger" | "success";
}
export type SpeedDialProps = React.ComponentPropsWithoutRef<"div"> & {
    /** Actions to display when SpeedDial is open */
    actions: SpeedDialAction[];
    /** Icon name for the main button when closed */
    icon?: IconName;
    /** Icon name for the main button when open */
    activeIcon?: IconName;
    /**
     * Direction in which actions expand.
     *
     * **The caller picks a direction that has room.** Actions are placed with
     * plain CSS (`left: 100%` and friends) and are never measured, so this
     * component does not flip when the viewport runs out — a `right` dial placed
     * near the right edge pushes the page into a horizontal scroll. Anchor a
     * `right` dial to the leading edge (and a `left` one to the trailing edge);
     * `up` / `down` already grow inward from the trailing corner (T175).
     *
     * @default "up"
     */
    direction?: "up" | "down" | "left" | "right";
    /** Trigger mode to open the SpeedDial */
    trigger?: "hover" | "click";
    /** Controlled open state */
    open?: boolean;
    /** Callback when open state changes */
    onOpenChange?: (open: boolean) => void;
    /**
     * Accessible name for the trigger button.
     * Lands on the inner `FloatButton`, not on the wrapper `div`.
     * Omit to keep the icon-name fallback (`PlusIcon` / `CloseIcon`).
     */
    "aria-label"?: string;
};
/**
 * SpeedDial component displays a floating action button that expands to show multiple actions.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const SpeedDial: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    /** Actions to display when SpeedDial is open */
    actions: SpeedDialAction[];
    /** Icon name for the main button when closed */
    icon?: IconName;
    /** Icon name for the main button when open */
    activeIcon?: IconName;
    /**
     * Direction in which actions expand.
     *
     * **The caller picks a direction that has room.** Actions are placed with
     * plain CSS (`left: 100%` and friends) and are never measured, so this
     * component does not flip when the viewport runs out — a `right` dial placed
     * near the right edge pushes the page into a horizontal scroll. Anchor a
     * `right` dial to the leading edge (and a `left` one to the trailing edge);
     * `up` / `down` already grow inward from the trailing corner (T175).
     *
     * @default "up"
     */
    direction?: "up" | "down" | "left" | "right";
    /** Trigger mode to open the SpeedDial */
    trigger?: "hover" | "click";
    /** Controlled open state */
    open?: boolean;
    /** Callback when open state changes */
    onOpenChange?: (open: boolean) => void;
    /**
     * Accessible name for the trigger button.
     * Lands on the inner `FloatButton`, not on the wrapper `div`.
     * Omit to keep the icon-name fallback (`PlusIcon` / `CloseIcon`).
     */
    "aria-label"?: string;
} & React.RefAttributes<HTMLDivElement>>;
