import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { LineChart } from "wimui/charts";

const meta: Meta<typeof LineChart> = {
  title: "Components/Visualization/LineChart",
  component: LineChart,
};

export default meta;
type Story = StoryObj<typeof LineChart>;

const data = [
  { name: "Mon", users: 1500, active: 800 },
  { name: "Tue", users: 2300, active: 1200 },
  { name: "Wed", users: 1800, active: 1100 },
  { name: "Thu", users: 3200, active: 1900 },
  { name: "Fri", users: 2900, active: 2100 },
  { name: "Sat", users: 4100, active: 2800 },
  { name: "Sun", users: 3800, active: 2500 },
];

export const Default: Story = {
  args: {
    data,
    xAxisKey: "name",
    keys: ["users", "active"],
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <LineChart {...args} title={t("story.chart_daily_users")} />;
  },
};

export const Smooth: Story = {
  args: {
    data,
    xAxisKey: "name",
    keys: ["users", "active"],
    smooth: true,
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <LineChart {...args} title={t("story.chart_daily_users_smooth")} />;
  },
};
