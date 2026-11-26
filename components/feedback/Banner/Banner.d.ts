import { default as React } from '../../../../node_modules/react';
import { FeedbackIntent } from '../../../types/tokens';
type BannerProps = {
    /**
     * Title of the banner
     */
    title?: React.ReactNode;
    /**
     * Description text of the banner
     */
    description?: React.ReactNode;
    /**
     * Intent (semantic state) of the banner
     * @default "default"
     */
    intent?: FeedbackIntent;
    /**
     * Whether to show the icon, or a custom icon element
     * @default true
     */
    icon?: boolean | React.ReactNode;
    /**
     * Action element (e.g. a Button component)
     */
    extra?: React.ReactNode;
    /**
     * Called when the close button is clicked. Providing it shows the close button. When the close button disappears while it has focus, focus moves to the focusable element just before the component. To send it somewhere else, move focus inside this callback.
     */
    onClose?: () => void;
    /**
     * Additional CSS class name
     */
    className?: string;
    /**
     * Content of the banner
     */
    children?: React.ReactNode;
};
/**
 * Banner for presenting an important message or action to the user.
 * Usually displayed at the top of the page.
 */
export declare const Banner: ({ title, description, intent, icon, extra, onClose, className, children, ...props }: BannerProps) => React.JSX.Element;
export {};
