import { default as React } from '../../../../node_modules/react';
import { AccordionProps } from '../../data-display/Accordion/Accordion';
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
export declare const FAQSection: ({ items, title, description, layout, accordionProps, className, }: FAQSectionProps) => import("react/jsx-runtime").JSX.Element;
