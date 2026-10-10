import { default as React } from '../../../../node_modules/react';
export interface BottomSheetProps {
    /**
     * Bottom sheet parts (BottomSheetTrigger, BottomSheetContent, etc.).
     */
    children: React.ReactNode;
    /**
     * Controlled open state. Use together with onOpenChange.
     */
    open?: boolean;
    /**
     * Initial open state for uncontrolled usage.
     * @default false
     */
    defaultOpen?: boolean;
    /**
     * Called with the next state when the sheet is opened or closed.
     */
    onOpenChange?: (open: boolean) => void;
}
export interface BottomSheetTriggerProps {
    children: React.ReactNode;
    asChild?: boolean;
    className?: string;
}
export declare const BottomSheetTrigger: ({ children, asChild, className, }: BottomSheetTriggerProps) => React.JSX.Element;
export interface BottomSheetCloseProps {
    children: React.ReactNode;
    asChild?: boolean;
    className?: string;
}
export declare const BottomSheetClose: ({ children, className, asChild, }: BottomSheetCloseProps) => React.JSX.Element;
export interface BottomSheetContentProps {
    children: React.ReactNode;
    className?: string;
}
export declare const BottomSheetContent: ({ children, className, }: BottomSheetContentProps) => React.JSX.Element;
export declare const BottomSheetHeader: ({ children, className, }: {
    children: React.ReactNode;
    className?: string;
}) => React.JSX.Element;
export declare const BottomSheetFooter: ({ children, className, }: {
    children: React.ReactNode;
    className?: string;
}) => React.JSX.Element;
export declare const BottomSheetTitle: ({ children, className, }: {
    children: React.ReactNode;
    className?: string;
}) => React.JSX.Element;
export declare const BottomSheetDescription: ({ children, className, }: {
    children: React.ReactNode;
    className?: string;
}) => React.JSX.Element;
export declare const BottomSheetBody: ({ children, className, }: {
    children: React.ReactNode;
    className?: string;
}) => React.JSX.Element;
export interface BottomSheetComponent extends React.FC<BottomSheetProps> {
    Trigger: typeof BottomSheetTrigger;
    Content: typeof BottomSheetContent;
    Header: typeof BottomSheetHeader;
    Footer: typeof BottomSheetFooter;
    Title: typeof BottomSheetTitle;
    Description: typeof BottomSheetDescription;
    Body: typeof BottomSheetBody;
    Close: typeof BottomSheetClose;
}
declare const BottomSheetCompound: BottomSheetComponent;
export { BottomSheetCompound as BottomSheet };
export default BottomSheetCompound;
