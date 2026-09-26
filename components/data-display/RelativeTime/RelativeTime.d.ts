import { default as React } from '../../../../node_modules/react';
export type RelativeTimeInput = Date | string | number;
export type RelativeTimeProps = Omit<React.ComponentPropsWithoutRef<"time">, "dateTime"> & {
    /**
     * The date to display, as a Date object, ISO 8601 string, or epoch milliseconds.
     */
    date: RelativeTimeInput;
    /**
     * Reference point used as "now". When set, live updates are disabled.
     * @default current time
     */
    baseDate?: RelativeTimeInput;
    /**
     * BCP 47 locale override (e.g. "en", "ja", "pt-BR").
     * @default current i18next language
     */
    locale?: string;
    /**
     * "auto" allows idiomatic phrases like "yesterday"; "always" always uses numbers ("1 day ago").
     * @default "auto"
     */
    numeric?: Intl.RelativeTimeFormatNumeric;
    /**
     * Length of the formatted message ("long" | "short" | "narrow").
     * @default "long"
     */
    format?: Intl.RelativeTimeFormatStyle;
    /**
     * Automatically re-render as time passes. Ignored when baseDate is set.
     * @default true
     */
    live?: boolean;
    /**
     * Content shown when the date cannot be parsed.
     */
    fallback?: React.ReactNode;
    /**
     * If true, the component will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
};
/**
 * RelativeTime displays a timestamp as a localized relative phrase
 * ("3 minutes ago", "yesterday") using Intl.RelativeTimeFormat, and keeps
 * itself up to date as time passes. It renders a semantic <time> element
 * with a machine-readable dateTime attribute and an absolute-time tooltip.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 * - Timers: Owns its own refresh timer (cleared on unmount). Set live={false}
 *   or provide baseDate to render a static snapshot.
 */
export declare const RelativeTime: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>, "ref">, "dateTime"> & {
    /**
     * The date to display, as a Date object, ISO 8601 string, or epoch milliseconds.
     */
    date: RelativeTimeInput;
    /**
     * Reference point used as "now". When set, live updates are disabled.
     * @default current time
     */
    baseDate?: RelativeTimeInput;
    /**
     * BCP 47 locale override (e.g. "en", "ja", "pt-BR").
     * @default current i18next language
     */
    locale?: string;
    /**
     * "auto" allows idiomatic phrases like "yesterday"; "always" always uses numbers ("1 day ago").
     * @default "auto"
     */
    numeric?: Intl.RelativeTimeFormatNumeric;
    /**
     * Length of the formatted message ("long" | "short" | "narrow").
     * @default "long"
     */
    format?: Intl.RelativeTimeFormatStyle;
    /**
     * Automatically re-render as time passes. Ignored when baseDate is set.
     * @default true
     */
    live?: boolean;
    /**
     * Content shown when the date cannot be parsed.
     */
    fallback?: React.ReactNode;
    /**
     * If true, the component will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
} & React.RefAttributes<HTMLTimeElement>>;
