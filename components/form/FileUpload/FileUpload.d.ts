import { default as React } from '../../../../node_modules/react';
import { Icon } from '../../media/Icon/Icon';
import { ComponentSizeBasic } from '../../../types/tokens';
type FileUploadProps = {
    /** Field label */
    label?: React.ReactNode;
    /** Label of the file selection button */
    buttonLabel?: React.ReactNode;
    /** Text shown when no file is selected */
    noFileLabel?: React.ReactNode;
    /** Accepted file types (e.g. ".jpg,.png") */
    accept?: string;
    /** Whether multiple files can be selected */
    multiple?: boolean;
    /** Whether the component is disabled */
    disabled?: boolean;
    /**
     * Names of the files the field should show — typically ones that already
     * exist on the server, from an earlier session or an earlier step.
     *
     * Controlled: while this is set, it is what the field displays, and picking
     * a file only fires `onChange`. Pass the new names back to show them. Leave
     * it undefined to let the field track its own selection.
     */
    value?: string[];
    /** Callback when files are selected */
    onChange?: (files: FileList | null) => void;
    /** Additional class names */
    className?: string;
    /** Icon name shown on the button */
    iconName?: React.ComponentProps<typeof Icon>["name"];
    /** Position of the icon relative to the button label */
    iconPosition?: "left" | "right";
    /** Size of the button */
    size?: ComponentSizeBasic;
    /** Error message */
    error?: string;
    /** Whether to show the required indicator */
    required?: boolean;
    /** Layout direction of label and field */
    layout?: "vertical" | "horizontal";
};
/**
 * Component for selecting and uploading files.
 */
export declare const FileUpload: ({ label, buttonLabel, noFileLabel, accept, multiple, disabled, value, onChange, className, iconName, iconPosition, size, error, required, layout, }: FileUploadProps) => React.JSX.Element;
export {};
