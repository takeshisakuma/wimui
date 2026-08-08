import { default as React } from '../../../../node_modules/react';
import { OverlayBase } from '../../_internal/OverlayBase';
type DrawerContextType = {
    titleId: string;
    descriptionId: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    side: "left" | "right" | "top" | "bottom";
    slideIn: boolean;
    slideOut: boolean;
};
export declare const useDrawer: () => DrawerContextType;
export interface DrawerProps {
    /**
     * Drawer parts (DrawerTrigger, DrawerContent, etc.).
     */
    children: React.ReactNode;
    /**
     * Controlled open state. Use together with onOpenChange.
     */
    open?: boolean;
    /**
     * Called with the next state when the drawer is opened or closed.
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * Initial open state for uncontrolled usage.
     * @default false
     */
    defaultOpen?: boolean;
    /**
     * Edge of the screen the drawer slides in from.
     * @default "right"
     */
    side?: "left" | "right" | "top" | "bottom";
    /**
     * Whether to animate the drawer when opening.
     * @default true
     */
    slideIn?: boolean;
    /**
     * Whether to animate the drawer when closing.
     * @default true
     */
    slideOut?: boolean;
}
export interface DrawerTriggerProps extends React.ComponentPropsWithoutRef<"button"> {
    asChild?: boolean;
}
export declare const DrawerTrigger: ({ children, className, onClick, asChild, ...props }: DrawerTriggerProps) => React.JSX.Element;
export interface DrawerCloseProps extends React.ComponentPropsWithoutRef<"button"> {
    asChild?: boolean;
}
export declare const DrawerClose: ({ children, className, onClick, asChild, ...props }: DrawerCloseProps) => React.JSX.Element;
export interface DrawerContentProps extends Partial<React.ComponentPropsWithoutRef<typeof OverlayBase>> {
    asChild?: boolean;
    side?: "left" | "right" | "top" | "bottom";
    slideIn?: boolean;
    slideOut?: boolean;
    showOverlay?: boolean;
}
export declare const DrawerContent: ({ children, className, asChild, open: propsOpen, onOpenChange: propsOnOpenChange, side: sideProp, slideIn: slideInProp, slideOut: slideOutProp, showOverlay, ...props }: DrawerContentProps) => React.JSX.Element;
export declare const DrawerHeader: ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element;
export declare const DrawerFooter: ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element;
export declare const DrawerTitle: ({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => React.JSX.Element;
export declare const DrawerDescription: ({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => React.JSX.Element;
export interface DrawerComponent extends React.FC<DrawerProps> {
    Trigger: typeof DrawerTrigger;
    Content: typeof DrawerContent;
    Header: typeof DrawerHeader;
    Footer: typeof DrawerFooter;
    Title: typeof DrawerTitle;
    Description: typeof DrawerDescription;
    Close: typeof DrawerClose;
}
declare const DrawerCompound: DrawerComponent;
export { DrawerCompound as Drawer };
export default DrawerCompound;
