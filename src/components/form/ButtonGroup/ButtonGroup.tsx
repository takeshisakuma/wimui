import React from "react";
import classNames from "classnames";
import "./button-group.scss";

type ButtonGroupProps = {
  children: React.ReactNode;
  gap?: string;
  className?: string;
  joined?: boolean;
  variant?: "filled" | "outlined" | "ghost";
};

export const ButtonGroup = ({
  children,
  gap = "8px",
  className,
  joined = false,
  variant,
}: ButtonGroupProps) => {
  const style = joined ? {} : { gap };

  const childrenWithProps = variant
    ? React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<{ variant?: "filled" | "outlined" | "ghost" }>, {
            variant,
          });
        }
        return child;
      })
    : children;

  return (
    <div
      className={classNames(
        "wim-button-group",
        joined && "wim-button-group--joined",
        className,
      )}
      style={style}
    >
      {childrenWithProps}
    </div>
  );
};
