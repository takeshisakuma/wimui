import React from "react";
import { Badge } from "../data-display/Badge/Badge";
import "./fieldLabelContent.scss";

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
      <span className="wim-field-label-text">{label}</span>
      {required ? (
        <Badge
          color="error"
          size="sm"
          className="wim-field-label-badge"
          aria-hidden="true"
        >
          {requiredLabel}
        </Badge>
      ) : (
        showOptional && (
          <Badge
            color="neutral"
            size="sm"
            className="wim-field-label-badge"
            aria-hidden="true"
          >
            {optionalLabel}
          </Badge>
        )
      )}
    </div>
  );
};
