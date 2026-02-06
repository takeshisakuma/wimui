import React from "react";
import PropTypes from "prop-types";
import "./legend.scss";

type LegendProps = React.ComponentPropsWithoutRef<"legend"> & {
    children: React.ReactNode;
    className?: string;
};

/**
 * Fieldset のタイトルを表示するコンポーネント。
 */
export const Legend = ({ children, className = "", ...props }: LegendProps) => {
    return (
        <legend
            className={["wim-legend", className].filter(Boolean).join(" ")}
            {...props}
        >
            {children}
        </legend>
    );
};

Legend.propTypes = {
    /**
     * 表示するテキストや要素。
     */
    children: PropTypes.node.isRequired,
    /**
     * 追加のクラス名。
     */
    className: PropTypes.string,
};
