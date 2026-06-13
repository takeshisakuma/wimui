import React, { useRef, useState } from "react";
import classNames from "classnames";
import { Button } from "../../form/Button/Button";
import { Icon } from "../../media/Icon/Icon";
import { FieldTemplate } from "../FieldTemplate";
import { ComponentSize } from "../../../types/tokens";
import styles from "./file-upload.module.scss";

type FileUploadProps = {
  label?: React.ReactNode;
  buttonLabel?: React.ReactNode;
  noFileLabel?: React.ReactNode;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  onChange?: (files: FileList | null) => void;
  className?: string;
  iconName?: React.ComponentProps<typeof Icon>["name"];
  iconPosition?: "left" | "right";
  size?: ComponentSize;
  error?: string;
  required?: boolean;
  layout?: "vertical" | "horizontal";
};

/**
 * ユーザーがファイルを選択・アップロードするためのコンポーネント。
 */
export const FileUpload = ({
  label,
  buttonLabel = "Choose File",
  noFileLabel = "No file chosen",
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
    : noFileLabel;

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
        >{buttonLabel}</Button>
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
