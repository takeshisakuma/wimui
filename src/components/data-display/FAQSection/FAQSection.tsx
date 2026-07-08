import React from "react";
import classNames from "classnames";
import { Accordion, AccordionProps } from "../../data-display/Accordion/Accordion";
import { Title } from "../../typography/Title/Title";
import { Text } from "../../typography/Text/Text";
import styles from "./faq-section.module.scss";

export interface FAQItem {
  /** Question. */
  question: React.ReactNode;
  /** Answer. */
  answer: React.ReactNode;
}

export interface FAQSectionProps {
  /** FAQ items. */
  items: FAQItem[];
  /** Main title of the section. */
  title?: React.ReactNode;
  /** Supplementary description shown below the title. */
  description?: React.ReactNode;
  /**
   * Layout.
   * - top: title and description above the accordion.
   * - left: title and description on the left, accordion on the right (desktop and up).
   */
  layout?: "top" | "left";
  /** Props passed to the inner Accordion component. */
  accordionProps?: Omit<AccordionProps, "children">;
  /** Additional class names. */
  className?: string;
}

/**
 * Section component for displaying frequently asked questions (FAQ).
 * Built on top of the existing Accordion component.
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
              color="text-secondary"
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
