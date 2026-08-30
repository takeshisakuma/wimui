import { default as React } from '../../../../node_modules/react';
import { Components } from 'react-markdown';
export interface StreamingTextProps extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
    /** The markdown text content to render */
    content: string;
    /** When true, a blinking cursor is shown at the end of the content */
    isStreaming?: boolean;
    /** Override the default markdown component renderers */
    components?: Components;
    /** Additional CSS class */
    className?: string;
}
/**
 * StreamingText renders AI-generated markdown with an optional blinking cursor.
 * Use aria-live="polite" for graceful screen reader announcements during streaming.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const StreamingText: React.ForwardRefExoticComponent<StreamingTextProps & React.RefAttributes<HTMLDivElement>>;
