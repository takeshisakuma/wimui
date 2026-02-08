import type { Meta, StoryObj } from "@storybook/react";
import { Dropzone } from "./Dropzone";

const meta: Meta<typeof Dropzone> = {
    title: "Component/Form Inputs/Dropzone",
    component: Dropzone,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        onChange: { action: "changed" },
    },
};

export default meta;
type Story = StoryObj<typeof Dropzone>;

export const Default: Story = {
    args: {
        label: "ファイルアップロード",
    },
};

export const Multiple: Story = {
    args: {
        label: "複数ファイルアップロード",
        multiple: true,
        description: "複数のファイルをドラッグ＆ドロップできます",
    },
};

export const AcceptImages: Story = {
    args: {
        label: "画像のみアップロード",
        accept: "image/*",
        description: "画像ファイルをドラッグ＆ドロップしてください",
    },
};

export const Disabled: Story = {
    args: {
        label: "無効状態",
        disabled: true,
        description: "現在はアップロードできません",
    },
};

export const CustomIcon: Story = {
    args: {
        label: "カスタムアイコン",
        iconName: "MaximizeIcon",
        description: "カスタムアイコンを使用したドロップゾーン",
    },
};
