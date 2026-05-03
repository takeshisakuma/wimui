import React, { useState } from "react";
import classNames from "classnames";
import { Slot } from "@radix-ui/react-slot";
import localStyles from "./speed-dial.module.scss";
import { FloatButton } from "../../form/FloatButton/FloatButton";
import { IconName } from "../../../icon";

export interface SpeedDialAction {
  icon: IconName;
  label: string;
  onClick?: () => void;
  className?: string;
  intent?: "default" | "destructive" | "positive";
}

export type SpeedDialProps = React.ComponentPropsWithoutRef<"div"> & {
  /** Actions to display when SpeedDial is open */
  actions: SpeedDialAction[];
  /** Icon name for the main button when closed */
  icon?: IconName;
  /** Icon name for the main button when open */
  activeIcon?: IconName;
  /** Direction in which actions expand */
  direction?: "up" | "down" | "left" | "right";
  /** Trigger mode to open the SpeedDial */
  trigger?: "hover" | "click";
  /** Controlled open state */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** If true, the component will be rendered as its child */
  asChild?: boolean;
};

/**
 * SpeedDial component displays a floating action button that expands to show multiple actions.
 * 
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const SpeedDial = React.forwardRef<HTMLDivElement, SpeedDialProps>(
  (
    {
      actions,
      icon = "PlusIcon",
      activeIcon = "CloseIcon",
      direction = "up",
      trigger = "hover",
      open: controlledOpen,
      onOpenChange,
      asChild = false,
      className,
      ...props
    },
    ref
  ) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
    const open = controlledOpen ?? uncontrolledOpen;

    const handleOpenChange = (nextOpen: boolean) => {
      setUncontrolledOpen(nextOpen);
      onOpenChange?.(nextOpen);
    };

    const handleMouseEnter = () => {
      if (trigger === "hover") handleOpenChange(true);
    };

    const handleMouseLeave = () => {
      if (trigger === "hover") handleOpenChange(false);
    };

    const handleClick = () => {
      if (trigger === "click") handleOpenChange(!open);
    };

    const Root = asChild ? Slot : "div";

    return (
      <Root
        ref={ref}
        className={classNames(
          localStyles.root,
          localStyles[direction],
          open && localStyles.open,
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <div className={localStyles.actions}>
          {actions.map((action, index) => (
            <div
              key={index}
              className={localStyles.actionWrapper}
              style={{
                transitionDelay: open ? `${index * 50}ms` : "0ms",
              }}
            >
              <FloatButton
                iconName={action.icon}
                label={action.label}
                size="sm"
                className={classNames(localStyles.action, action.className)}
                onClick={() => {
                  action.onClick?.();
                  if (trigger === "click") handleOpenChange(false);
                }}
                position="static"
              />
            </div>
          ))}
        </div>
        <FloatButton
          iconName={open ? activeIcon : icon}
          variant="primary"
          onClick={handleClick}
          className={localStyles.trigger}
          position="static"
          aria-expanded={open}
          aria-haspopup="true"
        />
      </Root>
    );
  }
);

SpeedDial.displayName = "SpeedDial";
