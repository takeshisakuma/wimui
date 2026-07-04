import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { PieChart } from "wimui";

const meta: Meta<typeof PieChart> = {
  title: "Components/Visualization/PieChart",
  component: PieChart,
};

export default meta;
type Story = StoryObj<typeof PieChart>;

const data = [
  { name: "Direct", value: 400 },
  { name: "Social", value: 300 },
  { name: "Referral", value: 300 },
  { name: "Organic", value: 200 },
];

export const Default: Story = {
  args: {
    data,
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <PieChart {...args} title={t("story.chart_traffic_sources")} />;
  },
};

export const Donut: Story = {
  args: {
    data,
    donut: true,
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <PieChart {...args} title={t("story.chart_traffic_sources_donut")} />;
  },
};
