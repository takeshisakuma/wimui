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
    /** 中身の要素へ委譲する。必須（理由は下のコメント）。 */
    asChild: true;
}
/**
 * Drawer を開く呼び出し口。
 *
 * `asChild` は必須。**素の `<button>` を返す道は塞いである** ── そちらには当てる
 * 装いが無く（空の規則を参照していた）、ブラウザ既定のボタン枠がそのまま出ていた。
 * 装いを与える案は採らなかった: 実利用はすべて `asChild` で、`Slot` が
 * `className` を相手の要素へ合流させるため、こちらの装いが相手のボタンと競合する。
 * 呼び出し側が `<Button>` なり自前の要素なりを渡す。（T121）
 */
export declare const DrawerTrigger: ({ children, className, onClick, asChild: _asChild, ...props }: DrawerTriggerProps) => React.JSX.Element;
export interface DrawerCloseProps extends React.ComponentPropsWithoutRef<"button"> {
    /** 中身の要素へ委譲する。必須（理由は下のコメント）。 */
    asChild: true;
}
/**
 * Drawer を閉じる要素。
 *
 * `asChild` は必須。**素の `<button>` を返す道は塞いである** ── そちらには当てる
 * 装いが無く（空の規則を参照していた）、ブラウザ既定のボタン枠がそのまま出ていた。
 * 装いを与える案は採らなかった: 実利用はすべて `asChild` で、`Slot` が
 * `className` を相手の要素へ合流させるため、こちらの装いが相手のボタンと競合する。
 * 呼び出し側が `<Button>` なり自前の要素なりを渡す。（T121）
 */
export declare const DrawerClose: ({ children, className, onClick, asChild: _asChild, ...props }: DrawerCloseProps) => React.JSX.Element;
export interface DrawerContentProps extends Partial<React.ComponentPropsWithoutRef<typeof OverlayBase>> {
    asChild?: boolean;
    side?: "left" | "right" | "top" | "bottom";
    slideIn?: boolean;
    slideOut?: boolean;
    showOverlay?: boolean;
}
export declare const DrawerContent: ({ children, className, asChild, open: propsOpen, onOpenChange: propsOnOpenChange, side: sideProp, slideIn: slideInProp, slideOut: slideOutProp, showOverlay, ...props }: DrawerContentProps) => React.JSX.Element;
export declare const DrawerHeader: ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element;
/**
 * 本文。**`DrawerHeader` / `DrawerFooter` には padding があるのに、中身には無かった。**
 * そのため置いたものが縁に貼り付き、呼び出し側は `<div style={{ padding: "20px" }}>` へ
 * 逃げるしかなかった ── **Drawer 自身のストーリー 6 本がまさにそれをしていた**
 * （DESIGN.md が禁じる px 直書き。「足りなければコンポーネント側に prop / トークンを
 * 追加する」と書かれている当のケース）。7 枚目の合成画面のレビューで表に出た。
 */
export declare const DrawerBody: ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element;
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
