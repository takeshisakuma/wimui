import React from "react";
import classNames from "classnames";
import "./bentoGrid.scss";

type BentoGridProps = React.ComponentPropsWithoutRef<"div"> & {
    children?: React.ReactNode;
};

export const BentoGrid = ({
    className,
    children,
    ...props
}: BentoGridProps) => {
    return (
        <div
            className={classNames("wim-bento-grid", className)}
            {...props}
        >
            {children}
        </div>
    );
};

BentoGrid.displayName = "BentoGrid";

export type BentoGridItemProps = React.ComponentPropsWithoutRef<"div"> & {
    title?: React.ReactNode;
    description?: React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    ...props
}: BentoGridItemProps) => {
    return (
        <div
            className={classNames("wim-bento-grid-item", className)}
            {...props}
        >
            {header && <div className="wim-bento-grid-item__header">{header}</div>}
            <div className="wim-bento-grid-item__content">
                {icon && <div className="wim-bento-grid-item__icon">{icon}</div>}
                <div className="wim-bento-grid-item__text">
                    {title && <div className="wim-bento-grid-item__title">{title}</div>}
                    {description && (
                        <div className="wim-bento-grid-item__description">{description}</div>
                    )}
                </div>
            </div>
        </div>
    );
};

BentoGridItem.displayName = "BentoGridItem";
