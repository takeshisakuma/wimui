import { default as React } from '../../../../node_modules/react';
import { WimColor, ComponentSizeBasic } from '../../../types/tokens';
/**
 * Small dot that indicates the state of an element (online, unread, error, etc.).
 */
export declare const Indicator: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & {
    /**
     * Element the indicator dot is attached to. If omitted, only the dot is rendered.
     */
    children?: React.ReactNode;
    /**
     * Color of the dot. Accepts a design token color name or any CSS color value.
     * @default "primary"
     */
    color?: WimColor;
    /**
     * Size of the dot.
     * @default "md"
     */
    size?: ComponentSizeBasic;
    /**
     * Corner of the children the dot is placed at.
     * @default "top-right"
     */
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    /**
     * If true, the dot pulses to draw attention.
     * @default false
     */
    pulse?: boolean;
    /**
     * If true, renders the dot inline instead of positioning it on a corner.
     * @default false
     */
    inline?: boolean;
    /**
     * Additional CSS class name.
     */
    className?: string;
    /**
     * Inline styles for the container.
     */
    style?: React.CSSProperties;
} & React.RefAttributes<HTMLSpanElement>>;
