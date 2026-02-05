import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";
import "./list.scss";
import { useTranslation } from "react-i18next";
import { Icon } from "../Icon/Icon";

type ListContextType = {
    size: "small" | "medium" | "large";
};

const ListContext = createContext<ListContextType>({ size: "medium" });

type ListProps = {
    as?: "ul" | "ol";
    size?: "small" | "medium" | "large";
    spacing?: "tight" | "normal" | "loose";
    children: React.ReactNode;
    className?: string;
};

export const List = ({
    as: Component = "ul",
    size = "medium",
    spacing = "normal",
    children,
    className = "",
    ...props
}: ListProps) => {
    const sizeMap = {
        small: "sm",
        medium: "md",
        large: "lg",
    };
    const sizeClass = `wim-list--${sizeMap[size]}`;
    const spacingClass = `wim-list--spacing-${spacing}`;

    const containerClass = [
        "wim-list",
        sizeClass,
        spacingClass,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <ListContext.Provider value={{ size }}>
            <Component className={containerClass} {...props}>
                {children}
            </Component>
        </ListContext.Provider>
    );
};

type ListItemProps = {
    children: React.ReactNode;
    className?: string;
    iconName?: React.ComponentProps<typeof Icon>["name"];
    iconPosition?: "left" | "right";
};

export const ListItem = ({
    children,
    className = "",
    iconName,
    iconPosition = "left",
    ...props
}: ListItemProps) => {
    const { t } = useTranslation();
    const { size } = useContext(ListContext);

    const itemClass = [
        "wim-list__item",
        iconName ? "wim-list__item--with-icon" : "",
        className
    ].filter(Boolean).join(" ");

    return (
        <li className={itemClass} {...props}>
            <div className="wim-list__item-content">
                {iconName && iconPosition === "left" && (
                    <div className="wim-list__icon-container wim-list__icon-container--left">
                        <Icon name={iconName} size={size} className="wim-list__icon" />
                    </div>
                )}
                <div className="wim-list__text">
                    {typeof children === "string" ? t(children) : children}
                </div>
                {iconName && iconPosition === "right" && (
                    <div className="wim-list__icon-container wim-list__icon-container--right">
                        <Icon name={iconName} size={size} className="wim-list__icon" />
                    </div>
                )}
            </div>
        </li>
    );
};




List.propTypes = {
    as: PropTypes.oneOf(["ul", "ol"]),
    size: PropTypes.oneOf(["small", "medium", "large"]),
    spacing: PropTypes.oneOf(["tight", "normal", "loose"]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

ListItem.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    iconName: PropTypes.oneOf([
        "CircleIcon",
        "SquareIcon",
        "LoadingIcon",
        "ExternalLinkIcon",
        "CloseIcon",
        "SearchIcon",
        "EyeIcon",
        "EyeOffIcon",
        "ChevronDownIcon",
        "PlayIcon",
        "PauseIcon",
        "VolumeIcon",
        "MuteIcon",
        "ChevronRightIcon",
        "ChevronLeftIcon",
        "CopyIcon",
        "CheckIcon",
        "UploadIcon",
    ]),
    iconPosition: PropTypes.oneOf(["left", "right"]),
};


