import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchInput } from "@/components/SearchInput/SearchInput";

const meta: Meta<typeof SearchInput> = {
    title: "Component/Basic Inputs/SearchInput",
    component: SearchInput,
    tags: [],
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
    args: {
        placeholder: "検索...",
    },
};


