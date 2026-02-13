import { default as React } from '../../../node_modules/react';
export interface TransitionProps {
    /** Whether the component should be shown or hidden */
    show: boolean;
    /** The content to be transitioned */
    children: React.ReactNode;
    /** Transition classes applied when entering */
    enter?: string;
    /** Startup classes for the entry transition */
    enterFrom?: string;
    /** Ending classes for the entry transition */
    enterTo?: string;
    /** Transition classes applied when leaving */
    leave?: string;
    /** Startup classes for the leave transition */
    leaveFrom?: string;
    /** Ending classes for the leave transition */
    leaveTo?: string;
    /** Whether to unmount the children when hidden */
    unmount?: boolean;
    /** Additional class names for the wrapper */
    className?: string;
}
/**
 * A component that handles simple CSS transitions for its children.
 * It manages applying classes at the right moments (enter, enterFrom, enterTo, etc.).
 */
export declare const Transition: ({ show, children, enter, enterFrom, enterTo, leave, leaveFrom, leaveTo, unmount, className, }: TransitionProps) => import("react/jsx-runtime").JSX.Element | null;
