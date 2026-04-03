import React, { ReactNode, useEffect } from "react";
import { Portal } from "../overlay/Portal/Portal";
import { Transition } from "../layout/Transition/Transition";
import { FocusTrap } from "../overlay/FocusTrap/FocusTrap";
import classNames from "classnames";

export type OverlayBaseProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
  overlayClassName?: string;
  contentClassName?: string;
  transitionProps?: Partial<React.ComponentProps<typeof Transition>>;
  overlayTransitionProps?: Partial<React.ComponentProps<typeof Transition>>;
  role?: string;
  ariaModal?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
};

export const OverlayBase = ({
  open,
  onOpenChange,
  children,
  overlayClassName,
  contentClassName,
  transitionProps,
  overlayTransitionProps,
  role = "dialog",
  ariaModal = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
}: OverlayBaseProps) => {
  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open && closeOnEscape) {
        e.preventDefault();
        e.stopPropagation();
        onOpenChange(false);
      }
    };

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onOpenChange, closeOnEscape]);

  // Lock body scroll
  useEffect(() => {
    if (open) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [open]);

  const defaultOverlayTransition = {
    enter: "fade-enter",
    enterFrom: "fade-enter-from",
    enterTo: "fade-enter-to",
    leave: "fade-leave",
    leaveFrom: "fade-leave-from",
    leaveTo: "fade-leave-to",
  };

  return (
    <Portal>
      <Transition
        show={open}
        className={classNames("wim-overlay", overlayClassName)}
        onClick={(e) => {
          if (closeOnOverlayClick && e.target === e.currentTarget) {
            onOpenChange(false);
          }
        }}
        {...defaultOverlayTransition}
        {...overlayTransitionProps}
      >
        <Transition
          show={open}
          className={contentClassName}
          role={role}
          aria-modal={ariaModal}
          onClick={(e) => e.stopPropagation()}
          {...transitionProps}
        >
          <FocusTrap active={open}>
            {children}
          </FocusTrap>
        </Transition>
      </Transition>
    </Portal>
  );
};

