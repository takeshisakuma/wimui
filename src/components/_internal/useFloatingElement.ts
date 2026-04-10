import { useState } from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  Placement,
  ReferenceType,
  useHover,
  useFocus,
  safePolygon,
} from "@floating-ui/react";

export type FloatingTriggerType = "click" | "hover" | "none";

export interface FloatingElementOptions {
  placement?: Placement;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: FloatingTriggerType;
  offset?: number;
  role?: "dialog" | "menu" | "listbox" | "tooltip" | "label";
}

/**
 * useFloatingElement is a shared internal hook for "floating" components like Popover, 
 * Dropdown, Menu, and Tooltip.
 * 
 * Composition Contract:
 * - Centralizes Floating UI logic for automated position calculation.
 * - Handles standard interaction triggers (click, hover, focus).
 * - Manages accessibility attributes via `useRole`.
 * - Provides dismiss behavior (outside click, escape key).
 * 
 * @param options Configuration options for positioning and interaction.
 */
export const useFloatingElement = ({
  placement = "bottom-start",
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  trigger = "click",
  offset: offsetValue = 8,
  role: roleType = "dialog",
}: FloatingElementOptions = {}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isOpen = controlledOpen ?? uncontrolledOpen;

  const setOpen = (newOpen: boolean) => {
    if (controlledOpen === undefined) {
      setUncontrolledOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  const data = useFloating<ReferenceType>({
    open: isOpen,
    onOpenChange: setOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [offset(offsetValue), flip(), shift({ padding: 10 })],
  });

  const { context } = data;

  const click = useClick(context, { enabled: trigger === "click" });
  const hover = useHover(context, {
    enabled: trigger === "hover",
    handleClose: safePolygon(),
  });
  const focus = useFocus(context, { enabled: trigger === "hover" });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: roleType });

  const interactions = useInteractions([click, hover, focus, dismiss, role]);

  return {
    isOpen,
    setOpen,
    ...data,
    ...interactions,
    isPositioned: data.isPositioned,
  };
};
