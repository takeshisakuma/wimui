import { default as React } from '../../../../node_modules/react';
import { IconName } from '../../../icon';
export interface SwipeActionItem {
    /** Icon to display */
    icon: IconName;
    /** Label to display */
    label: string;
    /** Callback when action is clicked */
    onClick: () => void;
    /** Semantic intent for background color */
    intent?: "primary" | "danger" | "warning" | "success" | "neutral";
    /** Custom background color */
    color?: string;
}
export interface SwipeActionProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The element to render as the root container. Default is 'div'. */
    as?: React.ElementType;
    /** Actions revealed when swiping from left to right */
    leftActions?: SwipeActionItem[];
    /** Actions revealed when swiping from right to left */
    rightActions?: SwipeActionItem[];
    /** The content to be wrapped and swiped */
    children: React.ReactNode;
    /** If true, the content div will be rendered as its child */
    asChild?: boolean;
    /** Unique ID for the item. Automatically generated if not provided. */
    id?: string;
    /** Whether to automatically close the actions when an action is clicked. Default is true. */
    closeOnAction?: boolean;
}
export interface SwipeActionRef {
    /** Method to programmatically close the swipe actions */
    close: () => void;
}
/**
 * SwipeAction component provides mobile-native swipe gestures to reveal actions behind a list item.
 *
 * Composition Contract:
 * - Managed by: List container
 * - Scroll lock: No (allows vertical scrolling)
 */
export declare const SwipeAction: React.ForwardRefExoticComponent<SwipeActionProps & React.RefAttributes<SwipeActionRef>>;
