import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/form/Button/Button";
import { Icon } from "@/components/media/Icon/Icon";
import i18n from "../.storybook/i18n";
import { ALL_NAMESPACES } from "./i18nConstants";

/**
 * Shapes drawn for the "nicknames with nothing behind them" table in
 * `docs/MenuVocabulary.mdx` (T65) — **not part of the icon set.**
 *
 * T46 decided against shipping hot dog / chocolate bar / strawberry / bacon
 * glyphs, because they are nicknames for a shape rather than for a function
 * ("形の俗称であって「その形でしか表せない機能」が無い"), and anything added to
 * `src/icon/` lands in `check:api`'s snapshot and in the published bundle
 * forever. So they live here, in `stories/`, which is not shipped.
 *
 * **Only that table draws.** The upper table renders the icon WIM actually
 * ships, from `@/icon`, with its exported name beside it — every cell in that
 * column is a real glyph you can type into `<Icon name>`. Context menu and
 * speed dial started out with drawings there and lost them: two unnamed
 * pictures among four named icons read as glyphs WIM ships, and the context
 * menu row was contradicting itself, showing a trigger button next to a
 * sentence that says it has no trigger of its own. Their rows describe the
 * shape in words, which is all they ever needed.
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

/**
 * Hot dog: a single horizontal line.
 *
 * All but identical to `minus.svg` (`5→19` there, `3→21` here), and drawn here
 * anyway. Reaching for `MinusIcon` would put its name in a column that means
 * "the icon WIM ships for this shape", next to a cell that correctly answers
 * `HamburgerMenu` — a minus is not a menu trigger. The row says so out loud,
 * because a reader recognises the mark and asks the same question.
 */
export const HotDogShape = (props: ShapeProps) => (
  <svg {...base} {...props}>
    <line x1="3" y1="12" x2="21" y2="12" />
  </svg>
);

/**
 * Pancake: the hamburger's three lines, but of uneven length.
 *
 * This is the whole distinction and it is easy to get wrong (the first draft
 * here did): the hamburger is three lines of **equal** length, evenly spaced;
 * the pancake staggers them, the way a stack of pancakes is never the same
 * width twice. Centred rather than left-aligned, because a stack is centred —
 * left-aligning them would read as the funnel instead.
 */
export const PancakeShape = (props: ShapeProps) => (
  <svg {...base} {...props}>
    <line x1="5" y1="6" x2="19" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="6" y1="18" x2="18" y2="18" />
  </svg>
);

/**
 * Cheeseburger: the hamburger with the **middle** line decorated.
 *
 * Not a dot beside every line — that was the first draft here and it is a
 * different thing. The bun lines stay straight and only the filling in the
 * middle waves, which is also what keeps it apart from the bacon (where all
 * three wave).
 */
export const CheeseburgerShape = (props: ShapeProps) => (
  <svg {...base} {...props}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M3 12c3-2.5 6 2.5 9 0s6-2.5 9 0" />
    <line x1="3" y1="18" x2="21" y2="18" />
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
  iconName,
}: {
  shape: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  labelKey: string;
  /**
   * Exported name from `src/icon/` — `MoreVerticalIcon`, not `more-vertical`,
   * because that is what the Icon page calls it and what `<Icon name>` takes.
   * Omitted on the six drawn shapes above, where there is no icon to name.
   */
  iconName?: string;
}) => {
  const { t } = useTranslation(ALL_NAMESPACES, { i18n });
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        // The page sets `overflow-wrap: anywhere` on the body, which chops an
        // identifier in half rather than moving it — `MoreVerticalIcon` came
        // out as "MoreVerticalI / con". Wrapping the row instead drops the
        // whole name onto its own line when the column is too narrow for it.
        flexWrap: "wrap",
        gap: "var(--wim-spacing-sm)",
        marginBottom: "var(--wim-spacing-sm)",
      }}
    >
      <Button
        variant="ghost"
        aria-label={t(labelKey)}
        /*
         * Matched to the Icon gallery on the Icon page: 20px glyph in a 40px
         * cell there, and `xl` resolves to 20.3px inside this 42px button, so
         * the two read at the same weight when someone moves between the pages.
         *
         * The colour is `text-primary`, not the button's accent, for the same
         * reason — the gallery draws its icons in the body text colour. Not a
         * literal black: `text-primary` flips with the theme, and a hard black
         * is how T71 ended up with white-on-white in dark.
         */
        icon={
          <Icon component={shape} size="xl" color="text-primary" aria-hidden="true" />
        }
      />
      {/*
        `.wim-t` is what gives every other inline code on this page its chip
        (`src/base.scss` styles `.wim-t code`, and `T` converts backticks into
        exactly this). A bare <code> here falls back to the browser's 16px
        monospace with no chip, which reads as a different kind of thing from
        the `more-vertical` two columns to the right — measured before this:
        no background, no padding, 16px against their 12.64px.
      */}
      {iconName ? (
        <span className="wim-t" style={{ whiteSpace: "nowrap" }}>
          <code>{iconName}</code>
        </span>
      ) : null}
    </div>
  );
};
