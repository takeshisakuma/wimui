import { default as React } from '../../../../node_modules/react';
import { Icon } from '../../media/Icon/Icon';
import { InteractiveAreaProps } from '../../layout/InteractiveArea/InteractiveArea';
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
export declare const Dropzone: ({ label, description, accept, multiple, disabled, value, onChange, className, iconName, error, required, layout, size, }: DropzoneProps) => React.JSX.Element;
export {};
