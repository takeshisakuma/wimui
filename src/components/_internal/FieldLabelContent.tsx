import React from "react";
import { IndicatorBase } from "./IndicatorBase";
import "../data-display/Badge/badge.scss";
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
        <IndicatorBase
          prefixClass="wim-badge"
          intent="error"
          size="sm"
          className="wim-field-label-badge"
          aria-hidden="true"
        >
          {requiredLabel}
        </IndicatorBase>
      ) : (
        showOptional && (
          <IndicatorBase
            prefixClass="wim-badge"
            intent="neutral"
            size="sm"
            className="wim-field-label-badge"
            aria-hidden="true"
          >
            {optionalLabel}
          </IndicatorBase>
        )
      )}
    </div>
  );
};
