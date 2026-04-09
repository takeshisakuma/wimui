import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useId,
} from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { OverlayBase } from "../../_internal/OverlayBase";
import styles from "./dialog.module.scss";

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
      className={classNames(styles.trigger, className)}
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
  ariaLabel?: string;
}

export const DialogClose = ({
  children,
  className,
  asChild,
  ariaLabel,
}: DialogCloseProps) => {
  const { t } = useTranslation("common");
  const resolvedAriaLabel = ariaLabel ?? t("a11y.close");
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
      className={classNames(styles.closeButton, className)}
      onClick={handleClick}
      aria-label={resolvedAriaLabel}
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
      overlayClassName={styles.overlay}
      contentClassName={classNames(styles.content, className)}
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
        className={styles.contentInner}
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
  <div className={classNames(styles.header, className)} data-testid="dialog-header">{children}</div>
);

export const DialogFooter = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={classNames(styles.footer, className)} data-testid="dialog-footer">{children}</div>
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
    <h2 id={titleId} className={classNames(styles.title, className)} data-testid="dialog-title">
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
      className={classNames(styles.description, className)}
      data-testid="dialog-description"
    >
      {children}
    </p>
  );
};

