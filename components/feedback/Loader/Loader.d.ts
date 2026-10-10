import { default as React } from '../../../../node_modules/react';
import { WimColor, ComponentSizeExtended } from '../../../types/tokens';
export type LoaderVariant = "bars" | "dots" | "pulse";
export type LoaderProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * Animation style of the loader.
     * @default "bars"
     */
    variant?: LoaderVariant;
    /**
     * Size of the loader.
     * @default "md"
     */
    size?: ComponentSizeExtended;
    /**
     * Color of the loader. Accepts a design token color name or "currentColor".
     * @default "primary"
     */
    color?: "currentColor" | WimColor;
};
/**
 * Indicates that data is loading or being processed.
 */
export declare const Loader: ({ variant, size, color, className, style, ...props }: LoaderProps) => React.JSX.Element;
