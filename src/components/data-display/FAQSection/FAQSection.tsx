import React from "react";
import classNames from "classnames";
import { Accordion, AccordionProps } from "../../data-display/Accordion/Accordion";
import { Title } from "../../typography/Title/Title";
import { Text } from "../../typography/Text/Text";
import styles from "./faq-section.module.scss";

export interface FAQItem {
  /**
   * 質問。
   */
  question: React.ReactNode;
  /**
   * 回答。
   */
  answer: React.ReactNode;
}

export interface FAQSectionProps {
  /**
   * FAQの各項目。
   */
  items: FAQItem[];
  /**
   * セクションのメインタイトル。
   */
  title?: React.ReactNode;
  /**
   * タイトルの下に表示される補足説明。
   */
  description?: React.ReactNode;
  /**
   * レイアウト。
   * - top: タイトルと説明をアコーディオンの上に配置。
   * - left: タイトルと説明を左側、アコーディオンを右側に配置 (デスクトップ以上)。
   */
  layout?: "top" | "left";
  /**
   * 内部のAccordionコンポーネントに渡すProps。
   */
  accordionProps?: Omit<AccordionProps, "children">;
  /**
   * 追加のクラス名。
   */
  className?: string;
}

/**
 * よくある質問 (FAQ)を表示するためのセクションコンポーネント。
 * 既存のAccordionコンポーネントを活用して構築されています。
 */
export const FAQSection = ({
  items,
  title,
  description,
  layout = "top",
  accordionProps,
  className,
}: FAQSectionProps) => {
  const hasHeader = !!(title || description);

  return (
    <section
      className={classNames(
        styles.root,
        styles[`layout-${layout}`],
        className
      )}
    >
      {hasHeader && (
        <div className={styles.header}>
          {title && (
            <Title tag="h2" size="xl" className={styles.title}>
              {title}
            </Title>
          )}
          {description && (
            <Text
              content={description}
              color="deepgray"
              className={styles.description}
            />
          )}
        </div>
      )}

      <div className={styles.content}>
        <Accordion
          type="multiple"
          collapsible
          {...accordionProps}
          className={classNames(
            styles.accordion,
            accordionProps?.className
          )}
        >
          {items.map((item, index) => (
            <Accordion.Item key={index} value={`faq-item-${index}`}>
              <Accordion.Trigger>{item.question}</Accordion.Trigger>
              <Accordion.Content>
                {item.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
