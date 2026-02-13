import type { Meta, StoryObj } from "@storybook/react-vite";
import { LineChart } from "@/components/Charts/LineChart";

const meta: Meta<typeof LineChart> = {
    title: "Component/Media & Viz/LineChart",
    component: LineChart,
    tags: ["autodocs"],
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
        title: "Daily Users",
        data,
        xAxisKey: "name",
        keys: ["users", "active"],
    },
};

export const Smooth: Story = {
    args: {
        title: "Daily Users (Smooth)",
        data,
        xAxisKey: "name",
        keys: ["users", "active"],
        smooth: true,
    },
};


