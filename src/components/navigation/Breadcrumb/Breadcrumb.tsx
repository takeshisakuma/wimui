import React from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import styles from "./breadcrumb.module.scss";
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
  ariaLabel,
}: BreadcrumbProps) => {
  const { t } = useTranslation("common");
  const resolvedAriaLabel = ariaLabel ?? t("a11y.breadcrumb");
  const defaultSeparator = (
    <Icon
      name="ChevronRightIcon"
      size={size}
      className={styles.separatorIcon}
    />
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const list = e.currentTarget;
    const itemElements = Array.from(list.querySelectorAll(`.${styles.link}, .${styles.label}.${styles.current}`));
    const currentIndex = itemElements.indexOf(document.activeElement as HTMLElement);

    if (currentIndex === -1) return;

    if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % itemElements.length;
      (itemElements[nextIndex] as HTMLElement).focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + itemElements.length) % itemElements.length;
      (itemElements[prevIndex] as HTMLElement).focus();
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <nav
      aria-label={resolvedAriaLabel}
      className={classNames(
        styles.root,
        styles[size],
        className,
      )}
      onKeyDown={handleKeyDown}
    >
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className={styles.item}>
              <div className={styles.content}>
                {item.href && !isLast ? (
                   <Link
                    href={item.href}
                    size={size}
                    priority="secondary"
                    iconName={item.iconName}
                    className={styles.link}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={classNames(
                      styles.label,
                      isLast && styles.current,
                    )}
                    aria-current={isLast ? "page" : undefined}
                    tabIndex={isLast ? 0 : undefined}
                    role={isLast ? "link" : undefined}
                  >
                    {item.iconName && (
                      <Icon
                        name={item.iconName}
                        size={size}
                        className={styles.labelIcon}
                      />
                    )}
                    {item.label}
                  </span>
                )}
              </div>
              {!isLast && (
                <span className={styles.separator} aria-hidden="true">
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
