import { default as React } from '../../../../node_modules/react';
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
    /** Accessible label for the button */
    "aria-label"?: string;
    /** Whether to render as a child element. */
    asChild?: boolean;
}
export declare const BackTop: React.ForwardRefExoticComponent<BackTopProps & React.RefAttributes<HTMLDivElement>>;
export default BackTop;
