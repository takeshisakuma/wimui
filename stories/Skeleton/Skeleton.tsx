import React from "react";
import PropTypes from "prop-types";
import "./skeleton.scss";

type SkeletonProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * スケルトンの形状。
     * - `text`: テキスト行のような形状。
     * - `rect`: 矩形。
     * - `circle`: 円形。
     */
    variant?: "text" | "rect" | "circle";
    /**
     * アニメーションの種類。
     * - `pulse`: ゆっくりとした明滅。
     * - `wave`: 左から右への波のような動き。
     * - `none`: アニメーションなし。
     */
    animation?: "pulse" | "wave" | "none";
    /**
     * 幅。CSSの単位（px, %, remなど）を含めて指定します。
     */
    width?: string | number;
    /**
     * 高さ。CSSの単位（px, %, remなど）を含めて指定します。
     */
    height?: string | number;
};

/**
 * コンテンツの読み込み中に表示するプレースホルダー。
 */
export const Skeleton = ({
    variant = "text",
    animation = "pulse",
    width,
    height,
    style,
    className = "",
    ...props
}: SkeletonProps) => {
    const variantClass = `wim-skeleton--${variant}`;
    const animationClass = animation !== "none" ? `wim-skeleton--${animation}` : "";

    const skeletonStyle: React.CSSProperties = {
        width,
        height,
        ...style,
    };

    return (
        <div
            className={["wim-skeleton", variantClass, animationClass, className]
                .filter(Boolean)
                .join(" ")}
            style={skeletonStyle}
            aria-hidden="true"
            {...props}
        />
    );
};

Skeleton.propTypes = {
    /**
     * スケルトンの形状。
     */
    variant: PropTypes.oneOf(["text", "rect", "circle"]),
    /**
     * アニメーションの種類。
     */
    animation: PropTypes.oneOf(["pulse", "wave", "none"]),
    /**
     * 幅。
     */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * 高さ。
     */
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * 追加のスタイル。
     */
    style: PropTypes.object,
    /**
     * 追加のクラス名。
     */
    className: PropTypes.string,
};
