/** Named breakpoints, matching the design tokens in `tokens/breakpoints.json`. */
export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";
/**
 * Breakpoint values in pixels — the single source of truth on the JS side,
 * kept in sync with `tokens/breakpoints.json` (and `src/tokens/_breakpoints.scss`).
 */
export declare const BREAKPOINTS: Record<Breakpoint, number>;
/**
 * Track whether the viewport is at or above a named breakpoint (min-width),
 * mirroring the SCSS `up()` mixin. SSR-safe.
 *
 * @example
 * const isDesktop = useBreakpointUp("lg");
 */
export declare const useBreakpointUp: (breakpoint: Breakpoint) => boolean;
/**
 * Track whether the viewport is below a named breakpoint (max-width),
 * mirroring the SCSS `down()` mixin — the JS equivalent of HamburgerMenu's
 * `visibleBelow`. SSR-safe.
 *
 * @example
 * const isMobile = useBreakpointDown("md");
 */
export declare const useBreakpointDown: (breakpoint: Breakpoint) => boolean;
/**
 * Resolve the current active breakpoint — the largest whose min-width the
 * viewport satisfies. Returns the smallest breakpoint below the first
 * threshold. SSR-safe (defaults to the smallest until mounted).
 *
 * @returns The active {@link Breakpoint}.
 *
 * @example
 * const bp = useBreakpoint(); // "xs" | "sm" | "md" | "lg" | "xl"
 */
export declare const useBreakpoint: () => Breakpoint;
