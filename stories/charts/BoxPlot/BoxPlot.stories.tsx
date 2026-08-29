import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { BoxPlot } from "wimui/charts";

const meta: Meta<typeof BoxPlot> = {
  title: "Components/Visualization/BoxPlot",
  component: BoxPlot,
};

export default meta;
type Story = StoryObj<typeof BoxPlot>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <BoxPlot
        {...args}
        title={t("story.boxplot_title_latency")}
        data={[
          { name: "/search", min: 41, q1: 78, median: 112, q3: 189, max: 402 },
          { name: "/checkout", min: 96, q1: 134, median: 168, q3: 214, max: 318 },
          { name: "/profile", min: 28, q1: 39, median: 47, q3: 58, max: 91 },
          { name: "/upload", min: 120, q1: 198, median: 264, q3: 372, max: 548 },
        ]}
      />
    );
  },
};

/**
 * 中央値が箱の真ん中に無いとき。**平均だけを棒で見ていると同じに見える群**が、
 * ここでは形で分かれる。
 */
export const SkewedDistributions: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <BoxPlot
        {...args}
        title={t("story.boxplot_title_salary")}
        height={340}
        data={[
          { name: t("story.boxplot_group_support"), min: 32, q1: 38, median: 41, q3: 46, max: 58 },
          { name: t("story.boxplot_group_engineering"), min: 58, q1: 74, median: 86, q3: 118, max: 210 },
          { name: t("story.boxplot_group_sales"), min: 40, q1: 49, median: 55, q3: 92, max: 240 },
        ]}
      />
    );
  },
};

/**
 * 群どうしで桁が違うとき。**1 つだけ桁の大きい群があると、他は線に潰れる** ──
 * 図の限界であって欠陥ではないので、そのまま見せる（対数軸は持っていない）。
 * 表には 5 つの数がそのまま出るので、潰れた群の値はそこで読める。
 */
export const OrdersOfMagnitude: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <BoxPlot
        {...args}
        title={t("story.boxplot_title_latency")}
        height={300}
        data={[
          { name: "/search", min: 41, q1: 78, median: 112, q3: 189, max: 402 },
          { name: "/checkout", min: 96, q1: 134, median: 168, q3: 214, max: 318 },
          { name: "/profile", min: 28, q1: 39, median: 47, q3: 58, max: 91 },
          { name: "/upload", min: 210, q1: 388, median: 604, q3: 1120, max: 2380 },
        ]}
      />
    );
  },
};

/**
 * 値が 1 つしか無い群（四分位範囲が 0）。箱が潰れても線として残る ──
 * 何も描かないと「その群が無い」ように読まれる。
 */
export const SingleValueGroup: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <BoxPlot
        {...args}
        aria-label={t("story.boxplot_title_latency")}
        height={260}
        data={[
          { name: "/search", min: 41, q1: 78, median: 112, q3: 189, max: 402 },
          { name: "/status", min: 12, q1: 12, median: 12, q3: 12, max: 12 },
          { name: "/profile", min: 28, q1: 39, median: 47, q3: 58, max: 91 },
        ]}
      />
    );
  },
};
