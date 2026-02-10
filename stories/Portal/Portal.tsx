import React from "react";
import { createPortal } from "react-dom";

export interface PortalProps {
    /** The content to be rendered in the portal */
    children: React.ReactNode;
    /** The container where the portal will be rendered. Defaults to document.body */
    container?: HTMLElement | null;
}

const emptySubscribe = () => () => { };

/**
 * A component that renders its children into a new DOM node, outside of the 
 * parent component's DOM hierarchy.
 */
export const Portal = ({ children, container }: PortalProps) => {
    const mounted = React.useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false
    );

    if (!mounted) return null;

    return createPortal(children, container || document.body);
};
