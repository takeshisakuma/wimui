import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import { Accordion, Banner, Notification, Stack, Text } from "wimui";
import styles from "./probe.module.scss";

/**
 * T180 の 4 本目のプローブ。銭湯の閉店作業。
 * `Banner`（本日 21:00 閉館）/ `Notification`（3番の鍵が戻っていない）/
 * `Accordion`（いま開いているのは脱衣カゴ。洗い場はまだ）。
 * 確認が終わったらこの画面は捨てる。
 */
const meta = {
  title: "Probes/KomatsuYu",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ns = (k: string) => `docs_stories_probes:komatsu.${k}`;

export const Lockup: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div className={styles.page}>
        <div className={styles.chrome}>
          <div className={styles.shop}>
            <Text size="sm" color="text-secondary">
              {t(ns("shop"))}
            </Text>
          </div>
          <Banner
            intent="warning"
            title={t(ns("banner_title"))}
            description={t(ns("banner_desc"))}
          />
        </div>
        <Stack gap="md" className={styles.work}>
          <Notification
            intent="danger"
            title={t(ns("note_title"))}
            description={t(ns("note_desc"))}
          />
          <Accordion type="single" defaultValue="lockers" collapsible>
            <Accordion.Item value="lockers">
              <Accordion.Trigger>{t(ns("lockers_trigger"))}</Accordion.Trigger>
              <Accordion.Content>{t(ns("lockers_body"))}</Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="taps">
              <Accordion.Trigger>{t(ns("taps_trigger"))}</Accordion.Trigger>
              <Accordion.Content>{t(ns("taps_body"))}</Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </Stack>
      </div>
    );
  },
};
