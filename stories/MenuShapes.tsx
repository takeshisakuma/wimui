import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/form/Button/Button";
import { Icon } from "@/components/media/Icon/Icon";
import i18n from "../.storybook/i18n";
import { ALL_NAMESPACES } from "./i18nConstants";

/**
 * Shapes drawn for `docs/MenuVocabulary.mdx` (T65) — **not part of the icon set.**
 *
 * The vocabulary page needs to show what each nickname looks like, and most of
 * those shapes have no WIM icon on purpose: T46 decided against shipping hot dog
 * / chocolate bar / strawberry / bacon glyphs because they are nicknames for a
 * shape, not a function ("形の俗称であって「その形でしか表せない機能」が無い"),
 * and anything added to `src/icon/` lands in `check:api`'s snapshot and in the
 * published bundle forever. Context menu and speed dial are the same case: the
 * components exist, a distinguishing glyph does not.
 *
 * So they live here, in `stories/`, which is not shipped. The page names the
 * real icon (`more-vertical`, `grid`, `filter`, `menu`) in its "Use in WIM"
 * column wherever one exists, and renders it from `@/icon` — those cells show
 * the actual shipped glyph, not a drawing.
 *
 * Conventions copied from `src/icon/*.svg` so the drawings sit next to the real
 * icons without looking foreign: 24×24 box, no fill, `currentColor` stroke at
 * width 2, round caps and joins. Render them through `Icon`'s `component` prop
 * so size and colour resolve through the same tokens.
 *
 * All of them are decorative — every cell states the shape in words as well —
 * so callers pass `aria-hidden`.
 */

type ShapeProps = React.SVGProps<SVGSVGElement>;

const base = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/** Context menu: a panel of choices with a pointer arriving at its corner. */
export const ContextMenuShape = (props: ShapeProps) => (
  <svg {...base} {...props}>
    <rect x="9" y="8" width="12" height="13" rx="1" />
    <line x1="12" y1="12" x2="18" y2="12" />
    <line x1="12" y1="16" x2="18" y2="16" />
    <path d="M3 2 L3 12 L6 9 L8 13 L10 12 L8 8 L11 8 Z" />
  </svg>
);

/** Speed dial: one round button with actions fanning out above it. */
export const SpeedDialShape = (props: ShapeProps) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="18" r="4" />
    <line x1="10" y1="18" x2="14" y2="18" />
    <line x1="12" y1="16" x2="12" y2="20" />
    <circle cx="12" cy="9" r="1.6" />
    <circle cx="5.5" cy="12" r="1.6" />
    <circle cx="18.5" cy="12" r="1.6" />
  </svg>
);

/** Hot dog: a single horizontal line. */
export const HotDogShape = (props: ShapeProps) => (
  <svg {...base} {...props}>
    <line x1="3" y1="12" x2="21" y2="12" />
  </svg>
);

/** Pancake: three stacked bars, rounded and thicker than the hamburger's. */
export const PancakeShape = (props: ShapeProps) => (
  <svg {...base} {...props}>
    <rect x="3" y="4" width="18" height="4" rx="2" />
    <rect x="3" y="10" width="18" height="4" rx="2" />
    <rect x="3" y="16" width="18" height="4" rx="2" />
  </svg>
);

/** Cheeseburger: three lines, each with a dot alongside. */
export const CheeseburgerShape = (props: ShapeProps) => (
  <svg {...base} {...props}>
    <line x1="3" y1="6" x2="16" y2="6" />
    <line x1="3" y1="12" x2="16" y2="12" />
    <line x1="3" y1="18" x2="16" y2="18" />
    <circle cx="20" cy="6" r="1" />
    <circle cx="20" cy="12" r="1" />
    <circle cx="20" cy="18" r="1" />
  </svg>
);

/** Bacon: wavy lines. */
export const BaconShape = (props: ShapeProps) => (
  <svg {...base} {...props}>
    <path d="M3 7c3-3 6 3 9 0s6-3 9 0" />
    <path d="M3 13c3-3 6 3 9 0s6-3 9 0" />
    <path d="M3 19c3-3 6 3 9 0s6-3 9 0" />
  </svg>
);

/** Chocolate bar: three vertical bars. */
export const ChocolateBarShape = (props: ShapeProps) => (
  <svg {...base} {...props}>
    <line x1="6" y1="3" x2="6" y2="21" />
    <line x1="12" y1="3" x2="12" y2="21" />
    <line x1="18" y1="3" x2="18" y2="21" />
  </svg>
);

/** Strawberry: dots scattered the way seeds are. */
export const StrawberryShape = (props: ShapeProps) => (
  <svg {...base} {...props}>
    <circle cx="7" cy="5" r="1" />
    <circle cx="16" cy="6" r="1" />
    <circle cx="11" cy="10" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="13" r="1" />
    <circle cx="14" cy="16" r="1" />
    <circle cx="8" cy="19" r="1" />
  </svg>
);

/**
 * One cell of the vocabulary table's "what it looks like" column.
 *
 * These shapes are triggers in the wild — the kebab, the hamburger and the
 * bento are icon buttons, not loose glyphs — so the page draws them inside the
 * real `Button` in its icon-only ghost form rather than a hand-built look-alike.
 * Copying the appearance with tokens would drift the moment the button changes,
 * which is the failure `check:slop` rule 5 exists to stop.
 *
 * That does make them focusable. It is the price of using the component instead
 * of imitating it, and the label below keeps them from being unnamed buttons.
 * `labelKey` names the row, so a screen reader hears "Overflow menu, button"
 * rather than the shape.
 */
export const ShapeButton = ({
  shape,
  labelKey,
}: {
  shape: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  labelKey: string;
}) => {
  const { t } = useTranslation(ALL_NAMESPACES, { i18n });
  return (
    <Button
      variant="ghost"
      aria-label={t(labelKey)}
      icon={<Icon component={shape} size="lg" aria-hidden="true" />}
    />
  );
};
