import React from "react";
import PropTypes from "prop-types";
import "./breadcrumb.scss";
import { useTranslation } from "react-i18next";
import { Link } from "../Link/Link";
import { Icon } from "../Icon/Icon";

type BreadcrumbItem = {
    label: string;
    href?: string;
    iconName?: React.ComponentProps<typeof Icon>["name"];
};

type BreadcrumbProps = {
    items: BreadcrumbItem[];
    separator?: React.ReactNode;
    size?: "small" | "medium" | "large";
    className?: string;
};

export const Breadcrumb = ({
    items,
    separator,
    size = "medium",
    className,
}: BreadcrumbProps) => {
    const { t } = useTranslation();

    const sizeMap = {
        small: "sm",
        medium: "md",
        large: "lg",
    };
    const sizeClass = `wim-breadcrumb--${sizeMap[size]}`;

    const defaultSeparator = (
        <Icon name="ChevronRightIcon" size={size} className="wim-breadcrumb__separator-icon" />
    );

    return (
        <nav
            aria-label="Breadcrumb"
            className={["wim-breadcrumb", sizeClass, className].filter(Boolean).join(" ")}
        >
            <ol className="wim-breadcrumb__list">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={index} className="wim-breadcrumb__item">
                            <div className="wim-breadcrumb__content">
                                {item.href && !isLast ? (
                                    <Link
                                        href={item.href}
                                        size={size}
                                        priority="secondary"
                                        iconName={item.iconName}
                                        className="wim-breadcrumb__link"
                                    >
                                        {t(item.label)}
                                    </Link>
                                ) : (
                                    <span
                                        className={[
                                            "wim-breadcrumb__label",
                                            isLast ? "wim-breadcrumb__label--current" : "",
                                        ]
                                            .filter(Boolean)
                                            .join(" ")}
                                        aria-current={isLast ? "page" : undefined}
                                    >
                                        {item.iconName && (
                                            <Icon
                                                name={item.iconName}
                                                size={size}
                                                className="wim-breadcrumb__label-icon"
                                            />
                                        )}
                                        {t(item.label)}
                                    </span>
                                )}
                            </div>
                            {!isLast && (
                                <span className="wim-breadcrumb__separator" aria-hidden="true">
                                    {separator || defaultSeparator}
                                </span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

Breadcrumb.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            href: PropTypes.string,
            iconName: PropTypes.string,
        })
    ).isRequired,
    separator: PropTypes.node,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    className: PropTypes.string,
};
