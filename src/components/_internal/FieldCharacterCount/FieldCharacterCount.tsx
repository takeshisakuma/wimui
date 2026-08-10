import React from "react";
import classNames from "classnames";
import styles from "./field-character-count.module.scss";

export interface FieldCharacterCountProps {
  /** Current character count */
  count: number;
  /** Maximum allowed characters */
  maxLength?: number;
  /** Whether to show the count even if count is 0 */
  alwaysShow?: boolean;
  /** Additional CSS class */
  className?: string;
  /** Error state (count exceeds maxLength) */
  isError?: boolean;
}

/**
 * Internal component to display character counts consistently across form elements.
 */
export const FieldCharacterCount: React.FC<FieldCharacterCountProps> = ({
  count,
  maxLength,
  alwaysShow = false,
  className,
  isError = false,
}) => {
  if (!alwaysShow && count === 0 && maxLength === undefined) {
    return null;
  }

  return (
    <div
      className={classNames(
        styles.root,
        {
          [styles.danger]: isError || (maxLength !== undefined && count > maxLength),
          [styles.warning]: maxLength !== undefined && count >= maxLength * 0.9 && count <= maxLength,
        },
        className
      )}
      aria-live="polite"
    >
      <span>{count}</span>
      {maxLength !== undefined && (
        <>
          <span className={styles.separator}> / </span>
          <span>{maxLength}</span>
        </>
      )}
    </div>
  );
};
