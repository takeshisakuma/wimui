import React from "react";
import PropTypes from "prop-types";
import "./card.scss";

export type CardProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * カードのバリアント
     */
    variant?: "elevated" | "outline" | "flat";
    /**
     * パディングのサイズ
     */
    padding?: "none" | "sm" | "md" | "lg";
    /**
     * 角丸のサイズ
     */
    radius?: "none" | "sm" | "md" | "lg";
    /**
     * レンダリングするHTML要素
     */
    as?: React.ElementType;
};

/**
 * `Card` はコンテンツをグループ化して表示するためのコンテナコンポーネントです。
 */
export const Card = ({
    variant = "elevated",
    padding = "md",
    radius = "md",
    as: Component = "div",
    className = "",
    children,
    ...props
}: CardProps) => {
    const classes = [
        "wim-card",
        `wim-card--${variant}`,
        `wim-card--padding-${padding}`,
        `wim-card--radius-${radius}`,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    );
};

export const CardHeader = ({
    className = "",
    children,
    ...props
}: React.ComponentPropsWithoutRef<"div">) => (
    <div className={["wim-card__header", className].filter(Boolean).join(" ")} {...props}>
        {children}
    </div>
);

export const CardBody = ({
    className = "",
    children,
    ...props
}: React.ComponentPropsWithoutRef<"div">) => (
    <div className={["wim-card__body", className].filter(Boolean).join(" ")} {...props}>
        {children}
    </div>
);

export const CardFooter = ({
    className = "",
    children,
    ...props
}: React.ComponentPropsWithoutRef<"div">) => (
    <div className={["wim-card__footer", className].filter(Boolean).join(" ")} {...props}>
        {children}
    </div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

Card.propTypes = {
    variant: PropTypes.oneOf(["elevated", "outline", "flat"]),
    padding: PropTypes.oneOf(["none", "sm", "md", "lg"]),
    radius: PropTypes.oneOf(["none", "sm", "md", "lg"]),
    as: PropTypes.elementType,
    className: PropTypes.string,
    children: PropTypes.node,
};
