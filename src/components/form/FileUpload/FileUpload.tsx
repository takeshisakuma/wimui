import React, { useEffect, useRef, useState } from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { formNs } from "@/i18n/generated/form";
import classNames from "classnames";
import { Button } from "../../form/Button/Button";
import { Icon } from "../../media/Icon/Icon";
import { VisuallyHidden } from "../../layout/VisuallyHidden/VisuallyHidden";
import { FieldTemplate } from "../FieldTemplate";
import { ComponentSizeBasic } from "../../../types/tokens";
import styles from "./file-upload.module.scss";

type FileUploadProps = {
  /** Field label */
  label?: React.ReactNode;
  /** Label of the file selection button */
  buttonLabel?: React.ReactNode;
  /** Text shown when no file is selected */
  noFileLabel?: React.ReactNode;
  /** Accepted file types (e.g. ".jpg,.png") */
  accept?: string;
  /** Whether multiple files can be selected */
  multiple?: boolean;
  /** Whether the component is disabled */
  disabled?: boolean;
  /**
   * Names of the files the field should show — typically ones that already
   * exist on the server, from an earlier session or an earlier step.
   *
   * Controlled: while this is set, it is what the field displays, and picking
   * a file only fires `onChange`. Pass the new names back to show them. Leave
   * it undefined to let the field track its own selection.
   */
  value?: string[];
  /** Callback when files are selected */
  onChange?: (files: FileList | null) => void;
  /** Additional class names */
  className?: string;
  /** Icon name shown on the button */
  iconName?: React.ComponentProps<typeof Icon>["name"];
  /** Position of the icon relative to the button label */
  iconPosition?: "left" | "right";
  /** Size of the button */
  size?: ComponentSizeBasic;
  /** Error message */
  error?: string;
  /** Whether to show the required indicator */
  required?: boolean;
  /** Layout direction of label and field */
  layout?: "vertical" | "horizontal";
  /** Accessible name for the choose-file button when no visible `label` is provided. */
  "aria-label"?: string;
  /** ID of the element that labels the choose-file button when no visible `label` is provided. */
  "aria-labelledby"?: string;
  /** ID of the element that describes the choose-file button. Announced together with the error message. */
  "aria-describedby"?: string;
};

/**
 * Component for selecting and uploading files.
 */
export const FileUpload = ({
  label,
  buttonLabel,
  noFileLabel,
  accept,
  multiple = false,
  disabled = false,
  value,
  onChange,
  className,
  iconName,
  iconPosition,
  size = "md",
  error,
  required,
  layout = "vertical",
  // 見えるラベルを置かないときに、操作要素へ名前と説明を付ける口（T340）。以前は受ける口が無く、
  // 渡しても黙って捨てられていた。
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
}: FileUploadProps) => {
  const { t } = useWimTranslation(formNs);
  const generatedId = React.useId();
  const id = `wim-fileupload-${generatedId}`;
  const labelId = label ? `${id}-label` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  // トリガは `role=button` なので `aria-required` を持てない（WCAG 4.1.2 / axe
  // aria-allowed-attr）。必須であることは説明として渡す。可視の必須バッジは
  // FieldTemplate 側で aria-hidden なので、これが唯一の読み上げ経路になる。
  const requiredId = required ? `${id}-required` : undefined;
  // 選んだファイルの名前は、ボタンの説明として結び付ける（ボタンに着いたとき）。以前は、名前の文字が
  // ボタンと結び付いておらず、ファイルを選んでも、ボタンの名前しか読まれなかった（ナレーター + Chrome
  // の実機）。選んだ直後に告げるのは、下の「選んだことを告げる領域」。
  const fileNamesId = `${id}-files`;
  const describedBy = [ariaDescribedBy, fileNamesId, errorId, requiredId].filter(Boolean).join(" ");

  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  // 選んだことを告げる領域（画面には見えない）。**少し待ってから**文字を入れる ── ファイルを選ぶ
  // 画面が閉じた直後は、フォーカスがボタンへ戻る読み上げが走っていて、同時に書き換えた文字は
  // 読まれない（名前の表示そのものを読み上げの領域にした 1 回目の直しは、実機で読まれなかった）。
  const [announcement, setAnnouncement] = useState("");
  const announceTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(announceTimer.current), []);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setSelectedFiles(files);
    clearTimeout(announceTimer.current);
    setAnnouncement("");
    if (files && files.length > 0) {
      const names = Array.from(files)
        .map((file) => file.name)
        .join(", ");
      announceTimer.current = setTimeout(() => setAnnouncement(t("fileupload.selected", { files: names })), 700);
    }
    if (onChange) {
      onChange(files);
    }
  };

  // value が渡っていればそれが表示のすべて。マウント時点で反映されることが
  // 要点で、そこを差分でしか見ないと「保存済みのファイルが消える」になる
  // （OtpInput が踏んだのと同じ形）。
  const displayNames =
    value !== undefined
      ? value
      : selectedFiles
        ? Array.from(selectedFiles).map((file) => file.name)
        : [];

  const fileNames =
    displayNames.length > 0
      ? displayNames.join(", ")
      : (noFileLabel ?? t("fileupload.no_file"));

  return (
    <FieldTemplate
      label={label}
      error={error}
      required={required}
      layout={layout}
      labelId={labelId}
      errorId={errorId}
      className={classNames("wim-file-upload", 
        styles.root,
        styles[size],
        className,
      )}
    >
      <div className={styles.controls}>
        <input
          type="file"
          ref={inputRef}
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleFileChange}
          className={styles.input}
          aria-hidden="true"
          tabIndex={-1}
        />
        <Button
          onClick={handleClick}
          disabled={disabled}
          variant="outline"
          icon={iconName}
          iconPosition={iconPosition}
          size={size}
          aria-labelledby={labelId ?? ariaLabelledBy}
          aria-label={labelId || ariaLabelledBy ? undefined : ariaLabel}
          aria-describedby={describedBy}
          aria-invalid={error ? true : undefined}
        >{buttonLabel ?? t("fileupload.button")}</Button>
        {required && <VisuallyHidden id={requiredId}>{t("form.required")}</VisuallyHidden>}
        <VisuallyHidden role="status" aria-atomic="true">
          {announcement}
        </VisuallyHidden>
        <span
          id={fileNamesId}
          className={classNames(
            styles.fileNames,
            styles[size],
            disabled && styles.disabled,
          )}
          // 無効のときの薄い文字は、コントラストの基準の対象外（WCAG 1.4.3 の例外）。この印が無いと、
          // axe は無効だと分からず、color-contrast で落とす（外して、a11y の CI が落ちた）。
          aria-disabled={disabled || undefined}
        >
          {fileNames}
        </span>
      </div>
    </FieldTemplate>
  );
};
