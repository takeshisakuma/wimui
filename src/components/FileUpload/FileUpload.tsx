import React, { useRef, useState } from "react";
import classNames from "classnames";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import "./file-upload.scss";

type FileUploadProps = {
  label?: string;
  buttonLabel?: string;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  onChange?: (files: FileList | null) => void;
  className?: string;
  iconName?: React.ComponentProps<typeof Icon>["name"];
  iconPosition?: "left" | "right";
  size?: "small" | "medium" | "large";
};

/**
 * ユーザーがファイルを選択・アップロードするためのコンポーネント。
 */
export const FileUpload = ({
  label,
  buttonLabel = "ファイルを選択",
  accept,
  multiple = false,
  disabled = false,
  onChange,
  className,
  iconName,
  iconPosition,
  size = "medium",
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
    : "選択されていません";

  return (
    <div
      className={classNames(
        "wim-file-upload",
        `wim-file-upload--${size}`,
        className,
      )}
    >
      {label && <span className="wim-file-upload__label">{label}</span>}
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
          state={disabled ? "disabled" : "abled"}
          priority="secondary"
          iconName={iconName}
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
    </div>
  );
};
