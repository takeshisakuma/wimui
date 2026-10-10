import { default as React } from '../../../../node_modules/react';
import { WimColor, WimLineHeight, WimFontWeightKey, ComponentSizeText } from '../../../types/tokens';
export type TextProps = Omit<React.ComponentPropsWithoutRef<"p">, "content"> & {
    /**
     * If true, the text will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
    /**
     * Font size of the text.
     * @default "md"
     */
    size?: ComponentSizeText;
    /**
     * Text color. Accepts a design token color name or any CSS color value.
     */
    color?: WimColor;
    /**
     * Font weight.
     * @default "normal"
     */
    weight?: WimFontWeightKey;
    /**
     * Line height. Accepts a design token name or any CSS line-height value.
     */
    lineHeight?: WimLineHeight;
    /**
     * Font style.
     * @default "normal"
     */
    fontStyle?: "normal" | "italic";
    /**
     * Visual decoration applied to the text.
     * @default "none"
     */
    decoration?: "line-through" | "underline" | "highlight" | "none";
    /**
     * Keep the text on one line instead of wrapping. Overflow is left visible —
     * use `truncate` to clip it with an ellipsis.
     * @default false
     */
    nowrap?: boolean;
    /**
     * Keep the text on one line and clip the overflow with an ellipsis.
     * Implies `nowrap`.
     * @default false
     */
    truncate?: boolean;
    /**
     * Clip the text after this many lines and end it with an ellipsis.
     *
     * `truncate` is the one-line case; this is the multi-line one. Use it when the
     * text simply has to stop — a card blurb, a table cell, a list subtitle. If the
     * reader needs a way to see the rest, use `Spoiler` instead: it always renders
     * a toggle, which is the point of that component and the reason it cannot be
     * used for "just stop at three lines".
     *
     * Ignored when `truncate` is set (one line wins; they cannot both apply).
     */
    lineClamp?: number;
    /**
     * Content of the text. Alternative to children (children take precedence only with asChild).
     */
    content?: React.ReactNode;
};
export declare const Text: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref">, "content"> & {
    /**
     * If true, the text will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
    /**
     * Font size of the text.
     * @default "md"
     */
    size?: ComponentSizeText;
    /**
     * Text color. Accepts a design token color name or any CSS color value.
     */
    color?: WimColor;
    /**
     * Font weight.
     * @default "normal"
     */
    weight?: WimFontWeightKey;
    /**
     * Line height. Accepts a design token name or any CSS line-height value.
     */
    lineHeight?: WimLineHeight;
    /**
     * Font style.
     * @default "normal"
     */
    fontStyle?: "normal" | "italic";
    /**
     * Visual decoration applied to the text.
     * @default "none"
     */
    decoration?: "line-through" | "underline" | "highlight" | "none";
    /**
     * Keep the text on one line instead of wrapping. Overflow is left visible —
     * use `truncate` to clip it with an ellipsis.
     * @default false
     */
    nowrap?: boolean;
    /**
     * Keep the text on one line and clip the overflow with an ellipsis.
     * Implies `nowrap`.
     * @default false
     */
    truncate?: boolean;
    /**
     * Clip the text after this many lines and end it with an ellipsis.
     *
     * `truncate` is the one-line case; this is the multi-line one. Use it when the
     * text simply has to stop — a card blurb, a table cell, a list subtitle. If the
     * reader needs a way to see the rest, use `Spoiler` instead: it always renders
     * a toggle, which is the point of that component and the reason it cannot be
     * used for "just stop at three lines".
     *
     * Ignored when `truncate` is set (one line wins; they cannot both apply).
     */
    lineClamp?: number;
    /**
     * Content of the text. Alternative to children (children take precedence only with asChild).
     */
    content?: React.ReactNode;
} & React.RefAttributes<HTMLParagraphElement>>;
