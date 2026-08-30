import { default as React } from '../../../../node_modules/react';
import { OverlayBase } from '../../_internal/OverlayBase';
type DialogContextType = {
    titleId: string;
    descriptionId: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    closeOnOverlayClick: boolean;
};
export declare const useDialog: () => DialogContextType;
export interface DialogProps {
    /**
     * Dialog parts (Dialog.Trigger, Dialog.Content, etc.).
     */
    children: React.ReactNode;
    /**
     * Controlled open state. Use together with onOpenChange.
     */
    open?: boolean;
    /**
     * Called with the next state when the dialog is opened or closed.
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * Initial open state for uncontrolled usage.
     * @default false
     */
    defaultOpen?: boolean;
    /**
     * Additional CSS class name.
     */
    className?: string;
    /**
     * Whether clicking the overlay closes the dialog.
     * @default true
     */
    closeOnOverlayClick?: boolean;
}
export interface DialogTriggerProps extends React.ComponentPropsWithoutRef<"button"> {
    asChild?: boolean;
}
export declare const DialogTrigger: {
    ({ children, className, onClick, asChild, ...props }: DialogTriggerProps): React.JSX.Element;
    displayName: string;
};
export interface DialogCloseProps extends React.ComponentPropsWithoutRef<"button"> {
    asChild?: boolean;
}
export declare const DialogClose: {
    ({ children, className, onClick, asChild, ...props }: DialogCloseProps): React.JSX.Element;
    displayName: string;
};
export interface DialogContentProps extends Partial<React.ComponentPropsWithoutRef<typeof OverlayBase>> {
    asChild?: boolean;
}
export declare const DialogContent: {
    ({ children, className, asChild, open: propsOpen, onOpenChange: propsOnOpenChange, ...props }: DialogContentProps): React.JSX.Element;
    displayName: string;
};
export declare const DialogHeader: {
    ({ children, className, ...props }: React.ComponentPropsWithoutRef<"div">): React.JSX.Element;
    displayName: string;
};
export interface DialogFooterProps extends React.ComponentPropsWithoutRef<"div"> {
    /**
     * The layout of the footer.
     * - "row" (default): Buttons are side-by-side.
     * - "column": Buttons are stacked (standard mobile behavior).
     */
    layout?: "row" | "column";
}
export declare const DialogFooter: {
    ({ children, className, layout, ...props }: DialogFooterProps): React.JSX.Element;
    displayName: string;
};
export declare const DialogTitle: {
    ({ children, className, ...props }: React.ComponentPropsWithoutRef<"h2">): React.JSX.Element;
    displayName: string;
};
export declare const DialogDescription: {
    ({ children, className, ...props }: React.ComponentPropsWithoutRef<"p">): React.JSX.Element;
    displayName: string;
};
export interface DialogComponent extends React.FC<DialogProps> {
    Trigger: typeof DialogTrigger;
    Content: typeof DialogContent;
    Close: typeof DialogClose;
    Header: typeof DialogHeader;
    Footer: typeof DialogFooter;
    Title: typeof DialogTitle;
    Description: typeof DialogDescription;
}
declare const DialogCompound: DialogComponent;
export { DialogCompound as Dialog };
export default DialogCompound;
