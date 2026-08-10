import React, { useRef, useState } from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { Icon } from "../../media/Icon/Icon";
import { InteractiveArea, InteractiveAreaProps } from "../../layout/InteractiveArea/InteractiveArea";
import { FieldTemplate } from "../FieldTemplate";
import styles from "./dropzone.module.scss";

type DropzoneProps = {
  /** Field label. */
  label?: React.ReactNode;
  /** Description text shown in the drag-and-drop area. */
  description?: React.ReactNode;
  /** Accepted file types (e.g. ".jpg,.png"). */
  accept?: string;
  /** Whether multiple files can be selected. */
  multiple?: boolean;
  /** Whether the component is disabled. */
  disabled?: boolean;
  /**
   * Names of the files the area should list — typically ones that already
   * exist on the server, from an earlier session or an earlier step.
   *
   * Controlled: while this is set, it is what the area lists, and dropping or
   * picking a file only fires `onChange`. Pass the new names back to show
   * them. Leave it undefined to let the area track its own selection.
   */
  value?: string[];
  /** Callback when files are selected. */
  onChange?: (files: FileList | null) => void;
  /** Additional class names. */
  className?: string;
  /** Icon name shown in the drop area. */
  iconName?: React.ComponentProps<typeof Icon>["name"];
  /** Error message */
  error?: string;
  /** Whether to show the required indicator */
  required?: boolean;
  /** Layout direction of label and field */
  layout?: "vertical" | "horizontal";
  /** Size of the drop area */
  size?: InteractiveAreaProps["size"];
};

/**
 * Component for uploading files by drag and drop or by clicking.
 */
export const Dropzone = ({
  label,
  description,
  accept,
  multiple = false,
  disabled = false,
  value,
  onChange,
  className,
  iconName = "UploadIcon",
  error,
  required,
  layout = "vertical",
  size = "md",
}: DropzoneProps) => {
  const { t } = useWimTranslation("form");
  const resolvedDescription = description ?? t("dropzone.description");
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

  // value が渡っていればそれが表示のすべて。マウント時点で反映されることが
  // 要点で、そこを差分でしか見ないと「保存済みのファイルが消える」になる
  // （OtpInput が踏んだのと同じ形）。
  const displayNames =
    value !== undefined
      ? value
      : files
        ? Array.from(files).map((file) => file.name)
        : [];

  return (
    <FieldTemplate
      label={label}
      error={error}
      required={required}
      layout={layout}
      labelId={labelId}
      errorId={errorId}
      className={classNames("wim-dropzone", styles.container, className)}
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
      <InteractiveArea
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
        description={resolvedDescription}
      >
        {displayNames.length > 0 ? (
          <div className={styles.fileList}>
            {displayNames.map((name, index) => (
              <span key={index} className={styles.fileName}>
                {name}
              </span>
            ))}
          </div>
        ) : null}
      </InteractiveArea>
    </FieldTemplate>
  );
};
