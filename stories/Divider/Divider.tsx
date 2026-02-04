import React from "react";
import PropTypes from "prop-types";
import "./divider.scss";

export type DividerProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * 分割線の方向
     */
    orientation?: "horizontal" | "vertical";
    /**
     * 線の太さ (px)
     */
    thickness?: number;
};

/**
 * `Divider` はコンテンツを視覚的に区切るためのコンポーネントです。
 */
export const Divider = ({
    orientation = "horizontal",
    thickness = 1,
    className = "",
    style,
    ...props
}: DividerProps) => {
    const orientationClass = `wim-divider--${orientation}`;

    const customStyle: React.CSSProperties = {
        ...style,
        "--wim-divider-thickness": `${thickness}px`,
    } as React.CSSProperties;

    return (
        <div
            role="separator"
            aria-orientation={orientation}
            className={["wim-divider", orientationClass, className]
                .filter(Boolean)
                .join(" ")}
            style={customStyle}
            {...props}
        />
    );
};

Divider.propTypes = {
    orientation: PropTypes.oneOf(["horizontal", "vertical"]),
    thickness: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object,
};
