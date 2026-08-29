import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { SankeyChart } from "wimui/charts";

const meta: Meta<typeof SankeyChart> = {
  title: "Components/Visualization/SankeyChart",
  component: SankeyChart,
};

export default meta;
type Story = StoryObj<typeof SankeyChart>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    // `nodes` の並び順が色の並び順なので、5 番目は CHART_COLORS の danger に当たる。
    // 「登録」をそこに置くと成功の出口が赤くなるため、離脱のほうを先に置く。
    const nodes = [
      t("story.sankey_node_search"),
      t("story.sankey_node_direct"),
      t("story.sankey_node_newsletter"),
      t("story.sankey_node_pricing"),
      t("story.sankey_node_left"),
      t("story.sankey_node_signup"),
    ];
    const [search, direct, newsletter, pricing, left, signedUp] = nodes;
    return (
      <SankeyChart
        {...args}
        title={t("story.sankey_title_traffic")}
        nodes={nodes}
        links={[
          { source: search, target: pricing, value: 2840 },
          { source: search, target: left, value: 1160 },
          { source: direct, target: pricing, value: 910 },
          { source: direct, target: left, value: 430 },
          { source: newsletter, target: pricing, value: 260 },
          { source: pricing, target: signedUp, value: 1490 },
          { source: pricing, target: left, value: 2520 },
        ]}
      />
    );
  },
};

/**
 * 段が 3 つ以上あっても読めるか。**帯の太さがそのまま量**なので、
 * 細い経路（返品）が太い経路（配送済み）と同じ声量にならない。
 */
export const MultipleStages: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const nodes = [
      t("story.sankey_node_ordered"),
      t("story.sankey_node_picked"),
      t("story.sankey_node_backorder"),
      t("story.sankey_node_shipped"),
      t("story.sankey_node_returned"),
      t("story.sankey_node_kept"),
    ];
    const [ordered, picked, backordered, shipped, returned, kept] = nodes;
    return (
      <SankeyChart
        {...args}
        title={t("story.sankey_title_fulfilment")}
        height={340}
        nodes={nodes}
        links={[
          { source: ordered, target: picked, value: 1284 },
          { source: ordered, target: backordered, value: 147 },
          { source: backordered, target: picked, value: 118 },
          { source: picked, target: shipped, value: 1402 },
          { source: shipped, target: returned, value: 96 },
          { source: shipped, target: kept, value: 1306 },
        ]}
      />
    );
  },
};

/**
 * 名前だけのとき（`title` を渡さない）。図には名前が要るので、
 * 見出しを別に持っている画面では `aria-label` で渡す。
 */
export const WithoutTitle: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const nodes = [
      t("story.sankey_node_search"),
      t("story.sankey_node_direct"),
      t("story.sankey_node_pricing"),
      t("story.sankey_node_signup"),
    ];
    const [search, direct, pricing, signedUp] = nodes;
    return (
      <SankeyChart
        {...args}
        aria-label={t("story.sankey_title_traffic")}
        height={220}
        nodes={nodes}
        links={[
          { source: search, target: pricing, value: 2840 },
          { source: direct, target: pricing, value: 910 },
          { source: pricing, target: signedUp, value: 1490 },
        ]}
      />
    );
  },
};
