import { default as React } from '../../../../node_modules/react';
import { Icon } from '../../media/Icon/Icon';
import { WimColor, ComponentSizeText, WimFontWeightKey } from '../../../types/tokens';
export interface SpanProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color" | "content"> {
    /**
     * If true, the span will be rendered as its child, merging its props onto that child.
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
     * Content of the span. Alternative to children.
     */
    content?: React.ReactNode;
    /**
     * Name of the icon displayed alongside the text.
     */
    iconName?: React.ComponentProps<typeof Icon>["name"];
    /**
     * Position of the icon relative to the text.
     * @default "left"
     */
    iconPosition?: "left" | "right";
}
export declare const Span: React.ForwardRefExoticComponent<SpanProps & React.RefAttributes<HTMLSpanElement>>;
