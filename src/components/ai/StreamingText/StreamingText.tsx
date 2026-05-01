import React from "react";
import classNames from "classnames";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import styles from "./streaming-text.module.scss";

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
export const StreamingText = React.forwardRef<HTMLDivElement, StreamingTextProps>(
  ({ content, isStreaming = false, components, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(styles.root, isStreaming && styles.streaming, className)}
        aria-live={isStreaming ? "polite" : undefined}
        aria-atomic={isStreaming ? "false" : undefined}
        {...props}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
          {content}
        </ReactMarkdown>
        {isStreaming && <span className={styles.cursor} aria-hidden="true" />}
      </div>
    );
  }
);

StreamingText.displayName = "StreamingText";
