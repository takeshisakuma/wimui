import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import classNames from "classnames";
import styles from "./markdown.module.scss";

export interface MarkdownProps {
  /** Markdown string to render. Provide either `content` or `children`. */
  content?: string;
  /** Markdown string to render (when passed as children). */
  children?: string;
  /** Whether to enable GitHub Flavored Markdown (default: true). */
  gfm?: boolean;
  /** Additional class names. */
  className?: string;
}

/**
 * Renders a Markdown string as HTML styled according to wim UI.
 */
export const Markdown = ({ content, children, gfm = true, className }: MarkdownProps) => {
  const markdownContent = content ?? children ?? "";
  return (
    <div className={classNames("wim-markdown", styles.root, className)}>
      <ReactMarkdown
        remarkPlugins={gfm ? [remarkGfm] : []}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};
