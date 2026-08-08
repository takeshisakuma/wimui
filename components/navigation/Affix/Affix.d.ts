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
export declare const Affix: ({ offsetTop, offsetBottom, onChange, target, children, className, style, }: AffixProps) => React.JSX.Element;
export default Affix;
