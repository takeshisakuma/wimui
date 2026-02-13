import { default as React } from '../../../node_modules/react';
export type BoxProps<C extends React.ElementType = "div"> = {
    /** The component used for the root node. Either a string to use a HTML element or a component. */
    as?: C;
    /** Padding */
    p?: number | string;
    /** Padding top */
    pt?: number | string;
    /** Padding right */
    pr?: number | string;
    /** Padding bottom */
    pb?: number | string;
    /** Padding left */
    pl?: number | string;
    /** Padding horizontal */
    px?: number | string;
    /** Padding vertical */
    py?: number | string;
    /** Margin */
    m?: number | string;
    /** Margin top */
    mt?: number | string;
    /** Margin right */
    mr?: number | string;
    /** Margin bottom */
    mb?: number | string;
    /** Margin left */
    ml?: number | string;
    /** Margin horizontal */
    mx?: number | string;
    /** Margin vertical */
    my?: number | string;
    /** Background color */
    bg?: string;
    /** Width */
    w?: number | string;
    /** Height */
    h?: number | string;
    /** Border radius */
    radius?: number | string;
    /** Box shadow */
    shadow?: string;
    /** Display */
    display?: React.CSSProperties["display"];
    /** Position */
    position?: React.CSSProperties["position"];
} & React.ComponentPropsWithoutRef<C>;
/**
 * Box is the most basic layout component.
 * It provides a way to style a div (or any other element) with common CSS properties as props.
 */
export declare const Box: React.ForwardRefExoticComponent<Omit<BoxProps<React.ElementType<any, keyof React.JSX.IntrinsicElements>>, "ref"> & React.RefAttributes<any>>;
