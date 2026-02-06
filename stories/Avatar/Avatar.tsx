import React, { useState } from "react";
import PropTypes from "prop-types";
import "./avatar.scss";

type AvatarProps = React.ComponentPropsWithoutRef<"div"> & {
    src?: string;
    alt?: string;
    initials?: string;
    icon?: React.ReactNode;
    size?: "sm" | "md" | "lg";
    shape?: "circle" | "rounded";
    color?: "primary" | "secondary" | "neutral" | "error" | "success";
};

/**
 * ユーザーのアイコンやイニシャルを表示するためのアバターコンポーネント。
 */
export const Avatar = ({
    src,
    alt = "",
    initials,
    icon,
    size = "md",
    shape = "circle",
    color,
    className = "",
    ...props
}: AvatarProps) => {
    const [hasError, setHasError] = useState(false);

    const containerClass = [
        "wim-avatar",
        `wim-avatar--${size}`,
        `wim-avatar--${shape}`,
        color ? `wim-avatar--${color}` : "",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    const renderFallback = () => {
        if (initials) {
            return <span className="wim-avatar__initials">{initials.substring(0, 2)}</span>;
        }
        if (icon) {
            return <span className="wim-avatar__icon">{icon}</span>;
        }
        // Default Icon (User)
        return (
            <span className="wim-avatar__icon">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            </span>
        );
    };

    return (
        <div className={containerClass} {...props}>
            {src && !hasError ? (
                <img src={src} alt={alt} onError={() => setHasError(true)} />
            ) : (
                renderFallback()
            )}
        </div>
    );
};

Avatar.propTypes = {
    /** 画像のURL */
    src: PropTypes.string,
    /** 代替テキスト */
    alt: PropTypes.string,
    /** 表示するイニシャル（最大2文字） */
    initials: PropTypes.string,
    /** イニシャルの代わりに表示するアイコン */
    icon: PropTypes.node,
    /** サイズ */
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    /** 形状 */
    shape: PropTypes.oneOf(["circle", "rounded"]),
    /** カラーテーマ */
    color: PropTypes.oneOf(["primary", "secondary", "neutral", "error", "success"]),
};
