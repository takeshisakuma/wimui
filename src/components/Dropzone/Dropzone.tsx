import React, { useRef, useState } from "react";
import classNames from "classnames";
import { Icon } from "../Icon/Icon";
import "./dropzone.scss";

type DropzoneProps = {
  /**
   * コンポーネントのラベル。
   */
  label?: string;
  /**
   * ドラッグ＆ドロップエリアに表示する説明テキスト。
   */
  description?: string;
  /**
   * 受け付けるファイル形式（例: ".jpg,.png"）。
   */
  accept?: string;
  /**
   * 複数のファイル選択を許可するかどうか。
   */
  multiple?: boolean;
  /**
   * 無効状態にするかどうか。
   */
  disabled?: boolean;
  /**
   * ファイルが選択された時に呼ばれるコールバック。
   */
  onChange?: (files: FileList | null) => void;
  /**
   * 追加のクラス名。
   */
  className?: string;
  /**
   * アイコンの名前。
   */
  iconName?: React.ComponentProps<typeof Icon>["name"];
};

/**
 * ユーザーがファイルをドラッグ＆ドロップまたはクリックでアップロードするためのコンポーネント。
 */
export const Dropzone = ({
  label,
  description = "ここにファイルをドラッグ＆ドロップ、またはクリックして選択",
  accept,
  multiple = false,
  disabled = false,
  onChange,
  className,
  iconName = "UploadIcon",
}: DropzoneProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);

  const handleClick = () => {
    if (disabled) return;
    inputRef.current?.click();
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (disabled) return;
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (disabled) return;

    const droppedFiles = e.dataTransfer.files;
    setFiles(droppedFiles);
    if (onChange) {
      onChange(droppedFiles);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    setFiles(selectedFiles);
    if (onChange) {
      onChange(selectedFiles);
    }
  };

  return (
    <div className={classNames("wim-dropzone-container", className)}>
      {label && <span className="wim-dropzone__label">{label}</span>}
      <div
        className={classNames(
          "wim-dropzone",
          isDragging && "wim-dropzone--dragging",
          disabled && "wim-dropzone--disabled",
        )}
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        role="button"
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleClick();
          }
        }}
      >
        <input
          type="file"
          ref={inputRef}
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleFileChange}
          className="wim-dropzone__input"
          aria-hidden="true"
          tabIndex={-1}
        />
        <div className="wim-dropzone__content">
          {iconName && (
            <Icon
              name={iconName}
              size="large"
              className="wim-dropzone__icon"
              color={disabled ? "disabled" : "primary"}
            />
          )}
          <p className="wim-dropzone__description">{description}</p>
          {files && files.length > 0 && (
            <div className="wim-dropzone__file-list">
              {Array.from(files).map((file, index) => (
                <span key={index} className="wim-dropzone__file-name">
                  {file.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
