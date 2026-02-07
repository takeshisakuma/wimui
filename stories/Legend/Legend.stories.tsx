import type { Meta, StoryObj } from "@storybook/react";
import { Legend } from "./Legend";

const meta: Meta<typeof Legend> = {
    title: "Component/Data Entry/Legend",
    component: Legend,
    parameters: {
        layout: "padded",
    },
};

export default meta;
type Story = StoryObj<typeof Legend>;

export const Default: Story = {
    args: {
        children: "フォームのタイトル",
    },
};

export const LongText: Story = {
    args: {
        children: "非常に長いタイトルの例。関連するフォーム要素をグループ化するためのセクションタイトルとして使用されます。",
    },
};
