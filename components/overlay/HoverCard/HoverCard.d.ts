import { default as React, ReactNode } from '../../../../node_modules/react';
export type HoverCardProps = {
    /**
     * Hover card parts (HoverCardTrigger and HoverCardContent).
     */
    children: ReactNode;
    /**
     * Additional CSS class name for the container.
     */
    className?: string;
    /**
     * Delay before showing the hover card in ms.
     */
    openDelay?: number;
    /**
     * Delay before hiding the hover card in ms.
     */
    closeDelay?: number;
    /**
     * If provided, controls the open state.
     */
    open?: boolean;
    /**
     * Callback when open state changes.
     */
    onOpenChange?: (open: boolean) => void;
};
export type HoverCardTriggerProps = {
    children: ReactNode;
    className?: string;
    asChild?: boolean;
};
export declare const HoverCardTrigger: ({ children, className, asChild, }: HoverCardTriggerProps) => React.JSX.Element;
export type HoverCardContentProps = {
    children: ReactNode;
    className?: string;
    align?: "left" | "right" | "center";
    side?: "top" | "bottom" | "left" | "right";
    sideOffset?: number;
};
export declare const HoverCardContent: ({ children, className, align, side, sideOffset: _sideOffset, ...props }: HoverCardContentProps & React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element | null;
export interface HoverCardComponent extends React.FC<HoverCardProps> {
    Trigger: typeof HoverCardTrigger;
    Content: typeof HoverCardContent;
}
declare const HoverCardCompound: HoverCardComponent;
export { HoverCardCompound as HoverCard };
export default HoverCardCompound;
