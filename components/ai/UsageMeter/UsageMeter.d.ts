import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic } from '../../../types/tokens';
/** Labels for internationalization. */
export type UsageMeterLabels = {
    /** Leading label (default "Tokens") */
    label?: string;
    /** Unit appended to the raw counts (default "tokens") */
    unit?: string;
    /** Accessible label describing the meter */
    ariaLabel?: string;
};
export interface UsageMeterProps extends React.ComponentPropsWithoutRef<"div"> {
    /** Number of tokens used so far */
    used: number;
    /** Maximum available tokens (e.g. the context window). Omit for a counter-only display. */
    max?: number;
    /** Size of the meter */
    size?: ComponentSizeBasic;
    /** Whether to render the progress bar (requires `max`) */
    showBar?: boolean;
    /** Whether to show the percentage instead of the raw count in the readout */
    showPercentage?: boolean;
    /** Fraction (0–1) at which the meter turns to the warning color */
    warnThreshold?: number;
    /** Fraction (0–1) at which the meter turns to the danger color */
    dangerThreshold?: number;
    /** Labels for internationalization */
    labels?: UsageMeterLabels;
    /** Additional class names */
    className?: string;
}
/**
 * UsageMeter (also exported as TokenCounter) visualizes token consumption
 * against a budget such as a model's context window — a labeled bar plus a
 * numeric readout that shifts to warning and danger colors near the limit.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const UsageMeter: React.ForwardRefExoticComponent<UsageMeterProps & React.RefAttributes<HTMLDivElement>>;
/** Alias of {@link UsageMeter} for apps that frame usage as a token count. */
export declare const TokenCounter: React.ForwardRefExoticComponent<UsageMeterProps & React.RefAttributes<HTMLDivElement>>;
