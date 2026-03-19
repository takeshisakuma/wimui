import type { Meta, StoryObj } from "@storybook/react-vite";
import { FunnelChart } from "@/components/FunnelChart/FunnelChart";

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
    title: "Sales Funnel",
    data,
    dataKey: "value",
    nameKey: "name",
  },
};
