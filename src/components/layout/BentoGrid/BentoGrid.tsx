import React from "react";
import classNames from "classnames";
import styles from "./bento-grid.module.scss";

type BentoGridProps = React.ComponentPropsWithoutRef<"div"> & {
  children?: React.ReactNode;
};

export const BentoGrid = ({
  className,
  children,
  ...props
}: BentoGridProps) => {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.root, className)} {...props}>
        {children}
      </div>
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
    <div className={classNames(styles.item, className)} {...props}>
      {header && <div className={styles.itemHeader}>{header}</div>}
      <div className={styles.itemContent}>
        {icon && <div className={styles.itemIcon}>{icon}</div>}
        <div className={styles.itemText}>
          {title && <div className={styles.itemTitle}>{title}</div>}
          {description && (
            <div className={styles.itemDescription}>
              {description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

BentoGridItem.displayName = "BentoGridItem";
