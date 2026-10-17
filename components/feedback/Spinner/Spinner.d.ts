import { default as React } from '../../../../node_modules/react';
import { WimColor, ComponentSizeExtended } from '../../../types/tokens';
type SpinnerProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * Size of the spinner.
     * @default "md"
     */
    size?: ComponentSizeExtended;
    /**
     * Color of the spinner. Accepts a design token color name or "currentColor".
     * @default "primary"
     */
    color?: "currentColor" | WimColor;
    /**
     * Text label displayed next to the spinner.
     */
    label?: string;
    /**
     * Position of the label relative to the spinner.
     * @default "right"
     */
    labelPosition?: "right" | "bottom";
};
/**
 * Rotating indicator that shows something is loading.
 */
export declare const Spinner: ({ size, color, label, labelPosition, className, style, ...props }: SpinnerProps) => React.JSX.Element;
export {};
