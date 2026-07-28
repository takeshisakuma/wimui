/**
 * The `padding` and `radius` values `card.module.scss` actually implements.
 *
 * `CardProps` types both as the whole `ComponentSize`, so everything outside
 * these lists type-checks and then does nothing. Narrowing the types is the
 * real fix and it is breaking, so it waits for 0.8.0 (T38); until then `Card`
 * warns in development instead of failing in silence.
 *
 * Written out rather than read off the CSS module on purpose: under Vitest a
 * CSS module is a proxy that answers every key, so a check derived from it
 * could never be tested. `Card.unstyled-values.test.tsx` reads
 * `card.module.scss` off disk and fails if either list stops matching it.
 *
 * Not re-exported from the barrel — `src/data-display-core.ts` does
 * `export * from "./Card/Card"`, and these are implementation detail.
 */
export const CARD_STYLED_PADDING = [
  "none",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
] as const;

export const CARD_STYLED_RADIUS = [
  "none",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
] as const;
