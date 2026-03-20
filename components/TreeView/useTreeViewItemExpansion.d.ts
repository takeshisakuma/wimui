import { default as React } from '../../../node_modules/react';
/**
 * Manages expand/collapse animation state for a TreeViewItem.
 * Uses CSS grid-template-rows trick for smooth height transition.
 */
export declare function useTreeViewItemExpansion(isExpanded: boolean): {
    shouldRender: boolean;
    isVisualExpanded: boolean;
    handleTransitionEnd: (e: React.TransitionEvent) => void;
};
