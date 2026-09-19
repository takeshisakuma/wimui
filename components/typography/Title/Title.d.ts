import { default as React } from '../../../../node_modules/react';
import { WimColor } from '../../../types/tokens';
export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    /**
     * If true, the heading will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
    /**
     * The semantic HTML tag to use.
     */
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    /**
     * The visual size of the title.
     */
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
    /**
     * Text color.
     */
    color?: WimColor;
    /**
     * Text alignment.
     */
    align?: "left" | "center" | "right";
    /**
     * Visual decoration applied to the heading text.
     * @default "none"
     */
    decoration?: "underline" | "highlight" | "none";
    /**
     * The heading content.
     */
    children: React.ReactNode;
}
export declare const Title: React.ForwardRefExoticComponent<TitleProps & React.RefAttributes<HTMLHeadingElement>>;
