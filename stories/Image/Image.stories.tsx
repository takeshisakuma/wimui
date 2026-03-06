import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Image } from "@/components/Image/Image";
import sampleImage from "@/media/imagesanple.webp";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof Image> = {
  title: "Components/Media/Image",
  component: Image,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    radius: {
      control: "select",
      options: ["none", "small", "medium", "large", "full"],
    },
    fit: {
      control: "select",
      options: ["contain", "cover", "fill", "none", "scale-down"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    return <Image {...args} alt={t("story_image_alt")} />;
  },
  args: {
    src: sampleImage,
    width: 400,
  },
};

export const WithCaption: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    return (
      <Image
        {...args}
        alt={t("story_image_alt")}
        caption={t("story_image_caption")}
      />
    );
  },
  args: {
    src: sampleImage,
    width: 400,
  },
};

export const Rounded: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    return <Image {...args} alt={t("story_image_alt")} />;
  },
  args: {
    src: sampleImage,
    width: 200,
    height: 200,
    radius: "large",
    fit: "cover",
  },
};

export const Circular: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    return <Image {...args} alt={t("story_image_alt")} />;
  },
  args: {
    src: sampleImage,
    width: 150,
    height: 150,
    radius: "full",
    fit: "cover",
    border: true,
  },
};

export const WithShadow: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    return <Image {...args} alt={t("story_image_alt")} />;
  },
  args: {
    src: sampleImage,
    width: 400,
    shadow: true,
    radius: "medium",
  },
};
