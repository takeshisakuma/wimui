import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileUpload } from "@/components/FileUpload/FileUpload";

const meta: Meta<typeof FileUpload> = {
  title: "Components/Advanced Inputs/FileUpload",
  component: FileUpload,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onChange: { action: "changed" },
    iconName: {
      control: "select",
      options: ["UploadIcon", "CheckIcon", "CopyIcon", "SearchIcon"],
    },
    iconPosition: {
      control: "radio",
      options: ["left", "right"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  args: {
    label: "プロフィール画像",
    buttonLabel: "画像を選択",
  },
};

export const Multiple: Story = {
  args: {
    label: "ドキュメントアップロード",
    buttonLabel: "ファイルを選択",
    multiple: true,
  },
};

export const AcceptImages: Story = {
  args: {
    label: "画像のみアップロード",
    buttonLabel: "画像を選択",
    accept: "image/*",
    iconName: "ImageIcon",
    size: "large",
  },
};

export const Disabled: Story = {
  args: {
    label: "無効なアップロード",
    buttonLabel: "ファイルを選択",
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    label: "アイコン付き",
    buttonLabel: "アップロード",
    iconName: "UploadIcon",
    iconPosition: "left",
    size: "large",
  },
};
