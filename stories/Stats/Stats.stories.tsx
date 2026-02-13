import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stats } from "@/components/Stats/Stats";

const meta: Meta<typeof Stats> = {
    title: "Component/Data Display/Stats",
    component: Stats,
    parameters: {
        layout: "centered",
    },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof Stats>;

export const Default: Story = {
    args: {
        children: (
            <>
                <Stats.Label>Total Users</Stats.Label>
                <Stats.Value>1,234</Stats.Value>
                <Stats.Description>+12.5% from last month</Stats.Description>
            </>
        ),
    },
};

export const WithTrend: Story = {
    args: {
        children: (
            <>
                <Stats.Label>Revenue</Stats.Label>
                <Stats.Value>$45,231.89</Stats.Value>
                <Stats.Trend direction="up">+20.1%</Stats.Trend>
            </>
        ),
    },
};

export const NegativeTrend: Story = {
    args: {
        children: (
            <>
                <Stats.Label>Active Alerts</Stats.Label>
                <Stats.Value>12</Stats.Value>
                <Stats.Trend direction="down">-5%</Stats.Trend>
            </>
        ),
    },
};

export const Outline: Story = {
    args: {
        variant: "outline",
        children: (
            <>
                <Stats.Label>Page Views</Stats.Label>
                <Stats.Value>12,456</Stats.Value>
                <Stats.Trend direction="neutral">0%</Stats.Trend>
            </>
        ),
    },
};

export const Flat: Story = {
    args: {
        variant: "flat",
        children: (
            <>
                <Stats.Label>Avg. Session Time</Stats.Label>
                <Stats.Value>2m 34s</Stats.Value>
                <Stats.Description>Sessions over 5 minutes</Stats.Description>
            </>
        ),
    },
};


