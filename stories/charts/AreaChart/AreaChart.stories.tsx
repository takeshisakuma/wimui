import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { AreaChart } from "wimui/charts";

const meta: Meta<typeof AreaChart> = {
  title: "Components/Visualization/AreaChart",
  component: AreaChart,
};

export default meta;
type Story = StoryObj<typeof AreaChart>;

const data = [
  { name: "Week 1", value: 100, secondary: 50 },
  { name: "Week 2", value: 300, secondary: 250 },
  { name: "Week 3", value: 200, secondary: 150 },
  { name: "Week 4", value: 450, secondary: 300 },
  { name: "Week 5", value: 400, secondary: 350 },
];

export const Default: Story = {
  args: {
    data,
    xAxisKey: "name",
    keys: ["value", "secondary"],
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <AreaChart {...args} title={t("story.chart_performance_trends")} />;
  },
};

export const Stacked: Story = {
  args: {
    data,
    xAxisKey: "name",
    keys: ["value", "secondary"],
    stacked: true,
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <AreaChart {...args} title={t("story.chart_stacked_performance")} />;
  },
};
