import React, { useRef, useState } from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import classNames from "classnames";
import { Button } from "../../form/Button/Button";
import { Icon } from "../../media/Icon/Icon";
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
  onChange,
  className,
  iconName,
  iconPosition,
  size = "md",
  error,
  required,
  layout = "vertical",
}: FileUploadProps) => {
  const { t } = useWimTranslation("form");
  const generatedId = React.useId();
  const id = `wim-fileupload-${generatedId}`;
  const labelId = label ? `${id}-label` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setSelectedFiles(files);
    if (onChange) {
      onChange(files);
    }
  };

  const fileNames = selectedFiles
    ? Array.from(selectedFiles)
        .map((file) => file.name)
        .join(", ")
    : (noFileLabel ?? t("fileupload.no_file"));

  return (
    <FieldTemplate
      label={label}
      error={error}
      required={required}
      layout={layout}
      labelId={labelId}
      errorId={errorId}
      className={classNames(
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
          aria-labelledby={labelId}
          aria-describedby={errorId}
          aria-required={required}
          aria-invalid={error ? true : undefined}
        >{buttonLabel ?? t("fileupload.button")}</Button>
        <span
          className={classNames(
            styles.fileNames,
            styles[size],
            disabled && styles.disabled,
          )}
          aria-disabled={disabled || undefined}
        >
          {fileNames}
        </span>
      </div>
    </FieldTemplate>
  );
};
