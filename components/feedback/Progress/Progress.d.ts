import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic, IndicatorIntent } from '../../../types/tokens';
import { WithAccessibleName } from '../../_internal/accessibleName';
type ProgressOwnProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * Current value of the progress bar.
     * @default 0
     */
    value?: number;
    /**
     * Maximum value of the progress bar.
     * @default 100
     */
    max?: number;
    /**
     * Intent (semantic color) of the bar.
     * @default "primary"
     */
    intent?: IndicatorIntent;
    /**
     * Size of the bar.
     * @default "md"
     */
    size?: ComponentSizeBasic;
    /**
     * Text label displayed above the bar. Also used as the accessible name unless
     * `aria-label` / `aria-labelledby` is given.
     *
     * A progress bar always carries `role="progressbar"`, and a progressbar with no
     * accessible name is a WCAG failure (axe `aria-progressbar-name`, serious). The
     * type therefore requires one of `label` / `aria-label` / `aria-labelledby`.
     */
    label?: string;
    /**
     * Whether to display the current value as a percentage.
     * @default false
     */
    showValue?: boolean;
    /**
     * If true, shows an indeterminate animation instead of a value.
     * @default false
     */
    indeterminate?: boolean;
};
export type ProgressProps = WithAccessibleName<ProgressOwnProps>;
/**
 * Displays a progress bar.
 */
export declare const Progress: React.ForwardRefExoticComponent<ProgressProps & React.RefAttributes<HTMLDivElement>>;
export {};
