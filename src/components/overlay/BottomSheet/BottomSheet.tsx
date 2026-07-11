import React, {
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";
import classNames from "classnames";
import { OverlayBase } from "../../_internal/OverlayBase";
import styles from "./bottom-sheet.module.scss";

// --- BottomSheet Context ---
type BottomSheetContextType = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const BottomSheetContext = createContext<BottomSheetContextType | undefined>(
  undefined,
);

const useBottomSheet = () => {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error(
      "useBottomSheet must be used within a BottomSheet provider",
    );
  }
  return context;
};

// --- BottomSheet Root ---
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

const BottomSheetInner = ({
  children,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
}: BottomSheetProps) => {
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
    <BottomSheetContext.Provider
      value={{ open, onOpenChange: handleOpenChange }}
    >
      {children}
    </BottomSheetContext.Provider>
  );
};

// --- BottomSheet Trigger ---
export interface BottomSheetTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export const BottomSheetTrigger = ({
  children,
  asChild,
  className,
}: BottomSheetTriggerProps) => {
  const { onOpenChange } = useBottomSheet();

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
      className={classNames(styles.trigger, className)}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

// --- BottomSheet Close ---
export interface BottomSheetCloseProps {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export const BottomSheetClose = ({
  children,
  className,
  asChild,
}: BottomSheetCloseProps) => {
  const { onOpenChange } = useBottomSheet();

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
      className={classNames(styles.close, className)}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

// --- BottomSheet Content ---
export interface BottomSheetContentProps {
  children: React.ReactNode;
  className?: string;
}

export const BottomSheetContent = ({
  children,
  className,
}: BottomSheetContentProps) => {
  const { open, onOpenChange } = useBottomSheet();

  const slideTransition = {
    enter: "slide-bottom-enter",
    enterFrom: "slide-bottom-enter-from",
    enterTo: "slide-bottom-enter-to",
    leave: "slide-bottom-leave",
    leaveFrom: "slide-bottom-leave-from",
    leaveTo: "slide-bottom-leave-to",
  };

  return (
    <OverlayBase
      open={open}
      onOpenChange={onOpenChange}
      overlayClassName={styles.overlay}
      contentClassName={classNames("wim-bottom-sheet", styles.content, className)}
      transitionProps={slideTransition}
    >
      <div className={styles.handle} />
      {children}
    </OverlayBase>
  );
};


// --- BottomSheet Sections ---
export const BottomSheetHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={classNames(styles.header, className)} data-testid="bottom-sheet-header">
    {children}
  </div>
);

export const BottomSheetFooter = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={classNames(styles.footer, className)} data-testid="bottom-sheet-footer">
    {children}
  </div>
);

export const BottomSheetTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2 className={classNames(styles.title, className)} data-testid="bottom-sheet-title">
    {children}
  </h2>
);

export const BottomSheetDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p className={classNames(styles.description, className)} data-testid="bottom-sheet-description">
    {children}
  </p>
);

export const BottomSheetBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={classNames(styles.body, className)} data-testid="bottom-sheet-body">
    {children}
  </div>
);
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

const BottomSheetCompound: BottomSheetComponent = (props) => <BottomSheetInner {...props} />;
BottomSheetCompound.displayName = "BottomSheet";
BottomSheetCompound.Trigger = BottomSheetTrigger;
BottomSheetCompound.Content = BottomSheetContent;
BottomSheetCompound.Header = BottomSheetHeader;
BottomSheetCompound.Footer = BottomSheetFooter;
BottomSheetCompound.Title = BottomSheetTitle;
BottomSheetCompound.Description = BottomSheetDescription;
BottomSheetCompound.Body = BottomSheetBody;
BottomSheetCompound.Close = BottomSheetClose;

export { BottomSheetCompound as BottomSheet };
export default BottomSheetCompound;
