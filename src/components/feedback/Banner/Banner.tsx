import React from "react";
import classNames from "classnames";
import { FeedbackIcon } from "../../_internal/FeedbackIcon";
import { FeedbackCloseButton } from "../../_internal/FeedbackCloseButton";
import { FeedbackIntent } from "../../../types/tokens";
import styles from "./banner.module.scss";

type BannerProps = {
  /**
   * Title of the banner
   */
  title?: React.ReactNode;
  /**
   * Description text of the banner
   */
  description?: React.ReactNode;
  /**
   * Intent (semantic state) of the banner
   * @default "info"
   */
  intent?: FeedbackIntent;
  /**
   * Whether to show the icon, or a custom icon element
   * @default true
   */
  icon?: boolean | React.ReactNode;
  /**
   * Action element (e.g. a Button component)
   */
  extra?: React.ReactNode;
  /**
   * Called when the close button is clicked. Providing it shows the close button.
   */
  onClose?: () => void;
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Content of the banner
   */
  children?: React.ReactNode;
};

/**
 * Banner for presenting an important message or action to the user.
 * Usually displayed at the top of the page.
 */
export const Banner = ({
  title,
  description,
  intent = "info",
  icon = true,
  extra,
  onClose,
  className,
  children,
  ...props
}: BannerProps) => {

  return (
    <div
      className={classNames("wim-banner", styles.root, styles[intent], className)}
      role="status"
      {...props}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          {icon !== false && (
            <div className={styles.icon}>
              <FeedbackIcon
                intent={intent}
                icon={typeof icon === "boolean" ? undefined : icon}
                size="sm"
              />
            </div>
          )}
          <div className={styles.text}>
            {title && <span className={styles.title}>{title}</span>}
            {title && (description || children) && (
              <span className={styles.separator}> - </span>
            )}
            {(description || children) && (
              <span className={styles.description}>
                {description ? description : children}
              </span>
            )}
          </div>
        </div>
        <div className={styles.actions}>
          {extra && <div className={styles.action}>{extra}</div>}
          <FeedbackCloseButton
             onClose={onClose}
             className={styles.close}
             size="sm"
          />
        </div>
      </div>
    </div>
  );
};
