import { default as React } from '../../../node_modules/react';
export interface AnchorLinkItem {
    /** Unique key for the link */
    key: string;
    /** Target anchor href (e.g. #section1) */
    href: string;
    /** Title of the anchor link */
    title: React.ReactNode;
    /** Children of the anchor link */
    children?: AnchorLinkItem[];
}
export interface AnchorProps {
    /** Array of anchor link configurations */
    items: AnchorLinkItem[];
    /** Bounding distance (in pixels) for triggering active state */
    bounds?: number;
    /** Offset (in pixels) from top when clicking to scroll */
    offset?: number;
    /** Additional class names */
    className?: string;
    /** Style attribute */
    style?: React.CSSProperties;
}
export declare const Anchor: ({ items, bounds, offset, className, style, }: AnchorProps) => import("react/jsx-runtime").JSX.Element;
export default Anchor;
