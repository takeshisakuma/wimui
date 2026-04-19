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
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  side?: "left" | "right" | "top" | "bottom";
  slideIn?: boolean;
  slideOut?: boolean;
}

export const Drawer = ({
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
      contentClassName={classNames(
        styles.content,
        styles[side],
        !slideIn && styles.noSlideIn,
        !slideOut && styles.noSlideOut,
        className,
      )}
      role="dialog"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      data-side={side}
    >
      <Component data-testid="drawer-content" data-side={side}>
        <div className={styles.inner}>
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

export default Drawer;
