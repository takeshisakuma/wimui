import React, { createContext, useContext, useId, useState } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { OverlayBase } from "../../_internal/OverlayBase";
import styles from "./drawer.module.scss";

// --- Drawer Context ---
type DrawerContextType = {
  titleId: string;
  descriptionId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  side: "left" | "right" | "top" | "bottom";
  slideIn: boolean;
  slideOut: boolean;
};

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawer must be used within a Drawer provider");
  }
  return context;
};

// --- Drawer Root ---
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

const DrawerInner = ({
  children,
  open: controlledOpen,
  onOpenChange,
  defaultOpen = false,
  side = "right",
  slideIn = true,
  slideOut = true,
}: DrawerProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const handleOpenChange = (newOpen: boolean) => {
    if (!isControlled) {
      setUncontrolledOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  const generatedId = useId();
  const id = `wim-drawer-${generatedId}`;
  const titleId = `${id}-title`;
  const descriptionId = `${id}-description`;

  return (
    <DrawerContext.Provider value={{ titleId, descriptionId, open, onOpenChange: handleOpenChange, side, slideIn, slideOut }}>
      {children}
    </DrawerContext.Provider>
  );
};

// --- Drawer Trigger ---
export interface DrawerTriggerProps extends React.ComponentPropsWithoutRef<"button"> {
  asChild?: boolean;
}

export const DrawerTrigger = ({
  children,
  className,
  onClick,
  asChild = false,
  ...props
}: DrawerTriggerProps) => {
  const { onOpenChange } = useDrawer();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    onOpenChange(true);
  };

  const Component = asChild ? Slot : "button";

  return (
    <Component
      type="button"
      className={classNames(styles.trigger, className)}
      onClick={handleClick}
      {...props}
    >
      <Slottable>{children}</Slottable>
    </Component>
  );
};

// --- Drawer Close ---
export interface DrawerCloseProps extends React.ComponentPropsWithoutRef<"button"> {
  asChild?: boolean;
}

export const DrawerClose = ({
  children,
  className,
  onClick,
  asChild = false,
  ...props
}: DrawerCloseProps) => {
  const { onOpenChange } = useDrawer();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    onOpenChange(false);
  };

  const Component = asChild ? Slot : "button";

  return (
    <Component
      type="button"
      className={classNames(styles.closeButton, className)}
      onClick={handleClick}
      data-testid="drawer-close"
      {...props}
    >
      <Slottable>{children}</Slottable>
    </Component>
  );
};

// --- Drawer Content ---
export interface DrawerContentProps extends Partial<React.ComponentPropsWithoutRef<typeof OverlayBase>> {
  asChild?: boolean;
  side?: "left" | "right" | "top" | "bottom";
  slideIn?: boolean;
  slideOut?: boolean;
  showOverlay?: boolean;
}

export const DrawerContent = ({
  children,
  className,
  asChild = false,
  open: propsOpen,
  onOpenChange: propsOnOpenChange,
  side: sideProp,
  slideIn: slideInProp,
  slideOut: slideOutProp,
  showOverlay = true,
  ...props
}: DrawerContentProps) => {
  const { 
    open: contextOpen, 
    onOpenChange: contextOnOpenChange, 
    titleId, 
    descriptionId, 
    side: contextSide, 
    slideIn: contextSlideIn, 
    slideOut: contextSlideOut 
  } = useDrawer();

  const open = propsOpen !== undefined ? propsOpen : contextOpen;
  const onOpenChange = propsOnOpenChange !== undefined ? propsOnOpenChange : contextOnOpenChange;
  const side = sideProp ?? contextSide;
  const slideIn = slideInProp ?? contextSlideIn;
  const slideOut = slideOutProp ?? contextSlideOut;

  const Component = asChild ? Slot : "div";

  return (
    <OverlayBase
      {...props}
      open={open}
      onOpenChange={onOpenChange}
      overlayClassName={classNames(styles.overlay, !showOverlay && styles.hideOverlay)}
      contentClassName={classNames("wim-drawer", styles.content, styles[side], className)}
      // 引き出しは辺から滑って出る。既定の `scale` では引き出しなのに拡大縮小で出ていた。
      // `slideIn` / `slideOut` はどこにも繋がっておらず、実体の無いクラス名
      // （`.noSlideIn` / `.noSlideOut`）を付けていただけだった（T58）。
      // `Transition` に相ごとのプリセットを足したので、prop がそのまま意味を持つ。
      transitionProps={{
        preset: `slide-${side}` as const,
        enterPreset: slideIn ? undefined : "none",
        leavePreset: slideOut ? undefined : "none",
      }}
      role="dialog"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      data-side={side}
    >
      <Component data-testid="drawer-content" data-side={side}>
        {/* 余白は `.content` が持つ。この包みは構造だけで、スタイルは無い（T58） */}
        <div>
          <Slottable>{children}</Slottable>
        </div>
      </Component>
    </OverlayBase>
  );
};

// --- Drawer Sections ---
export const DrawerHeader = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={classNames(styles.header, className)} data-testid="drawer-header" {...props}>{children}</div>
);

/**
 * 本文。**`DrawerHeader` / `DrawerFooter` には padding があるのに、中身には無かった。**
 * そのため置いたものが縁に貼り付き、呼び出し側は `<div style={{ padding: "20px" }}>` へ
 * 逃げるしかなかった ── **Drawer 自身のストーリー 6 本がまさにそれをしていた**
 * （DESIGN.md が禁じる px 直書き。「足りなければコンポーネント側に prop / トークンを
 * 追加する」と書かれている当のケース）。7 枚目の合成画面のレビューで表に出た。
 */
export const DrawerBody = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={classNames(styles.body, className)} data-testid="drawer-body" {...props}>{children}</div>
);

export const DrawerFooter = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={classNames(styles.footer, className)} data-testid="drawer-footer" {...props}>{children}</div>
);

export const DrawerTitle = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  const { titleId } = useDrawer();
  return (
    <h2 id={titleId} className={classNames(styles.title, className)} data-testid="drawer-title" {...props}>
      {children}
    </h2>
  );
};

export const DrawerDescription = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  const { descriptionId } = useDrawer();
  return (
    <p
      id={descriptionId}
      className={classNames(styles.description, className)}
      data-testid="drawer-description"
      {...props}
    >
      {children}
    </p>
  );
};

export interface DrawerComponent extends React.FC<DrawerProps> {
  Trigger: typeof DrawerTrigger;
  Content: typeof DrawerContent;
  Header: typeof DrawerHeader;
  Footer: typeof DrawerFooter;
  Title: typeof DrawerTitle;
  Description: typeof DrawerDescription;
  Close: typeof DrawerClose;
}

const DrawerCompound: DrawerComponent = (props) => <DrawerInner {...props} />;
DrawerCompound.displayName = "Drawer";
DrawerCompound.Trigger = DrawerTrigger;
DrawerCompound.Content = DrawerContent;
DrawerCompound.Header = DrawerHeader;
DrawerCompound.Footer = DrawerFooter;
DrawerCompound.Title = DrawerTitle;
DrawerCompound.Description = DrawerDescription;
DrawerCompound.Close = DrawerClose;

export { DrawerCompound as Drawer };
export default DrawerCompound;
