import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { WaterfallChart } from "wimui/charts";

const meta: Meta<typeof WaterfallChart> = {
  title: "Components/Visualization/WaterfallChart",
  component: WaterfallChart,
};

export default meta;
type Story = StoryObj<typeof WaterfallChart>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <WaterfallChart
        {...args}
        title={t("story.waterfall_title_revenue")}
        data={[
          { name: t("story.waterfall_step_revenue"), value: 1840, total: false },
          { name: t("story.waterfall_step_cogs"), value: -620 },
          { name: t("story.waterfall_step_salaries"), value: -540 },
          { name: t("story.waterfall_step_marketing"), value: -180 },
          { name: t("story.waterfall_step_other"), value: -95 },
          { name: t("story.waterfall_step_profit"), value: 0, total: true },
        ]}
      />
    );
  },
};

/**
 * 途中で小計を挟む形。**`total` の段は running total まで引く**ので、
 * そこまでの積み上げが 1 本で読める。
 */
export const WithSubtotal: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <WaterfallChart
        {...args}
        title={t("story.waterfall_title_headcount")}
        height={340}
        data={[
          { name: t("story.waterfall_step_opening"), value: 128 },
          { name: t("story.waterfall_step_hired"), value: 21 },
          { name: t("story.waterfall_step_left"), value: -9 },
          { name: t("story.waterfall_step_midyear"), value: 0, total: true },
          { name: t("story.waterfall_step_transferred"), value: 6 },
          { name: t("story.waterfall_step_ended"), value: -4 },
          { name: t("story.waterfall_step_closing"), value: 0, total: true },
        ]}
      />
    );
  },
};

/**
 * 合計が下に振れる場合。running total が 0 を割っても、棒は 0 をまたいで
 * 正しい向きに描かれる。
 */
export const GoesNegative: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <WaterfallChart
        {...args}
        aria-label={t("story.waterfall_title_cash")}
        height={280}
        data={[
          { name: t("story.waterfall_step_opening"), value: 240 },
          { name: t("story.waterfall_step_refunds"), value: -410 },
          { name: t("story.waterfall_step_topup"), value: 120 },
          { name: t("story.waterfall_step_closing"), value: 0, total: true },
        ]}
      />
    );
  },
};
