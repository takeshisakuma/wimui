import React, { ReactNode, useEffect } from "react";
import { Portal } from "../overlay/Portal/Portal";
import { Transition } from "../layout/Transition/Transition";
import { FocusTrap } from "../overlay/FocusTrap/FocusTrap";
import classNames from "classnames";
import styles from "./overlay-base.module.scss";

/**
 * Props for the OverlayBase component.
 * Extends the standard HTML div attributes.
 */
export type OverlayBaseProps = {
  /**
   * Whether the overlay is currently visible.
   */
  open: boolean;
  /**
   * Callback fired when the overlay state changes (e.g., closing via Escape key or backdrop click).
   */
  onOpenChange: (open: boolean) => void;
  /**
   * Content to be rendered inside the overlay. 
   * Usually wrapped in a focus trap.
   */
  children: ReactNode;
  /**
   * Custom class name for the root backdrop element.
   */
  overlayClassName?: string;
  /**
   * Custom class name for the content wrapper element.
   */
  contentClassName?: string;
  /**
   * Configuration for the content transition.
   * @see Transition
   */
  transitionProps?: Partial<React.ComponentProps<typeof Transition>>;
  /**
   * Configuration for the backdrop transition.
   * @see Transition
   */
  overlayTransitionProps?: Partial<React.ComponentProps<typeof Transition>>;
  /**
   * ARIA role for the content wrapper.
   * @default "dialog"
   */
  role?: string;
  /**
   * Whether the overlay should be treated as a modal for assistive technologies.
   * @default true
   */
  ariaModal?: boolean;
  /**
   * Whether to trigger onOpenChange(false) when clicking the backdrop.
   * @default true
   */
  closeOnOverlayClick?: boolean;
  /**
   * Whether to trigger onOpenChange(false) when pressing the Escape key.
   * @default true
   */
  closeOnEscape?: boolean;
} & React.ComponentPropsWithoutRef<"div">;

/**
 * OverlayBase is a foundational internal component used to build high-level overlays 
 * like Dialog, Drawer, and Modal.
 * 
 * Composition Contract:
 * - Renders children within a `Portal` to ensure they are at the top level of the DOM.
 * - Manages focus trapping via `FocusTrap`.
 * - Manages body scroll locking when `open` is true.
 * - Provides two layers of transitions: one for the background overlay and one for the content.
 * 
 * This component is not intended for direct use in applications.
 */
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
  ...rest
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

  return (
    <Portal>
      <Transition
        show={open}
        className={classNames(styles.root, overlayClassName)}
        data-testid="overlay"
        onClick={(e) => {
          if (closeOnOverlayClick && e.target === e.currentTarget) {
            onOpenChange(false);
          }
        }}
        preset="fade"
        {...overlayTransitionProps}
      >
        <Transition
          show={open}
          className={contentClassName}
          data-testid="overlay-content"
          role={role}
          aria-modal={ariaModal}
          onClick={(e) => e.stopPropagation()}
          preset="scale"
          // **`appear` が要る。** この Transition はオーバーレイ Transition の子なので、
          // 閉じている間はマウントされておらず、開いた瞬間に `show=true` の状態で
          // 新規マウントされる。`Transition` の初期状態は `show && appear ? "entering" : "idle"`
          // なので、`appear` が無いと入りのアニメーションが一度も走らない。
          // 外側のオーバーレイは閉じている間も残るため `show` の false→true を見られて動く。
          // その差で、**中身だけ preset が効いていなかった**（T58 の Drawer 調査で判明）。
          appear
          {...transitionProps}
          {...rest}
        >

          <FocusTrap active={open}>
            {children}
          </FocusTrap>
        </Transition>
      </Transition>
    </Portal>
  );
};



