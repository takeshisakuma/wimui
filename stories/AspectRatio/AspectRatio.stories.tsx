import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { AspectRatio } from "@/components/AspectRatio/AspectRatio";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof AspectRatio> = {
  title: "Components/Layout/AspectRatio",
  component: AspectRatio,
  tags: [],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    ratio: {
      control: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <AspectRatio {...args}>
        <img
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
          alt={t("story_aspectratio_alt", "Landscape")}
        />
      </AspectRatio>
    );
  },
  args: {
    ratio: 16 / 9,
    style: { width: "100%", maxWidth: "400px", margin: "0 auto" },
  },
};

export const Square: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <AspectRatio {...args}>
        <img
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
          alt={t("story_aspectratio_alt", "Landscape")}
        />
      </AspectRatio>
    );
  },
  args: {
    ratio: 1,
    style: { width: "100%", maxWidth: "200px", margin: "0 auto" },
  },
};

export const Embed: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <AspectRatio {...args}>
        <iframe
          title={t("story_aspectratio_map_title", "Map")}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.7502393!3d35.685175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0d02d803c1%3A0x6a1e64115e581404!2z55qH5bGF!5e0!3m2!1sja!2sjp!4v1707641212345!5m2!1sja!2sjp"
          style={{ border: 0 }}
          allowFullScreen
        />
      </AspectRatio>
    );
  },
  args: {
    ratio: 16 / 9,
    style: { width: "100%", maxWidth: "500px", margin: "0 auto" },
  },
};
