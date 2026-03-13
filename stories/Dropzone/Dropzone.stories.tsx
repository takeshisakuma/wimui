import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dropzone } from "@/components/Dropzone/Dropzone";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Dropzone> = {
  title: "Components/Advanced Inputs/Dropzone",
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
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Dropzone
        {...args}
        label={t("story_dropzone_label_file")}
        description={t("story_dropzone_default_desc")}
      />
    );
  },
};

export const Multiple: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Dropzone
        {...args}
        label={t("story_dropzone_label_multi")}
        multiple={true}
        description={t("story_dropzone_desc_multi")}
      />
    );
  },
};

export const AcceptImages: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Dropzone
        {...args}
        label={t("story_dropzone_label_image_only")}
        accept="image/*"
        iconName="ImageIcon"
        description={t("story_dropzone_desc_image")}
      />
    );
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Dropzone
        {...args}
        label={t("story_dropzone_label_disabled")}
        disabled={true}
        description={t("story_dropzone_desc_disabled")}
      />
    );
  },
};

export const CustomIcon: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Dropzone
        {...args}
        label={t("story_dropzone_label_pdf")}
        iconName="PdfIcon"
        accept=".pdf"
        description={t("story_dropzone_desc_pdf")}
      />
    );
  },
};

export const VideoUpload: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Dropzone
        {...args}
        label={t("story_dropzone_label_video")}
        iconName="VideoIcon"
        accept="video/*"
        description={t("story_dropzone_desc_video")}
      />
    );
  },
};
