
import React from "react";
import "./heading.scss";
import classNames from "classnames";

import { useTranslation } from "react-i18next";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    /**
     * The semantic HTML tag to use.
     */
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    /**
     * The visual size of the heading.
     */
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
    /**
     * Text color.
     */
    color?: "black" | "deepgray" | "gray" | "lightgray" | "white" | "error" | "primary";
    /**
     * Text alignment.
     */
    align?: "left" | "center" | "right";
    children: React.ReactNode;
}

export const Heading = ({
    tag = "h1",
    size = "xl",
    color = "black",
    align = "left",
    className,
    children,
    ...props
}: HeadingProps) => {
    const { t } = useTranslation();
    const classes = classNames(
        "wim-heading",
        `wim-heading--${size}`,
        `wim-heading--${color}`,
        `wim-heading--${align}`,
        className
    );

    const content = typeof children === "string" ? t(children) : children;

    return React.createElement(tag, { className: classes, ...props }, content);
};
