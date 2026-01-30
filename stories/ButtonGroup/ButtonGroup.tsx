import React from "react";
import PropTypes from "prop-types";
import "./button-group.scss";

type ButtonGroupProps = {
    children: React.ReactNode;
    gap?: string;
    className?: string;
    joined?: boolean;
};

export const ButtonGroup = ({
    children,
    gap = "8px",
    className = "",
    joined = false,
}: ButtonGroupProps) => {
    const containerClass = [
        "wim-button-group",
        joined ? "wim-button-group--joined" : "",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    const style = joined ? {} : { gap };

    return (
        <div className={containerClass} style={style}>
            {children}
        </div>
    );
};

ButtonGroup.propTypes = {
    children: PropTypes.node.isRequired,
    gap: PropTypes.string,
    className: PropTypes.string,
    joined: PropTypes.bool,
};
