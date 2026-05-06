import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { SourceCitation, SourceCitationList } from "@/components/ai/SourceCitation/SourceCitation";

const meta: Meta<typeof SourceCitation> = {
  title: "Components/AI/SourceCitation",
  component: SourceCitation,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof SourceCitation>;

export const Default: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <SourceCitation
        {...args}
        title={args.title || t("story.sourcecitation_react_docs_title")}
      />
    );
  },
  args: {
    url: "https://react.dev",
    index: 1,
  },
};

export const WithDescription: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <SourceCitation
        {...args}
        title={args.title || t("story.sourcecitation_react_docs_title")}
        description={args.description || t("story.sourcecitation_react_docs_desc")}
      />
    );
  },
  args: {
    url: "https://react.dev",
    index: 1,
  },
};

export const NoLink: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <SourceCitation
        {...args}
        title={args.title || t("story.sourcecitation_internal_guide_title")}
        description={args.description || t("story.sourcecitation_internal_guide_desc")}
      />
    );
  },
  args: {
    index: 2,
  },
};

export const List: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <SourceCitationList
        sources={[
          {
            title: t("story.sourcecitation_react_docs_title"),
            url: "https://react.dev",
            description: t("story.sourcecitation_react_docs_desc"),
          },
          {
            title: t("story.sourcecitation_mdn_docs_title"),
            url: "https://developer.mozilla.org",
            description: t("story.sourcecitation_mdn_docs_desc"),
          },
          {
            title: t("story.sourcecitation_ts_handbook_title"),
            url: "https://www.typescriptlang.org/docs/",
          },
        ]}
      />
    );
  },
};
