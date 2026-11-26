import { default as React } from '../../../../node_modules/react';
import { CARD_STYLED_PADDING, CARD_STYLED_RADIUS } from './styled-values';
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
    (props: CardProps & {
        ref?: React.Ref<HTMLDivElement>;
    }): React.ReactElement;
    displayName?: string;
    Header: typeof CardHeader;
    Body: typeof CardBody;
    Footer: typeof CardFooter;
    Link: typeof CardLink;
}
/**
 * `Card` はコンテンツをグループ化して表示するためのコンテナコンポーネントです。
 */
export declare const Card: CardComponent;
export declare const CardHeader: {
    ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">): React.JSX.Element;
    displayName: string;
};
export declare const CardBody: {
    ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">): React.JSX.Element;
    displayName: string;
};
export declare const CardFooter: {
    ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">): React.JSX.Element;
    displayName: string;
};
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
export declare const CardLink: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & {
    /** Render your own element (a router `Link`, or a `button`) instead of an `<a>`. */
    asChild?: boolean;
} & React.RefAttributes<HTMLAnchorElement>>;
export default Card;
