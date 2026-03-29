import { default as React } from '../../../node_modules/react';
import { Icon } from '../Icon/Icon';
import { ComponentSize } from '../../types/tokens';
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
export declare const FileUpload: ({ label, buttonLabel, noFileLabel, accept, multiple, disabled, onChange, className, iconName, iconPosition, size, error, required, layout, }: FileUploadProps) => import("react/jsx-runtime").JSX.Element;
export {};
