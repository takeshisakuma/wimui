import React, { useRef, useState } from "react";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { InteractiveArea } from "../../layout/InteractiveArea/InteractiveArea";
import { FieldTemplate } from "../../_internal/FieldTemplate/FieldTemplate";
import "./dropzone.scss";

type DropzoneProps = {
  /**
   * コンポーネントのラベル。
   */
  label?: React.ReactNode;
  /**
   * ドラッグ＆ドロップエリアに表示する説明テキスト。
   */
  description?: React.ReactNode;
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
  /**
   * エラーメッセージ
   */
  error?: string;
  /**
   * 必須表示にするかどうか
   */
  required?: boolean;
  /**
   * レイアウト方向
   */
  layout?: "vertical" | "horizontal";
};

/**
 * ユーザーがファイルをドラッグ＆ドロップまたはクリックでアップロードするためのコンポーネント。
 */
export const Dropzone = ({
  label,
  description = "Drag and drop files here, or click to select",
  accept,
  multiple = false,
  disabled = false,
  onChange,
  className,
  iconName = "UploadIcon",
  error,
  required,
  layout = "vertical",
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
    <FieldTemplate
      label={label}
      error={error}
      required={required}
      layout={layout}
      className={classNames("wim-dropzone-container", className)}
    >
      <InteractiveArea
        className="wim-dropzone"
        isDragging={isDragging}
        disabled={disabled}
        isClickable={!disabled}
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleClick();
          }
        }}
        icon={
          iconName && (
            <Icon
              name={iconName}
              size="lg"
              color={disabled ? "disabled" : "primary"}
            />
          )
        }
        description={description}
      >
        <input
          type="file"
          ref={inputRef}
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleFileChange}
          className="wim-dropzone__input"
          style={{ display: "none" }}
          aria-hidden="true"
          tabIndex={-1}
        />
        {files && files.length > 0 && (
          <div className="wim-dropzone__file-list">
            {Array.from(files).map((file, index) => (
              <span key={index} className="wim-dropzone__file-name">
                {file.name}
              </span>
            ))}
          </div>
        )}
      </InteractiveArea>
    </FieldTemplate>
  );
};
