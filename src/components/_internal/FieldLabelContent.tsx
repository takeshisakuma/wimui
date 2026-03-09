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
          content="required"
          color="error"
          size="small"
          className="wim-field-label-badge"
          aria-hidden="true"
        />
      ) : (
        showOptional && (
          <Badge
            content="optional"
            color="neutral"
            size="small"
            className="wim-field-label-badge"
            aria-hidden="true"
          />
        )
      )}
    </div>
  );
};
