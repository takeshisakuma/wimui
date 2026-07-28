import React from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
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
   * Defaults to the localized `form.required` string.
   */
  requiredLabel?: React.ReactNode;
  /**
   * Whether to display an optional badge when `required` is false.
   * @default false
   */
  showOptional?: boolean;
  /**
   * Custom text or element for the optional badge.
   * Defaults to the localized `form.optional` string.
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
  requiredLabel,
  showOptional = false,
  optionalLabel,
  className,
}: FieldLabelContentProps) => {
  const { t } = useWimTranslation("form");
  const resolvedRequired = requiredLabel ?? t("form.required");
  const resolvedOptional = optionalLabel ?? t("form.optional");

  return (
    <div className={className}>
      <span className={styles.text}>{label}</span>
      {required ? (
        <Badge
          intent="danger"
          // 塗りだと、必須項目の多いフォームでは何も間違えていない状態で
          // ページ中がエラー色になり、実際のエラーと同じ色なので区別が消える。
          // subtle にすると「必須」という語は残したまま、その衝突だけが消える。
          variant="subtle"
          size="sm"
          className={styles.badge}
          aria-hidden="true"
        >
          {resolvedRequired}
        </Badge>
      ) : (
        showOptional && (
          <Badge
            intent="neutral"
            size="sm"
            className={styles.badge}
            aria-hidden="true"
          >
            {resolvedOptional}
          </Badge>
        )
      )}
    </div>
  );
};
