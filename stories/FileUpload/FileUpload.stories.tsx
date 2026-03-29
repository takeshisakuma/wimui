import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileUpload } from "@/components/FileUpload/FileUpload";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


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
      control: "radio",
      options: ["small", "medium", "large"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <FileUpload
        {...args}
        label={t("story_fileupload_label_profile")}
        buttonLabel={t("story_fileupload_btn_image")}
        noFileLabel={t("story_fileupload_no_file")}
      />
    );
  },
};

export const Multiple: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <FileUpload
        {...args}
        label={t("story_fileupload_label_doc")}
        buttonLabel={t("story_fileupload_btn_file")}
        noFileLabel={t("story_fileupload_no_file")}
        multiple={true}
      />
    );
  },
};

export const AcceptImages: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <FileUpload
        {...args}
        label={t("story_fileupload_label_image_only")}
        buttonLabel={t("story_fileupload_btn_image")}
        noFileLabel={t("story_fileupload_no_file")}
        accept="image/*"
        iconName="ImageIcon"
        size="large"
      />
    );
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <FileUpload
        {...args}
        label={t("story_fileupload_label_disabled")}
        buttonLabel={t("story_fileupload_btn_file")}
        noFileLabel={t("story_fileupload_no_file")}
        disabled={true}
      />
    );
  },
};

export const WithIcon: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <FileUpload
        {...args}
        label={t("story_fileupload_label_icon")}
        buttonLabel={t("story_fileupload_btn_upload")}
        noFileLabel={t("story_fileupload_no_file")}
        iconName="UploadIcon"
        iconPosition="left"
        size="large"
      />
    );
  },
};
