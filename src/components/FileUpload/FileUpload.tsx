import React, { useRef, useState } from "react";
import classNames from "classnames";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { useTranslation } from "react-i18next";
import { FieldTemplate } from "../_internal/FieldTemplate/FieldTemplate";
import { ComponentSize } from "../../types/tokens";
import "./file-upload.scss";

type FileUploadProps = {
  label?: string;
  buttonLabel?: string;
  noFileLabel?: string;
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
  buttonLabel,
  noFileLabel,
  accept,
  multiple = false,
  disabled = false,
  onChange,
  className,
  iconName,
  iconPosition,
  size = "medium",
  error,
  required,
  layout = "vertical",
}: FileUploadProps) => {
  const { t } = useTranslation("common");
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const actualButtonLabel = buttonLabel ?? t("fileupload_button");
  const actualNoFileLabel = noFileLabel ?? t("fileupload_no_file");

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
    : actualNoFileLabel;

  return (
    <FieldTemplate
      label={label ? t(label) : undefined}
      error={error}
      required={required}
      layout={layout}
      className={classNames(
        "wim-file-upload",
        `wim-file-upload--${size}`,
        className,
      )}
    >
      <div className="wim-file-upload__controls">
        <input
          type="file"
          ref={inputRef}
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleFileChange}
          className="wim-file-upload__input"
          aria-hidden="true"
          tabIndex={-1}
        />
        <Button
          label={actualButtonLabel}
          onClick={handleClick}
          disabled={disabled}
          priority="secondary"
          icon={iconName}
          iconPosition={iconPosition}
          size={size}
        />
        <span
          className={classNames(
            "wim-file-upload__file-names",
            `wim-file-upload__file-names--${size}`,
            disabled && "wim-file-upload__file-names--disabled",
          )}
        >
          {fileNames}
        </span>
      </div>
    </FieldTemplate>
  );
};
