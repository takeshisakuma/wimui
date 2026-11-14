import { default as React } from '../../../../node_modules/react';
import { FeedbackIntent } from '../../../types/tokens';
type AlertProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * Title of the alert
     */
    title?: React.ReactNode;
    /**
     * HTML tag used for the alert title.
     *
     * The default is a `div`: an alert is a notice, not a section of the
     * document, so its title does not belong in the heading outline. Making it
     * one also breaks `heading-order` as soon as the alert sits under anything
     * other than an `h3`. Pass a heading only when the alert really does head a
     * section of the page.
     *
     * @default "div"
     */
    titleTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "p" | "strong" | "span";
    /**
     * Description text of the alert
     */
    description?: React.ReactNode;
    /**
     * Intent (semantic state) of the alert
     * @default "default"
     */
    intent?: FeedbackIntent;
    /**
     * Custom icon. When omitted, a default icon matching the intent is displayed.
     */
    icon?: React.ReactNode;
    /**
     * Called when the close button is clicked. Providing it shows the close button.
     */
    onClose?: () => void;
    /**
     * Additional CSS class name
     */
    className?: string;
    /**
     * Content of the alert (treated as the description)
     */
    children?: React.ReactNode;
};
/**
 * Alert for communicating important information to the user.
 */
export declare const Alert: ({ title, titleTag: TitleTag, description, intent, icon, onClose, className, children, ...props }: AlertProps) => React.JSX.Element | null;
export {};
