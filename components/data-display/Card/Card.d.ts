import { default as React } from '../../../../node_modules/react';
import { CARD_STYLED_PADDING, CARD_STYLED_RADIUS } from './styled-values';
export type CardProps = {
    /**
     * If true, the card will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
    /** Visual style variant of the card */
    variant?: "elevated" | "outline" | "flat" | "glass";
    /** Whether to enable hover animation and click effects */
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
export default Card;
