import React from "react";
import classNames from "classnames";
import { Text } from "../../typography/Text/Text";
import styles from "./field-error.module.scss";

type FieldErrorProps = {
  /** Error message text */
  content: string;
  /** Additional class names */
  className?: string;
  /** ID of the error message element */
  id?: string;
};

/**
 * Component for the validation error message shown below an input field.
 */
export const FieldError = ({
  content,
  className,
  id,
}: FieldErrorProps) => {
  return (
    <div
      id={id}
      className={classNames("wim-field-error", styles.root, className)}
      role="alert"
      aria-live="polite"
    >
      <Text content={content} color="danger" size="sm" />
    </div>
  );
};

