import React, { useState } from "react";
import classNames from "classnames";
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
    className,
    ...props
}: AvatarProps) => {
    const [hasError, setHasError] = useState(false);



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
        <div
            className={classNames(
                "wim-avatar",
                `wim-avatar--${size}`,
                `wim-avatar--${shape}`,
                color && `wim-avatar--${color}`,
                className
            )}
            {...props}
        >
            {src && !hasError ? (
                <img src={src} alt={alt} onError={() => setHasError(true)} />
            ) : (
                renderFallback()
            )}
        </div>
    );
};


