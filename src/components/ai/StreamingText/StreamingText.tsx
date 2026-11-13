import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import { useAnnounce } from "../../_internal/useAnnounce";
import { useMergedRef } from "../../../hooks/useMergedRef";
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
 * While `isStreaming` is true the text is marked `aria-busy` and not announced chunk by chunk; when streaming ends, the finished text is announced once to screen readers.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const StreamingText = React.forwardRef<HTMLDivElement, StreamingTextProps>(
  ({ content, isStreaming = false, components, className, ...props }, ref) => {
    // 流れている途中は告げない。数文字ずつ書き足すたびに読み直され、同じところを何度も読む・
    // 言語の切り替えや箇条書きの位置を挟み続ける（T353。ナレーター + Chrome）。途中は aria-busy で
    // 「書いている途中」とだけ示し、流れ終わったら、書き上がった本文を先に在る領域へ 1 回だけ書く
    const rootRef = useRef<HTMLDivElement>(null);
    const mergedRef = useMergedRef(ref, rootRef);
    const { announce, region } = useAnnounce();
    const wasStreaming = useRef(isStreaming);
    useEffect(() => {
      if (wasStreaming.current && !isStreaming && rootRef.current) {
        // 領域そのもの（role="status"）を除いた、描かれた本文の文字
        const text = Array.from(rootRef.current.children)
          .filter((el) => el.getAttribute("role") !== "status")
          .map((el) => el.textContent ?? "")
          .join(" ")
          .replace(/s+/g, " ")
          .trim();
        if (text) announce(text);
      }
      wasStreaming.current = isStreaming;
    }, [isStreaming, announce]);

    return (
      <div
        ref={mergedRef}
        className={classNames("wim-streaming-text", styles.root, className)}
        aria-busy={isStreaming || undefined}
        {...props}
      >
        {region}
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
          {content}
        </ReactMarkdown>
        {isStreaming && <span className={styles.cursor} aria-hidden="true" />}
      </div>
    );
  }
);

StreamingText.displayName = "StreamingText";
