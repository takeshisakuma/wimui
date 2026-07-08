import { useState, useEffect } from "react";

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
export const useMediaQuery = (query: string, defaultState = false): boolean => {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return defaultState;
    }
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return;
    }
    const mql = window.matchMedia(query);
    const handleChange = () => setMatches(mql.matches);

    // Sync immediately in case the query changed between render and effect.
    handleChange();

    // addEventListener is the modern API; addListener is the deprecated fallback.
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", handleChange);
      return () => mql.removeEventListener("change", handleChange);
    }
    mql.addListener(handleChange);
    return () => mql.removeListener(handleChange);
  }, [query]);

  return matches;
};
