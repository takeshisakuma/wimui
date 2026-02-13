import React, { createContext, useContext } from "react";
import classNames from "classnames";
import "./list.scss";
import { useTranslation } from "react-i18next";
import { Icon } from "../Icon/Icon";

type ListContextType = {
    size: "small" | "medium" | "large";
};

const ListContext = createContext<ListContextType>({ size: "medium" });

type ListProps = React.ComponentPropsWithoutRef<"ul"> & {
    as?: "ul" | "ol";
    size?: "small" | "medium" | "large";
    spacing?: "tight" | "normal" | "loose";
    children: React.ReactNode;
};

export const List = ({
    as: Component = "ul",
    size = "medium",
    spacing = "normal",
    children,
    className,
    ...props
}: ListProps) => {




    return (
        <ListContext.Provider value={{ size }}>
            <Component
                className={classNames(
                    "wim-list",
                    `wim-list--${size === "small" ? "sm" : size === "large" ? "lg" : "md"}`,
                    `wim-list--spacing-${spacing}`,
                    className
                )}
                {...props}
            >
                {children}
            </Component>
        </ListContext.Provider>
    );
};

type ListItemProps = React.ComponentPropsWithoutRef<"li"> & {
    children: React.ReactNode;
    iconName?: React.ComponentProps<typeof Icon>["name"];
    iconPosition?: "left" | "right";
};

export const ListItem = ({
    children,
    className,
    iconName,
    iconPosition = "left",
    ...props
}: ListItemProps) => {
    const { t } = useTranslation();
    const { size } = useContext(ListContext);



    return (
        <li
            className={classNames(
                "wim-list__item",
                iconName && "wim-list__item--with-icon",
                className
            )}
            {...props}
        >
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







