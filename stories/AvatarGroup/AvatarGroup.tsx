import React from "react";
import PropTypes from "prop-types";
import "./avatar-group.scss";
import { Avatar } from "../Avatar/Avatar";

type AvatarGroupProps = {
    children: React.ReactNode;
    max?: number;
    size?: "sm" | "md" | "lg";
    total?: number;
    className?: string;
};

/**
 * 複数のアバターを束ねて表示するためのコンポーネント。
 */
export const AvatarGroup = ({
    children,
    max,
    size,
    total,
    className = "",
}: AvatarGroupProps) => {
    const avatars = React.Children.toArray(children);
    const totalAvatars = total || avatars.length;
    const itemsToShow = max ? avatars.slice(0, max) : avatars;
    const excessCount = totalAvatars - itemsToShow.length;

    const containerClass = ["wim-avatar-group", className].filter(Boolean).join(" ");

    return (
        <div className={containerClass}>
            {itemsToShow.map((child, index) => {
                if (React.isValidElement(child) && child.type === Avatar) {
                    const avatarChild = child as React.ReactElement<{ size?: "sm" | "md" | "lg" }>;
                    return React.cloneElement(avatarChild, {
                        size: size || avatarChild.props.size,
                        key: index,
                    });
                }
                return child;
            })}
            {excessCount > 0 && (
                <span className={`wim-avatar-group__excess wim-avatar-group__excess--${size || "md"}`}>
                    +{excessCount}
                </span>
            )}
        </div>
    );
};

AvatarGroup.propTypes = {
    /** Avatarコンポーネントのリスト */
    children: PropTypes.node.isRequired,
    /** 表示する最大のアバター数 */
    max: PropTypes.number,
    /** すべてのアバターに適用するサイズ（Avatar側の指定を上書き） */
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    /** アバターの総数（実際の要素数より多い場合に指定） */
    total: PropTypes.number,
    /** 追加のクラス名 */
    className: PropTypes.string,
};
