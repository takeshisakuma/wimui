import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import "./file-upload.scss";

type FileUploadProps = {
    label?: string;
    buttonLabel?: string;
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
    onChange?: (files: FileList | null) => void;
    className?: string;
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
    className = "",
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
        <div className={`wim-file-upload ${className}`}>
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
                />
                <span className={`wim-file-upload__file-names ${disabled ? "wim-file-upload__file-names--disabled" : ""}`}>
                    {fileNames}
                </span>
            </div>
        </div>
    );
};

FileUpload.propTypes = {
    /**
     * コンポーネントのラベル。
     */
    label: PropTypes.string,
    /**
     * ボタンに表示するテキスト。
     */
    buttonLabel: PropTypes.string,
    /**
     * 受け付けるファイル形式（例: ".jpg,.png"）。
     */
    accept: PropTypes.string,
    /**
     * 複数のファイル選択を許可するかどうか。
     */
    multiple: PropTypes.bool,
    /**
     * 無効状態にするかどうか。
     */
    disabled: PropTypes.bool,
    /**
     * ファイルが選択された時に呼ばれるコールバック。
     */
    onChange: PropTypes.func,
    /**
     * 追加のクラス名。
     */
    className: PropTypes.string,
};
