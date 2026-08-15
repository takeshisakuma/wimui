import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import { Indicator, ProgressRing, Text, Title } from "wimui";
import { QRCode } from "wimui/data-display/qr-code";
import styles from "./probe.module.scss";

/**
 * T180 の 5 本目のプローブ。コインランドリーの 4 号機の前。
 * `ProgressRing`（32 分コース、経過 20 分）/ `Indicator`（稼働中）/
 * `QRCode`（扉に貼ってある号機の番号）。
 * 確認が終わったらこの画面は捨てる。
 */
const meta = {
  title: "Probes/SunriseLaundry",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ns = (k: string) => `docs_stories_probes:sunrise.${k}`;

export const Lockup: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div className={styles.page}>
        <div className={styles.work}>
          <div className={styles.shop}>
            <Text size="sm" color="text-secondary">
              {t(ns("shop"))}
            </Text>
            <Text size="sm" color="text-secondary">
              {t(ns("when"))}
            </Text>
          </div>
          <div className={styles.now}>
            <Indicator color="warning" pulse>
              <Text asChild size="sm" color="text-secondary">
                <span>{t(ns("machine"))}</span>
              </Text>
            </Indicator>
            <Title tag="h1" size="xl">
              {t(ns("remaining"))}
            </Title>
            <ProgressRing
              size="lg"
              value={20}
              max={32}
              aria-label={t(ns("remaining"))}
            />
          </div>
          <div className={styles.sticker}>
            <QRCode value="SUNRISE-NAKANO-4" aria-label={t(ns("qr_caption"))} />
            <Text size="sm" color="text-secondary">
              {t(ns("qr_caption"))}
            </Text>
          </div>
          <Text size="sm" color="text-secondary" className={styles.note}>
            {t(ns("note"))}
          </Text>
        </div>
      </div>
    );
  },
};
