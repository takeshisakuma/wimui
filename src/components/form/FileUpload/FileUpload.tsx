import React, { useRef, useState } from "react";
import classNames from "classnames";
import { Button } from "../../form/Button/Button";
import { Icon } from "../../media/Icon/Icon";
import { FieldTemplate } from "../../_internal/FieldTemplate/FieldTemplate";
import { ComponentSize } from "../../../types/tokens";
import "./file-upload.scss";

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
          label={buttonLabel}
          onClick={handleClick}
          disabled={disabled}
          variant="outlined"
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
