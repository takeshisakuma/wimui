import { default as React } from '../../../node_modules/react';
export interface PortalProps {
    /** The content to be rendered in the portal */
    children: React.ReactNode;
    /** The container where the portal will be rendered. Defaults to document.body */
    container?: HTMLElement | null;
}
/**
 * A component that renders its children into a new DOM node, outside of the
 * parent component's DOM hierarchy.
 */
export declare const Portal: ({ children, container }: PortalProps) => React.ReactPortal | null;
