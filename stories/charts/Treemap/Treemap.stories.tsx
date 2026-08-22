import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Treemap } from "wimui/charts";

const meta: Meta<typeof Treemap> = {
  title: "Components/Visualization/Treemap",
  component: Treemap,
};

export default meta;
type Story = StoryObj<typeof Treemap>;

const data = [
  { name: "Category A", value: 400 },
  { name: "Category B", value: 300 },
  { name: "Category C", value: 300 },
  { name: "Category D", value: 200 },
  { name: "Category E", value: 278 },
  { name: "Category F", value: 189 },
];

export const Default: Story = {
  args: {
    data,
    dataKey: "value",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Treemap {...args} title={t("story.chart_category_distribution")} />;
  },
};

/**
 * T149: 名前が枠に入らないタイルを含む形。**この形のストーリーが無かったので、
 * 「小さいタイルが黙って名前を失う」欠陥が VRT にも a11y にも映らなかった。**
 *
 * `Treemap` が凡例を持たなくてよいのは「タイルが自分で名乗る」からなので
 * （`check:chart-palette` の免除条件・T152 案①）、名前が消えるのは
 * 免除の根拠が消えるのと同じ。入らないときは**省略して見せる**のが正しく、
 * ここはその境目を撮るための形。
 */
export const NarrowTiles: Story = {
  args: {
    dataKey: "kg",
    data: [
      { name: "Ethiopia Yirgacheffe", kg: 1240 },
      { name: "Colombia Huila", kg: 860 },
      { name: "Guatemala Antigua", kg: 515 },
      { name: "Rwanda", kg: 288 },
      { name: "Brazil", kg: 174 },
    ],
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ width: "min(420px, 100%)" }}>
        <Treemap {...args} title={t("story.chart_narrow_tiles")} />
      </div>
    );
  },
};
