import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import { Blockquote, FAQSection, Spoiler, Text } from "wimui";
import styles from "./probe.module.scss";

/**
 * T180 の 6 本目のプローブ。マンション掲示板の駐輪の決まり。
 * `FAQSection`（いま開いているのは置き場）/ `Spoiler`（長い注意の続き）/
 * `Blockquote`（管理人の追記）。
 * 確認が終わったらこの画面は捨てる。
 */
const meta = {
  title: "Probes/CopoSakura",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ns = (k: string) => `docs_stories_probes:sakura.${k}`;

export const Lockup: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div className={styles.page}>
        <div className={styles.work}>
          <Text size="sm" color="text-secondary">
            {t(ns("board"))}
          </Text>
          <FAQSection
            title={t(ns("title"))}
            description={t(ns("desc"))}
            accordionProps={{
              type: "single",
              defaultValue: "faq-item-0",
              collapsible: true,
            }}
            items={[
              {
                question: t(ns("q_bike")),
                answer: (
                  <>
                    <Text>{t(ns("a_bike_lead"))}</Text>
                    <Spoiler lines={3}>{t(ns("a_bike_rest"))}</Spoiler>
                  </>
                ),
              },
              {
                question: t(ns("q_guest")),
                answer: t(ns("a_guest")),
              },
            ]}
          />
          <Blockquote cite={t(ns("cite"))} className={styles.note}>
            {t(ns("quote"))}
          </Blockquote>
        </div>
      </div>
    );
  },
};
