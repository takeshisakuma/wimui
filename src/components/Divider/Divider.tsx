import React from "react";
import classNames from "classnames";
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
    className,
    style,
    ...props
}: DividerProps) => {

    const customStyle: React.CSSProperties = {
        ...style,
        "--wim-divider-thickness": `${thickness}px`,
    } as React.CSSProperties;

    return (
        <div
            role="separator"
            aria-orientation={orientation}
            className={classNames("wim-divider", `wim-divider--${orientation}`, className)}
            style={customStyle}
            {...props}
        />
    );
};


