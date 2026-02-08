import type { Meta, StoryObj } from "@storybook/react";
import { BarChart } from "./BarChart";

const meta: Meta<typeof BarChart> = {
    title: "Component/Media & Viz/BarChart",
    component: BarChart,
    tags: ["autodocs"],
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
        title: "Monthly Sales",
        data,
        xAxisKey: "name",
        keys: ["sales", "profit"],
    },
};

export const Stacked: Story = {
    args: {
        title: "Monthly Sales (Stacked)",
        data,
        xAxisKey: "name",
        keys: ["sales", "profit"],
        stacked: true,
    },
};
