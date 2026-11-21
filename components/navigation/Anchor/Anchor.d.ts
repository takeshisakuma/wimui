import { default as React } from '../../../../node_modules/react';
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
    /** Orientation of the anchor links */
    direction?: "vertical" | "horizontal";
    /** Additional class names */
    className?: string;
    /** Style attribute */
    style?: React.CSSProperties;
    /** Accessible name. When set, the anchor is exposed as a navigation landmark with this name. */
    "aria-label"?: string;
    /** ID of the element that labels the anchor. Takes precedence over `aria-label`. */
    "aria-labelledby"?: string;
}
export declare const Anchor: ({ items, bounds, offset, direction, className, style, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, }: AnchorProps) => React.JSX.Element;
export default Anchor;
