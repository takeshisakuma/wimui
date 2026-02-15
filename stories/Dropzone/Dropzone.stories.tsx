import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dropzone } from "@/components/Dropzone/Dropzone";

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
        iconName: "ImageIcon",
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
        label: "PDFアップロード",
        iconName: "PdfIcon",
        accept: ".pdf",
        description: "PDFファイルをドラッグ＆ドロップしてください",
    },
};

export const VideoUpload: Story = {
    args: {
        label: "ビデオアップロード",
        iconName: "VideoIcon",
        accept: "video/*",
        description: "動画ファイルをドラッグ＆ドロップしてください",
    },
};


