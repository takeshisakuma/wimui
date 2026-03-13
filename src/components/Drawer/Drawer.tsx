import React, {
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";
import classNames from "classnames";
import "./drawer.scss";

// --- Drawer Context ---
type DrawerSide = "top" | "right" | "bottom" | "left";

type DrawerContextType = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  side: DrawerSide;
  slideIn: boolean;
  slideOut: boolean;
};

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

const useDrawer = () => {
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
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: DrawerSide;
  slideIn?: boolean;
  slideOut?: boolean;
}

export const Drawer = ({
  children,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  side = "right",
  slideIn = true,
  slideOut = true,
}: DrawerProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const handleOpenChange = useCallback(
    (newOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    },
    [isControlled, onOpenChange],
  );

  return (
    <DrawerContext.Provider
      value={{ open, onOpenChange: handleOpenChange, side, slideIn, slideOut }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

// --- Drawer Trigger ---
export interface DrawerTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export const DrawerTrigger = ({
  children,
  asChild,
  className,
}: DrawerTriggerProps) => {
  const { onOpenChange } = useDrawer();

  const handleClick = () => {
    onOpenChange(true);
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children as React.ReactElement<{
        onClick?: React.MouseEventHandler;
        className?: string;
      }>,
      {
        onClick: (e: React.MouseEvent) => {
          const child = children as React.ReactElement<{
            onClick?: React.MouseEventHandler;
          }>;
          child.props.onClick?.(e);
          handleClick();
        },
        className: classNames(
          className,
          (children as React.ReactElement<{ className?: string }>).props
            .className,
        ),
      },
    );
  }

  return (
    <button
      className={classNames("wim-drawer-trigger", className)}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

// --- Drawer Close ---
export interface DrawerCloseProps {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export const DrawerClose = ({
  children,
  className,
  asChild,
}: DrawerCloseProps) => {
  const { onOpenChange } = useDrawer();

  const handleClick = () => {
    onOpenChange(false);
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children as React.ReactElement<{
        onClick?: React.MouseEventHandler;
        className?: string;
      }>,
      {
        onClick: (e: React.MouseEvent) => {
          const child = children as React.ReactElement<{
            onClick?: React.MouseEventHandler;
          }>;
          child.props.onClick?.(e);
          handleClick();
        },
        className: classNames(
          className,
          (children as React.ReactElement<{ className?: string }>).props
            .className,
        ),
      },
    );
  }

  return (
    <button
      type="button"
      className={classNames("wim-drawer-close-button", className)}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

// --- Drawer Content ---
import { OverlayBase } from "../_internal/OverlayBase";
import "./drawer.scss";

// --- Drawer Context ---
// ... (rest of context and root remains)
// Skipping to DrawerContent refactor

// --- Drawer Content ---
export interface DrawerContentProps {
  children: React.ReactNode;
  className?: string;
}

export const DrawerContent = ({ children, className }: DrawerContentProps) => {
  const { open, onOpenChange, side, slideIn, slideOut } = useDrawer();

  const slideTransition = {
    appear: slideIn,
    enter: slideIn ? `slide-${side}-enter` : "",
    enterFrom: slideIn ? `slide-${side}-enter-from` : "",
    enterTo: slideIn ? `slide-${side}-enter-to` : "",
    leave: slideOut ? `slide-${side}-leave` : "",
    leaveFrom: slideOut ? `slide-${side}-leave-from` : "",
    leaveTo: slideOut ? `slide-${side}-leave-to` : "",
  };

  return (
    <OverlayBase
      open={open}
      onOpenChange={onOpenChange}
      overlayClassName="wim-drawer-overlay"
      contentClassName={classNames(
        "wim-drawer-content",
        `wim-drawer-content--${side}`,
        className,
      )}
      transitionProps={slideTransition}
    >
      {children}
    </OverlayBase>
  );
};


// --- Drawer Sections ---
export const DrawerHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={classNames("wim-drawer-header", className)}>{children}</div>
);

export const DrawerFooter = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={classNames("wim-drawer-footer", className)}>{children}</div>
);

export const DrawerTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <h2 className={classNames("wim-drawer-title", className)}>{children}</h2>;

export const DrawerDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p className={classNames("wim-drawer-description", className)}>{children}</p>
);
