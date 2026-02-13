import React from "react";
import classNames from "classnames";
import "./button-group.scss";

type ButtonGroupProps = {
    children: React.ReactNode;
    gap?: string;
    className?: string;
    joined?: boolean;
    priority?: "primary" | "secondary" | "tertiary";
};

export const ButtonGroup = ({
    children,
    gap = "8px",
    className,
    joined = false,
    priority,
}: ButtonGroupProps) => {


    const style = joined ? {} : { gap };

    const childrenWithProps = priority
        ? React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child as React.ReactElement<any>, {
                    priority,
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


