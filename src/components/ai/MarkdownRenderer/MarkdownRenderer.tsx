import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import classNames from "classnames";
import { CodeBlock } from "../CodeBlock/CodeBlock";
import { Title } from "../../typography/Title/Title";
import { Text } from "../../typography/Text/Text";
import { Link } from "../../navigation/Link/Link";
import { Blockquote } from "../../typography/Blockquote/Blockquote";
import styles from "./markdown-renderer.module.scss";

export interface MarkdownRendererProps {
  /** The markdown string to render */
  content: string;
  /** Additional CSS class for the root element */
  className?: string;
  /** Whether to render titles with anchor links (default: false) */
  withAnchors?: boolean;
}

/**
 * MarkdownRenderer converts a markdown string into WIM UI components.
 * It uses react-markdown under the hood and applies WIM's typography system.
 */
export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  className,
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <Title tag="h1" size="2xl" className={styles.heading}>{children}</Title>,
          h2: ({ children }) => <Title tag="h2" size="xl" className={styles.heading}>{children}</Title>,
          h3: ({ children }) => <Title tag="h3" size="lg" className={styles.heading}>{children}</Title>,
          h4: ({ children }) => <Title tag="h4" size="md" className={styles.heading}>{children}</Title>,
          p: ({ children }) => <Text className={styles.paragraph}>{children}</Text>,
          a: ({ href, children }) => <Link href={href}>{children}</Link>,
          blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
          ul: ({ children }) => <ul className={styles.list}>{children}</ul>,
          ol: ({ children }) => <ol className={styles.list}>{children}</ol>,
          li: ({ children }) => <li className={styles.listItem}>{children}</li>,
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            const isInline = !match;
            if (isInline) {
              return (
                <code className={styles.inlineCode} {...props}>
                  {children}
                </code>
              );
            }
            return (
              <CodeBlock
                code={String(children).replace(/\n$/, "")}
                language={match[1]}
                className={styles.codeBlock}
              />
            );
          },
          table: ({ children }) => (
            <div className={styles.tableWrapper}>
              <table className={styles.table}>{children}</table>
            </div>
          ),
          th: ({ children }) => <th className={styles.th}>{children}</th>,
          td: ({ children }) => <td className={styles.td}>{children}</td>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

MarkdownRenderer.displayName = "MarkdownRenderer";
