import React from "react";
import PropTypes from "prop-types";
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
    className = "",
    joined = false,
    priority,
}: ButtonGroupProps) => {
    const containerClass = [
        "wim-button-group",
        joined ? "wim-button-group--joined" : "",
        className,
    ]
        .filter(Boolean)
        .join(" ");

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
        <div className={containerClass} style={style}>
            {childrenWithProps}
        </div>
    );
};

ButtonGroup.propTypes = {
    children: PropTypes.node.isRequired,
    gap: PropTypes.string,
    className: PropTypes.string,
    joined: PropTypes.bool,
    priority: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
};
