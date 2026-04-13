import React from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Blockquote } from "wimui";


export default {
  title: "Components/Typography & Icons/Blockquote",
  component: Blockquote,
  parameters: {
    layout: "centered",
  },
  tags: [],
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
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
  render: (args: React.ComponentProps<typeof Blockquote>) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Blockquote {...args} content={t('story.quote_default')} />;
  },
  args: {}
};

export const WithCite = {
  render: (args: React.ComponentProps<typeof Blockquote>) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Blockquote {...args} content={t('story.quote_design')} cite="Steve Jobs" />;
  },
  args: {}
};

export const Large = {
  render: (args: React.ComponentProps<typeof Blockquote>) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Blockquote {...args} content={t('story.quote_work')} cite="Steve Jobs" />;
  },
  args: { size: "lg" }
};

export const NoBorder = {
  render: (args: React.ComponentProps<typeof Blockquote>) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Blockquote {...args} content={t('story.quote_simple')} cite="Leonardo da Vinci" />;
  },
  args: { border: false }
};

export const VariousColors = {
  render: function Render(args: React.ComponentProps<typeof Blockquote>) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Blockquote {...args} content={t('story.quote_black')} color="black" />
        <Blockquote {...args} content={t('story.quote_deepgray')} color="deepgray" />
        <Blockquote {...args} content={t('story.quote_gray')} color="gray" />
        <div style={{ backgroundColor: "var(--wim-color-bg-inverted)", padding: "12px", borderRadius: "4px" }}>
          <Blockquote {...args} content={t('story.quote_lightgray')} color="lightgray" />
        </div>
      </div>
    );
  }
};

export const AsChild = {
  render: (args: React.ComponentProps<typeof Blockquote>) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Blockquote {...args} content={t('story.quote_default')} asChild>
        <div style={{ padding: "20px", background: "var(--wim-color-surface-variant)" }}>
          {t('story.quote_default')}
        </div>
      </Blockquote>
    );
  },
  args: {}
};
