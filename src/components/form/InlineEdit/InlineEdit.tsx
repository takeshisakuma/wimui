import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { Input } from "../Input/Input";
import { IconButton } from "../IconButton/IconButton";
import { FieldTemplate } from "../FieldTemplate";
import localStyles from "./inline-edit.module.scss";

export type InlineEditProps = Omit<React.ComponentPropsWithoutRef<"div">, "onChange" | "defaultValue"> & {
  /** Current text (controlled) */
  value?: string;
  /** Initial text (uncontrolled) */
  defaultValue?: string;
  /** Callback when the text changes while editing */
  onChange?: (value: string) => void;
  /** Callback when the edit is confirmed */
  onSave?: (value: string) => void;
  /** Callback when the edit is cancelled */
  onCancel?: () => void;
  /** Callback when editing starts */
  onEdit?: () => void;
  /** Placeholder shown when the text is empty */
  placeholder?: string;
  /** Whether editing is disabled */
  disabled?: boolean;
  /** Whether to take full width of parent */
  fullWidth?: boolean;
  /** Accessible label for the text and edit button */
  label?: React.ReactNode;
};

/**
 * Component for editing text inline.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const InlineEdit = React.forwardRef<HTMLDivElement, InlineEditProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      onSave,
      onCancel,
      onEdit,
      placeholder,
      disabled = false,
      fullWidth = false,
      label,
      className,
      ...props
    },
    ref
  ) => {
    const { t } = useWimTranslation("common");
    const [isEditing, setIsEditing] = useState(false);
    const [savedValue, setSavedValue] = useState(defaultValue ?? "");
    const [internalValue, setInternalValue] = useState(defaultValue ?? "");
    const inputRef = useRef<HTMLInputElement>(null);

    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    const handleEdit = () => {
      if (disabled) return;
      if (!isControlled) {
        setInternalValue(savedValue);
      }
      setIsEditing(true);
      onEdit?.();
    };

    const handleSave = () => {
      if (disabled) return;
      if (!isControlled) {
        setSavedValue(currentValue);
      }
      setIsEditing(false);
      onSave?.(currentValue);
    };

    const handleCancel = () => {
      if (disabled) return;
      if (!isControlled) {
        setInternalValue(savedValue);
      }
      setIsEditing(false);
      onCancel?.();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (!isControlled) {
        setInternalValue(val);
      }
      onChange?.(val);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSave();
      } else if (e.key === "Escape") {
        e.preventDefault();
        handleCancel();
      }
    };

    useEffect(() => {
      if (isEditing && inputRef.current) {
        inputRef.current.focus();
      }
    }, [isEditing]);

    return (
      <FieldTemplate label={label} className={className}>
      <div
        ref={ref}
        className={classNames("wim-inline-edit", 
          localStyles.root,
          fullWidth && localStyles.fullWidth,
          disabled && localStyles.disabled,
        )}
        {...props}
      >
        {isEditing ? (
          <div className={localStyles.editWrapper}>
            <Input
              ref={inputRef}
              value={currentValue}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              disabled={disabled}
              placeholder={placeholder}
              fullWidth={fullWidth}
              className={localStyles.input}
            />
            <div className={localStyles.editActions}>
              <IconButton
                iconName="CheckIcon"
                intent="positive"
                variant="outline"
                aria-label={t("action.save")}
                onClick={handleSave}
                disabled={disabled}
              />
              <IconButton
                iconName="CloseIcon"
                intent="default"
                variant="outline"
                aria-label={t("action.cancel")}
                onClick={handleCancel}
                disabled={disabled}
              />
            </div>
          </div>
        ) : (
          <div
            className={localStyles.preview}
            onClick={handleEdit}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleEdit();
              }
            }}
            tabIndex={disabled ? -1 : 0}
            role="button"
            aria-disabled={disabled}
          >
            <span className={classNames(localStyles.text, !currentValue && localStyles.placeholder)}>
              {currentValue || placeholder || "\u00A0"}
            </span>
            <span className={localStyles.editIconWrapper}>
              <IconButton
                iconName="EditIcon"
                variant="ghost"
                tabIndex={-1}
                aria-label={t("action.edit")}
                aria-hidden="true"
                asChild
              >
                <span />
              </IconButton>
            </span>
          </div>
        )}
      </div>
      </FieldTemplate>
    );
  }
);

InlineEdit.displayName = "InlineEdit";

