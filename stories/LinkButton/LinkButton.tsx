import React from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

type LinkButtonProps = React.ComponentPropsWithoutRef<"a"> &
    Omit<React.ComponentProps<typeof Button>, "onClick" | "type">;

/**
 * ボタンの見た目をしたアンカー（リンク）コンポーネント。
 */
export const LinkButton = ({
    className = "",
    size = "medium",
    priority = "secondary",
    role = "default",
    backgroundColor,
    label,
    iconName,
    iconPosition = "left",
    ...props
}: LinkButtonProps) => {
    const sizeMap: Record<"small" | "medium" | "large", string> = {
        small: "sm",
        medium: "md",
        large: "lg",
    };
    const sizeClass = `wim-button--${sizeMap[size]}`;
    const priorityClass = `wim-button--${priority}`;
    const roleClass = `wim-button--${role}`;
    const iconOnlyClass = !label && iconName ? "wim-button--icon-only" : "";

    return (
        <a
            className={[
                "wim-button",
                sizeClass,
                priorityClass,
                roleClass,
                iconOnlyClass,
                className
            ].filter(Boolean).join(" ")}
            style={backgroundColor ? { backgroundColor } : undefined}
            {...props}
        >
            <span className="wim-button__inner">
                {iconName && iconPosition === "left" && (
                    <Icon name={iconName} size={size} />
                )}
                {label && <span className="wim-button__label">{label}</span>}
                {iconName && iconPosition === "right" && (
                    <Icon name={iconName} size={size} />
                )}
            </span>
        </a>
    );
};
