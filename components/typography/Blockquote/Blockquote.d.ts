import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic, WimColor } from '../../../types/tokens';
export interface BlockquoteProps extends Omit<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, "cite" | "content" | "color"> {
    /**
     * If true, the blockquote will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
    /**
     * Font size of the quote.
     * @default "md"
     */
    size?: ComponentSizeBasic;
    /**
     * Text color. Accepts a design token color name or any CSS color value.
     */
    color?: WimColor;
    /**
     * Quoted content. Alternative to children.
     */
    content?: React.ReactNode;
    /**
     * Source of the quote, rendered in a `<cite>` element.
     */
    cite?: React.ReactNode;
    /**
     * Whether to show the left border.
     * @default true
     */
    border?: boolean;
}
export declare const Blockquote: React.ForwardRefExoticComponent<BlockquoteProps & React.RefAttributes<HTMLQuoteElement>>;
