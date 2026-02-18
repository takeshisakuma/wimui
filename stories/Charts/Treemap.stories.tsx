import type { Meta, StoryObj } from "@storybook/react-vite";
import { Treemap } from "@/components/Charts/Treemap";

const meta: Meta<typeof Treemap> = {
    title: "Component/Visualization/Treemap",
    component: Treemap,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Treemap>;

const data = [
    { name: 'Category A', value: 400 },
    { name: 'Category B', value: 300 },
    { name: 'Category C', value: 300 },
    { name: 'Category D', value: 200 },
    { name: 'Category E', value: 278 },
    { name: 'Category F', value: 189 },
];

export const Default: Story = {
    args: {
        title: "Category Distribution",
        data,
        dataKey: "value",
    },
};
