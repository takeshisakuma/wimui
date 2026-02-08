import type { Meta, StoryObj } from "@storybook/react";
import { SearchInput } from "./SearchInput";

const meta: Meta<typeof SearchInput> = {
    title: "Component/Form Inputs/SearchInput",
    component: SearchInput,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
    args: {
        placeholder: "検索...",
    },
};
