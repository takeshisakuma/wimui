import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import classNames from "classnames";
import "./markdown.scss";

export type MarkdownProps = {
  /**
   * レンダリングするMarkdown文字列。
   */
  children: string;
  /**
   * クラス名。
   */
  className?: string;
  /**
   * remarkGfm などのプラグインを使用するかどうか。デフォルトは `true`。
   */
  gfm?: boolean;
};

/**
 * Markdown形式のテキストを安全にレンダリングするためのコンポーネント。
 */
export const Markdown = ({
  children,
  className,
  gfm = true,
  ...props
}: MarkdownProps) => {
  const remarkPlugins = gfm ? [remarkGfm] : [];

  return (
    <div className={classNames("wim-markdown", className)} {...props}>
      <ReactMarkdown remarkPlugins={remarkPlugins}>{children}</ReactMarkdown>
    </div>
  );
};
