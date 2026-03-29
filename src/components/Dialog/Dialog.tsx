import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useId,
} from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { OverlayBase } from "../_internal/OverlayBase";
import "./dialog.scss";

// --- Dialog Context ---
type DialogContextType = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  titleId: string;
  descriptionId: string;
};

const DialogContext = createContext<DialogContextType | undefined>(undefined);

const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a Dialog provider");
  }
  return context;
};

// --- Dialog Root ---
export interface DialogProps {
  children: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const Dialog = ({
  children,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
}: DialogProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;
  const titleId = useId();
  const descriptionId = useId();

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
    <DialogContext.Provider
      value={{ open, onOpenChange: handleOpenChange, titleId, descriptionId }}
    >
      {children}
    </DialogContext.Provider>
  );
};

// --- Dialog Trigger ---
export interface DialogTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export const DialogTrigger = ({
  children,
  asChild,
  className,
}: DialogTriggerProps) => {
  const { onOpenChange } = useDialog();

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
      className={classNames("wim-dialog-trigger", className)}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

// --- Dialog Close ---
export interface DialogCloseProps {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export const DialogClose = ({
  children,
  className,
  asChild,
}: DialogCloseProps) => {
  const { t } = useTranslation();

  const { onOpenChange } = useDialog();

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
      className={classNames("wim-dialog-close-button", className)}
      onClick={handleClick}
      aria-label={t("a11y.close_dialog")}
    >
      {children}
    </button>
  );
};

// --- Dialog Content ---
export interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Called when the dialog is closed via Escape key or overlay click.
   */
  onCloseAutoFocus?: (e: Event) => void;
}

export const DialogContent = ({ children, className }: DialogContentProps) => {
  const { open, onOpenChange, titleId, descriptionId } = useDialog();

  return (
    <OverlayBase
      open={open}
      onOpenChange={onOpenChange}
      overlayClassName="wim-dialog-overlay"
      contentClassName={classNames("wim-dialog-content", className)}
      role="dialog"
      transitionProps={{
        enter: "scale-enter",
        enterFrom: "scale-enter-from",
        enterTo: "scale-enter-to",
        leave: "scale-leave",
        leaveFrom: "scale-leave-from",
        leaveTo: "scale-leave-to",
      }}
    >
      <div
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="wim-dialog-content-inner"
      >
        {children}
      </div>
    </OverlayBase>
  );
};


// --- Dialog Sections ---
export const DialogHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={classNames("wim-dialog-header", className)}>{children}</div>
);

export const DialogFooter = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={classNames("wim-dialog-footer", className)}>{children}</div>
);

export const DialogTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { titleId } = useDialog();
  return (
    <h2 id={titleId} className={classNames("wim-dialog-title", className)}>
      {children}
    </h2>
  );
};

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
      className={classNames("wim-dialog-description", className)}
    >
      {children}
    </p>
  );
};
