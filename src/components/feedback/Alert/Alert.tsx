import React from "react";
import classNames from "classnames";
import { FeedbackIcon } from "../../_internal/FeedbackIcon";
import { FeedbackCloseButton } from "../../_internal/FeedbackCloseButton";
import { FeedbackIntent } from "../../../types/tokens";
import styles from "./alert.module.scss";

type AlertProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * Title of the alert
   */
  title?: React.ReactNode;
  /**
   * HTML tag used for the alert title
   * @default "h4"
   */
  titleTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /**
   * Description text of the alert
   */
  description?: React.ReactNode;
  /**
   * Intent (semantic state) of the alert
   * @default "info"
   */
  intent?: FeedbackIntent;
  /**
   * Custom icon. When omitted, a default icon matching the intent is displayed.
   */
  icon?: React.ReactNode;
  /**
   * Called when the close button is clicked. Providing it shows the close button.
   */
  onClose?: () => void;
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Content of the alert (treated as the description)
   */
  children?: React.ReactNode;
};

/**
 * Alert for communicating important information to the user.
 */
export const Alert = ({
  title,
  titleTag: TitleTag = "h4",
  description,
  intent = "info",
  icon,
  onClose,
  className,
  children,
  ...props
}: AlertProps) => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  return (
    <div
      className={classNames(styles.root, styles[intent], className)}
      role="alert"
      {...props}
    >
      <div className={styles.icon}>
        <FeedbackIcon intent={intent} icon={icon} size="sm" />
      </div>
      <div className={styles.content}>
        {title && <TitleTag className={styles.title}>{title}</TitleTag>}
        {(description || children) && (
          <div className={styles.description}>
            {description ? description : children}
          </div>
        )}
      </div>
      <FeedbackCloseButton
        onClose={onClose ? handleClose : undefined}
        className={styles.close}
        size="sm"
      />
    </div>
  );
};
