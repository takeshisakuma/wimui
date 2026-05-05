import React, { createContext, useContext, useId, useState } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { OverlayBase } from "../../_internal/OverlayBase";
import styles from "./dialog.module.scss";

// --- Dialog Context ---
type DialogContextType = {
  titleId: string;
  descriptionId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  closeOnOverlayClick: boolean;
};

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("Dialog sub-components must be used within Dialog");
  }
  return context;
};

// --- Dialog Root ---
export interface DialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  className?: string;
  closeOnOverlayClick?: boolean;
}

const DialogInner = ({
  children,
  open: controlledOpen,
  onOpenChange,
  defaultOpen = false,
  closeOnOverlayClick = true,
}: DialogProps) => {
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
  const id = `wim-dialog-${generatedId}`;
  const titleId = `${id}-title`;
  const descriptionId = `${id}-description`;

  return (
    <DialogContext.Provider value={{ titleId, descriptionId, open, onOpenChange: handleOpenChange, closeOnOverlayClick }}>
      {children}
    </DialogContext.Provider>
  );
};

DialogInner.displayName = "Dialog";

// --- Dialog Trigger ---
export interface DialogTriggerProps extends React.ComponentPropsWithoutRef<"button"> {
  asChild?: boolean;
}

export const DialogTrigger = ({
  children,
  className,
  onClick,
  asChild = false,
  ...props
}: DialogTriggerProps) => {
  const { onOpenChange } = useDialog();

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

DialogTrigger.displayName = "Dialog.Trigger";

// --- Dialog Close ---
export interface DialogCloseProps extends React.ComponentPropsWithoutRef<"button"> {
  asChild?: boolean;
}

export const DialogClose = ({
  children,
  className,
  onClick,
  asChild = false,
  ...props
}: DialogCloseProps) => {
  const { onOpenChange } = useDialog();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    onOpenChange(false);
  };

  const Component = asChild ? Slot : "button";

  return (
    <Component
      type="button"
      className={classNames(styles.close, className)}
      onClick={handleClick}
      {...props}
    >
      <Slottable>{children}</Slottable>
    </Component>
  );
};

DialogClose.displayName = "Dialog.Close";

// --- Dialog Content ---
// We make open and onOpenChange optional here because they are typically provided by Dialog context
export interface DialogContentProps extends Partial<React.ComponentPropsWithoutRef<typeof OverlayBase>> {
  asChild?: boolean;
}

export const DialogContent = ({
  children,
  className,
  asChild = false,
  open: propsOpen,
  onOpenChange: propsOnOpenChange,
  ...props
}: DialogContentProps) => {
  const { open: contextOpen, onOpenChange: contextOnOpenChange, titleId, descriptionId, closeOnOverlayClick } = useDialog();

  const open = propsOpen !== undefined ? propsOpen : contextOpen;
  const onOpenChange = propsOnOpenChange !== undefined ? propsOnOpenChange : contextOnOpenChange;

  const Component = asChild ? Slot : "div";

  return (
    <OverlayBase
      {...props}
      open={open}
      onOpenChange={onOpenChange}
      closeOnOverlayClick={closeOnOverlayClick}
      overlayClassName={styles.overlay}
      role="dialog"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      <Component className={classNames(styles.content, className)}>
        <Slottable>{children}</Slottable>
      </Component>
    </OverlayBase>
  );
};

DialogContent.displayName = "Dialog.Content";

// --- Dialog Sections ---
export const DialogHeader = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => (
  <div className={classNames(styles.header, className)} data-testid="dialog-header" {...props}>
    {children}
  </div>
);

DialogHeader.displayName = "Dialog.Header";

export interface DialogFooterProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The layout of the footer.
   * - "row" (default): Buttons are side-by-side.
   * - "column": Buttons are stacked (standard mobile behavior).
   */
  layout?: "row" | "column";
}

export const DialogFooter = ({
  children,
  className,
  layout,
  ...props
}: DialogFooterProps) => (
  <div
    className={classNames(styles.footer, className)}
    data-layout={layout}
    data-testid="dialog-footer"
    {...props}
  >
    {children}
  </div>
);

DialogFooter.displayName = "Dialog.Footer";

export const DialogTitle = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h2">) => {
  const { titleId } = useDialog();
  return (
    <h2 id={titleId} className={classNames(styles.title, className)} data-testid="dialog-title" {...props}>
      {children}
    </h2>
  );
};

DialogTitle.displayName = "Dialog.Title";

export const DialogDescription = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) => {
  const { descriptionId } = useDialog();
  return (
    <p
      id={descriptionId}
      className={classNames(styles.description, className)}
      data-testid="dialog-description"
      {...props}
    >
      {children}
    </p>
  );
};

DialogDescription.displayName = "Dialog.Description";

// --- Compound Components ---
export const Dialog = Object.assign(DialogInner, {
  Trigger: DialogTrigger,
  Content: DialogContent,
  Close: DialogClose,
  Header: DialogHeader,
  Footer: DialogFooter,
  Title: DialogTitle,
  Description: DialogDescription,
}) as typeof DialogInner & {
  Trigger: typeof DialogTrigger;
  Content: typeof DialogContent;
  Close: typeof DialogClose;
  Header: typeof DialogHeader;
  Footer: typeof DialogFooter;
  Title: typeof DialogTitle;
  Description: typeof DialogDescription;
};

export default Dialog;
