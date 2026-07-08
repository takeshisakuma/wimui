import { useMediaQuery } from "./useMediaQuery";

/** Named breakpoints, matching the design tokens in `tokens/breakpoints.json`. */
export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Breakpoint values in pixels — the single source of truth on the JS side,
 * kept in sync with `tokens/breakpoints.json` (and `src/tokens/_breakpoints.scss`).
 */
export const BREAKPOINTS: Record<Breakpoint, number> = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const ORDER: Breakpoint[] = ["xs", "sm", "md", "lg", "xl"];

/**
 * Track whether the viewport is at or above a named breakpoint (min-width),
 * mirroring the SCSS `up()` mixin. SSR-safe.
 *
 * @example
 * const isDesktop = useBreakpointUp("lg");
 */
export const useBreakpointUp = (breakpoint: Breakpoint): boolean =>
  useMediaQuery(`(min-width: ${BREAKPOINTS[breakpoint]}px)`);

/**
 * Track whether the viewport is below a named breakpoint (max-width),
 * mirroring the SCSS `down()` mixin — the JS equivalent of HamburgerMenu's
 * `visibleBelow`. SSR-safe.
 *
 * @example
 * const isMobile = useBreakpointDown("md");
 */
export const useBreakpointDown = (breakpoint: Breakpoint): boolean =>
  useMediaQuery(`(max-width: ${BREAKPOINTS[breakpoint]}px)`);

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
export const useBreakpoint = (): Breakpoint => {
  // One hook per threshold — the count is fixed, so hook order stays stable.
  const matches: Record<Breakpoint, boolean> = {
    xs: useMediaQuery(`(min-width: ${BREAKPOINTS.xs}px)`),
    sm: useMediaQuery(`(min-width: ${BREAKPOINTS.sm}px)`),
    md: useMediaQuery(`(min-width: ${BREAKPOINTS.md}px)`),
    lg: useMediaQuery(`(min-width: ${BREAKPOINTS.lg}px)`),
    xl: useMediaQuery(`(min-width: ${BREAKPOINTS.xl}px)`),
  };

  let active: Breakpoint = ORDER[0];
  for (const bp of ORDER) {
    if (matches[bp]) active = bp;
  }
  return active;
};
