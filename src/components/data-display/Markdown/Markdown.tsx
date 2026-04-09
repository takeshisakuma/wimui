import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import classNames from "classnames";
import styles from "./markdown.module.scss";

export interface MarkdownProps {
  /**
   * レンダリングするMarkdown文字列。`content` または `children` のどちらかで指定できます。
   */
  content?: string;
  /**
   * レンダリングするMarkdown文字列（children として渡す場合）。
   */
  children?: string;
  /**
   * GitHub Flavored Markdown を有効にするかどうか（デフォルト: true）。
   */
  gfm?: boolean;
  /**
   * 追加のクラス名。
   */
  className?: string;
}

/**
 * Markdown形式の文字列を、wim UIのスタイルに従ったHTMLに変換して表示します。
 */
export const Markdown = ({ content, children, gfm = true, className }: MarkdownProps) => {
  const markdownContent = content ?? children ?? "";
  return (
    <div className={classNames(styles.root, className)}>
      <ReactMarkdown
        remarkPlugins={gfm ? [remarkGfm] : []}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};
