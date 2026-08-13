import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { CodeBlock } from "../CodeBlock/CodeBlock";
import { Title, type TitleProps } from "../../typography/Title/Title";
import { Text } from "../../typography/Text/Text";
import { Link } from "../../navigation/Link/Link";
import { Blockquote } from "../../typography/Blockquote/Blockquote";
import styles from "./markdown-renderer.module.scss";

/** Title sizes, smallest first. Markdown h1 starts at `baseLevel`; h2–h4 step down. */
const TITLE_SIZE_STEPS = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] as const satisfies readonly NonNullable<TitleProps["size"]>[];

export type MarkdownHeadingSize = (typeof TITLE_SIZE_STEPS)[number];

function sizeForMarkdownHeading(
  markdownLevel: 1 | 2 | 3 | 4,
  baseLevel: MarkdownHeadingSize,
): MarkdownHeadingSize {
  const baseIndex = TITLE_SIZE_STEPS.indexOf(baseLevel);
  return TITLE_SIZE_STEPS[Math.max(0, baseIndex - (markdownLevel - 1))];
}

export interface MarkdownRendererProps {
  /** The markdown string to render */
  content: string;
  /**
   * Visual size of markdown `h1`. `h2`–`h4` step one Title size down from this,
   * clamped at `xs`. Does not change the HTML heading tag — that stays as
   * written in the markdown. Default `"2xl"` keeps the historical mapping
   * (`h1` 2xl / `h2` xl / `h3` lg / `h4` md).
   */
  baseLevel?: (typeof TITLE_SIZE_STEPS)[number];
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
  baseLevel = "2xl",
  className,
}) => {
  const { t } = useWimTranslation("form");
  return (
    <div className={classNames("wim-markdown-renderer", styles.root, className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          /* T160: HTML の段は markdown のまま。動かすのは Title の size だけ。
             既定 2xl は従来の h1→2xl / h2→xl / h3→lg / h4→md。ページ見出しが
             md なら baseLevel="md" で ## が sm になり、本文が見出しを上回らない。 */
          h1: ({ children }) => <Title tag="h1" size={sizeForMarkdownHeading(1, baseLevel)} className={styles.heading}>{children}</Title>,
          h2: ({ children }) => <Title tag="h2" size={sizeForMarkdownHeading(2, baseLevel)} className={styles.heading}>{children}</Title>,
          h3: ({ children }) => <Title tag="h3" size={sizeForMarkdownHeading(3, baseLevel)} className={styles.heading}>{children}</Title>,
          h4: ({ children }) => <Title tag="h4" size={sizeForMarkdownHeading(4, baseLevel)} className={styles.heading}>{children}</Title>,
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
          // GFM タスクリストの checkbox は remark-gfm が名無しで出力するため
          // 状態を表す aria-label を補う（axe: label）
          input: ({ type, checked, disabled }) =>
            type === "checkbox" ? (
              <input
                type="checkbox"
                checked={checked}
                disabled={disabled}
                readOnly
                aria-label={checked ? t("markdown.task_done") : t("markdown.task_todo")}
              />
            ) : null,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

MarkdownRenderer.displayName = "MarkdownRenderer";
