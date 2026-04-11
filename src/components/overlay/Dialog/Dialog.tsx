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
}

export const Dialog = ({
  children,
  open: controlledOpen,
  onOpenChange,
  defaultOpen = false,
  className,
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
    <DialogContext.Provider value={{ titleId, descriptionId, open, onOpenChange: handleOpenChange }}>
      <OverlayBase
        open={open}
        onOpenChange={handleOpenChange}
        className={classNames(styles.root, className)}
        role="dialog"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
      >
        {children}
      </OverlayBase>
    </DialogContext.Provider>
  );
};

Dialog.displayName = "Dialog";

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
export const DialogContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames(styles.content, className)}>
      {children}
    </div>
  );
};

DialogContent.displayName = "Dialog.Content";

// --- Dialog Sections ---
export const DialogHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={classNames(styles.header, className)} data-testid="dialog-header">{children}</div>
);

DialogHeader.displayName = "Dialog.Header";

export const DialogFooter = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={classNames(styles.footer, className)} data-testid="dialog-footer">{children}</div>
);

DialogFooter.displayName = "Dialog.Footer";

export const DialogTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { titleId } = useDialog();
  return (
    <h2 id={titleId} className={classNames(styles.title, className)} data-testid="dialog-title">
      {children}
    </h2>
  );
};

DialogTitle.displayName = "Dialog.Title";

export const DialogDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { descriptionId } = useDialog();
  return (
    <p
      id={descriptionId}
      className={classNames(styles.description, className)}
      data-testid="dialog-description"
    >
      {children}
    </p>
  );
};

DialogDescription.displayName = "Dialog.Description";

// --- Compound Export ---
export const DialogRoot = Dialog as typeof Dialog & {
  Trigger: typeof DialogTrigger;
  Content: typeof DialogContent;
  Close: typeof DialogClose;
  Header: typeof DialogHeader;
  Footer: typeof DialogFooter;
  Title: typeof DialogTitle;
  Description: typeof DialogDescription;
};

DialogRoot.Trigger = DialogTrigger;
DialogRoot.Content = DialogContent;
DialogRoot.Close = DialogClose;
DialogRoot.Header = DialogHeader;
DialogRoot.Footer = DialogFooter;
DialogRoot.Title = DialogTitle;
DialogRoot.Description = DialogDescription;

export default DialogRoot;
