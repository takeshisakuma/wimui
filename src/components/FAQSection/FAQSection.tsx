import React from "react";
import classNames from "classnames";
import { Accordion, AccordionProps } from "../Accordion/Accordion";
import { Heading } from "../Heading/Heading";
import { Paragraph } from "../Paragraph/Paragraph";
import { useTranslation } from "react-i18next";
import "./faq-section.scss";

export interface FAQItem {
  /**
   * 質問。直前に翻訳キーを渡すか、翻訳済みの文字列を渡します。
   */
  question: string;
  /**
   * 回答。React.ReactNodeを渡せます。文字列の場合は翻訳対象となります。
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
  title?: string;
  /**
   * タイトルの下に表示される補足説明。
   */
  description?: string;
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
  const { t } = useTranslation();
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
              {t(title)}
            </Heading>
          )}
          {description && (
            <Paragraph
              content={t(description)}
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
              <Accordion.Trigger>{t(item.question)}</Accordion.Trigger>
              <Accordion.Content>
                {typeof item.answer === "string" ? t(item.answer) : item.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
