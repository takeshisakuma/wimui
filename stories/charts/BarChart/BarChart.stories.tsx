import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { BarChart } from "wimui";

const meta: Meta<typeof BarChart> = {
  title: "Components/Visualization/BarChart",
  component: BarChart,
};

export default meta;
type Story = StoryObj<typeof BarChart>;

const data = [
  { name: "Jan", sales: 4000, profit: 2400 },
  { name: "Feb", sales: 3000, profit: 1398 },
  { name: "Mar", sales: 2000, profit: 9800 },
  { name: "Apr", sales: 2780, profit: 3908 },
  { name: "May", sales: 1890, profit: 4800 },
  { name: "Jun", sales: 2390, profit: 3800 },
];

export const Default: Story = {
  args: {
    data,
    xAxisKey: "name",
    keys: ["sales", "profit"],
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <BarChart {...args} title={t("story.chart_monthly_sales")} />;
  },
};

export const Stacked: Story = {
  args: {
    data,
    xAxisKey: "name",
    keys: ["sales", "profit"],
    stacked: true,
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <BarChart {...args} title={t("story.chart_monthly_sales_stacked")} />;
  },
};
