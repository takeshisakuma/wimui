import { default as React } from '../../../../node_modules/react';
export interface AffixProps {
    /** Offset distance from the top of the window (in pixels) */
    offsetTop?: number;
    /** Offset distance from the bottom of the window (in pixels) */
    offsetBottom?: number;
    /** Callback when the affix state changes */
    onChange?: (lastAffixed: boolean) => void;
    /** Target container that will be scrolled */
    target?: () => HTMLElement | Window | null;
    /** Children to be rendered inside the affix */
    children: React.ReactNode;
    /** Additional class names */
    className?: string;
    /** Style attribute */
    style?: React.CSSProperties;
}
/**
 * Pins children while scrolling.
 *
 * `ref` points at the in-flow placeholder (the outer element), not the
 * `position: fixed` inner wrapper. After the inner content sticks, measure
 * this node for document position — the children's rect is the viewport edge.
 */
export declare const Affix: React.ForwardRefExoticComponent<AffixProps & React.RefAttributes<HTMLDivElement>>;
export default Affix;
