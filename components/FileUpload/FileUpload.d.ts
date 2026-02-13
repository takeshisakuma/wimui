import { default as React } from '../../../node_modules/react';
import { Icon } from '../Icon/Icon';
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
};
/**
 * ユーザーがファイルを選択・アップロードするためのコンポーネント。
 */
export declare const FileUpload: ({ label, buttonLabel, accept, multiple, disabled, onChange, className, iconName, iconPosition, }: FileUploadProps) => import("react/jsx-runtime").JSX.Element;
export {};
