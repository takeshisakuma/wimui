import React, { useRef } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { useMergedRef } from "../../../hooks/useMergedRef";
import "./radio.scss";

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  asChild?: boolean;
  children?: React.ReactNode;
}

/**
 * Radio component for single selection from a list.
 */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ asChild = false, children, className, disabled, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergedRef(inputRef, ref);

    const Component = asChild ? Slot : "label";

    return (
      <Component
        className={classNames("wim-radio-wrapper", disabled && "wim-radio--disabled", className)}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      >
        <input type="radio" className="wim-radio-input" disabled={disabled} ref={mergedRef} />
        <Slottable>{children}</Slottable>
      </Component>
    );
  },
);

Radio.displayName = "Radio";
