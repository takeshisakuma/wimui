import { default as React } from '../../../node_modules/react';
import { Icon } from '../Icon/Icon';
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
export declare const Dropzone: ({ label, description, accept, multiple, disabled, onChange, className, iconName, }: DropzoneProps) => import("react/jsx-runtime").JSX.Element;
export {};
