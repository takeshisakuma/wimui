import React from "react";
import { Badge } from "../data-display/Badge/Badge";
import styles from "./field-label-content.module.scss";

export type FieldLabelContentProps = {
  label: React.ReactNode;
  required?: boolean;
  requiredLabel?: React.ReactNode;
  showOptional?: boolean;
  optionalLabel?: React.ReactNode;
  className?: string;
};

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
