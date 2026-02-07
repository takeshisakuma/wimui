import React from "react";
import PropTypes from "prop-types";
import "./visuallyHidden.scss";

export type VisuallyHiddenProps = React.ComponentPropsWithoutRef<"span"> & {
    /**
     * 表示されないが、スクリーンリーダーには読み上げられるコンテンツ。
     */
    children: React.ReactNode;
};

/**
 * 視覚的には非表示にしつつ、スクリーンリーダーなどのアシスティブテクノロジーにはコンテンツを維持するためのアクセシビリティ用コンポーネント。
 */
export const VisuallyHidden = ({
    children,
    className = "",
    ...props
}: VisuallyHiddenProps) => {
    return (
        <span
            className={["wim-visually-hidden", className].filter(Boolean).join(" ")}
            {...props}
        >
            {children}
        </span>
    );
};

VisuallyHidden.propTypes = {
    /**
     * 表示されないが、スクリーンリーダーには読み上げられるコンテンツ。
     */
    children: PropTypes.node.isRequired,
    /**
     * 追加のクラス名。
     */
    className: PropTypes.string,
};
