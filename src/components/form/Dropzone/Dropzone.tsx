import React, { useRef, useState } from "react";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { InteractiveArea, InteractiveAreaProps } from "../../layout/InteractiveArea/InteractiveArea";
import { FieldTemplate } from "../FieldTemplate";
import styles from "./dropzone.module.scss";

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
  /**
   * サイズ
   */
  size?: InteractiveAreaProps["size"];
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
  size = "md",
}: DropzoneProps) => {
  const generatedId = React.useId();
  const id = `wim-dropzone-${generatedId}`;
  const labelId = label ? `${id}-label` : undefined;
  const errorId = error ? `${id}-error` : undefined;

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
      labelId={labelId}
      errorId={errorId}
      className={classNames(styles.container, className)}
    >
      <InteractiveArea
        className={styles.dropzone}
        size={size}
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
        aria-labelledby={labelId}
        aria-describedby={errorId}
        aria-required={required}
        aria-invalid={!!error}
        icon={
          iconName && (
            <Icon
              name={iconName}
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
          style={{ display: "none" }}
          aria-hidden="true"
          tabIndex={-1}
        />
        {files && files.length > 0 && (
          <div className={styles.fileList}>
            {Array.from(files).map((file, index) => (
              <span key={index} className={styles.fileName}>
                {file.name}
              </span>
            ))}
          </div>
        )}
      </InteractiveArea>
    </FieldTemplate>
  );
};
