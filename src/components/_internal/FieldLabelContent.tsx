import React from "react";
import { Badge } from "../data-display/Badge/Badge";
import styles from "./field-label-content.module.scss";

/**
 * Props for the FieldLabelContent component.
 */
export type FieldLabelContentProps = {
  /**
   * The main label text or element.
   */
  label: React.ReactNode;
  /**
   * Whether the field is mandatory. If true, displays a required badge.
   */
  required?: boolean;
  /**
   * Custom text or element for the required badge.
   * @default "required"
   */
  requiredLabel?: React.ReactNode;
  /**
   * Whether to display an optional badge when `required` is false.
   * @default false
   */
  showOptional?: boolean;
  /**
   * Custom text or element for the optional badge.
   * @default "optional"
   */
  optionalLabel?: React.ReactNode;
  /**
   * Additional CSS class name for the container.
   */
  className?: string;
};

/**
 * FieldLabelContent is an internal component that standardizes the presentation 
 * of form field labels, including required/optional badges.
 * 
 * Composition Contract:
 * - Displays the primary label text.
 * - Conditionally appends a `Badge` to indicate field requirement status.
 * - Used internally by components like `Input`, `Select`, and `Textarea`.
 */
export const FieldLabelContent = ({
  label,
  required = false,
  requiredLabel = "required",
  showOptional = false,
  optionalLabel = "optional",
  className,
}: FieldLabelContentProps) => {
  return (
    <div className={className}>
      <span className={styles.text}>{label}</span>
      {required ? (
        <Badge
          intent="error"
          size="sm"
          className={styles.badge}
          aria-hidden="true"
        >
          {requiredLabel}
        </Badge>
      ) : (
        showOptional && (
          <Badge
            intent="neutral"
            size="sm"
            className={styles.badge}
            aria-hidden="true"
          >
            {optionalLabel}
          </Badge>
        )
      )}
    </div>
  );
};
