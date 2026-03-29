import React from "react";
import { Quote } from "@/components/Quote/Quote";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


export default {
  title: "Components/Typography & Icons/Quote",
  component: Quote,
  parameters: {
    layout: "centered",
  },
  tags: [],
  argTypes: {
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
    color: {
      control: "select",
      options: [
        "black",
        "deepgray",
        "gray",
        "lightgray",
        "white",
        "primary",
        "success",
        "warning",
        "error",
        "info",
      ],
    },
  },
};

export const Default = {
  render: (args: Parameters<typeof Quote>[0]) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Quote {...args} content={t('story_quote_default')} />;
  },
  args: {}
};

export const WithCite = {
  render: (args: Parameters<typeof Quote>[0]) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Quote {...args} content={t('story_quote_design')} cite="Steve Jobs" />;
  },
  args: {}
};

export const Large = {
  render: (args: Parameters<typeof Quote>[0]) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Quote {...args} content={t('story_quote_work')} cite="Steve Jobs" />;
  },
  args: { size: "large" }
};

export const NoBorder = {
  render: (args: Parameters<typeof Quote>[0]) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Quote {...args} content={t('story_quote_simple')} cite="Leonardo da Vinci" />;
  },
  args: { border: false }
};

export const VariousColors = {
  render: function Render(args: Parameters<typeof Quote>[0]) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Quote {...args} content={t('story_quote_black')} color="black" />
        <Quote {...args} content={t('story_quote_deepgray')} color="deepgray" />
        <Quote {...args} content={t('story_quote_gray')} color="gray" />
        <Quote {...args} content={t('story_quote_lightgray')} color="lightgray" />
      </div>
    );
  }
};
