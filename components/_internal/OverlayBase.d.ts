import { default as React, ReactNode } from '../../../node_modules/react';
import { Transition } from '../misc/Transition/Transition';
export type OverlayBaseProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: ReactNode;
    overlayClassName?: string;
    contentClassName?: string;
    transitionProps?: Partial<React.ComponentProps<typeof Transition>>;
    overlayTransitionProps?: Partial<React.ComponentProps<typeof Transition>>;
    role?: string;
    ariaModal?: boolean;
    closeOnOverlayClick?: boolean;
    closeOnEscape?: boolean;
};
export declare const OverlayBase: ({ open, onOpenChange, children, overlayClassName, contentClassName, transitionProps, overlayTransitionProps, role, ariaModal, closeOnOverlayClick, closeOnEscape, }: OverlayBaseProps) => import("react/jsx-runtime").JSX.Element;
