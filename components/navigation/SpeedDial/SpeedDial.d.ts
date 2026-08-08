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
    /** Direction in which actions expand */
    direction?: "up" | "down" | "left" | "right";
    /** Trigger mode to open the SpeedDial */
    trigger?: "hover" | "click";
    /** Controlled open state */
    open?: boolean;
    /** Callback when open state changes */
    onOpenChange?: (open: boolean) => void;
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
    /** Direction in which actions expand */
    direction?: "up" | "down" | "left" | "right";
    /** Trigger mode to open the SpeedDial */
    trigger?: "hover" | "click";
    /** Controlled open state */
    open?: boolean;
    /** Callback when open state changes */
    onOpenChange?: (open: boolean) => void;
} & React.RefAttributes<HTMLDivElement>>;
