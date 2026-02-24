import type { Meta, StoryObj } from "@storybook/react-vite";
import { AreaChart } from "@/components/Charts/AreaChart";

const meta: Meta<typeof AreaChart> = {
    title: "Components/Visualization/AreaChart",
    component: AreaChart,
    tags: ["autodocs"],
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
        title: "Performance Trends",
        data,
        xAxisKey: "name",
        keys: ["value", "secondary"],
    },
};

export const Stacked: Story = {
    args: {
        title: "Stacked Performance",
        data,
        xAxisKey: "name",
        keys: ["value", "secondary"],
        stacked: true,
    },
};


