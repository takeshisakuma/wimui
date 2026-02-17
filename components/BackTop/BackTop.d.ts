import { default as React } from '../../../node_modules/react';
export interface BackTopProps {
    /** Target container that will be scrolled */
    target?: () => HTMLElement | Window | Document | null;
    /** Scroll height after which the button becomes visible */
    visibilityHeight?: number;
    /** Callback when clicked */
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    /** Children to be rendered inside the button */
    children?: React.ReactNode;
    /** Additional class names */
    className?: string;
    /** Style attribute */
    style?: React.CSSProperties;
}
export declare const BackTop: ({ target, visibilityHeight, onClick, children, className, style, }: BackTopProps) => import("react/jsx-runtime").JSX.Element;
export default BackTop;
