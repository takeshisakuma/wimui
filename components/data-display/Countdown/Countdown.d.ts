import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic } from '../../../types/tokens';
export type CountdownInput = Date | string | number;
export type CountdownUnit = "day" | "hour" | "minute" | "second";
export type CountdownProps = Omit<React.ComponentPropsWithoutRef<"time">, "dateTime"> & {
    /**
     * The moment the countdown ends, as a Date object, ISO 8601 string,
     * or epoch milliseconds.
     */
    target: CountdownInput;
    /**
     * Reference point used as "now". When set, the countdown is frozen at
     * that instant (useful for snapshots and tests).
     */
    baseDate?: CountdownInput;
    /**
     * "digital" renders a compact colon-separated clock (04:12:33);
     * "units" renders one labeled segment per unit (days / hours / min / sec).
     * @default "digital"
     */
    variant?: "digital" | "units";
    /**
     * Size of the numbers and labels.
     * @default "md"
     */
    size?: ComponentSizeBasic;
    /**
     * BCP 47 locale override for unit labels (e.g. "en", "ja", "pt-BR").
     * @default current i18next language
     */
    locale?: string;
    /**
     * Length of the unit labels in the "units" variant.
     * @default "short"
     */
    unitDisplay?: "long" | "short" | "narrow";
    /**
     * Pauses the countdown while true. It resumes from the real remaining
     * time (the target moment does not shift).
     * @default false
     */
    paused?: boolean;
    /**
     * Called once when the remaining time reaches zero (also on mount if the
     * target is already in the past). Not called when baseDate is set.
     */
    onComplete?: () => void;
    /**
     * Content shown instead of the zeroed digits once the countdown ends.
     */
    completedContent?: React.ReactNode;
    /**
     * Content shown when the target cannot be parsed.
     */
    fallback?: React.ReactNode;
    /**
     * If true, the component will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
};
/**
 * Countdown displays the time remaining until a target moment as a live
 * ticking clock, either as compact digits (04:12:33) or as labeled unit
 * segments for sale banners and maintenance notices. Unit labels are
 * localized through Intl.NumberFormat, so no locale data is bundled.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 * - Timers: Owns its own 1-second refresh timer (cleared on unmount).
 *   Provide baseDate to render a static snapshot, or paused to suspend it.
 */
export declare const Countdown: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>, "ref">, "dateTime"> & {
    /**
     * The moment the countdown ends, as a Date object, ISO 8601 string,
     * or epoch milliseconds.
     */
    target: CountdownInput;
    /**
     * Reference point used as "now". When set, the countdown is frozen at
     * that instant (useful for snapshots and tests).
     */
    baseDate?: CountdownInput;
    /**
     * "digital" renders a compact colon-separated clock (04:12:33);
     * "units" renders one labeled segment per unit (days / hours / min / sec).
     * @default "digital"
     */
    variant?: "digital" | "units";
    /**
     * Size of the numbers and labels.
     * @default "md"
     */
    size?: ComponentSizeBasic;
    /**
     * BCP 47 locale override for unit labels (e.g. "en", "ja", "pt-BR").
     * @default current i18next language
     */
    locale?: string;
    /**
     * Length of the unit labels in the "units" variant.
     * @default "short"
     */
    unitDisplay?: "long" | "short" | "narrow";
    /**
     * Pauses the countdown while true. It resumes from the real remaining
     * time (the target moment does not shift).
     * @default false
     */
    paused?: boolean;
    /**
     * Called once when the remaining time reaches zero (also on mount if the
     * target is already in the past). Not called when baseDate is set.
     */
    onComplete?: () => void;
    /**
     * Content shown instead of the zeroed digits once the countdown ends.
     */
    completedContent?: React.ReactNode;
    /**
     * Content shown when the target cannot be parsed.
     */
    fallback?: React.ReactNode;
    /**
     * If true, the component will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
} & React.RefAttributes<HTMLTimeElement>>;
