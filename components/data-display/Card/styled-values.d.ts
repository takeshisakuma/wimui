/**
 * The `padding` and `radius` values `card.module.scss` actually implements.
 *
 * `CardProps` derives both prop types from these lists (T38, 0.13.0), so a
 * value outside them does not type-check in the first place. Before that the
 * props declared the whole `ComponentSize` and everything outside these lists
 * type-checked and then did nothing.
 *
 * `Card` still warns at runtime, because types are erased: JavaScript
 * consumers, `as any` and stale type resolution can all still get here.
 *
 * Written out rather than read off the CSS module on purpose: under Vitest a
 * CSS module is a proxy that answers every key, so a check derived from it
 * could never be tested. `Card.unstyled-values.test.tsx` reads
 * `card.module.scss` off disk and fails if either list stops matching it.
 *
 * Not re-exported from the barrel — `src/data-display-core.ts` does
 * `export * from "./Card/Card"`, and these are implementation detail.
 */
export declare const CARD_STYLED_PADDING: readonly ["none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl"];
export declare const CARD_STYLED_RADIUS: readonly ["none", "sm", "md", "lg", "xl", "2xl"];
