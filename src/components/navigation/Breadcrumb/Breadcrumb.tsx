import React, { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import classNames from "classnames";
import styles from "./breadcrumb.module.scss";
import { Link } from "../../navigation/Link/Link";
import { Icon } from "../../media/Icon/Icon";
import { ComponentSizeBasic } from "../../../types/tokens";
import { ChevronRightIcon } from "@/icon";

type BreadcrumbItem = {
  label: React.ReactNode;
  href?: string;
  iconName?: React.ComponentProps<typeof Icon>["name"];
};

type BreadcrumbProps = {
  /**
   * Items to display, from the root to the current page.
   */
  items: BreadcrumbItem[];
  /**
   * Separator displayed between items. Defaults to a chevron icon.
   */
  separator?: React.ReactNode;
  /**
   * Size of the breadcrumb.
   * @default "md"
   */
  size?: ComponentSizeBasic;
  /**
   * Additional CSS class name for the container.
   */
  className?: string;
  /**
   * Accessible label of the navigation landmark. Defaults to a localized "breadcrumb" label.
   */
  ariaLabel?: string;
  /**
   * If true, the breadcrumb will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
};

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(({
  items,
  separator,
  size = "md",
  className,
  ariaLabel,
  asChild,
  ...props
}, ref) => {
  const { t } = useWimTranslation("common");
  const resolvedAriaLabel = ariaLabel ?? t("a11y.breadcrumb");
  const Component = asChild ? Slot : "nav";

  const defaultSeparator = (
    <Icon
      component={ChevronRightIcon}
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
    <Component
      ref={ref}
      aria-label={resolvedAriaLabel}
      className={classNames("wim-breadcrumb", 
        styles.root,
        styles[size],
        className,
      )}
      onKeyDown={handleKeyDown}
      {...props}
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
                    styles={{ label: styles.linkLabel }}
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
    </Component>
  );
});

Breadcrumb.displayName = "Breadcrumb";
