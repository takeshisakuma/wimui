import React from "react";
import { useTranslation } from "react-i18next";
import { Badge } from "../Badge/Badge";
import "./fieldLabelContent.scss";

export type FieldLabelContentProps = {
  label: string;
  required?: boolean;
  showOptional?: boolean;
  className?: string;
};

export const FieldLabelContent = ({
  label,
  required = false,
  showOptional = false,
  className,
}: FieldLabelContentProps) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <span className="wim-field-label-text">{t(label)}</span>
      {required ? (
        <Badge
          color="error"
          size="sm"
          className="wim-field-label-badge"
          aria-hidden="true"
        >
          required
        </Badge>
      ) : (
        showOptional && (
          <Badge
            color="neutral"
            size="sm"
            className="wim-field-label-badge"
            aria-hidden="true"
          >
            optional
          </Badge>
        )
      )}
    </div>
  );
};
