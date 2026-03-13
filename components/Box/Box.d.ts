import { default as React } from '../../../node_modules/react';
import { WimColor, WimSpacing, WimRadius, WimShadow } from '../../types/tokens';
import { ResponsiveProp } from '../Grid/grid-utils';
export type BoxProps<C extends React.ElementType = "div"> = {
    /** The component used for the root node. Either a string to use a HTML element or a component. */
    as?: C;
    /** Padding */
    p?: number | WimSpacing;
    /** Padding top */
    pt?: number | WimSpacing;
    /** Padding right */
    pr?: number | WimSpacing;
    /** Padding bottom */
    pb?: number | WimSpacing;
    /** Padding left */
    pl?: number | WimSpacing;
    /** Padding horizontal */
    px?: number | WimSpacing;
    /** Padding vertical */
    py?: number | WimSpacing;
    /** Margin */
    m?: number | WimSpacing;
    /** Margin top */
    mt?: number | WimSpacing;
    /** Margin right */
    mr?: number | WimSpacing;
    /** Margin bottom */
    mb?: number | WimSpacing;
    /** Margin left */
    ml?: number | WimSpacing;
    /** Margin horizontal */
    mx?: number | WimSpacing;
    /** Margin vertical */
    my?: number | WimSpacing;
    /** Background color */
    bg?: WimColor;
    /** Width */
    w?: ResponsiveProp<number | string>;
    /** Height */
    h?: ResponsiveProp<number | string>;
    /** Border radius */
    radius?: number | WimRadius;
    /** Box shadow */
    shadow?: WimShadow;
    /** Display */
    display?: React.CSSProperties["display"];
    /** Position */
    position?: React.CSSProperties["position"];
} & React.ComponentPropsWithoutRef<C>;
/**
 * Box is the most basic layout component.
 * It provides a way to style a div (or any other element) with common CSS properties as props.
 */
export declare const Box: React.ForwardRefExoticComponent<Omit<BoxProps<React.ElementType<any, keyof React.JSX.IntrinsicElements>>, "ref"> & React.RefAttributes<HTMLElement>>;
