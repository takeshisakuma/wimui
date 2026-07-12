import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { FunnelChart } from "wimui/charts";

const meta: Meta<typeof FunnelChart> = {
  title: "Components/Visualization/FunnelChart",
  component: FunnelChart,
};

export default meta;
type Story = StoryObj<typeof FunnelChart>;

const data = [
  { value: 100, name: "Impressions" },
  { value: 80, name: "Clicks" },
  { value: 50, name: "Cart" },
  { value: 40, name: "Checkout" },
  { value: 26, name: "Purchased" },
];

export const Default: Story = {
  args: {
    data,
    dataKey: "value",
    nameKey: "name",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <FunnelChart {...args} title={t("story.chart_sales_funnel")} />;
  },
};
