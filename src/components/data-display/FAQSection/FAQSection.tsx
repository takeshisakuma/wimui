import React from "react";
import classNames from "classnames";
import { Accordion, AccordionProps } from "../../data-display/Accordion/Accordion";
import { Heading } from "../../typography/Heading/Heading";
import { Paragraph } from "../../typography/Paragraph/Paragraph";
import "./faq-section.scss";

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
        "wim-faq-section",
        `wim-faq-section--layout-${layout}`,
        className
      )}
    >
      {hasHeader && (
        <div className="wim-faq-section__header">
          {title && (
            <Heading tag="h2" size="xl" className="wim-faq-section__title">
              {title}
            </Heading>
          )}
          {description && (
            <Paragraph
              content={description}
              color="deepgray"
              className="wim-faq-section__description"
            />
          )}
        </div>
      )}

      <div className="wim-faq-section__content">
        <Accordion
          type="multiple"
          collapsible
          {...accordionProps}
          className={classNames(
            "wim-faq-section__accordion",
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
