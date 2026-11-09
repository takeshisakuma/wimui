import React from "react";
import classNames from "classnames";
import { Slot } from "@radix-ui/react-slot";
import { warnUnstyledValue } from "../../../utilities/warn-unstyled-value";
import { CARD_STYLED_PADDING, CARD_STYLED_RADIUS } from "./styled-values";
import styles from "./card.module.scss";


export type CardProps = {
  /**
   * If true, the card will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /** Visual style variant of the card */
  variant?: "elevated" | "outline" | "flat" | "glass";
  /** Whether the card is clickable: shows hover and press feedback and a pointer cursor */
  interactive?: boolean;
  /**
   * Padding size.
   *
   * Derived from the values `card.module.scss` implements, not from
   * `ComponentSize`. Declaring the whole scale meant `padding="5xl"`
   * type-checked and then did nothing (T38); deriving it means the type cannot
   * drift from the stylesheet again, because `Card.unstyled-values.test.tsx`
   * fails if the list stops matching the SCSS.
   */
  padding?: (typeof CARD_STYLED_PADDING)[number];
  /**
   * Corner radius size.
   *
   * Same derivation as `padding`. There is no `--wim-radius-xs` / `-3xl` /
   * `-4xl` / `-5xl` token, so those values had nothing they could have meant.
   */
  radius?: (typeof CARD_STYLED_RADIUS)[number];
} & React.ComponentPropsWithoutRef<"div">;

interface CardComponent {
  (props: CardProps & { ref?: React.Ref<HTMLDivElement> }): React.ReactElement;
  displayName?: string;
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
  Link: typeof CardLink;
}

const CardInner = (
  {
    asChild = false,
    // 既定は `outline`（T250 ②）。素の `<Card>` が影を持つと、1 画面に影が
    // いくつも並んで「1 画面 1 エレベーション」（DESIGN.md）が既定から破れる。
    // 影は「他より手前にある」ことの表現なので、全部が持つと何も意味しない。
    // 実測では `<Card>` 89 箇所のうち `variant` を明示しているのは 21 箇所で、
    // 残り 68 箇所はこの 1 行の見た目で出ていた。
    // 必須ルール 15 `default_anatomy`（既定レンダーも画面と同じ基準で見る）。
    variant = "outline",
    padding = "md",
    radius = "lg",
    interactive = false,
    className,
    children,
    ...props
  }: CardProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const Component = asChild ? Slot : "div";

  if (!(CARD_STYLED_PADDING as readonly string[]).includes(padding)) {
    warnUnstyledValue("Card", "padding", padding, CARD_STYLED_PADDING);
  }
  if (!(CARD_STYLED_RADIUS as readonly string[]).includes(radius)) {
    warnUnstyledValue("Card", "radius", radius, CARD_STYLED_RADIUS);
  }

  return (
    <Component
      ref={ref}
      className={classNames("wim-card", 
        styles.root,
        styles[variant],
        styles[`padding-${padding}`],
        styles[`radius-${radius}`],
        interactive && styles.interactive,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * `Card` はコンテンツをグループ化して表示するためのコンテナコンポーネントです。
 */
export const Card = React.forwardRef(CardInner) as unknown as CardComponent;

Card.displayName = "Card";

export const CardHeader = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => (
  <div className={classNames(styles.header, className)} {...props}>
    {children}
  </div>
);

export const CardBody = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => (
  <div className={classNames(styles.body, className)} {...props}>
    {children}
  </div>
);

export const CardFooter = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => (
  <div className={classNames(styles.footer, className)} {...props}>
    {children}
  </div>
);

export type CardLinkProps = React.ComponentPropsWithoutRef<"a"> & {
  /** Render your own element (a router `Link`, or a `button`) instead of an `<a>`. */
  asChild?: boolean;
};

/**
 * The main link of a card, stretched over the whole card (T365).
 *
 * Put the link text where it reads naturally (usually the title). Clicking
 * anywhere on the card follows it, while other buttons and links inside the
 * card stay separate targets above it, so nothing interactive is nested in
 * the link. Text inside the card cannot be selected by dragging, because the
 * link covers it.
 *
 * Use one per card. Pair it with `interactive` on the `Card` for the hover
 * and press feedback.
 */
export const CardLink = React.forwardRef<HTMLAnchorElement, CardLinkProps>(
  ({ asChild = false, className, ...props }, ref) => {
    const Component = asChild ? Slot : "a";
    return <Component ref={ref} className={classNames("wim-card-link", styles.link, className)} {...props} />;
  },
);

CardHeader.displayName = "Card.Header";
CardBody.displayName = "Card.Body";
CardFooter.displayName = "Card.Footer";
CardLink.displayName = "Card.Link";

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Link = CardLink;

export default Card;
