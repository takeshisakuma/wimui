import React, { useState, useRef, useEffect, useId } from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { commonNs } from "@/i18n/generated/common";
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
      "aria-label": ariaLabel,
      // 名前と説明の参照は、包みではなく操作要素（表示中はボタン、編集中は入力欄）へ届ける（T329）。
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      ...props
    },
    ref
  ) => {
    const { t } = useWimTranslation(commonNs);
    const [isEditing, setIsEditing] = useState(false);
    // 見えるラベルを、操作要素の名前にする（T339）。以前は、FieldTemplate にラベルを渡すだけで、
    // ボタンとも入力欄とも結んでいなかった ── label を渡しても、編集中の入力欄は名前が空だった。
    // 部品のラベルがあるときは、それが名前になる（利用者の aria-label / aria-labelledby は、無いときだけ通す。T328 と同じ決め方）。
    const generatedId = useId();
    const labelId = label ? `wim-inline-edit-${generatedId}-label` : undefined;
    const textId = `wim-inline-edit-${generatedId}-text`;
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
      <FieldTemplate label={label} labelId={labelId} className={className}>
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
              aria-label={labelId ? undefined : ariaLabel}
              aria-labelledby={labelId ?? ariaLabelledBy}
              aria-describedby={ariaDescribedBy}
              fullWidth={fullWidth}
              className={localStyles.input}
            />
            <div className={localStyles.editActions}>
              <IconButton
                iconName="CheckIcon"
                intent="success"
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
            aria-label={labelId ? undefined : ariaLabel}
            // 表示中は、ラベルのあとに中身の文字を並べる（「Title Draft」）。ラベルだけを参照すると、
            // ボタンの中身（いまの値）が名前から消える。
            aria-labelledby={labelId ? `${labelId} ${textId}` : ariaLabelledBy}
            aria-describedby={ariaDescribedBy}
            aria-disabled={disabled}
          >
            <span id={textId} className={classNames(localStyles.text, !currentValue && localStyles.placeholder)}>
              {currentValue || placeholder || "\u00A0"}
            </span>
            <span className={localStyles.editIconWrapper}>
              <IconButton
                iconName="EditIcon"
                variant="ghost"
                // 編集の合図であって操作対象ではない（aria-hidden / tabIndex -1）。
                // 既定の md はコントロール 1 つ分の高さ（36px）を要求し、テキストの隣に
                // 置くと行だけが背高になる。テーブルのセルではこれが露骨に出る。
                size="sm"
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

