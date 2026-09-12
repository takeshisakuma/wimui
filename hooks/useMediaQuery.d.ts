/**
 * Subscribe to a CSS media query and track whether it currently matches.
 *
 * SSR-safe: returns `false` (or the provided `defaultState`) until mounted on
 * the client, then updates to the real value and re-renders on every change.
 *
 * @param query A media query string, e.g. "(min-width: 768px)" or "(prefers-color-scheme: dark)".
 * @param defaultState The value to return before the client has evaluated the query (default: false).
 * @returns Whether the query currently matches.
 *
 * @example
 * const isWide = useMediaQuery("(min-width: 768px)");
 */
export declare const useMediaQuery: (query: string, defaultState?: boolean) => boolean;
