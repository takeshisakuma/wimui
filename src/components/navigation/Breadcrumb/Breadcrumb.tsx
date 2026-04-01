import React from "react";
import classNames from "classnames";
import "./breadcrumb.scss";
import { Link } from "../../navigation/Link/Link";
import { Icon } from "../../media/Icon/Icon";
import { ComponentSize } from "../../../types/tokens";

type BreadcrumbItem = {
  label: React.ReactNode;
  href?: string;
  iconName?: React.ComponentProps<typeof Icon>["name"];
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  size?: ComponentSize;
  className?: string;
  ariaLabel?: string;
};

export const Breadcrumb = ({
  items,
  separator,
  size = "md",
  className,
  ariaLabel = "Breadcrumb",
}: BreadcrumbProps) => {
  const defaultSeparator = (
    <Icon
      name="ChevronRightIcon"
      size={size}
      className="wim-breadcrumb__separator-icon"
    />
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const list = e.currentTarget;
    const items = Array.from(list.querySelectorAll(".wim-breadcrumb__link, .wim-breadcrumb__label--current"));
    const currentIndex = items.indexOf(document.activeElement as HTMLElement);

    if (currentIndex === -1) return;

    if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % items.length;
      (items[nextIndex] as HTMLElement).focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      (items[prevIndex] as HTMLElement).focus();
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <nav
      aria-label={ariaLabel}
      className={classNames(
        "wim-breadcrumb",
        `wim-breadcrumb--${size}`,
        className,
      )}
      onKeyDown={handleKeyDown}
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
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={classNames(
                      "wim-breadcrumb__label",
                      isLast && "wim-breadcrumb__label--current",
                    )}
                    aria-current={isLast ? "page" : undefined}
                    tabIndex={isLast ? 0 : undefined}
                    role={isLast ? "link" : undefined}
                  >
                    {item.iconName && (
                      <Icon
                        name={item.iconName}
                        size={size}
                        className="wim-breadcrumb__label-icon"
                      />
                    )}
                    {item.label}
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
